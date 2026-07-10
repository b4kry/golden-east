import { Html, Head, Preview, Body, Container, Section, Text, Hr } from "@react-email/components"
import { EmailHeader, EmailFooter } from "./components"

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

const messageBox: React.CSSProperties = {
  backgroundColor: "#F5F8F2",
  borderRadius: 8,
  padding: "16px 20px",
  marginTop: 16,
}

const messageText: React.CSSProperties = {
  fontSize: 14,
  color: "#243124",
  lineHeight: 1.6,
  margin: 0,
  whiteSpace: "pre-wrap" as const,
}

function ContactEmail({
  name,
  email,
  phone,
  company,
  message,
}: {
  name: string
  email: string
  phone: string
  company: string
  message: string
}) {
  const previewText = `New contact form submission from ${name}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <EmailHeader />

          <Section style={contentSection}>
            <Text style={heading}>New Contact Form Submission</Text>
            <Text style={subheading}>
              A visitor has submitted the contact form on your website.
            </Text>
            <Hr style={sectionDivider} />

            <div style={infoRow}>
              <Text style={infoLabel}>Name</Text>
              <Text style={infoValue}>{name}</Text>
            </div>

            <div style={infoRow}>
              <Text style={infoLabel}>Email</Text>
              <Text style={infoValue}>{email}</Text>
            </div>

            {phone && (
              <div style={infoRow}>
                <Text style={infoLabel}>Phone</Text>
                <Text style={infoValue}>{phone}</Text>
              </div>
            )}

            {company && (
              <div style={infoRow}>
                <Text style={infoLabel}>Company</Text>
                <Text style={infoValue}>{company}</Text>
              </div>
            )}

            <Hr style={sectionDivider} />

            <div style={infoRow}>
              <Text style={infoLabel}>Message</Text>
              <div style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </div>
            </div>
          </Section>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  )
}

export { ContactEmail }
export default ContactEmail

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

const sectionDivider: React.CSSProperties = {
  borderColor: "#E6EBE2",
  margin: "20px 0",
}
