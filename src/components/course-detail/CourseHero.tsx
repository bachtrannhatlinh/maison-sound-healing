import Image from 'next/image';
import { CourseData } from '@/types/course';

interface CourseHeroProps {
  course: CourseData;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  locationText: string;
}

export function CourseHero({
  course,
  title,
  subtitle,
  duration,
  price,
  locationText,
}: CourseHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-center bg-no-repeat bg-cover">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: course.bannerImage
            ? `url('${course.bannerImage}')`
            : undefined,
        }}
      >
        {!course.bannerImage && (
          <Image
            src={course.image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70"></div>
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4 text-[#FAE100] font-sans font-extrabold capitalize">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
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
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
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
            <span>{locationText}</span>
          </div>
          <span className="text-2xl md:text-3xl font-light text-[#d4af37]">
            {price}
          </span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
