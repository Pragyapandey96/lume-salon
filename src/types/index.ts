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
  /** True while the business details below are placeholders. Pages show a "sample" marker. */
  detailsAreSample: boolean
  contact: {
    phone: string
    phoneHref: string
    email: string
  }
  whatsapp: {
    /** Number as displayed, e.g. "+00 00000 00000". */
    number: string
    /** Full chat link, e.g. https://wa.me/<digits>?text=<encoded message>. */
    href: string
  }
  address: string[]
  hours: OpeningHours[]
  social: SocialLink[]
}
