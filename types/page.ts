export interface Page {
  id: string;
  title: string;
  slug: string;
  hero: {
    heading: string;
    subheading?: string;
    image?: {
      url: string;
      alt: string;
    };
    ctaText?: string;
    ctaLink?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  supportSections: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
} 