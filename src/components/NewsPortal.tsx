'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, translations } from '@/lib/i18n';
import { mockArticles, Article } from '@/lib/supabase';

interface NewsPortalProps {
  lang: Language;
}

export const NewsPortal: React.FC<NewsPortalProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="news" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-[#004d2c]/15 pb-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#d97706] uppercase tracking-[0.25em] font-inter block">
            {t.news.subtitle}
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-[#004d2c]">
            {t.news.title}
          </h2>
        </div>

        <a
          href="#news"
          className="text-[#004d2c] font-montserrat font-bold text-xs uppercase tracking-wider hover:text-[#d97706] transition-all flex items-center gap-1 w-fit group"
        >
          <span>{t.news.categories.all}</span>
          <ArrowRight className="w-4 h-4 text-[#d97706] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Editorial Asymmetric Arch Crop Card Grid with Centered Top Category Badge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {mockArticles.map((article) => {
          const title =
            lang === 'ja'
              ? article.title_ja
              : lang === 'en'
              ? article.title_en
              : lang === 'ar'
              ? article.title_ar
              : article.title_id;

          const excerpt =
            lang === 'ja'
              ? article.excerpt_ja
              : lang === 'en'
              ? article.excerpt_en
              : lang === 'ar'
              ? article.excerpt_ar
              : article.excerpt_id;

          const categoryLabel =
            t.news.categories[article.category as keyof typeof t.news.categories] || article.category;

          return (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group cursor-pointer flex flex-col justify-between hover-lift p-2 rounded-t-[104px] rounded-b-2xl transition-all"
            >
              <div>
                {/* Mihrab Arch Shape Photo Crop Frame with Centered Top Category Badge */}
                <div className="relative overflow-hidden rounded-t-[100px] rounded-b-2xl aspect-[4/5] mb-6 shadow-md border-2 border-[#004d2c]/10 group-hover:border-[#004d2c] transition-all bg-[#003820]">
                  <img
                    src={article.featured_image_url}
                    alt={title}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/masjid-istiqlal-osaka-hero-new.webp';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Centered Top Category Badge (Prevents text clipping) */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 bg-[#004d2c]/90 backdrop-blur-md text-white text-[11px] font-bold rounded-full uppercase tracking-wider font-inter shadow-md border border-white/20 whitespace-nowrap block">
                      {categoryLabel}
                    </span>
                  </div>

                  {/* Subtle Japanese Hanko Kanji Watermark in Corner */}
                  <div className="absolute bottom-3 right-3 text-white/40 font-bold text-xs font-montserrat tracking-widest pointer-events-none">
                    お知らせ
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-xl text-[#111827] group-hover:text-[#004d2c] transition-colors leading-snug line-clamp-2">
                  {title}
                </h3>

                <p className="mt-3 text-[#111827]/70 text-sm leading-relaxed line-clamp-2 font-inter">
                  {excerpt}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs font-bold text-[#d97706] font-montserrat uppercase tracking-wider group-hover:translate-x-1.5 transition-transform">
                <span>{t.news.readMore}</span>
                <ArrowRight className="w-4 h-4 text-[#d97706]" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-[#faf8f5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#004d2c]/20 shadow-2xl relative max-h-[85vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 text-[#111827] hover:text-[#004d2c]"
            >
              ✕
            </button>

            <span className="inline-block bg-[#004d2c] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase">
              {t.news.categories[activeArticle.category as keyof typeof t.news.categories] || activeArticle.category}
            </span>

            <h3 className="text-2xl font-bold text-[#111827] font-montserrat">
              {lang === 'ja'
                ? activeArticle.title_ja
                : lang === 'en'
                ? activeArticle.title_en
                : lang === 'ar'
                ? activeArticle.title_ar
                : activeArticle.title_id}
            </h3>

            <div className="text-xs text-[#111827]/60 font-semibold">
              <span>{activeArticle.author_name}</span> • <span>{activeArticle.published_at}</span>
            </div>

            <img
              src={activeArticle.featured_image_url}
              alt="Article image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/masjid-istiqlal-osaka-hero-new.webp';
              }}
              className="w-full h-64 object-cover rounded-2xl"
            />

            <p className="text-sm text-[#111827] leading-relaxed font-inter pt-2">
              {lang === 'ja'
                ? activeArticle.content_ja
                : lang === 'en'
                ? activeArticle.content_en
                : lang === 'ar'
                ? activeArticle.content_ar
                : activeArticle.content_id}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
