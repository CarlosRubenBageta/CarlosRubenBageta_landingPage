import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"

const stats = [
  { value: "25+", label: "Años exp." },
  { value: "MSc", label: "Matemática" },
  { value: "3", label: "Bootcamps" },
]

const tags = [
  { label: "Python / PySpark", variant: "blue" as const },
  { label: "GCP / Airflow", variant: "teal" as const },
  { label: "LLMs / n8n", variant: "amber" as const },
  { label: "scikit-learn", variant: "default" as const },
  { label: "Supabase", variant: "default" as const },
  { label: "SQL", variant: "default" as const },
]

const tagVariants = {
  blue: "bg-navy-light text-navy",
  teal: "bg-teal-light text-teal",
  amber: "bg-amber-light text-amber",
  default: "bg-secondary text-ink-soft border border-border",
}

export function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-navy-mid" />
              <span className="text-xs font-medium uppercase tracking-widest text-navy-mid">
                Data & AI Consulting
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Datos e{" "}
              <span className="italic text-navy-mid">inteligencia artificial</span>{" "}
              al servicio de tu negocio
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Construyo pipelines de datos, modelos predictivos y automatizaciones con IA 
              para empresas que quieren tomar decisiones más inteligentes. Rigor matemático 
              aplicado con tecnología de vanguardia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#servicios"
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/25"
              >
                Ver servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="https://github.com/CarlosRubenBageta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-normal text-ink-soft transition-all hover:border-ink-soft hover:text-ink"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/crbageta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-normal text-ink-soft transition-all hover:border-ink-soft hover:text-ink"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-ink/5">
              {/* Top accent gradient */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-navy-mid to-teal" />
              
              <div className="p-8">
                {/* Profile Photo */}
                <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-navy-light shadow-lg">
                  <Image
                    src="/images/Bageta_Carlos_Ruben.jpg"
                    alt="Carlos Rubén Bageta - Consultor en Data & IA"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Name and Role */}
                <h2 className="mb-1 text-center font-serif text-xl text-ink">
                  Carlos Rubén Bageta
                </h2>
                <p className="mb-6 text-center text-sm text-ink-muted">
                  Data Engineer / Data Scientist / AI Automation
                </p>

                {/* Divider */}
                <div className="mb-6 h-px bg-border" />

                {/* Stats */}
                <div className="mb-6 flex">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`flex-1 text-center ${
                        index !== stats.length - 1 ? "border-r border-border" : ""
                      }`}
                    >
                      <div className="font-serif text-2xl text-ink">{stat.value}</div>
                      <div className="text-xs uppercase tracking-wide text-ink-muted">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${tagVariants[tag.variant]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
