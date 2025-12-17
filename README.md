# Maison Healing

Website cho trung tâm chữa lành toàn diện, kết hợp trí tuệ cổ đại với y học hiện đại.

## 🌟 Tính năng

- **Next.js 15** - React framework với App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Sanity CMS** - Headless CMS để quản lý nội dung
- **TypeScript** - Type-safe development
- **Responsive Design** - Tối ưu cho mọi thiết bị
- **SEO Optimized** - Meta tags và structured data

## 📁 Cấu trúc thư mục

```
maison-sound-healing/
├── public/
│   └── images/          # Hình ảnh tĩnh
├── sanity/
│   ├── schemas/         # Sanity schema definitions
│   └── sanity.config.ts # Sanity configuration
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── booking/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── team/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/      # React components
│   ├── lib/             # Utility functions & Sanity client
│   └── types/           # TypeScript type definitions
└── package.json
```

## 🚀 Bắt đầu

### Yêu cầu

- Node.js 18+
- npm hoặc yarn

### Cài đặt

```bash
# Clone repository
git clone https://github.com/bachtrannhatlinh/maison-sound-healing.git
cd maison-sound-healing

# Cài đặt dependencies
npm install

# Tạo file .env.local từ example
cp .env.local.example .env.local

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

### Cấu hình Sanity CMS

1. Tạo project mới tại [Sanity.io](https://www.sanity.io/)
2. Cập nhật `NEXT_PUBLIC_SANITY_PROJECT_ID` trong `.env.local`
3. Chạy Sanity Studio:

```bash
cd sanity
npx sanity dev
```

## 📸 Hình ảnh cần thêm

Thêm các hình ảnh sau vào `public/images/`:

| File | Kích thước | Mô tả |
|------|------------|-------|
| `hero-bg.jpg` | 1920x1080 | Hero background |
| `about-image.jpg` | 800x1000 | About section |
| `about-hero.jpg` | 1920x800 | About page hero |
| `services-hero.jpg` | 1920x800 | Services page hero |
| `team-hero.jpg` | 1920x800 | Team page hero |
| `contact-hero.jpg` | 1920x800 | Contact page hero |
| `booking-hero.jpg` | 1920x800 | Booking page hero |
| `service-*.jpg` | 600x400 | Service images |
| `team-*.jpg` | 400x400 | Team member photos |
| `testimonial-*.jpg` | 64x64 | Testimonial avatars |

## 🎨 Màu sắc

| Màu | Hex | Sử dụng |
|-----|-----|---------|
| Primary | `#2c3e50` | Tiêu đề, footer |
| Secondary | `#8b7355` | Accent, buttons |
| Gold | `#d4af37` | Highlights |
| Background | `#faf8f5` | Nền chính |
| Light | `#f5f1eb` | Nền phụ |

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔗 Các trang

- `/` - Trang chủ
- `/about` - Giới thiệu
- `/services` - Dịch vụ
- `/team` - Đội ngũ
- `/contact` - Liên hệ
- `/booking` - Đặt lịch

## 📄 License

MIT License
