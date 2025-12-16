export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  subtitle: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
  image: SanityImage;
  order: number;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  education: string[];
  image: SanityImage;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  order: number;
}

export interface Testimonial {
  _id: string;
  content: string;
  author: string;
  role: string;
  image: SanityImage;
}

export interface SiteSettings {
  title: string;
  description: string;
  logo: SanityImage;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface AboutPage {
  title: string;
  heroImage: SanityImage;
  story: string;
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
  philosophy: {
    quote: string;
    author: string;
  };
}
