"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react"

/**
 * CONTACT FORM - PREPARED FOR SUPABASE INTEGRATION
 * 
 * To connect this form with Supabase:
 * 
 * 1. Create a "leads" table in Supabase with columns:
 *    - id (uuid, primary key, default: gen_random_uuid())
 *    - name (text, not null)
 *    - email (text, not null)
 *    - company (text, nullable)
 *    - message (text, not null)
 *    - created_at (timestamptz, default: now())
 * 
 * 2. Install Supabase client:
 *    npm install @supabase/supabase-js
 * 
 * 3. Create a server action in app/actions/contact.ts:
 *    
 *    "use server"
 *    import { createClient } from "@supabase/supabase-js"
 *    
 *    const supabase = createClient(
 *      process.env.NEXT_PUBLIC_SUPABASE_URL!,
 *      process.env.SUPABASE_SERVICE_ROLE_KEY!
 *    )
 *    
 *    export async function submitContactForm(formData: FormData) {
 *      const { error } = await supabase.from("leads").insert({
 *        name: formData.get("name"),
 *        email: formData.get("email"),
 *        company: formData.get("company"),
 *        message: formData.get("message"),
 *      })
 *      if (error) throw new Error(error.message)
 *      return { success: true }
 *    }
 * 
 * 4. Import and use the action in handleSubmit below
 */

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)

    try {
      // TODO: Replace with Supabase server action when connected
      // import { submitContactForm } from "@/app/actions/contact"
      // await submitContactForm(formData)

      // Simulated success for now - remove when Supabase is connected
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo."
      )
    }
  }

  return (
    <section id="contacto" className="section-padding border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            {/* Section Header */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-5 bg-white/30" />
              <span className="text-xs font-medium uppercase tracking-widest text-white/40">
                Contacto
              </span>
            </div>
            <h2 className="mb-4 font-serif text-3xl text-white sm:text-4xl">
              Hablamos de tu{" "}
              <span className="italic text-[#7aadec]">proyecto</span>
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-white/55">
              Contame qué necesitás y te respondo en menos de 24 horas. 
              Trabajo de forma remota con clientes de toda LATAM.
            </p>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:cbageta@fca.uncu.edu.ar"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-mid px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#3d70c0]"
              >
                <Mail className="h-4 w-4" />
                Escribirme por email
              </Link>
              <Link
                href="https://linkedin.com/in/crbageta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/85 transition-all hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/CarlosRubenBageta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/85 transition-all hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="mb-6 font-serif text-xl text-white">
              Dejame tu consulta
            </h3>

            {status === "success" ? (
              <div className="rounded-xl bg-teal/20 p-6 text-center">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal/30">
                  <Send className="h-5 w-5 text-teal-light" />
                </div>
                <h4 className="mb-2 font-serif text-lg text-white">
                  Mensaje enviado
                </h4>
                <p className="text-sm text-white/60">
                  Gracias por tu contacto. Te respondo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-navy-mid focus:outline-none focus:ring-1 focus:ring-navy-mid"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-navy-mid focus:outline-none focus:ring-1 focus:ring-navy-mid"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Empresa o proyecto{" "}
                    <span className="text-white/40">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-navy-mid focus:outline-none focus:ring-1 focus:ring-navy-mid"
                    placeholder="Nombre de tu empresa o proyecto"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-navy-mid focus:outline-none focus:ring-1 focus:ring-navy-mid"
                    placeholder="Contame sobre tu proyecto o consulta..."
                  />
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <p className="rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-300">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-mid px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#3d70c0] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
