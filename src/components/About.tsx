import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="Maison Sound Healing"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#8b7355] -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              Về Chúng Tôi
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-8 leading-tight">
              Kết Hợp Trí Tuệ Cổ Đại<br />
              Với Y Học Hiện Đại
            </h2>
            
            <blockquote className="border-l-2 border-[#8b7355] pl-6 my-8 italic text-xl text-gray-600">
              &ldquo;Tâm hồn luôn biết cách để chữa lành chính nó. Thách thức là 
              làm sao để tĩnh lặng tâm trí.&rdquo;
              <footer className="mt-2 text-sm not-italic text-[#8b7355]">
                — Caroline Myss
              </footer>
            </blockquote>

            <p className="text-gray-600 leading-relaxed mb-6">
              Maison Sound Healing được thành lập với sứ mệnh mang đến những trải 
              nghiệm chữa lành toàn diện, kết hợp giữa y học phương Đông truyền thống 
              và khoa học hiện đại.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Chúng tôi nhận ra rằng trong khi y học phương Tây và tâm lý trị liệu 
              đóng vai trò quan trọng trong việc kiểm soát bệnh tật, những nguyên 
              nhân gốc rễ của triệu chứng thường không được giải quyết triệt để.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-[#8b7355] tracking-widest text-sm uppercase hover:text-[#6d5a43] transition-colors group"
            >
              Tìm Hiểu Thêm
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
