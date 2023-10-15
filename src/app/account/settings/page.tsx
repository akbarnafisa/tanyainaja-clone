"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
// @ts-ignore
import * as z from "zod";

import { CopyButton } from "@/components/CopyButton";
import { useAuth } from "@/components/FirebaseAuth";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import {
  BASEURL,
  checkTheSlugOwner,
  getExistingUser,
  patchUpdateUser,
} from "@/lib/api";
import { getFirebaseAuth, trackEvent } from "@/lib/firebase";

const auth = getFirebaseAuth();

const accountFormSchema = z.object({
  image: z
    .string()
    .min(2, {
      message: "Avatar butuh paling tidak 2 karakter.",
    })
    .max(1000, {
      message: "Avatar hanya bisa maksimal 1000 karakter.",
    }),
  name: z
    .string()
    .min(2, {
      message: "Nama butuh paling tidak 2 karakter.",
    })
    .max(30, {
      message: "Nama hanya bisa maksimal 30 karakter.",
    }),
  slug: z
    .string()
    .min(3, {
      message: "Slug butuh paling tidak 3 karakter.",
    })
    .max(100, {
      message: "Slug hanya bisa maksimal 100 karakter.",
    })
    .refine(
      (s: string) => !s.includes(" "),
      "Slug tidak boleh mengandung karakter spasi.",
    ),
  public: z.boolean().default(false).optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

export default function Account() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoadingInitialData, setIsLoadingInitialData] =
    useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { isLogin, isLoading, user } = useAuth(auth);

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      image: "",
      name: "",
      slug: "",
      public: false,
    },
  });

  useEffect(() => {
    trackEvent('view account setting page')
  }, [])

  // @ts-ignore
  const watchSlug = form.watch("slug", false);
  // @ts-ignore
  const watchImage = form.watch("image", false);
  // @ts-ignore
  const watchName = form.watch("name", false);

  async function onSubmit(data: AccountFormValues) {
    if (user) {
      try {
        setIsSubmitting(true);
        try {
          const res = await checkTheSlugOwner(user, data.slug);
          if (res && res.data) {
            if (res.data === "NOT_EXIST") {
              await patchUpdateUser(user, {
                slug: data.slug,
                name: data.name,
                public: data.public ?? false,
                image: data.image || user?.photoURL || '',
              });

              toast({
                title: "Perubahan berhasil disimpan",
                description: `Berhasil menyimpan perubahan setelan!`,
              });
            } else {
              form.setError("slug", {
                type: "custom",
                message:
                  "Slug ini sepertinya sudah digunakan oleh orang lain. Ganti slug lain dan coba lagi",
              });
            }
          } else {
            form.setError("slug", {
              type: "custom",
              message:
                "Gagal mengecek ketersediaan slug, coba logout dan login kembali, kemudian coba ulangi melakukan perubahan ini.",
            });
          }
        } catch (err) {
          toast({
            title: "Gagal menyimpan",
            description: `Gagal saat mencoba mengecek ketersediaan slug, silahkan coba beberapa saat lagi!`,
          });
        }
        setIsSubmitting(false);
      } catch (error) {
        setIsSubmitting(false);
        toast({
          title: "Gagal menyimpan",
          description: `Gagal menyimpan perubahan setelan, coba sesaat lagi!`,
        });
      }
    }
  }


  // Redirect back to /login --> if the session is not found
  useEffect(() => {
    if (!isLoading) {
      if (!isLogin) {
        router.push("/login");
      } else if (user) {
        const fetchUserFromDb = async () => {
          if (user) {
            const res = await getExistingUser(user);
      
            if (res && res.data) {
              form.setValue("image", res.data.image);
              form.setValue("name", res.data.name);
              form.setValue("slug", res.data.slug);
              form.setValue("public", res.data.public ?? false);
            }
      
            setIsLoadingInitialData(false);
          }
        };

        fetchUserFromDb();
      }
    }
  }, [isLogin, user, isLoading, router, form]);

  return (
    <main className="w-full container py-8">
      <div className="w-full space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Setelan Akun</h2>
        <p className="text-muted-foreground">
          Atur nama dan alamat publik yang diinginkan
        </p>
      </div>

      <Separator className="my-6" />

      <div className="w-full flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <section className="flex-1 lg:max-w-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Publik</FormLabel>
                    <FormControl>
                      <Input placeholder="Nama publik" {...field} />
                    </FormControl>
                    <FormDescription>
                      Nama ini akan ditampilkan di laman beranda publikmu. Kami
                      akan menggunakan nama dari akun Google bila belum disetel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat Avatar Publik</FormLabel>
                    <FormControl>
                      <Input placeholder="Alamat avatar publik" {...field} />
                    </FormControl>
                    <FormDescription>
                      Avatar ini akan ditampilkan di laman beranda publikmu.
                      Kami akan menggunakan gambar akun Google bila belum
                      disetel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {watchImage ? (
                <div className="flex items-center gap-2 ">
                  <p>Preview:</p>
                  <ProfileAvatar
                    // @ts-ignore
                    image={watchImage}
                    // @ts-ignore
                    name={watchName}
                    size="38"
                  />
                </div>
              ) : null}

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="Slug publik" {...field} />
                      </FormControl>
                      <FormDescription>
                        Slug ini adalah alamat dari laman publikmu. Bisa diubah
                        kapan saja, tapi dapat menyebabkan alamat lamamu tidak
                        dapat dikunjungi lagi.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <div className="flex gap-2 items-center w-full">
                {
                  // @ts-ignore
                  watchSlug !== "" ? (
                    <CopyButton
                      text={`${BASEURL}/p/${watchSlug}`}
                      withLabel
                      withInput
                      fullWidth
                    />
                  ) : null
                }
              </div>

              <FormField
                control={form.control}
                name="public"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Bisa dicari publik?</FormLabel>
                      <FormDescription>
                        Pengguna anonim dapat mencari akunmu lewat laman eksplor
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting || isLoadingInitialData}
              >
                {isSubmitting ? "Processing" : "Simpan Perubahan"}
              </Button>
            </form>
          </Form>
        </section>
      </div>
    </main>
  );
}
