import Image from 'next/image';
import Link from 'next/link';
import { coursesData } from '@/data/courses';

interface RelatedCourseInfo {
  slug: string;
  id: string;
  title: string;
  subtitle: string;
  price: string;
}

interface CourseRelatedProps {
  sectionTitle: string;
  courses: RelatedCourseInfo[];
  viewDetailsText: string;
}

export function CourseRelated({
  sectionTitle,
  courses,
  viewDetailsText,
}: CourseRelatedProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-light text-[#2c3e50] text-center mb-10">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((relatedCourse) => (
            <Link
              key={relatedCourse.slug}
              href={`/course/${relatedCourse.slug}`}
              className="group bg-[#faf8f5] overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={coursesData[relatedCourse.slug]?.image || '/images/course-default.jpg'}
                  alt={relatedCourse.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light text-[#2c3e50] mb-2 group-hover:text-[#8b7355] transition-colors">
                  {relatedCourse.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {relatedCourse.subtitle}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#8b7355] font-medium">
                    {relatedCourse.price}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-[#8b7355] transition-colors flex items-center gap-1">
                    {viewDetailsText}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
