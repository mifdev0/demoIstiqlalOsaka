import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Article {
  id: string;
  slug: string;
  category: 'ibadah' | 'sosial' | 'pendidikan' | 'budaya';
  featured_image_url: string;
  title_id: string;
  title_en: string;
  title_ja: string;
  title_ar: string;
  content_id: string;
  content_en: string;
  content_ja: string;
  content_ar: string;
  excerpt_id: string;
  excerpt_en: string;
  excerpt_ja: string;
  excerpt_ar: string;
  author_name: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
}

export interface DonationProgram {
  id: string;
  slug: string;
  title_id: string;
  title_en: string;
  title_ja: string;
  title_ar: string;
  description_id: string;
  description_en: string;
  description_ja: string;
  description_ar: string;
  target_amount_jpy: number;
  current_amount_jpy: number;
  target_amount_idr: number;
  current_amount_idr: number;
  banner_url: string;
  is_active: boolean;
  start_date: string;
  end_date: string;
}

export interface Donation {
  id: string;
  program_id: string;
  donor_name: string;
  donor_email: string;
  donor_phone: string;
  amount: number;
  currency: 'IDR' | 'JPY';
  payment_method: string;
  payment_status: 'pending' | 'paid' | 'verified';
  proof_of_transfer_url?: string;
  transaction_ref: string;
  is_anonymous: boolean;
  message?: string;
  created_at: string;
}

export interface TransparencyReport {
  id: string;
  period: string;
  title_id: string;
  title_en: string;
  title_ja: string;
  title_ar: string;
  income_jpy: number;
  income_idr: number;
  expense_jpy: number;
  expense_idr: number;
  file_pdf_url: string;
}

// Mock fallback data with full multilingual support for ID, EN, JA, AR
export const mockPrograms: DonationProgram[] = [
  {
    id: 'prog-1',
    slug: 'operasional-masjid-2026',
    title_id: 'Wakaf Operasional & Pemeliharaan Masjid Istiqlal Osaka',
    title_en: 'Operational & Maintenance Waqf for Masjid Istiqlal Osaka',
    title_ja: '大阪イスティクラルモスク維持・運営維持寄付基金',
    title_ar: 'وقف التشغيل والصيانة لمسجد استقلال أوساكا',
    description_id: 'Dukungan rutin untuk kebersihan, listrik, pemanas pendingin ruangan, dan utilitas rumah ibadah.',
    description_en: 'Routine support for sanitation, power, HVAC heating/cooling, and utilities of the mosque.',
    description_ja: 'モスクの光熱費、清掃費、エアコン空調費などの日常的な運営資金のご支援。',
    description_ar: 'الدعم الدوري للنظافة والكهرباء والتدفئة والتكييف والمرافق العامة للمسجد.',
    target_amount_jpy: 5000000,
    current_amount_jpy: 3420000,
    target_amount_idr: 550000000,
    current_amount_idr: 376000000,
    banner_url: 'https://images.unsplash.com/photo-1590076175571-4b5459efb099?auto=format&fit=crop&w=1200&q=80',
    is_active: true,
    start_date: '2026-01-01',
    end_date: '2026-12-31',
  },
  {
    id: 'prog-2',
    slug: 'ramadan-iftar-1447h',
    title_id: 'Paket Iftar & Sahur Bersama Ramadan 1447 H / 2026',
    title_en: 'Ramadan 1447 H Iftar & Suhoor Sharing Program',
    title_ja: 'ラマダン1447H 共同イフタール（断食明け食事）支援',
    title_ar: 'مشروع إفطار وسحور الصائم رمضان 1447 هـ / 2026',
    description_id: 'Menyediakan 300+ porsi makanan berbuka puasa gratis setiap hari untuk mahasiswa, pekerja, dan jamaah.',
    description_en: 'Providing 300+ free daily breaking-fast meals for students, workers, and community members.',
    description_ja: '留学生や地域住民のために、毎日300食以上の無料イフタール（夕食）を提供します。',
    description_ar: 'توفير أكثر من 300 وجبة إفطار يومية مجانية للطلاب والعمال والزوار.',
    target_amount_jpy: 2000000,
    current_amount_jpy: 1680000,
    target_amount_idr: 220000000,
    current_amount_idr: 184800000,
    banner_url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    is_active: true,
    start_date: '2026-02-01',
    end_date: '2026-03-30',
  },
];

export const mockArticles: Article[] = [
  {
    id: 'art-1',
    slug: 'kajian-rutin-diaspora-osaka',
    category: 'pendidikan',
    featured_image_url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
    title_id: 'Kajian Ukhuwah & Buka Puasa Bersama Komunitas Muslim Osaka',
    title_en: 'Ukhuwah Islamic Gathering & Community Iftar in Osaka',
    title_ja: '大阪ムスリム交流勉強会＆ラマダン交流会',
    title_ar: 'ملتقى الأخوة الإسلامية والإفطار الجماعي في أوساكا',
    excerpt_id: 'Acara bulanan silaturahmi jamaah MIO menghadirkan ustaz tamu dan hidangan khas nusantara.',
    excerpt_en: 'Monthly MIO community gathering with guest scholars and authentic Indonesian cuisine.',
    excerpt_ja: '毎月開催される大阪モスクの交流会。ハラールフードと勉強会を提供します。',
    excerpt_ar: 'لقاء شهري لرواد المسجد مع أساتذة وعلماء ووجبات حلال متنوعة.',
    content_id: 'Alhamdulillah, kegiatan kajian bulanan Masjid Istiqlal Osaka kembali berlangsung hangat dengan dihadiri lebih dari 200 jamaah diaspora dan warga setempat...',
    content_en: 'Alhamdulillah, the monthly study group at Masjid Istiqlal Osaka brought together over 200 attendees...',
    content_ja: 'おかげさまで、今月の大阪イスティクラルモスク交流会には200名以上の参加者が集まりました...',
    content_ar: 'الحمد لله، شهد الملتقى الشهري في مسجد استقلال أوساكا حضور أكثر من 200 شخص من الجالية والمسلمين المحليين...',
    author_name: 'Ustadz Ahmad Farisi',
    is_published: true,
    published_at: '2026-07-20',
    created_at: '2026-07-20',
  },
  {
    id: 'art-2',
    slug: 'layanan-konsul-syariah-halal-japan',
    category: 'ibadah',
    featured_image_url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
    title_id: 'Panduan Layanan Bimbingan Muallaf & Edukasi Halal di Kansai',
    title_en: 'Revert Guidance & Halal Education Services in Kansai',
    title_ja: '関西エリアにおけるムスリム生活＆ハラールガイド',
    title_ar: 'خدمات إرشاد المسلمين الجدد والاستشارات الحلال في كانساي',
    excerpt_id: 'MIO menyediakan konsultasi keislaman, sertifikasi syahadat, serta konsultasi gaya hidup halal.',
    excerpt_en: 'MIO provides Islamic counseling, Shahada certificates, and halal lifestyle consultation.',
    excerpt_ja: '改宗相談、シャハーダ証明書の発行、日本でのハラール生活アドバイスを行っています。',
    excerpt_ar: 'يقدم المسجد استشارات إسلامية وشهادات إشهار الإسلام واستشارات الحياة الحلال في اليابان.',
    content_id: 'Bagi masyarakat Jepang atau ekspatriat yang ingin mempelajari Islam secara mendalam...',
    content_en: 'For Japanese citizens or expatriates wishing to learn more about Islam...',
    content_ja: 'イスラム教について学びたい日本の方や在日外国人の方に向けて...',
    content_ar: 'يقدم المركز خدمات متكاملة لكل من يرغب في التعرف على الإسلام في اليابان...',
    author_name: 'Tim Syariah MIO',
    is_published: true,
    published_at: '2026-07-15',
    created_at: '2026-07-15',
  },
  {
    id: 'art-3',
    slug: 'bantuan-kemanusiaan-bencana-jepang',
    category: 'sosial',
    featured_image_url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    title_id: 'Aksi Tanggap Disaster Response & Dapur Umum MIO di Osaka',
    title_en: 'Disaster Response & Community Soup Kitchen by MIO Osaka',
    title_ja: '大阪イスティクラルモスクによる災害支援・フードバンク活動',
    title_ar: 'حملات الاستجابة للكوارث والإغاثة الإنسانية في أوساكا',
    excerpt_id: 'Bentuk kepedulian sosial muslim Indonesia untuk warga terdampak bencana alam di Jepang.',
    excerpt_en: 'Demonstrating Indonesian Muslim solidarity for natural disaster victims in Japan.',
    excerpt_ja: '日本の自然災害被災者への緊急支援とフードバンク運動。',
    excerpt_ar: 'مبادرات التضامن الإغاثي لمساعدة المتضررين من الكوارث الطبيعية في اليابان.',
    content_id: 'Tim relawan MIO siap siaga menyalurkan bantuan logistik makanan halal dan tempat perlindungan sementara...',
    content_en: 'MIO volunteer team stands ready to distribute halal food packages and temporary shelter...',
    content_ja: 'MIOボランティアチームは、ハラール食料支援や避難所支援を迅速に行っています...',
    content_ar: 'يقوم فريق المتطوعين بتوزيع المساعدات الإغاثية والوجبات الغذائية...',
    author_name: 'Tim Relawan MIO',
    is_published: true,
    published_at: '2026-07-02',
    created_at: '2026-07-02',
  },
];
