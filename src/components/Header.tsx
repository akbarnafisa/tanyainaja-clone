import Image from "next/image";
import Link from "next/link";

import logoSvg from "~/public/logo/TanyaAja.svg";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/">
        <Image src={logoSvg} alt="Tanya Aja" width={50} height={41.9} />

        <h2 className="font-extrabold text-2xl tracking-tight">TanyaAja</h2>
      </Link>

      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
