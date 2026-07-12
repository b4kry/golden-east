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
  const title = `${isArabic ? "سياسة الخصوصية" : "Privacy Policy"} | ${name}`

  return {
    title,
    description: isArabic
      ? "سياسة الخصوصية لجولدن إيست للتنمية الزراعية — كيف نجمع ونستخدم ونحمي معلوماتك."
      : "Golden East Agricultural Development's privacy policy — how we collect, use, and protect your information.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/privacy`,
      languages: {
        en: `${SITE_URL}/en/privacy`,
        ar: `${SITE_URL}/ar/privacy`,
      },
    },
    openGraph: {
      title,
      description: isArabic
        ? "سياسة الخصوصية لجولدن إيست للتنمية الزراعية."
        : "Privacy Policy for Golden East Agricultural Development.",
      url: `${SITE_URL}/${locale}/privacy`,
      siteName: isArabic ? company.nameAr : company.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
  }
}

export default async function PrivacyPage({
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
          title: "المقدمة",
          content:
            "تلتزم جولدن إيست للتنمية الزراعية بحماية خصوصية زوار موقعها الإلكتروني. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات الشخصية التي تشاركها معنا عند استخدام موقعنا.",
        },
        {
          title: "المعلومات التي نجمعها",
          content:
            "لا يتطلب موقعنا إنشاء حساب مستخدم أو تسجيل دخول. قد نجمع المعلومات التالية عندما تقدمها طواعية:\n\n• الاسم الكامل — عند إرسال نموذج الاتصال أو طلب عرض السعر\n• البريد الإلكتروني — للرد على استفساراتك\n• رقم الهاتف — لتتمكن فرق المبيعات من التواصل معك\n• اسم الشركة — لخدمة أفضل للعملاء من الشركات\n• تفاصيل الطلب — المنتجات والكميات التي تختارها في طلب عرض السعر\n• محتوى الرسالة — عند إرسال استفسار عبر نموذج الاتصال",
        },
        {
          title: "كيف نستخدم معلوماتك",
          content:
            "نستخدم المعلومات التي نجمعها للأغراض التالية فقط:\n\n• الرد على استفساراتك وطلبات الأسعار\n• التواصل معك بخصوص منتجاتنا وخدماتنا\n• تحسين موقعنا وتجربة المستخدم\n• أغراض تحليلية داخلية\n\nنحن لا نبيع معلوماتك الشخصية إلى أطراف ثالثة ولا نستخدمها لأغراض التسويق دون موافقتك.",
        },
        {
          title: "التخزين المحلي (Local Storage)",
          content:
            "يستخدم موقعنا التخزين المحلي في متصفحك لتخزين العناصر التي تضيفها إلى طلب عرض السعر. هذه البيانات:\n\n• تبقى محلياً على جهازك\n• لا تُرسل إلى خوادمنا إلا عند إرسال طلب عرض السعر\n• يمكن مسحها في أي وقت من خلال إعدادات المتصفح\n• لا تُستخدم لتتبعك عبر مواقع أخرى",
        },
        {
          title: "ملفات تعريف الارتباط (Cookies)",
          content:
            "يستخدم موقعنا الحد الأدنى من ملفات تعريف الارتباط. نحن نحترم خصوصيتك ونمنحك التحكم:\n\n• NEXT_LOCALE — ملف تعريف ارتباط أساسي لتذكر تفضيل اللغة. نشط دائماً ولا يتطلب موافقة.\n• cookie_consent — يخزن اختيار موافقتك على ملفات تعريف الارتباط (مقبول أو مرفوض). تنتهي صلاحيته بعد ٣٦٥ يوماً.\n\nإذا قبلت، قد يستخدم Google Analytics ملفات تعريف الارتباط لجمع بيانات استخدام مجهولة. لا يتم جمع أو مشاركة معلومات شخصية مع أطراف ثالثة.",
        },
        {
          title: "الاحتفاظ بالبيانات",
          content:
            "نحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتحقيق الغرض الذي جمعت من أجله. يتم التخلص من بيانات طلبات الأسعار ورسائل الاتصال بشكل آمن بعد معالجتها، ما لم يكن هناك التزام قانوني يتطلب الاحتفاظ بها.",
        },
        {
          title: "حقوقك",
          content:
            "لديك الحق في:\n\n• طلب الوصول إلى معلوماتك الشخصية التي نحتفظ بها\n• طلب تصحيح أو حذف معلوماتك\n• الاعتراض على معالجة معلوماتك\n• تقديم شكوى إلى السلطة المختصة لحماية البيانات\n\nلممارسة هذه الحقوق، يرجى التواصل معنا عبر القنوات المتاحة على صفحة الاتصال.",
        },
        {
          title: "أمان البيانات",
          content:
            "نتخذ إجراءات أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفشاء. ومع ذلك، لا يمكن ضمان أمان مطلق لأي نقل للبيانات عبر الإنترنت.",
        },
        {
          title: "التغييرات على هذه السياسة",
          content:
            "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ آخر مراجعة.",
        },
        {
          title: "اتصل بنا",
          content:
            "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر القنوات المتاحة على صفحة الاتصال.",
        },
      ]
    : [
        {
          title: "Introduction",
          content:
            "Golden East Agricultural Development is committed to protecting the privacy of visitors to our website. This policy explains how we collect, use, and safeguard the personal information you share with us when using our site.",
        },
        {
          title: "Information We Collect",
          content:
            "Our website does not require user accounts or login. We may collect the following information when you voluntarily provide it:\n\n• Full name — when submitting a contact form or quote request\n• Email address — to respond to your inquiries\n• Phone number — so our sales team can contact you\n• Company name — for better B2B customer service\n• Order details — products and quantities you select for a quote\n• Message content — when submitting an inquiry via the contact form",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect solely for the following purposes:\n\n• Responding to your inquiries and quote requests\n• Communicating with you about our products and services\n• Improving our website and user experience\n• Internal analytical purposes\n\nWe do not sell your personal information to third parties or use it for marketing purposes without your consent.",
        },
        {
          title: "Local Storage",
          content:
            "Our website uses your browser's local storage to remember the items you add to your quote request. This data:\n\n• Remains locally on your device\n• Is only sent to our servers when you submit the quote request\n• Can be cleared at any time through your browser settings\n• Is not used to track you across other websites",
        },
        {
          title: "Cookies",
          content:
            "Our website uses minimal cookies. We respect your privacy and give you control:\n\n• NEXT_LOCALE — essential cookie that remembers your language preference. Always active, no consent required.\n• cookie_consent — stores your cookie consent choice (accepted or rejected). Expires after 365 days.\n\nGoogle Analytics (if accepted) uses cookies to collect anonymous usage data. No personal information is collected or shared with third parties.",
        },
        {
          title: "Data Retention",
          content:
            "We retain your personal information only as long as necessary to fulfill the purpose for which it was collected. Quote requests and contact messages are securely disposed of after processing, unless legal obligations require retention.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to:\n\n• Request access to the personal information we hold about you\n• Request correction or deletion of your information\n• Object to the processing of your information\n• Lodge a complaint with the relevant data protection authority\n\nTo exercise these rights, please contact us through the channels available on our Contact page.",
        },
        {
          title: "Data Security",
          content:
            "We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet can be guaranteed as completely secure.",
        },
        {
          title: "Changes to This Policy",
          content:
            "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about this privacy policy, please contact us through the channels available on our Contact page.",
        },
      ]

  return (
    <Container className="py-16 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-[2.625rem]">
          {dict.privacy.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {dict.privacy.description}
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
