import type { Metadata } from "next"
import { Container } from "@/components/layout/container"
import { locales, isLocale, getDictionary, SITE_URL } from "@/lib/i18n"
import { company } from "@/data/company"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const isArabic = locale === "ar"
  const name = isArabic ? company.nameAr : company.nameEn
  const title = `${isArabic ? "شروط الاستخدام" : "Terms of Use"} | ${name}`

  return {
    title,
    description: isArabic
      ? "شروط استخدام موقع جولدن إيست للتنمية الزراعية — القواعد والأحكام لاستخدام خدماتنا."
      : "Terms of use for Golden East Agricultural Development website — rules and conditions for using our services.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/terms`,
      languages: {
        en: `${SITE_URL}/en/terms`,
        ar: `${SITE_URL}/ar/terms`,
      },
    },
    openGraph: {
      title,
      description: isArabic
        ? "شروط استخدام موقع جولدن إيست للتنمية الزراعية."
        : "Terms of Use for Golden East Agricultural Development.",
      url: `${SITE_URL}/${locale}/terms`,
      siteName: isArabic ? company.nameAr : company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) throw new Error(`Unsupported locale: ${locale}`)

  const dict = await getDictionary(locale)
  const isArabic = locale === "ar"

  const sections = isArabic
    ? [
        {
          title: "القبول بالشروط",
          content:
            "باستخدامك لهذا الموقع الإلكتروني، فإنك توافق على الالتزام بشروط الاستخدام هذه. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.",
        },
        {
          title: "استخدام الموقع",
          content:
            "يُسمح لك باستخدام هذا الموقع للأغراض المشروعة فقط. يحظر استخدام الموقع:\n\n• بأي طريقة تنتهك القوانين واللوائح المحلية أو الدولية\n• بطريقة احتيالية أو غير قانونية\n• لنقل أو نشر أي مواد ضارة أو خبيثة\n• للتعدي على حقوق الملكية الفكرية للغير\n• لإرسال أي اتصالات غير مرغوب فيها",
        },
        {
          title: "الملكية الفكرية",
          content:
            "جميع المحتويات المعروضة على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والصور والشعارات والعلامات التجارية والمواد التسويقية، هي ملكية حصرية لجولدن إيست للتنمية الزراعية أو مرخصة لها. لا يجوز نسخ أو توزيع أو تعديل أو نشر أي محتوى دون الحصول على إذن كتابي مسبق.",
        },
        {
          title: "طلبات عرض السعر",
          content:
            "تقديم طلب عرض سعر من خلال هذا الموقع لا يُعتبر أمر شراء. طلبات عرض السعر هي:\n\n• طلبات غير ملزمة للحصول على معلومات حول المنتجات والأسعار\n• تخضع لمراجعة وتأكيد فريق المبيعات\n• لا تشكل عقداً ملزماً بين العميل والشركة حتى يتم تأكيده كتابياً\n• الأسعار المقدمة بعد الطلب قابلة للتغيير بناءً على الكمية والتوفر وظروف السوق",
        },
        {
          title: "دقة المعلومات",
          content:
            "نبذل قصارى جهدنا لضمان دقة المعلومات المعروضة على هذا الموقع. ومع ذلك:\n\n• لا نضمن أن جميع المعلومات كاملة أو محدثة في جميع الأوقات\n• قد تخضع مواصفات المنتجات للتغيير دون إشعار مسبق\n• قد تختلف نتائج المنتجات حسب ظروف الزراعة والتطبيق\n• الصور المعروضة هي لأغراض توضيحية وقد لا تطابق المنتج الفعلي تماماً",
        },
        {
          title: "تحديد المسؤولية",
          content:
            "لن تكون جولدن إيست للتنمية الزراعية مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدام أو عدم القدرة على استخدام هذا الموقع أو المنتجات المعروضة فيه، إلى أقصى حد يسمح به القانون.",
        },
        {
          title: "الروابط الخارجية",
          content:
            "قد يحتوي موقعنا على روابط لمواقع خارجية (مثل فيسبوك وإنستغرام وواتساب). نحن لا نتحكم في محتوى هذه المواقع ولا نتحمل مسؤولية ممارسات الخصوصية أو المحتوى الخاص بها.",
        },
        {
          title: "القانون الواجب التطبيق",
          content:
            "تخضع شروط الاستخدام هذه للقوانين السارية في جمهورية مصر العربية. أي نزاعات تنشأ عن استخدام هذا الموقع تخضع للاختصاص القضائي الحصري للمحاكم المصرية.",
        },
        {
          title: "التعديلات",
          content:
            "نحتفظ بالحق في تعديل شروط الاستخدام هذه في أي وقت. سيتم نشر التعديلات على هذه الصفحة، واستمرارك في استخدام الموقع بعد النشر يعتبر قبولاً بالشروط المعدلة.",
        },
        {
          title: "اتصل بنا",
          content:
            "إذا كانت لديك أي أسئلة حول شروط الاستخدام هذه، يرجى التواصل معنا عبر القنوات المتاحة على صفحة الاتصال.",
        },
      ]
    : [
        {
          title: "Acceptance of Terms",
          content:
            "By using this website, you agree to be bound by these Terms of Use. If you do not agree with any of these terms, please do not use the website.",
        },
        {
          title: "Use of the Website",
          content:
            "You are permitted to use this website for lawful purposes only. Prohibited uses include:\n\n• Violating any applicable local or international laws and regulations\n• Engaging in fraudulent or illegal activities\n• Transmitting or publishing harmful or malicious material\n• Infringing upon the intellectual property rights of others\n• Sending unsolicited communications",
        },
        {
          title: "Intellectual Property",
          content:
            "All content displayed on this website, including but not limited to text, images, logos, trademarks, and marketing materials, is the exclusive property of Golden East Agricultural Development or is used under license. No content may be copied, distributed, modified, or published without prior written permission.",
        },
        {
          title: "Quote Requests",
          content:
            "Submitting a quote request through this website does not constitute a purchase order. Quote requests are:\n\n• Non-binding inquiries for product and pricing information\n• Subject to review and confirmation by the sales team\n• Do not form a binding contract until confirmed in writing\n• Prices quoted are subject to change based on quantity, availability, and market conditions",
        },
        {
          title: "Accuracy of Information",
          content:
            "We strive to ensure the accuracy of information presented on this website. However:\n\n• We do not guarantee that all information is complete or current at all times\n• Product specifications may change without prior notice\n• Product results may vary depending on growing conditions and application\n• Images are for illustrative purposes and may not exactly match the actual product",
        },
        {
          title: "Limitation of Liability",
          content:
            "Golden East Agricultural Development shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website or the products displayed herein, to the fullest extent permitted by law.",
        },
        {
          title: "External Links",
          content:
            "Our website may contain links to external sites (e.g., Facebook, Instagram, WhatsApp). We do not control the content of these sites and are not responsible for their privacy practices or content.",
        },
        {
          title: "Governing Law",
          content:
            "These Terms of Use are governed by the laws of the Arab Republic of Egypt. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the Egyptian courts.",
        },
        {
          title: "Modifications",
          content:
            "We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page, and your continued use of the website after posting constitutes acceptance of the modified terms.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about these Terms of Use, please contact us through the channels available on our Contact page.",
        },
      ]

  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-[2.625rem]">
          {dict.terms.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {dict.terms.description}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {isArabic ? "آخر تحديث: يوليو 2026" : "Last updated: July 2026"}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Container>
  )
}
