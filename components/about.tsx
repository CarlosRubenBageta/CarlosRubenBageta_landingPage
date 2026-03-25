const credentials = [
  {
    text: "Magíster en Matemática",
    subtext: "Universidad Nacional de San Luis",
  },
  {
    text: "Bootcamp Data Engineering",
    subtext: "Escuela de Datos Vivos - 2025",
  },
  {
    text: "Bootcamp Data Science & MLOps",
    subtext: "Escuela de Datos Vivos - 2024",
  },
  {
    text: "Bootcamp Data Science + Data Analyst",
    subtext: "DesafioLatam - 2025",
  },
  {
    text: "Automatizaciones con n8n y AI Products",
    subtext: "2025",
  },
  {
    text: "Docente universitario - UNCuyo",
    subtext: "1998 - actualidad",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="section-padding border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-ink-muted" />
            <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
              Sobre mí
            </span>
          </div>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Matemático, docente y{" "}
            <span className="italic text-navy-mid">apasionado por los datos</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Text Content */}
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Soy{" "}
              <strong className="font-medium text-ink">
                Profesor en Matemática y Magíster en Matemática
              </strong>{" "}
              con más de 25 años de experiencia en docencia universitaria e 
              investigación en sistemas dinámicos y modelado matemático aplicado 
              en la Universidad Nacional de Cuyo.
            </p>
            <p>
              En los últimos años completé tres bootcamps especializados en{" "}
              <strong className="font-medium text-ink">
                Data Science, MLOps y Data Engineering
              </strong>
              , incorporando herramientas modernas de IA generativa, automatización 
              con n8n y desarrollo de productos digitales. Esta combinación de rigor 
              académico con práctica técnica actualizada es lo que diferencia mi enfoque.
            </p>
            <p>
              Trabajo de forma remota con clientes de toda LATAM, con especial foco 
              en sectores como{" "}
              <strong className="font-medium text-ink">
                agroindustria, educación, salud y PyMEs
              </strong>{" "}
              que necesitan incorporar datos e IA a su operación sin armar equipos 
              técnicos grandes. Estoy disponible tanto para proyectos puntuales como 
              para acompañamiento continuo.
            </p>
          </div>

          {/* Credentials Panel */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-navy px-5 py-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-white/70">
                Formación y trayectoria
              </h3>
            </div>
            <div className="divide-y divide-border">
              {credentials.map((cred) => (
                <div key={cred.text} className="flex items-start gap-3 px-5 py-4">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-navy-mid" />
                  <div>
                    <p className="text-sm leading-snug text-ink-soft">{cred.text}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{cred.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
