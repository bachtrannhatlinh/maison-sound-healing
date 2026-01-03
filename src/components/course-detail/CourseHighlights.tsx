interface CourseHighlightsProps {
  title: string;
  items: string[];
}

export function CourseHighlights({ title, items }: CourseHighlightsProps) {
  return (
    <section className="py-16 md:py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#8b7355] mb-4">
            <span className="text-2xl">✅</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#2c3e50]">
              {title}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-[#8b7355]"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8b7355]/10 text-[#8b7355] flex items-center justify-center flex-shrink-0 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
