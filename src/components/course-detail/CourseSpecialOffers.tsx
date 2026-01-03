interface CourseSpecialOffersProps {
  title: string;
  items: string[];
}

export function CourseSpecialOffers({ title, items }: CourseSpecialOffersProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-[#2c3e50]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-[#faf8f5] p-5 rounded-lg"
            >
              <div className="w-8 h-8 bg-[#8b7355] text-white flex items-center justify-center flex-shrink-0 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
