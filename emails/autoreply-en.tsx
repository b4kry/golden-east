import { Html, Head, Preview, Body, Container, Section, Text, Hr, Link } from "@react-email/components"
import { EmailHeader, EmailFooter } from "./components"

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#3F9228",
  color: "#ffffff",
  fontSize: 15,
  fontWeight: 600,
  textDecoration: "none",
  padding: "12px 28px",
  borderRadius: 8,
  marginTop: 8,
}

function AutoReplyEn({ name, type }: { name: string; type: "contact" | "quote" }) {
  const previewText = `Thank you for contacting Golden East, ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <EmailHeader />

          <Section style={contentSection}>
            <Text style={heading}>Thank You, {name}</Text>
            <Text style={greeting}>
              {type === "quote"
                ? "We have received your quote request and our sales team will review it shortly."
                : "We have received your message and will get back to you as soon as possible."}
            </Text>

            <Hr style={divider} />

            <Text style={bodyText}>
              Our team typically responds within 24 business hours. If your inquiry is urgent, please
              reach out to us directly on WhatsApp.
            </Text>

            <div style={{ textAlign: "center" as const, marginTop: 24 }}>
              <Link href="https://golden-east.com/en/products" style={buttonStyle}>
                Browse Our Products
              </Link>
            </div>

            <Hr style={divider} />

            <Text style={closing}>
              Best regards,
              <br />
              Golden East Agricultural Development Team
            </Text>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  )
}

export { AutoReplyEn }
export default AutoReplyEn

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
  margin: "0 0 12px",
  lineHeight: 1.2,
}

const greeting: React.CSSProperties = {
  fontSize: 15,
  color: "#243124",
  lineHeight: 1.6,
  margin: 0,
}

const bodyText: React.CSSProperties = {
  fontSize: 14,
  color: "#667266",
  lineHeight: 1.6,
  margin: 0,
}

const divider: React.CSSProperties = {
  borderColor: "#E6EBE2",
  margin: "20px 0",
}

const closing: React.CSSProperties = {
  fontSize: 14,
  color: "#667266",
  lineHeight: 1.6,
  margin: 0,
}
