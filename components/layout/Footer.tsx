import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { getPackages } from "@/lib/data/queries";

export async function Footer() {
  const year = 2026;
  const tourPackages = await getPackages();

  return (
    <footer className="bg-ceylon-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" aria-label="Ceylon Go — home" className="inline-block">
            <Image
              src="/brand/logo-on-dark.png"
              alt="Ceylon Go"
              width={1501}
              height={593}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-6 text-white/60">
            Private driver-guided journeys across Sri Lanka. Transparent pricing, tailored routes,
            authentic local hospitality.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/packages" className="transition-colors hover:text-gold">
                All Tour Packages
              </Link>
            </li>
            <li>
              <Link href="/#fleet" className="transition-colors hover:text-gold">
                Our Fleet
              </Link>
            </li>
            <li>
              <Link href="/#trust" className="transition-colors hover:text-gold">
                Why Ceylon Go
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Top Journeys</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {tourPackages.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/packages/${p.slug}`}
                  className="transition-colors hover:text-gold"
                >
                  {p.title.replace(/^\d+\s*Days?\s*/i, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> +94 77 029 1675
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" /> ceylongotour@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> Government-certified drivers
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>© {year} Ceylon Go. All rights reserved.</p>
          <p>Fuel · Driver allowance · Tolls — always included. No hidden charges.</p>
        </div>
      </div>
    </footer>
  );
}
