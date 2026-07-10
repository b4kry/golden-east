import { Img, Section, Text, Hr, Link } from "@react-email/components"

const goldAccent = "#F8C63C"
const darkGreen = "#1A2E1A"

export function EmailHeader() {
  return (
    <Section style={headerSection}>
      <Img
        src="https://golden-east.com/brand/icon-white.svg"
        alt="Golden East"
        width={44}
        height={44}
        style={logo}
      />
      <Text style={headerTitle}>Golden East</Text>
      <Text style={headerSubtitle}>Agricultural Development</Text>
    </Section>
  )
}

export function EmailFooter() {
  return (
    <Section style={footerSection}>
      <Hr style={divider} />
      <Text style={footerText}>
        &copy; {new Date().getFullYear()} Golden East Agricultural Development. All rights reserved.
      </Text>
      <Text style={footerText}>
        Light Industries Industrial Zone, Beni Suef, Egypt
      </Text>
      <Text style={footerLinks}>
        <Link href="https://golden-east.com" style={link}>Website</Link>
        {" · "}
        <Link href="https://facebook.com/goldeneastagri" style={link}>Facebook</Link>
        {" · "}
        <Link href="https://www.instagram.com/golden_east.agri" style={link}>Instagram</Link>
      </Text>
    </Section>
  )
}

const headerSection: React.CSSProperties = {
  backgroundColor: darkGreen,
  padding: "32px 40px",
  textAlign: "center" as const,
  borderRadius: "12px 12px 0 0",
}

const logo: React.CSSProperties = {
  margin: "0 auto 12px",
}

const headerTitle: React.CSSProperties = {
  color: goldAccent,
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  margin: 0,
  lineHeight: 1.2,
}

const headerSubtitle: React.CSSProperties = {
  color: "#86efac",
  fontSize: 14,
  fontWeight: 400,
  margin: "4px 0 0",
}

const footerSection: React.CSSProperties = {
  backgroundColor: darkGreen,
  padding: "24px 40px",
  textAlign: "center" as const,
  borderRadius: "0 0 12px 12px",
}

const divider: React.CSSProperties = {
  borderColor: "rgba(255,255,255,0.1)",
  margin: "0 0 16px",
}

const footerText: React.CSSProperties = {
  color: "rgba(255,255,255,0.5)",
  fontSize: 12,
  margin: "4px 0",
  lineHeight: 1.5,
}

const footerLinks: React.CSSProperties = {
  color: "rgba(255,255,255,0.5)",
  fontSize: 12,
  margin: "8px 0 0",
}

const link: React.CSSProperties = {
  color: "#86efac",
  textDecoration: "underline",
}
