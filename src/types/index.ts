export interface NavItem {
  label: string
  to: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface OpeningHours {
  days: string
  time: string
}

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  contact: {
    phone: string
    phoneHref: string
    email: string
  }
  address: string[]
  hours: OpeningHours[]
  social: SocialLink[]
}
