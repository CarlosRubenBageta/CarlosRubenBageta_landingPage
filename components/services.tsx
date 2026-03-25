import { BarChart3, Bot, Database, GraduationCap } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    number: "01",
    title: "Consultoría de datos y analytics",
    description:
      "Diagnóstico de madurez analítica, diseño de estrategia de datos y acompañamiento en implementación. Transformo datos dispersos en información útil para decisiones de negocio.",
    tags: ["SQL", "Python", "Tableau", "BigQuery", "Estadística"],
    color: "navy" as const,
  },
  {
    icon: Bot,
    number: "02",
    title: "Automatizaciones con IA",
    description:
      "Diseño e implementación de flujos automatizados usando LLMs y herramientas de IA generativa. Desde procesamiento inteligente de documentos hasta asistentes especializados para tu negocio.",
    tags: ["n8n", "LLMs", "Supabase", "Make", "APIs IA", "MCP"],
    color: "teal" as const,
  },
  {
    icon: Database,
    number: "03",
    title: "Pipelines de datos",
    description:
      "Construcción de arquitecturas ETL/ELT robustas, orquestación con Airflow y procesamiento distribuido con PySpark sobre GCP. Datos confiables y disponibles cuando los necesitás.",
    tags: ["PySpark", "Airflow", "GCP", "Docker", "Kafka", "ETL/ELT"],
    color: "purple" as const,
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Formación empresarial en datos",
    description:
      "Capacitación in-company para equipos en reconversión o que quieren usar datos en su trabajo cotidiano. Talleres prácticos adaptados al sector, nivel y objetivos del equipo.",
    tags: ["Python", "SQL", "IA aplicada", "Visualización", "Estadística"],
    color: "amber" as const,
  },
]

const colorStyles = {
  navy: {
    icon: "bg-navy-light text-navy",
    number: "text-navy-light",
  },
  teal: {
    icon: "bg-teal-light text-teal",
    number: "text-teal-light",
  },
  purple: {
    icon: "bg-[#eeedfe] text-[#534AB7]",
    number: "text-[#eeedfe]",
  },
  amber: {
    icon: "bg-amber-light text-amber",
    number: "text-amber-light",
  },
}

export function Services() {
  return (
    <section id="servicios" className="section-padding border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-ink-muted" />
            <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
              Servicios
            </span>
          </div>
          <h2 className="mb-4 font-serif text-3xl text-ink sm:text-4xl">
            En qué puedo <span className="italic text-navy-mid">ayudarte</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            Trabajo con empresas, PyMEs y equipos que quieren aprovechar sus datos 
            y la IA para tomar mejores decisiones y automatizar procesos repetitivos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            const styles = colorStyles[service.color]
            
            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                {/* Background Number */}
                <span
                  className={`pointer-events-none absolute -bottom-4 right-4 select-none font-serif text-8xl leading-none ${styles.number}`}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg ${styles.icon}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="relative mb-3 font-serif text-lg text-ink">
                  {service.title}
                </h3>
                <p className="relative mb-5 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
