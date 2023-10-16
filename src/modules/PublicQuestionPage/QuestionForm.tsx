"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LockClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
// @ts-ignore
import * as z from "zod";

import { ShareButton } from "@/components/ShareButton";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BASEURL, patchHit, postSendQuestion } from "@/lib/api";
import { trackEvent } from "@/lib/firebase";
import { UserProfile } from "@/lib/types";

const formSchema = z.object({
  q: z
    .string()
    .min(2, {
      message: "Questions require a minimum of 2 characters",
    })
    .max(1000, {
      message: "Questions can only be a maximum of 1000 characters",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export function QuestionForm({ owner }: { owner: UserProfile }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      q: "",
    },
  });

  async function onSubmit(data: FormValues) {
    trackEvent("click submit new question");
    setIsLoading(true);
    try {
      await postSendQuestion(owner?.slug || "", data.q);
      setIsLoading(false);
      toast({
        title: "Message sent",
        description: `Successfully submitted inquiry to ${owner?.name}!`,
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Message failed to send",
        description: `Failed to send question to ${owner?.name}, try again later!`,
      });
    }
  }

  useEffect(() => {
    if (owner && owner?.slug) {
      patchHit(owner.slug);
    }
    trackEvent("view public page");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="q"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={`Write the question you want to submit to ${owner?.name}`}
                    rows={7}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="flex items-center gap-2">
                  <LockClosedIcon /> Your question will be submitted anonymously
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap justify-between gap-2">
            <Button type="submit" disabled={isLoading}>
              <PaperPlaneIcon className="mr-2 h-4 w-4" />
              {isLoading ? "Sending question..." : "Send question"}
            </Button>

            {owner && owner?.slug ? (
              <ShareButton
                text={`Tanyakan apa aja ke saya`}
                title={`Kamu bisa tanyakan apa aja ke saya dengan anonim`}
                url={`${BASEURL}/p/${owner?.slug}`}
              />
            ) : null}
          </div>
        </form>
      </Form>
    </>
  );
}
