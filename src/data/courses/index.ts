import { CourseData } from '@/types/course';
import { basicCourse } from './basic';
import { advancedCourse } from './advanced';
import { extendedCourse } from './extended';
import { introCourse } from './intro';

export const coursesData: Record<string, CourseData> = {
  'khoa-co-ban': basicCourse,
  'khoa-hoc-nang-cao-chuyen-sau': advancedCourse,
  'khoa-hoc-nang-cao-mo-rong': extendedCourse,
  'khoa-hoc-gieo-duyen': introCourse,
};

export const relatedCourses = [
  { slug: 'khoa-co-ban', id: 'basic' },
  { slug: 'khoa-hoc-nang-cao-chuyen-sau', id: 'advanced' },
  { slug: 'khoa-hoc-nang-cao-mo-rong', id: 'extended' },
  { slug: 'khoa-hoc-gieo-duyen', id: 'intro' },
];

export const getCourseBySlug = (slug: string): CourseData | undefined => {
  return coursesData[slug];
};

export const getCourseById = (id: string): CourseData | undefined => {
  return Object.values(coursesData).find((course) => course.id === id);
};

export const getAllCourses = (): CourseData[] => {
  return Object.values(coursesData);
};

export const getOtherCourses = (currentSlug: string, limit = 2) => {
  return relatedCourses.filter((c) => c.slug !== currentSlug).slice(0, limit);
};

export { basicCourse, advancedCourse, extendedCourse, introCourse };
