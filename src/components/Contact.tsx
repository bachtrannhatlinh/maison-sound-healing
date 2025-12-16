import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-sm tracking-[0.3em] text-[#8b7355] uppercase mb-4">
              Liên Hệ
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-[#2c3e50] mb-8">
              Hãy Bắt Đầu<br />
              Hành Trình Cùng Chúng Tôi
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho bạn. Hãy liên hệ 
              với chúng tôi để bắt đầu hành trình chữa lành của riêng bạn.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">Địa Chỉ</h4>
                  <p className="text-gray-600">123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">Điện Thoại</h4>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">Email</h4>
                  <p className="text-gray-600">info@maisonsoundhealing.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e50] mb-1">Giờ Làm Việc</h4>
                  <p className="text-gray-600">Thứ 2 - Thứ 7: 9:00 - 20:00</p>
                  <p className="text-gray-600">Chủ Nhật: 9:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-light text-[#2c3e50] mb-8">
              Gửi Tin Nhắn
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors"
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm text-gray-600 mb-2">
                  Dịch Vụ Quan Tâm
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors bg-white"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="sound-healing">Âm Thanh Trị Liệu</option>
                  <option value="meditation">Thiền Định</option>
                  <option value="yoga">Yoga Yin</option>
                  <option value="breathwork">Breathwork</option>
                  <option value="chanting">Chanting Circle</option>
                  <option value="retreat">Retreat & Workshop</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Tin Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none transition-colors resize-none"
                  placeholder="Nhập tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
