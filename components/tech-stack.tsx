const techCategories = [
  {
    badge: "Lenguajes",
    badgeStyle: "bg-navy-light text-navy",
    title: "Python / R / SQL",
    description: "pandas, matplotlib, scikit-learn, PySpark",
  },
  {
    badge: "Data Engineering",
    badgeStyle: "bg-[#eeedfe] text-[#534AB7]",
    title: "Apache Spark / Airflow / Kafka",
    description: "Docker, Hive, Sqoop, ETL/ELT pipelines",
  },
  {
    badge: "Cloud & DB",
    badgeStyle: "bg-teal-light text-teal",
    title: "Google Cloud Platform / Supabase",
    description: "BigQuery, GCS, PostgreSQL",
  },
  {
    badge: "IA & LLMs",
    badgeStyle: "bg-amber-light text-amber",
    title: "LLMs / Prompt Engineering / HuggingFace",
    description: "Claude, ChatGPT, DeepSeek, Google AI Studio",
  },
  {
    badge: "Automatización",
    badgeStyle: "bg-[#fbeaf0] text-[#72243E]",
    title: "n8n / Make / MCPs",
    description: "Workflows con IA, APIs, Integraciones",
  },
  {
    badge: "Visualización",
    badgeStyle: "bg-secondary text-ink-soft",
    title: "Tableau / Excel avanzado",
    description: "matplotlib, Git, GitHub, Jupyter, VS Code",
  },
]

export function TechStack() {
  return (
    <section id="formacion" className="section-padding border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-ink-muted" />
            <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
              Stack técnico
            </span>
          </div>
          <h2 className="mb-4 font-serif text-3xl text-ink sm:text-4xl">
            Herramientas con las que <span className="italic text-navy-mid">trabajo</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            Tecnologías que uso en proyectos reales, no solo listadas en un CV.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((tech) => (
            <article
              key={tech.title}
              className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md"
            >
              <span
                className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${tech.badgeStyle}`}
              >
                {tech.badge}
              </span>
              <h3 className="mb-2 text-sm font-medium leading-snug text-ink">
                {tech.title}
              </h3>
              <p className="text-sm text-ink-muted">{tech.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
