"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isConsultationPage = pathname === "/consultation";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5efe7] text-[#2f2a22]">
      <header
        className={`sticky top-0 z-50 border-b transition-all ${
          scrolled ? "border-[#cdb59a]/40 bg-[#f7efe4]/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center shrink-0">
            <div>
              <p className="whitespace-nowrap font-[family-name:var(--font-luxury)] text-[1.6rem] font-semibold uppercase tracking-[0.18em] text-[#8d6b4e] drop-shadow-[0_1px_0_rgba(255,255,255,0.2)] leading-none">Cauvery Interiors</p>
              <p className="text-xs text-[#796b5b]">Design. Craft. Inspire.</p>
            </div>
          </Link>
          <div className="hidden md:block md:ml-10 lg:ml-14"></div>
          <nav className="hidden items-center gap-12 text-sm text-[#6b5d50] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#8d6b4e]">
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            href={isConsultationPage ? "/" : "/consultation"}
            className="hidden rounded-full border border-[#8d6b4e]/40 bg-[#e8d5bb]/80 px-5 py-2 text-sm font-medium text-[#4d3920] transition hover:bg-[#d6b791] md:inline-flex"
          >
            {isConsultationPage ? "Back to Home" : "Request Consultation"}
          </Link>
          <button
            className="rounded-full border border-[#cdb59a]/40 bg-white/70 p-2 text-[#4d3920] md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="border-t border-[#cdb59a]/30 bg-[#f7efe4]/95 px-6 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-[#6b5d50]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#cdb59a]/30 bg-[#2f2a22] text-[#f8efe5]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 text-sm lg:grid-cols-4 lg:px-8">
          <div>
            <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.45em] text-[#e8d5bb]">Cauvery Interiors</p>
            <p className="text-[#dbc8b5]">Premium interiors, custom woodworking, and timeless craftsmanship for residential and commercial spaces.</p>
          </div>
          <div>
            <p className="mb-3 font-semibold">Quick Links</p>
            <ul className="space-y-2 text-[#dbc8b5]">
              <li><a href="/#projects" className="hover:text-[#e8d5bb]">Projects</a></li>
              <li><a href="/#services" className="hover:text-[#e8d5bb]">Services</a></li>
              <li><a href="/#faq" className="hover:text-[#e8d5bb]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Locations</p>
            <ul className="space-y-2 text-[#dbc8b5]">
              <li>Banaswadi, Bangalore</li>
              <li>HBR Layout, Bangalore</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Connect</p>
            <div className="flex flex-wrap gap-4 text-[#dbc8b5]">
              <a href="https://wa.me/919880000000" className="hover:text-[#e8d5bb]">WhatsApp</a>
              <a href="tel:+919880000000" className="hover:text-[#e8d5bb]">Call</a>
              <a href="/#contact" className="hover:text-[#e8d5bb]">Visit</a>
            </div>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/919880000000"
        whileHover={{ y: -3, scale: 1.02 }}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.272-.099-.471-.149-.67.149-.198.297-.768.966-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.478-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.67-1.612-.918-2.207-.241-.58-.487-.501-.67-.51l-.57-.01c-.198 0-.521.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.307 1.263.49 1.697.628.712.227 1.36.195 1.872.118.572-.085 1.758-.719 2.006-1.414.247-.695.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347Z"/>
          <path d="M12.037 2A9.96 9.96 0 0 0 2.1 11.962c0 1.75.456 3.448 1.323 4.936L2 22l5.26-1.383a10.01 10.01 0 0 0 4.777 1.214h.001A9.96 9.96 0 0 0 22 11.962 9.96 9.96 0 0 0 12.037 2Zm0 17.981h-.001a8.05 8.05 0 0 1-4.1-1.126l-.294-.174-3.123.82.833-3.044-.19-.312a8.05 8.05 0 0 1-1.252-4.31A8.05 8.05 0 0 1 12.037 3.97a8.05 8.05 0 0 1 8.065 8.065 8.05 8.05 0 0 1-8.065 8.045Z" fill="none"/>
        </svg>
      </motion.a>
      <motion.a
        href="tel:+919880000000"
        whileHover={{ y: -3, scale: 1.02 }}
        className="fixed bottom-6 right-6 z-50 rounded-full border border-[#8d6b4e]/40 bg-[#f7efe4] px-4 py-3 text-sm font-semibold text-[#4d3920] shadow-2xl"
      >
        Call Now
      </motion.a>
    </div>
  );
}
