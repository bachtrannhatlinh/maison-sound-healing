import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { coursesData, getOtherCourses, relatedCourses } from '@/data/courses';
import {
  CourseHero,
  CourseDescription,
  CourseHighlights,
  CourseWhatYouLearn,
  CourseInfoCard,
  CourseSpecialOffers,
  CourseDiscounts,
  CourseRelated,
  CourseCTA,
  CourseNavigation,
  CourseComments,
} from '@/components/course-detail';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  const titles: Record<string, Record<string, string>> = {
    vi: {
      basic: 'Khoá Cơ Bản | Maison Healing',
      advanced: 'Khoá Học Nâng Cao - Chuyên Sâu | Maison Healing',
      extended: 'Khoá Học Nâng Cao - Mở Rộng | Maison Healing',
      intro: 'Khoá Học Gieo Duyên | Maison Healing',
    },
    en: {
      basic: 'Basic Course | Maison Healing',
      advanced: 'Advanced Course - In-Depth | Maison Healing',
      extended: 'Advanced Course - Extended | Maison Healing',
      intro: 'Introduction Course | Maison Healing',
    },
  };

  return {
    title: titles[locale]?.[course.id] || 'Course | Maison Healing',
  };
}

export async function generateStaticParams() {
  const locales = ['vi', 'en'];
  const slugs = Object.keys(coursesData);

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export default async function CourseDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('course');

  const course = coursesData[slug];

  if (!course) {
    notFound();
  }

  const highlightsItems = t.raw(`items.${course.id}.highlights.items`) as string[];
  const suitableItems = t.raw(`items.${course.id}.suitable.items`) as string[];
  const theoryItems = t.raw(`items.${course.id}.theory.items`) as string[];
  const practiceItems = t.raw(`items.${course.id}.practice.items`) as string[];
  const includesItems = t.raw(`items.${course.id}.includes.items`) as string[];

  let specialOffersItems: string[] = [];
  if (course.hasSpecialOffers) {
    try {
      const raw = t.raw(`items.${course.id}.specialOffers.items`);
      if (Array.isArray(raw)) {
        specialOffersItems = raw as string[];
      }
    } catch {
      specialOffersItems = [];
    }
  }

  const otherCourses = getOtherCourses(slug, 2);
  const relatedCoursesInfo = otherCourses.map((c) => ({
    slug: c.slug,
    id: c.id,
    title: t(`items.${c.id}.title`),
    subtitle: t(`items.${c.id}.subtitle`),
    price: t(`items.${c.id}.price`),
  }));

  const nextCourse = relatedCourses.find((c) => c.slug !== slug);

  return (
    <>
      <CourseHero
        course={course}
        title={t(`items.${course.id}.title`)}
        subtitle={t(`items.${course.id}.subtitle`)}
        duration={t(`items.${course.id}.duration`)}
        price={t(`items.${course.id}.price`)}
        locationText={locale === 'vi' ? 'Maison Healing - Đà Nẵng' : 'Maison Healing - Da Nang'}
      />

      <CourseDescription
        description={t(`items.${course.id}.description`)}
        additionalText={
          course.id === 'basic'
            ? locale === 'vi'
              ? 'Bước đầu tiên để bạn làm quen với phương pháp này, chúng ta sẽ cùng nhau đến với khoá Cơ bản.'
              : "The first step to get familiar with this method, let's start with the Basic course together."
            : undefined
        }
      />

      <CourseHighlights
        title={t(`items.${course.id}.highlights.title`)}
        items={highlightsItems}
      />

      <CourseWhatYouLearn
        course={course}
        sectionTitle={
          locale === 'vi'
            ? 'Bạn sẽ học gì trong khoá cơ bản?'
            : 'What will you learn in the basic course?'
        }
        sectionSubtitle={
          locale === 'vi'
            ? 'Nội dung khoá học Ứng dụng chuông xoay cơ bản sẽ bao gồm 2 phần:'
            : 'The basic singing bowl application course content includes 2 parts:'
        }
        theoryTitle={t(`items.${course.id}.theory.title`)}
        theoryItems={theoryItems}
        practiceTitle={t(`items.${course.id}.practice.title`)}
        practiceItems={practiceItems}
        suitableTitle={t(`items.${course.id}.suitable.title`)}
        suitableItems={suitableItems}
        courseTitle={t(`items.${course.id}.title`)}
      />

      <CourseInfoCard
        includesTitle={t(`items.${course.id}.includes.title`)}
        includesItems={includesItems}
        durationLabel={t('duration')}
        duration={t(`items.${course.id}.duration`)}
        levelLabel={t('level')}
        level={t(`levels.${course.level}`)}
        locationLabel={locale === 'vi' ? 'Địa điểm' : 'Location'}
        location="Đà Nẵng"
        feeLabel={locale === 'vi' ? 'Học phí' : 'Fee'}
        price={t(`items.${course.id}.price`)}
        registerText={t('register')}
        infoTitle={locale === 'vi' ? 'Thông tin khoá học' : 'Course Information'}
      />

      <CourseSpecialOffers
        title={
          locale === 'vi'
            ? 'Chúng tôi luôn dành những yêu thương đến những bạn'
            : 'We always show love to'
        }
        items={specialOffersItems}
      />

      <CourseDiscounts
        title={t('discounts.title')}
        earlyTitle={locale === 'vi' ? 'Đăng ký sớm' : 'Early Registration'}
        earlyDescription={t('discounts.early')}
        specialTitle={locale === 'vi' ? 'Ưu đãi đặc biệt' : 'Special Offer'}
        specialDescription={t('discounts.special')}
      />

      <CourseRelated
        sectionTitle={locale === 'vi' ? 'Các Khoá Học Khác' : 'Other Courses'}
        courses={relatedCoursesInfo}
        viewDetailsText={locale === 'vi' ? 'Xem chi tiết' : 'View details'}
      />

      <CourseCTA
        title={t('cta.title')}
        description={t('cta.description')}
        gratitudeText={
          locale === 'vi'
            ? 'Xin biết ơn và gởi niệm lành đến bạn.'
            : 'We are grateful and send you our best wishes.'
        }
        registerButtonText={t('cta.button')}
        viewAllCoursesText={locale === 'vi' ? 'Xem tất cả khoá học' : 'View All Courses'}
      />

      <CourseComments
        title={locale === 'vi' ? 'Để lại một bình luận' : 'Leave a Comment'}
        namePlaceholder={locale === 'vi' ? 'Tên' : 'Name'}
        emailPlaceholder="Email"
        websitePlaceholder={locale === 'vi' ? 'Trang web' : 'Website'}
        commentPlaceholder={locale === 'vi' ? 'Bình luận của bạn...' : 'Your comment...'}
        submitText={locale === 'vi' ? 'Gửi bình luận' : 'Submit Comment'}
        saveInfoText={
          locale === 'vi'
            ? 'Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.'
            : 'Save my name, email, and website in this browser for the next time I comment.'
        }
        noCommentsText={
          locale === 'vi'
            ? 'Chưa có bình luận nào. Hãy là người đầu tiên bình luận!'
            : 'No comments yet. Be the first to comment!'
        }
        requiredFieldsText={
          locale === 'vi'
            ? 'Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *'
            : 'Your email address will not be published. Required fields are marked *'
        }
      />

      <CourseNavigation
        allCoursesText={locale === 'vi' ? 'Tất cả khoá học' : 'All Courses'}
        nextCourse={
          nextCourse
            ? {
                slug: nextCourse.slug,
                title: t(`items.${nextCourse.id}.title`),
              }
            : undefined
        }
      />
    </>
  );
}
