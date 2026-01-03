import Link from 'next/link';

interface CourseCTAProps {
  title: string;
  description: string;
  gratitudeText: string;
  registerButtonText: string;
  viewAllCoursesText: string;
}

export function CourseCTA({
  title,
  description,
  gratitudeText,
  registerButtonText,
  viewAllCoursesText,
}: CourseCTAProps) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#2c3e50] to-[#1a252f] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light mb-6">{title}</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <p className="text-lg text-gray-300 mb-10">{gratitudeText}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#d4af37] text-white px-10 py-4 tracking-widest text-sm uppercase hover:bg-[#b8962f] transition-colors rounded"
          >
            {registerButtonText}
          </Link>
          <Link
            href="/course"
            className="inline-block border border-white text-white px-10 py-4 tracking-widest text-sm uppercase hover:bg-white hover:text-[#2c3e50] transition-colors rounded"
          >
            {viewAllCoursesText}
          </Link>
        </div>
      </div>
    </section>
  );
}
