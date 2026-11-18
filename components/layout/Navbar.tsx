"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/#fleet", label: "Fleet" },
  { href: "/packages", label: "Tour Packages" },
  { href: "/#trust", label: "Why Us" },
  // Reviews temporarily hidden (testimonials section is off) — re-add when back:
  // { href: "/#reviews", label: "Reviews" },
];

export function Navbar({ whatsappNumber }: { whatsappNumber: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light chrome (white bg, dark text) everywhere except the homepage hero top.
  const light = !isHome || scrolled;

  const waHref = buildWhatsAppLink({ whatsappNumber });

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        light
          ? "border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 to-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Ceylon Go — home"
          className="relative block h-9 w-[116px] sm:h-10 sm:w-[128px]"
        >
          {/* White-text logo for the dark hero top; slate-text for white nav. */}
          <Image
            src="/brand/logo-on-dark.png"
            alt="Ceylon Go"
            fill
            priority
            sizes="130px"
            className={cn(
              "object-contain object-left transition-opacity duration-300",
              light ? "opacity-0" : "opacity-100",
            )}
          />
          <Image
            src="/brand/logo-on-light.png"
            alt=""
            aria-hidden
            fill
            sizes="130px"
            className={cn(
              "object-contain object-left transition-opacity duration-300",
              light ? "opacity-100" : "opacity-0",
            )}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                light
                  ? "text-slate-700 hover:text-[#0F4C3A]"
                  : "text-white/90 hover:text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ceylon-900 shadow-sm transition-transform hover:scale-[1.03]"
          >
            Plan My Trip
          </a>
        </div>

        <button
          type="button"
          className={cn("md:hidden", light ? "text-slate-900" : "text-white")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div
          className={cn(
            "border-t md:hidden",
            light
              ? "border-slate-100 bg-white"
              : "border-white/10 bg-ceylon-900/98 backdrop-blur",
          )}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  light
                    ? "text-slate-700 hover:bg-slate-50 hover:text-[#0F4C3A]"
                    : "text-white/90 hover:bg-white/10 hover:text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-sm font-semibold text-ceylon-900"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
