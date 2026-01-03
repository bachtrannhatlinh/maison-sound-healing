interface CourseDiscountsProps {
  title: string;
  earlyTitle: string;
  earlyDescription: string;
  specialTitle: string;
  specialDescription: string;
}

export function CourseDiscounts({
  title,
  earlyTitle,
  earlyDescription,
  specialTitle,
  specialDescription,
}: CourseDiscountsProps) {
  return (
    <section className="py-16 md:py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-light text-[#2c3e50] text-center mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8b7355] to-[#6d5a43] text-white flex items-center justify-center flex-shrink-0 rounded-lg">
              <span className="text-xl font-light">10%</span>
            </div>
            <div>
              <h4 className="font-medium text-[#2c3e50] mb-2">{earlyTitle}</h4>
              <p className="text-gray-600 text-sm">{earlyDescription}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#b8962f] text-white flex items-center justify-center flex-shrink-0 rounded-lg">
              <span className="text-xl font-light">20%</span>
            </div>
            <div>
              <h4 className="font-medium text-[#2c3e50] mb-2">{specialTitle}</h4>
              <p className="text-gray-600 text-sm">{specialDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
