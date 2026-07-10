"use client"

import { useState, type FormEvent } from "react"
import { useToast } from "@/components/ui/toast"
import type { Dictionary } from "@/lib/i18n"

interface ContactFormProps {
  dict: Dictionary
  locale: string
}

export function ContactForm({ dict, locale }: ContactFormProps) {
  const { showToast } = useToast()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (submitting) return

    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      showToast(dict.contact.form.success)
      setFormData({ name: "", email: "", phone: "", company: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.contact.form.error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/50 bg-card p-8 shadow-card"
      noValidate
    >
      <div className="space-y-5">
        {error && (
          <div className="rounded-xl bg-error/10 p-4 text-sm text-error" role="alert">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            {dict.contact.form.name}
          </label>
          <input
            type="text"
            id="contact-name"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            {dict.contact.form.email}
          </label>
          <input
            type="email"
            id="contact-email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground">
            {dict.contact.form.phone}
          </label>
          <input
            type="tel"
            id="contact-phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-foreground">
            {dict.contact.form.company}
          </label>
          <input
            type="text"
            id="contact-company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
            {dict.contact.form.message}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-60"
          aria-busy={submitting}
        >
          {submitting ? (
            <span className="flex items-center gap-2">
              <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              {dict.contact.form.submitting}
            </span>
          ) : (
            dict.contact.form.submit
          )}
        </button>
      </div>
    </form>
  )
}
