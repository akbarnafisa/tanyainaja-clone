import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mb-8">
        <div>
          <h4 className="text-lg font-bold mb-2">More</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/tentang" className="underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/eksplor" className="underline">
                Explore
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Policy</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/ketentuan-layanan" className="underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi" className="underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Resources</h4>
          <ul className="flex flex-col gap-2">
            <li>
              {/* TODO: create betterstack account */}
              <a
                href="https://tanyaaja.betteruptime.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Status Server
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mazipan/tanyaaja/issues/new"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report an Issue
              </a>
            </li>
            <li>
              <a
                href="https://mazipan.space/support"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Other Works</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://ksana.in"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ksana.in
              </a>
            </li>
            <li>
              <a
                href="https://www.baca-quran.id/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baca-Quran.id
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <p>
            <small>© Since 2023, TanyaAja</small>
          </p>
          <p>
            <small>
              <span>With ☕️, by </span>
              <a
                href="https://mazipan.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {" "}
                Irfan Maulana
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
