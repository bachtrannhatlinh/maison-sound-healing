import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Queries
export const queries = {
  // Get all services
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    subtitle,
    description,
    benefits,
    duration,
    price,
    image
  }`,

  // Get single service
  service: (slug: string) => `*[_type == "service" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    subtitle,
    description,
    benefits,
    duration,
    price,
    image
  }`,

  // Get all team members
  team: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    education,
    image,
    socialLinks
  }`,

  // Get all testimonials
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    content,
    author,
    role,
    image
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    contactInfo,
    socialLinks
  }`,

  // Get about page content
  aboutPage: `*[_type == "aboutPage"][0] {
    title,
    heroImage,
    story,
    values,
    philosophy
  }`,
};
