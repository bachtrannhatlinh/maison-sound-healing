import Link from 'next/link';

interface CourseInfoCardProps {
  includesTitle: string;
  includesItems: string[];
  durationLabel: string;
  duration: string;
  levelLabel: string;
  level: string;
  locationLabel: string;
  location: string;
  feeLabel: string;
  price: string;
  registerText: string;
  infoTitle: string;
}

export function CourseInfoCard({
  includesTitle,
  includesItems,
  durationLabel,
  duration,
  levelLabel,
  level,
  locationLabel,
  location,
  feeLabel,
  price,
  registerText,
  infoTitle,
}: CourseInfoCardProps) {
  return (
    <section className="py-16 md:py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-light text-[#2c3e50] mb-6 pb-4 border-b border-gray-200">
              {includesTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {includesItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <svg
                    className="w-5 h-5 text-[#8b7355] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#8b7355] to-[#6d5a43] text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-xl font-light mb-4">{infoTitle}</h3>
            <div className="border-t border-white/30 my-4"></div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-white/80 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {durationLabel}:
                </span>
                <span className="font-medium">{duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  {levelLabel}:
                </span>
                <span className="font-medium">{level}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {locationLabel}:
                </span>
                <span className="font-medium text-right text-sm">{location}</span>
              </div>
              <div className="pt-4 border-t border-white/30">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{feeLabel}:</span>
                  <span className="text-3xl font-light">{price}</span>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="block w-full text-center bg-white text-[#8b7355] py-4 tracking-widest text-sm uppercase hover:bg-gray-100 transition-colors rounded font-medium"
            >
              {registerText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
