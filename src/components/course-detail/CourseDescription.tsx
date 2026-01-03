interface CourseDescriptionProps {
  description: string;
  additionalText?: string;
}

export function CourseDescription({
  description,
  additionalText,
}: CourseDescriptionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="prose prose-lg max-w-none text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
          {additionalText && (
            <p className="text-xl md:text-2xl text-[#8b7355] font-medium mt-6 italic">
              {additionalText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
