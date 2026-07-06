export interface NavItem {
  label: string
  href: string
  id?: string
  icon?: string
  children?: NavItem[]
}

export const navigation = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Products", href: "/products", id: "products" },
  { label: "Contact", href: "/contact", id: "contact" },
] as const satisfies readonly NavItem[]
