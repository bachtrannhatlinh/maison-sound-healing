'use client';

import { useState } from 'react';

interface Comment {
  id: string;
  name: string;
  email: string;
  website?: string;
  content: string;
  date: string;
}

interface CourseCommentsProps {
  title: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  websitePlaceholder: string;
  commentPlaceholder: string;
  submitText: string;
  saveInfoText: string;
  noCommentsText: string;
  requiredFieldsText: string;
}

export function CourseComments({
  title,
  namePlaceholder,
  emailPlaceholder,
  websitePlaceholder,
  commentPlaceholder,
  submitText,
  saveInfoText,
  noCommentsText,
  requiredFieldsText,
}: CourseCommentsProps) {
  const [comments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    content: '',
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Comment submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-[#2c3e50] mb-8">
          {title}
        </h2>

        {comments.length === 0 ? (
          <p className="text-gray-500 mb-8 italic">{noCommentsText}</p>
        ) : (
          <div className="space-y-6 mb-12">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-[#faf8f5] p-6 border-l-4 border-[#8b7355]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#8b7355] text-white flex items-center justify-center rounded-full font-medium">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-medium text-[#2c3e50]">{comment.name}</p>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{comment.content}</p>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="content" className="sr-only">
              {commentPlaceholder}
            </label>
            <textarea
              id="content"
              name="content"
              rows={6}
              required
              value={formData.content}
              onChange={handleChange}
              placeholder={commentPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] outline-none transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                {namePlaceholder}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={`${namePlaceholder} *`}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                {emailPlaceholder}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={`${emailPlaceholder} *`}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="website" className="sr-only">
                {websitePlaceholder}
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder={websitePlaceholder}
                className="w-full px-4 py-3 border border-gray-300 focus:border-[#8b7355] focus:ring-1 focus:ring-[#8b7355] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="w-4 h-4 text-[#8b7355] border-gray-300 rounded focus:ring-[#8b7355]"
            />
            <label htmlFor="saveInfo" className="text-gray-600 text-sm">
              {saveInfoText}
            </label>
          </div>

          <p className="text-sm text-gray-500">{requiredFieldsText}</p>

          <button
            type="submit"
            className="bg-[#8b7355] text-white px-8 py-3 hover:bg-[#7a6349] transition-colors font-medium"
          >
            {submitText}
          </button>
        </form>
      </div>
    </section>
  );
}
