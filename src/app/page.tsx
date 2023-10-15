import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CodeIcon,
  CrumpledPaperIcon,
  CubeIcon,
  HandIcon,
  LightningBoltIcon,
  Link2Icon,
  LockOpen1Icon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import imagehero from "~/public/images/pexels-rdne-stock-project-5756742.jpg";
import logoImage from "~/public/logo/TanyaAja.svg";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-4 justify-center items-start p-8">
          <Image
            src={logoImage}
            alt="Simbol tanda tanya"
            width={100}
            height={83.8}
          ></Image>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            TanyaAja
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-muted-foreground">
            Easily collect questions anonymously from anyone
          </p>

          <div className="w-full flex gap-2 mt-8 flex-col lg:flex-row">
            <Button className="flex gap-2 items-center" size="lg" asChild>
              <Link href="/login">
                Get started quickly
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="flex gap-2 items-center"
              size="lg"
              asChild
            >
              <Link href="/eksplor">
                Explore first
                <MagnifyingGlassIcon className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <Image
            src={imagehero}
            alt="Laki-laki sedang mengacungkan tangan"
            className="rounded-3xl"
          />
        </div>
      </section>

      <section className="container mx-auto mt-24 mb-16 flex flex-col justify-center items-center gap-4">
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          Feature
        </h2>
        <p className="text-center text-md md:text-lg lg:text-xl text-muted-foreground">
          Various features that can be obtained from the TanyaAja platform
        </p>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <LightningBoltIcon className="w-14 h-14 mb-4" />
              <CardTitle>No Ads</CardTitle>
              <CardDescription>
                Can be used for free without ad interruption
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Link2Icon className="w-14 h-14 mb-4" />
              <CardTitle>Easy to Share</CardTitle>
              <CardDescription>
                You can quickly share public pages and questions with whomever
                you want
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <HandIcon className="w-14 h-14 mb-4" />
              <CardTitle>Full Control</CardTitle>
              <CardDescription>
                You can decide whether a question can be seen by others or not,
                can choose not to be seen on the explore page, can delete the
                account completely
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CrumpledPaperIcon className="w-14 h-14 mb-4" />
              <CardTitle>Baca dan Buang</CardTitle>
              <CardDescription>
                Tidak perlu lama-lama menyimpan pertanyaan, setelah dibaca kami
                akan menghapus data pertanyaan kamu seutuhnya
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <LockOpen1Icon className="w-14 h-14 mb-4" />
              <CardTitle>Read and Discard</CardTitle>
              <CardDescription>
                No need to save questions for long, after reading we will delete
                your question data completely
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CubeIcon className="w-14 h-14 mb-4" />
              <CardTitle>Easy Authentication</CardTitle>
              <CardDescription>
                No need to create and remember a new password, just login with a
                Google account
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto max-w-[58rem] my-24 flex flex-col justify-center items-center gap-4">
        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          Open Source Code
        </h2>
        <p className="max-w-[85%] text-center text-md md:text-lg lg:text-xl text-muted-foreground">
          TanyaAja is an open-source application that is also supported by many
          open source code libraries.
        </p>
        <Button
          variant="outline"
          className="flex gap-2 items-center"
          size="lg"
          asChild
        >
          <a
            href="https://github.com/mazipan/tanyaaja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon className="w-6 h-6" />
            View source code
          </a>
        </Button>
      </section>
    </main>
  );
}
