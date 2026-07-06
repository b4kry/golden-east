"use client"

import { FaWhatsapp } from "react-icons/fa"
import { useLocale } from "@/contexts/locale-context"

function WhatsAppButton() {
  const locale = useLocale()
  const isArabic = locale === "ar"

  return (
    <div className={`group fixed bottom-6 z-50 print:hidden ${isArabic ? "left-6" : "right-6"}`}>
      <a
        href="https://wa.me/message/NXXQIURNDMO6P1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-97 md:size-[56px]"
        aria-label={isArabic ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
      >
        <FaWhatsapp className="size-6" />
      </a>
      <span className={`pointer-events-none absolute bottom-1/2 hidden translate-y-1/2 whitespace-nowrap rounded-xl bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-dropdown transition-opacity duration-200 group-hover:opacity-100 md:block ${isArabic ? "right-full mr-4" : "left-full ml-4"}`}>
        {isArabic ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
      </span>
    </div>
  )
}

export { WhatsAppButton }
