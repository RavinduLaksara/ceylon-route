import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppGlyph } from "@/components/ui/FloatingWhatsApp";

/**
 * Full-width fixed-parallax Sri Lankan beach call-to-action, shown above the
 * footer on the homepage. Uses a CSS background (bg-fixed on desktop, bg-scroll
 * on mobile where iOS/Safari doesn't support fixed attachment reliably).
 */
export function ParallaxBanner({ whatsappNumber }: { whatsappNumber: string }) {
  const waHref = buildWhatsAppLink({
    whatsappNumber,
    extraNote: "I'd like to plan my Sri Lankan island escape.",
  });

  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center bg-scroll bg-cover bg-center md:min-h-[480px] md:bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Dark emerald/slate gradient overlay for legible white typography */}
      <div className="absolute inset-0 bg-slate-900/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ceylon-900/70 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Your Dream Sri Lankan Island Escape Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
          Private, chauffeur-driven comfort from palm-fringed southern beaches to the misty
          tea hills — all on your own schedule, with zero hidden charges.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ceylon-900 shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
          >
            Explore Tour Packages <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <WhatsAppGlyph className="h-5 w-5" /> Customize on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
