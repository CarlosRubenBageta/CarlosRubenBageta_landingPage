import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    type: "Data Engineering",
    title: "Pipeline ETL end-to-end sobre GCP",
    description:
      "Ingesta, transformación y carga automatizada con PySpark y Airflow. Procesamiento a escala con tolerancia a fallos y orquestación programada sobre Google Cloud Platform.",
    tags: ["PySpark", "Airflow", "GCP", "Docker", "Kafka"],
    link: "https://github.com/CarlosRubenBageta/Examen-Final-Bootcamp-Data-Engineering-9na-ed---Carlos-Ruben-Bageta",
    linkText: "Ver en GitHub",
    gradient: "from-navy to-navy-mid",
  },
  {
    type: "Machine Learning",
    title: "Detector de fraude en e-commerce",
    description:
      "Modelo predictivo de clasificación para detección de transacciones fraudulentas. Implementado y desplegado en HuggingFace Spaces con interfaz interactiva.",
    tags: ["scikit-learn", "Python", "HuggingFace", "pandas"],
    link: "https://huggingface.co/spaces/sichar/Detector_de_fraudes_en_comercio_electronico",
    linkText: "Ver demo en vivo",
    gradient: "from-teal to-[#1d9e75]",
  },
  {
    type: "Modelado Matemático",
    title: "Dinámica poblacional de Lobesia botrana",
    description:
      "Simulación computacional de control de plagas en viñedos mediante modelos matemáticos de sistemas dinámicos implementados en Python. Aplicación directa a la agroindustria mendocina.",
    tags: ["Python", "Sistemas dinámicos", "Bioestadística", "matplotlib"],
    link: "https://github.com/CarlosRubenBageta/Repositorio-de-modelos-matematicos-para-Lobesia-botrana",
    linkText: "Ver en GitHub",
    gradient: "from-[#534AB7] to-[#7f77dd]",
  },
]

export function Projects() {
  return (
    <section
      id="proyectos"
      className="section-padding border-y border-border bg-paper-warm"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-ink-muted" />
            <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
              Proyectos
            </span>
          </div>
          <h2 className="mb-4 font-serif text-3xl text-ink sm:text-4xl">
            Trabajo real, <span className="italic text-navy-mid">código verificable</span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-ink-soft">
            Proyectos con datos reales, stack técnico documentado y resultados concretos. 
            Todo disponible en GitHub y HuggingFace.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient accent */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="flex flex-1 flex-col p-6">
                {/* Type badge */}
                <span className="mb-3 text-xs font-medium uppercase tracking-wider text-ink-muted">
                  {project.type}
                </span>

                {/* Title */}
                <h3 className="mb-3 font-serif text-lg leading-snug text-ink">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy-mid transition-all hover:gap-3"
                >
                  {project.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
