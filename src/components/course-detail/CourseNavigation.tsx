import Link from 'next/link';

interface CourseNavigationProps {
  allCoursesText: string;
  nextCourse?: {
    slug: string;
    title: string;
  };
}

export function CourseNavigation({
  allCoursesText,
  nextCourse,
}: CourseNavigationProps) {
  return (
    <section className="py-8 bg-[#faf8f5] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/course"
            className="flex items-center gap-2 text-[#8b7355] hover:text-[#6d5a43] transition-colors group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm tracking-widest uppercase">
              {allCoursesText}
            </span>
          </Link>
          {nextCourse && (
            <Link
              href={`/course/${nextCourse.slug}`}
              className="flex items-center gap-2 text-[#8b7355] hover:text-[#6d5a43] transition-colors group"
            >
              <span className="text-sm tracking-widest uppercase">
                {nextCourse.title}
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
