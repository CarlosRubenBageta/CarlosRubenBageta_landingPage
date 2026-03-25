import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Link href="/" className="font-serif text-base text-white/60">
          Carlos <span className="italic text-[#7aadec]">Bageta</span>
        </Link>
        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} / Mendoza, Argentina / cbageta@fca.uncu.edu.ar
        </p>
      </div>
    </footer>
  )
}
