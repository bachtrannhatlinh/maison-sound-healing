export interface CourseData {
  id: string;
  slug: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  image: string;
  heroImage: string;
  bannerImage?: string;
  hasSpecialOffers?: boolean;
}

export interface CourseConfig {
  courses: Record<string, CourseData>;
  relatedCourses: { slug: string; id: string }[];
}
