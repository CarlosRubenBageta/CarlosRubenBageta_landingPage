"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#formacion", label: "Formación" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-ink transition-colors hover:text-navy"
        >
          Carlos <span className="italic text-navy-mid">Bageta</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-navy-mid hover:-translate-y-0.5"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-soft md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 z-50 origin-top bg-paper/95 backdrop-blur-lg transition-all duration-200 md:hidden",
          mobileMenuOpen
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0"
        )}
      >
        <nav className="flex flex-col border-b border-border px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-normal text-ink-soft transition-colors hover:text-ink"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="mt-3 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-white transition-all hover:bg-navy-mid"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
