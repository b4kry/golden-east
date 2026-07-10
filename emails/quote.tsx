import { Html, Head, Preview, Body, Container, Section, Text, Hr } from "@react-email/components"
import { EmailHeader, EmailFooter } from "./components"

const primaryGreen = "#3F9228"

const infoRow: React.CSSProperties = {
  marginBottom: 8,
}

const infoLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#667266",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: 0,
}

const infoValue: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 500,
  color: "#243124",
  margin: "2px 0 0",
  lineHeight: 1.4,
}

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
  marginTop: 16,
}

const thStyle: React.CSSProperties = {
  backgroundColor: primaryGreen,
  color: "#ffffff",
  fontSize: 13,
  fontWeight: 600,
  textAlign: "left" as const,
  padding: "10px 14px",
  borderBottom: `2px solid ${primaryGreen}`,
}

const tdStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#243124",
  padding: "10px 14px",
  borderBottom: "1px solid #E6EBE2",
}

const tdAltStyle: React.CSSProperties = {
  ...tdStyle,
  backgroundColor: "#F5F8F2",
}

const notesStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#667266",
  fontStyle: "italic" as const,
  margin: 0,
}

interface QuoteEmailProps {
  customer: {
    name: string
    email: string
    phone: string
    company: string
    notes: string
  }
  items: Array<{
    productId: string
    name: string
    quantity: number
    notes: string
  }>
  locale: string
  submittedAt: string
}

function QuoteEmail({ customer, items, locale, submittedAt }: QuoteEmailProps) {
  const isArabic = locale === "ar"
  const previewText = isArabic
    ? `طلب عرض سعر جديد من ${customer.name}`
    : `New quote request from ${customer.name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <EmailHeader />

          <Section style={contentSection}>
            <Text style={heading}>
              {isArabic ? "طلب عرض سعر جديد" : "New Quote Request"}
            </Text>
            <Text style={subheading}>
              {isArabic ? `تم تقديم طلب عرض سعر من ${customer.name}` : `A quote request has been submitted by ${customer.name}`}
            </Text>
            <Hr style={divider} />

            <div style={infoRow}>
              <Text style={infoLabel}>{isArabic ? "تم الإرسال في" : "Submitted"}</Text>
              <Text style={infoValue}>{submittedAt}</Text>
            </div>

            <div style={infoRow}>
              <Text style={infoLabel}>{isArabic ? "اللغة" : "Locale"}</Text>
              <Text style={infoValue}>{isArabic ? "العربية" : "English"}</Text>
            </div>

            <Hr style={divider} />

            <Text style={sectionTitle}>
              {isArabic ? "بيانات العميل" : "Customer Information"}
            </Text>

            <div style={infoRow}>
              <Text style={infoLabel}>{isArabic ? "الاسم" : "Name"}</Text>
              <Text style={infoValue}>{customer.name}</Text>
            </div>

            <div style={infoRow}>
              <Text style={infoLabel}>{isArabic ? "البريد الإلكتروني" : "Email"}</Text>
              <Text style={infoValue}>{customer.email}</Text>
            </div>

            <div style={infoRow}>
              <Text style={infoLabel}>{isArabic ? "الهاتف" : "Phone"}</Text>
              <Text style={infoValue}>{customer.phone}</Text>
            </div>

            {customer.company && (
              <div style={infoRow}>
                <Text style={infoLabel}>{isArabic ? "الشركة" : "Company"}</Text>
                <Text style={infoValue}>{customer.company}</Text>
              </div>
            )}

            {customer.notes && (
              <div style={infoRow}>
                <Text style={infoLabel}>{isArabic ? "ملاحظات" : "Notes"}</Text>
                <Text style={infoValue}>{customer.notes}</Text>
              </div>
            )}

            <Hr style={divider} />

            <Text style={sectionTitle}>
              {isArabic ? "المنتجات المطلوبة" : "Requested Products"}
            </Text>

            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>{isArabic ? "المنتج" : "Product"}</th>
                  <th style={{ ...thStyle, textAlign: "center" as const }}>{isArabic ? "الكمية" : "Quantity"}</th>
                  <th style={thStyle}>{isArabic ? "ملاحظات" : "Notes"}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.productId}>
                    <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{item.name}</td>
                    <td style={{
                      ...(i % 2 === 0 ? tdStyle : tdAltStyle),
                      textAlign: "center" as const,
                      fontWeight: 600,
                    }}>
                      {item.quantity}
                    </td>
                    <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>
                      {item.notes ? (
                        <Text style={notesStyle}>{item.notes}</Text>
                      ) : (
                        <Text style={{ ...notesStyle, color: "#aaa" }}>—</Text>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  )
}

export { QuoteEmail }
export default QuoteEmail

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#f0f0f0",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "20px 0",
}

const containerStyle: React.CSSProperties = {
  maxWidth: 600,
  margin: "0 auto",
}

const contentSection: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "32px 40px",
}

const heading: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 700,
  color: "#243124",
  margin: "0 0 4px",
  lineHeight: 1.2,
}

const subheading: React.CSSProperties = {
  fontSize: 14,
  color: "#667266",
  margin: "0 0 20px",
  lineHeight: 1.4,
}

const divider: React.CSSProperties = {
  borderColor: "#E6EBE2",
  margin: "20px 0",
}

const sectionTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: "#243124",
  margin: "0 0 12px",
}
