import Image from 'next/image';
import { CourseData } from '@/types/course';

interface CourseWhatYouLearnProps {
  course: CourseData;
  sectionTitle: string;
  sectionSubtitle: string;
  theoryTitle: string;
  theoryItems: string[];
  practiceTitle: string;
  practiceItems: string[];
  suitableTitle: string;
  suitableItems: string[];
  courseTitle: string;
}

export function CourseWhatYouLearn({
  course,
  sectionTitle,
  sectionSubtitle,
  theoryTitle,
  theoryItems,
  practiceTitle,
  practiceItems,
  suitableTitle,
  suitableItems,
  courseTitle,
}: CourseWhatYouLearnProps) {
  return (
    <>
      <section className="py-16 md:py-20 bg-[#2c3e50] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">✅</span>
              <h2 className="text-3xl md:text-4xl font-light">{sectionTitle}</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">{sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light">{theoryTitle}</h3>
              </div>
              <ul className="space-y-3">
                {theoryItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center flex-shrink-0 rounded text-sm">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-light">{practiceTitle}</h3>
              </div>
              <ul className="space-y-3">
                {practiceItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#8b7355]/30 text-white flex items-center justify-center flex-shrink-0 rounded text-sm">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 text-[#8b7355] mb-4">
                <span className="text-2xl">✅</span>
                <h2 className="text-3xl md:text-4xl font-light text-[#2c3e50]">
                  {suitableTitle}
                </h2>
              </div>
              <ul className="space-y-4 mt-8">
                {suitableItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#8b7355] text-white flex items-center justify-center flex-shrink-0 rounded-full text-sm">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={course.image}
                alt={courseTitle}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
