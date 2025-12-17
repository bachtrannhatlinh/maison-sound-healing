'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  { id: 'sound-healing', name: 'Âm Thanh Trị Liệu', duration: '60 phút', price: '400,000đ' },
  { id: 'meditation', name: 'Thiền Định', duration: '60 phút', price: '400,000đ' },
  { id: 'yin-yoga', name: 'Yoga Yin', duration: '75 phút', price: '500,000đ' },
  { id: 'breathwork', name: 'Breathwork', duration: '120 phút', price: '800,000đ' },
];

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setStep(4);
  };

  const selectedService = services.find(s => s.id === formData.service);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/booking-hero.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="text-sm tracking-[0.3em] uppercase mb-4">Đặt Lịch</p>
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Bắt Đầu Hành Trình
          </h1>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      step >= s 
                        ? 'bg-[#8b7355] text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > s ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-[2px] ml-4 ${step > s ? 'bg-[#8b7355]' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white p-8 md:p-12 shadow-lg">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-light text-[#2c3e50] mb-8 text-center">
                  Chọn Dịch Vụ
                </h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`block p-6 border cursor-pointer transition-colors ${
                        formData.service === service.id
                          ? 'border-[#8b7355] bg-[#faf8f5]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium text-[#2c3e50]">{service.name}</h3>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                        <span className="text-[#8b7355] font-medium">{service.price}</span>
                      </div>
                    </label>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="w-full mt-8 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tiếp Tục
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-light text-[#2c3e50] mb-8 text-center">
                  Chọn Ngày & Giờ
                </h2>
                
                {/* Date Picker */}
                <div className="mb-8">
                  <label className="block text-sm text-gray-600 mb-2">Chọn Ngày</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm text-gray-600 mb-4">Chọn Giờ</label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`py-3 border text-sm transition-colors ${
                          formData.time === time
                            ? 'border-[#8b7355] bg-[#8b7355] text-white'
                            : 'border-gray-300 hover:border-[#8b7355]'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 btn-secondary"
                  >
                    Quay Lại
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Tiếp Tục
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-light text-[#2c3e50] mb-8 text-center">
                  Thông Tin Của Bạn
                </h2>

                {/* Booking Summary */}
                <div className="bg-[#faf8f5] p-6 mb-8">
                  <h4 className="text-sm tracking-widest uppercase text-[#8b7355] mb-4">
                    Tóm Tắt Đặt Lịch
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-500">Dịch vụ:</span> {selectedService?.name}</p>
                    <p><span className="text-gray-500">Ngày:</span> {formData.date}</p>
                    <p><span className="text-gray-500">Giờ:</span> {formData.time}</p>
                    <p><span className="text-gray-500">Giá:</span> {selectedService?.price}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Họ và Tên *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Số Điện Thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none"
                      placeholder="Nhập email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Ghi Chú</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:outline-none resize-none"
                      placeholder="Có điều gì chúng tôi cần biết trước?"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 btn-secondary"
                  >
                    Quay Lại
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary"
                  >
                    Xác Nhận Đặt Lịch
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-light text-[#2c3e50] mb-4">
                  Đặt Lịch Thành Công!
                </h2>
                <p className="text-gray-600 mb-8">
                  Cảm ơn bạn đã đặt lịch. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
                </p>
                <div className="bg-[#faf8f5] p-6 mb-8 text-left">
                  <h4 className="text-sm tracking-widest uppercase text-[#8b7355] mb-4">
                    Chi Tiết Đặt Lịch
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-500">Dịch vụ:</span> {selectedService?.name}</p>
                    <p><span className="text-gray-500">Ngày:</span> {formData.date}</p>
                    <p><span className="text-gray-500">Giờ:</span> {formData.time}</p>
                    <p><span className="text-gray-500">Họ tên:</span> {formData.name}</p>
                  </div>
                </div>
                <Link href="/" className="btn-primary">
                  Về Trang Chủ
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
