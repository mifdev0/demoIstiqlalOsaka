export type Language = 'id' | 'en' | 'ja' | 'ar';

export interface Translation {
  nav: {
    home: string;
    news: string;
    donation: string;
    schedule: string;
    transparency: string;
    videos: string;
    admin: string;
    donateNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaDonation: string;
    ctaNews: string;
    location: string;
  };
  prayer: {
    title: string;
    nextPrayer: string;
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
  donation: {
    title: string;
    subtitle: string;
    target: string;
    collected: string;
    remainingDays: string;
    selectAmount: string;
    customAmount: string;
    currency: string;
    paymentMethod: string;
    transferJP: string;
    transferID: string;
    confirmTransfer: string;
    submitDonation: string;
    anonymous: string;
    donorName: string;
    donorEmail: string;
    uploadProof: string;
    activeProgramBadge: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
    categories: {
      all: string;
      ibadah: string;
      sosial: string;
      pendidikan: string;
      budaya: string;
    };
  };
  videos: {
    badge: string;
    title: string;
    subtitle: string;
    video1Title: string;
    video1Desc: string;
    video2Title: string;
    video2Desc: string;
    video3Title: string;
    video3Desc: string;
  };
  visitors: {
    badge: string;
    title: string;
    description: string;
    hoursTitle: string;
    hoursDesc: string;
    dressTitle: string;
    dressDesc: string;
    ctaGuide: string;
    mapBadge: string;
    easyAccess: string;
    openMaps: string;
  };
  transparency: {
    title: string;
    subtitle: string;
    income: string;
    expense: string;
    downloadReport: string;
    verified: string;
    accumulatedBalance: string;
    balanceDesc: string;
    downloadPdf: string;
    monthlyDetails: string;
    totalIncomeDesc: string;
    totalExpenseDesc: string;
    netSurplus: string;
    trendTitle: string;
    unitYen: string;
    verifiedBy: string;
    bankProofCopy: string;
  };
  admin: {
    badge: string;
    title: string;
    subtitle: string;
    tabNews: string;
    tabDonation: string;
    pubNews: string;
    pubDonation: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    address: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  id: {
    nav: {
      home: 'Beranda',
      schedule: 'Shalat',
      news: 'Berita',
      donation: 'Donasi',
      transparency: 'Keuangan',
      videos: 'Edukasi',
      admin: 'Admin',
      donateNow: 'Donasi Sekarang',
    },
    hero: {
      badge: '大阪イスラミックセンター • Masjid Istiqlal Osaka',
      title: 'Pusat Peradaban & Silaturahmi Muslim di Osaka',
      subtitle: 'Mempererat ukhuwah Islamiyah, memfasilitasi ibadah diaspora Indonesia dan komunitas muslim lokal di Kansai, Jepang.',
      ctaDonation: 'Donasi Masjid & Operasional',
      ctaNews: 'Baca Berita Terbaru',
      location: 'Osaka-shi, Nishinari-ku, Jepang',
    },
    prayer: {
      title: 'Jadwal Shalat Osaka Hari Ini',
      nextPrayer: 'Waktu Shalat Berikutnya',
      fajr: 'Subuh',
      dhuhr: 'Dzuhur',
      asr: 'Ashar',
      maghrib: 'Maghrib',
      isha: 'Isya',
    },
    donation: {
      title: 'Portal Donasi Satu Pintu',
      subtitle: 'Dukung operasional, pemeliharaan gedung, dan program sosial dakwah Masjid Istiqlal Osaka secara transparan.',
      target: 'Target Dana',
      collected: 'Terkumpul',
      remainingDays: 'Sisa Hari',
      selectAmount: 'Pilih Nominal Donasi',
      customAmount: 'Nominal Lainnya',
      currency: 'Mata Uang',
      paymentMethod: 'Metode Pembayaran',
      transferJP: 'Rekening Bank Jepang (Yucho / MUFG)',
      transferID: 'Bank Indonesia / QRIS / Midtrans',
      confirmTransfer: 'Konfirmasi Upload Bukti Transfer',
      submitDonation: 'Lanjutkan Donasi',
      anonymous: 'Donasi sebagai Hamba Allah (Anonim)',
      donorName: 'Nama Lengkap',
      donorEmail: 'Email / WhatsApp',
      uploadProof: 'Upload Struk / Bukti Transfer',
      activeProgramBadge: 'Program Infaq Aktif',
    },
    news: {
      title: 'Kabar & Kegiatan Masjid',
      subtitle: 'Informasi seputar ibadah, kegiatan diaspora, kelas bahasa, dan program sosial budaya MIO.',
      readMore: 'Baca Selengkapnya',
      categories: {
        all: 'Semua Artikel',
        ibadah: 'Ibadah & Ramadan',
        sosial: 'Kegiatan Sosial',
        pendidikan: 'Kajian & Pendidikan',
        budaya: 'Kebudayaan & Diaspora',
      },
    },
    videos: {
      badge: 'Media Pembelajaran & Dakwah',
      title: 'Kajian & Edukasi Keislaman',
      subtitle: 'Dokumentasi kajian ilmu, bimbingan ibadah, dan panduan dakwah diaspora muslim di Jepang.',
      video1Title: 'Langkah Awal Memahami Keislaman & Bimbingan Ibadah',
      video1Desc: 'Sesi pengenalan dasar Islam dan panduan praktis ibadah sehari-hari di perantauan.',
      video2Title: 'Kajian Ukhuwah & Dakwah Diaspora di Osaka',
      video2Desc: 'Ceramah tausiyah penguat iman dan pentingnya menjaga ukhuwah Islamiyah di Jepang.',
      video3Title: 'Panduan Kehidupan Halal & Adab Muslim di Jepang',
      video3Desc: 'Edukasi praktis seputar gaya hidup halal, toleransi, dan integrasi sosial di Kansai.',
    },
    visitors: {
      badge: 'Terbuka Untuk Umum',
      title: 'Bisakah Saya Berkunjung?',
      description: 'Ya! Kami menyambut hangat pengunjung dari semua latar belakang untuk merasakan kedamaian Masjid Istiqlal Osaka dan jembatan silaturahmi antara Indonesia & Jepang.',
      hoursTitle: 'Jam Kunjungan Ummat',
      hoursDesc: 'Setiap hari 10:00 - 16:00 JST (Kecuali waktu shalat berjamah)',
      dressTitle: 'Tata Pakaian',
      dressDesc: 'Disarankan berpakaian sopan & menutup aurat. Kain penutup tersedia di pintu masuk.',
      ctaGuide: 'Baca Panduan Kunjungan Lengkap',
      mapBadge: 'Peta Lokasi & Alamat Lengkap',
      easyAccess: 'Akses Mudah: 3 Menit Jalan Kaki dari Stasiun Tengachaya / Kishinosato (Kansai Area).',
      openMaps: 'Buka di Google Maps',
    },
    transparency: {
      title: 'Laporan Transparansi Keuangan',
      subtitle: 'Akuntabilitas publik pengelolaan donasi jamaah Masjid Istiqlal Osaka.',
      income: 'Total Pemasukan',
      expense: 'Total Pengeluaran',
      downloadReport: 'Unduh Laporan PDF',
      verified: 'Terverifikasi Tim Audit',
      accumulatedBalance: 'Saldo Kas Terakumulasi (MIO Ledger)',
      balanceDesc: 'Saldo kas operasional & dana wakaf MIO per',
      downloadPdf: 'Unduh PDF',
      monthlyDetails: 'Rincian Transaksi Kas',
      totalIncomeDesc: 'Total Pemasukan (Infaq, Sedekah & Wakaf)',
      totalExpenseDesc: 'Total Pengeluaran (Operasional & Program)',
      netSurplus: 'Surplus Bersih Bulan Ini',
      trendTitle: 'Grafik Tren Kas 6 Bulan Terakhir (Pergerakan Infaq)',
      unitYen: 'Satuan: Juta Yen (JPY)',
      verifiedBy: 'Diverifikasi oleh',
      bankProofCopy: 'Salinan Bank Yucho/MUFG',
    },
    admin: {
      badge: 'Admin Panel Simpel Pengurus MIO',
      title: 'Kelola Konten & Donasi Tanpa Staff IT Khusus',
      subtitle: 'Didesain intuitif dan ramah pengguna agar pengurus masjid dapat memposting berita atau membuat program donasi dalam hitungan menit.',
      tabNews: 'Tambah Berita',
      tabDonation: 'Buat Program Donasi',
      pubNews: 'Publikasikan Berita Baru',
      pubDonation: 'Simpan & Tayangkan Program',
    },
    footer: {
      description: 'Masjid Istiqlal Osaka (MIO) hadir sebagai rumah ibadah, pusat kebudayaan, dan wadah silaturahmi muslim di Jepang.',
      quickLinks: 'Tautan Cepat',
      address: 'Alamat: 1-Chome-1-21 Nakazato, Nishinari Ward, Osaka, 557-0042, Japan',
      rights: '© 2026 Masjid Istiqlal Osaka. Hak Cipta Dilindungi.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      schedule: 'Prayer',
      news: 'News',
      donation: 'Donate',
      transparency: 'Finance',
      videos: 'Education',
      admin: 'Admin',
      donateNow: 'Donate Now',
    },
    hero: {
      badge: 'Osaka Islamic Center • Masjid Istiqlal Osaka',
      title: 'Center of Civilization & Muslim Fellowship in Osaka',
      subtitle: 'Strengthening Islamic brotherhood, facilitating worship for Indonesian diaspora and local Muslims in Kansai, Japan.',
      ctaDonation: 'Donate for Operations',
      ctaNews: 'Read Latest News',
      location: 'Osaka-shi, Nishinari-ku, Japan',
    },
    prayer: {
      title: 'Today Prayer Times in Osaka',
      nextPrayer: 'Next Prayer',
      fajr: 'Fajr',
      dhuhr: 'Dhuhr',
      asr: 'Asr',
      maghrib: 'Maghrib',
      isha: 'Isha',
    },
    donation: {
      title: 'One-Stop Donation Portal',
      subtitle: 'Support mosque operations, building maintenance, and dawah programs transparently.',
      target: 'Target Goal',
      collected: 'Collected',
      remainingDays: 'Days Left',
      selectAmount: 'Select Donation Amount',
      customAmount: 'Custom Amount',
      currency: 'Currency',
      paymentMethod: 'Payment Method',
      transferJP: 'Japan Bank Account (Yucho / MUFG)',
      transferID: 'Indonesia Bank / QRIS / Midtrans',
      confirmTransfer: 'Confirm Transfer Receipt',
      submitDonation: 'Proceed Donation',
      anonymous: 'Donate Anonymously',
      donorName: 'Full Name',
      donorEmail: 'Email / WhatsApp',
      uploadProof: 'Upload Transfer Receipt',
      activeProgramBadge: 'Active Infaq Program',
    },
    news: {
      title: 'Mosque News & Events',
      subtitle: 'Updates on worship services, diaspora activities, language classes, and cultural events.',
      readMore: 'Read More',
      categories: {
        all: 'All Articles',
        ibadah: 'Worship & Ramadan',
        sosial: 'Social Activities',
        pendidikan: 'Education & Study',
        budaya: 'Culture & Diaspora',
      },
    },
    videos: {
      badge: 'Educational & Dawah Media',
      title: 'Islamic Lectures & Education',
      subtitle: 'Documentation of Islamic study sessions, worship guides, and diaspora dawah in Japan.',
      video1Title: 'Fundamental Islamic Understanding & Worship Guide',
      video1Desc: 'Introductory session on basic Islamic principles and practical worship tips abroad.',
      video2Title: 'Brotherhood Gathering & Diaspora Dawah in Osaka',
      video2Desc: 'Inspiring lecture strengthening faith and unity among Muslims in Japan.',
      video3Title: 'Halal Living Guide & Muslim Etiquette in Japan',
      video3Desc: 'Practical education on halal lifestyle, tolerance, and social integration in Kansai.',
    },
    visitors: {
      badge: 'Open to Everyone',
      title: 'Can I Visit?',
      description: 'Yes! We welcome visitors of all faiths to experience the peace of Masjid Istiqlal Osaka and foster mutual understanding between Indonesia and Japan.',
      hoursTitle: 'Visiting Hours',
      hoursDesc: 'Daily 10:00 AM - 4:00 PM JST (Except during congregational prayers)',
      dressTitle: 'Dress Code',
      dressDesc: 'Modest clothing requested. Wraps are available at the entrance.',
      ctaGuide: 'Read Full Visitor Guide',
      mapBadge: 'Location Map & Full Address',
      easyAccess: 'Easy Access: 3 Minutes Walk from Tengachaya / Kishinosato Station (Kansai Area).',
      openMaps: 'Open in Google Maps',
    },
    transparency: {
      title: 'Financial Transparency Reports',
      subtitle: 'Public accountability of mosque fund management.',
      income: 'Total Income',
      expense: 'Total Expenses',
      downloadReport: 'Download PDF Report',
      verified: 'Verified by Audit Team',
      accumulatedBalance: 'Accumulated Cash Balance (MIO Ledger)',
      balanceDesc: 'MIO operational cash & wakaf funds balance per',
      downloadPdf: 'Download PDF',
      monthlyDetails: 'Cash Transaction Details',
      totalIncomeDesc: 'Total Income (Infaq, Alms & Wakaf)',
      totalExpenseDesc: 'Total Expenses (Operations & Programs)',
      netSurplus: 'Net Surplus This Month',
      trendTitle: '6-Month Cash Trend Chart (Infaq Flow)',
      unitYen: 'Unit: Million Yen (JPY)',
      verifiedBy: 'Verified by',
      bankProofCopy: 'Yucho/MUFG Bank Copy',
    },
    admin: {
      badge: 'Simple Admin Panel for Committee',
      title: 'Manage Content & Donations Effortlessly',
      subtitle: 'Designed to be simple so mosque staff can post news or create donation campaigns without IT skills.',
      tabNews: 'Add News',
      tabDonation: 'Create Donation Campaign',
      pubNews: 'Publish New Article',
      pubDonation: 'Publish Campaign',
    },
    footer: {
      description: 'Masjid Istiqlal Osaka serves as a sanctuary, cultural center, and fellowship hub for Muslims in Japan.',
      quickLinks: 'Quick Links',
      address: 'Address: 1-Chome-1-21 Nakazato, Nishinari Ward, Osaka, 557-0042, Japan',
      rights: '© 2026 Masjid Istiqlal Osaka. All rights reserved.',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      schedule: '礼拝',
      news: 'ニュース',
      donation: '寄付',
      transparency: '財務',
      videos: '学習動画',
      admin: '管理者',
      donateNow: '今すぐ寄付する',
    },
    hero: {
      badge: '大阪イスラミックセンター • 大阪イスティクラルモスク',
      title: '大阪におけるムスリム交流と文化の拠点',
      subtitle: 'イスラムの絆を深め、在日インドネシア人コミュニティおよび関西地域のムスリムの礼拝をサポートします。',
      ctaDonation: 'モスク運営支援寄付',
      ctaNews: '最新ニュースを読む',
      location: '日本・大阪市西成区',
    },
    prayer: {
      title: '本日の大阪の礼拝時間',
      nextPrayer: '次の礼拝',
      fajr: 'ファジュル (夜明け)',
      dhuhr: 'ズフル (正午)',
      asr: 'アスル (午後)',
      maghrib: 'マグリブ (日没)',
      isha: 'イシャー (夜)',
    },
    donation: {
      title: 'ワンストップ寄付ポータル',
      subtitle: 'モスクの維持管理、コミュニティ活動、文化交流プログラムへのご支援をお願いいたします。',
      target: '目標金額',
      collected: '集まった金額',
      remainingDays: '残り日数',
      selectAmount: '寄付金額を選択',
      customAmount: '金額を直接入力',
      currency: '通貨',
      paymentMethod: 'お支払い方法',
      transferJP: '日本国内銀行振込 (ゆうちょ銀行 / MUFG)',
      transferID: 'インドネシア決済 / QRIS / Midtrans',
      confirmTransfer: '振込証明書の送信',
      submitDonation: '寄付を確定する',
      anonymous: '匿名で寄付する',
      donorName: 'お名前',
      donorEmail: 'メールアドレス / 連絡先',
      uploadProof: '振込控え画像のアップロード',
      activeProgramBadge: '受付中の寄付プログラム',
    },
    news: {
      title: 'モスクからのお知らせ',
      subtitle: '礼拝案内、講座、ボランティア活動、文化イベントの最新情報。',
      readMore: '詳細を見る',
      categories: {
        all: 'すべての記事',
        ibadah: '礼拝・ラマダン',
        sosial: '社会貢献活動',
        pendidikan: '講座・教育',
        budaya: '文化・交流',
      },
    },
    videos: {
      badge: '学習・動画メディア',
      title: 'イスラム学習＆講座動画',
      subtitle: 'モスクでの勉強会、礼拝の基礎、日本でのハラール生活講座の動画アーカイブ。',
      video1Title: 'イスラムの基本理解と礼拝ガイド',
      video1Desc: '海外での日常生活に役立つイスラムの基礎知識と礼拝の実践ガイド。',
      video2Title: '大阪におけるムスリム交流と布教活動',
      video2Desc: '信仰を深め、在日ムスリムコミュニティの絆を強める講座動画。',
      video3Title: '日本でのハラール生活とマナーガイド',
      video3Desc: '関西エリアでのハラールライフスタイル、地域社会との調和に関する講座。',
    },
    visitors: {
      badge: '一般公開中',
      title: '見学はできますか？',
      description: 'どなたでも大歓迎です！宗教を問わず、大阪イスティクラルモスクの平和な雰囲気とインドネシア・日本の文化交流を体感していただけます。',
      hoursTitle: '見学可能時間',
      hoursDesc: '毎日 10:00 - 16:00 JST（集団礼拝時間を除く）',
      dressTitle: '服装について',
      dressDesc: '肌の露出を控えた服装でお越しください。入口にて貸出用羽織り物もご用意しています。',
      ctaGuide: '見学ガイドを見る',
      mapBadge: 'アクセスマップ・詳細住所',
      easyAccess: 'アクセス：天下茶屋駅・岸里駅より徒歩3分（関西エリア）。',
      openMaps: 'Googleマップで見る',
    },
    transparency: {
      title: '財務透明性レポート',
      subtitle: '寄付金の使途と実績を公開しています。',
      income: '収入合計',
      expense: '支出合計',
      downloadReport: 'PDFレポートのダウンロード',
      verified: '監査チーム検証済み',
      accumulatedBalance: '累積現金残高 (MIO Ledger)',
      balanceDesc: 'モスク運営資金およびワカフ基金の合計残高：',
      downloadPdf: 'PDFをダウンロード',
      monthlyDetails: '月次収支明細',
      totalIncomeDesc: '収入合計（寄付金・ワカフ）',
      totalExpenseDesc: '支出合計（運営費・事業費）',
      netSurplus: '今月の純余剰金',
      trendTitle: '過去6ヶ月間の寄付トレンド',
      unitYen: '単位：百万円 (JPY)',
      verifiedBy: '検証機関：',
      bankProofCopy: 'ゆうちょ/MUFG銀行口座の控え',
    },
    admin: {
      badge: 'モスク役員用シンプル管理パネル',
      title: '専門知識なしでコンテンツと寄付を簡単管理',
      subtitle: 'ITの専門知識がなくても、数分でお知らせ投稿や寄付プログラムを作成できます。',
      tabNews: 'ニュースを追加',
      tabDonation: '寄付プログラムを作成',
      pubNews: 'ニュースを公開',
      pubDonation: 'プログラムを公開',
    },
    footer: {
      description: '大阪イスティクラルモスクは、日本のムスリムのための礼拝と心のよりどころです。',
      quickLinks: 'クイックリンク',
      address: '住所：〒557-0042 大阪府大阪市西成区中里1-1-21',
      rights: '© 2026 大阪イスティクラルモスク All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      schedule: 'الصلاة',
      news: 'الأخبار',
      donation: 'التبرع',
      transparency: 'المالية',
      videos: 'التعليم',
      admin: 'التحكم',
      donateNow: 'تبرع الآن',
    },
    hero: {
      badge: 'مركز أوساكا الإسلامي • مسجد استقلال أوساكا',
      title: 'مركز الحضارة والتواصل الإسلامي في أوساكا',
      subtitle: 'تعزيز الأخوة الإسلامية وتسهيل العبادة للجالية الإندونيسية والمسلمين المحليين في منطقة كانساي، اليابان.',
      ctaDonation: 'التبرع للمسجد والتشغيل',
      ctaNews: 'قراءة أحدث الأخبار',
      location: 'أوساكا، نيشيناري-كو، اليابان',
    },
    prayer: {
      title: 'مواقيت الصلاة في أوساكا اليوم',
      nextPrayer: 'الصلاة القادمة',
      fajr: 'الفجر',
      dhuhr: 'الظهر',
      asr: 'العصر',
      maghrib: 'المغرب',
      isha: 'العشاء',
    },
    donation: {
      title: 'بوابة التبرع الموحدة',
      subtitle: 'دعم تشغيل المسجد وصيانة المبنى والبرامج الدعوية والاجتماعية بكل شفافية.',
      target: 'المبلغ المستهدف',
      collected: 'تم جمعه',
      remainingDays: 'الأيام المتبقية',
      selectAmount: 'اختر مبلغ التبرع',
      customAmount: 'مبلغ آخر',
      currency: 'العملة',
      paymentMethod: 'طريقة الدفع',
      transferJP: 'الحساب البنكي الياباني (Yucho / MUFG)',
      transferID: 'البنك الإندونيسي / QRIS / Midtrans',
      confirmTransfer: 'تأكيد إيصال التحويل',
      submitDonation: 'متابعة التبرع',
      anonymous: 'تبرع كفاعل خير (مجهول)',
      donorName: 'الاسم الكامل',
      donorEmail: 'البريد الإلكتروني / الواتساب',
      uploadProof: 'رفع إيصال التحويل',
      activeProgramBadge: 'حملة التبرع النشطة',
    },
    news: {
      title: 'أخبار وفعاليات المسجد',
      subtitle: 'مستجدات العبادات والأنشطة والدروس والفعاليات الثقافية في مسجد استقلال أوساكا.',
      readMore: 'قراءة المزيد',
      categories: {
        all: 'جميع المقالات',
        ibadah: 'العبادة ورضان',
        sosial: 'الأنشطة الاجتماعية',
        pendidikan: 'الدروس والتعليم',
        budaya: 'الثقافة والجالية',
      },
    },
    videos: {
      badge: 'الوسائط التعليمية والدعوية',
      title: 'محاضرات ودروس إسلامية',
      subtitle: 'توثيق الدروس العلمية وإرشادات العبادة ودليل الحياة الحلال للمسلمين في اليابان.',
      video1Title: 'الفهم الأساسي للإسلام ودليل العبادة',
      video1Desc: 'جلسة تعريفية بأساسيات الإسلام وإرشادات علمية للعبادة في المغترب.',
      video2Title: 'محاضرات الأخوة والدعوة في أوساكا',
      video2Desc: 'محاضرة إيمانية لتعزيز الإيمان وتقوية روابط الأخوة بين المسلمين في اليابان.',
      video3Title: 'دليل الحياة الحلال والآداب في اليابان',
      video3Desc: 'تعليم عملي حول نمط الحياة الحلال والتكيف الاجتماعي في منطقة كانساي.',
    },
    visitors: {
      badge: 'مفتوح للجميع',
      title: 'هل يمكنني الزيارة؟',
      description: 'نعم! نرحب بالزوار من جميع الأديان والخلفيات لتجربة السلام في مسجد استقلال أوساكا وتعزيز التعارف بين إندونيسيا واليابان.',
      hoursTitle: 'ساعات الزيارة',
      hoursDesc: 'يومياً من 10:00 صباحاً حتى 4:00 مساءً (باستثناء أوقات صلاة الجماعة)',
      dressTitle: 'قواعد اللباس',
      dressDesc: 'يُرجى ارتداء ملابس محشمة. تتوفر أغطية مخصصة عند المدخل.',
      ctaGuide: 'قراءة دليل الزوار الكامل',
      mapBadge: 'خريطة الموقع والعنوان الكامل',
      easyAccess: 'سهولة الوصول: 3 دقائق سيراً على الأقدام من محطة Tengachaya / Kishinosato (منطقة كانساي).',
      openMaps: 'فتح في خرائط جوجل',
    },
    transparency: {
      title: 'تقارير الشفافية المالية',
      subtitle: 'المساءلة العامة والشفافية في إدارة تبرعات المسجد.',
      income: 'إجمالي الإيرادات',
      expense: 'إجمالي المصروفات',
      downloadReport: 'تحميل التقرير PDF',
      verified: 'معتمد من فريق التدقيق',
      accumulatedBalance: 'الرصيد النقدي التراكمي (دفتر المسجد)',
      balanceDesc: 'رصيد الصندوق التشغيلي والأوقاف حتى',
      downloadPdf: 'تحميل PDF',
      monthlyDetails: 'تفاصيل المعاملات الشهرية',
      totalIncomeDesc: 'إجمالي الإيرادات (التبرعات والصدقات والأوقاف)',
      totalExpenseDesc: 'إجمالي المصروفات (التشغيل والبرامج)',
      netSurplus: 'الفائض الصافي لهذا الشهر',
      trendTitle: 'مخطط حركة التبرعات خلال 6 أشهر',
      unitYen: 'الوحدة: مليون ين ياباني (JPY)',
      verifiedBy: 'تم التحقق بواسطة',
      bankProofCopy: 'نسخة كشف بنك Yucho/MUFG',
    },
    admin: {
      badge: 'لوحة تحكم بسيطة لإدارة المسجد',
      title: 'إدارة المحتوى والتبرعات بسهولة',
      subtitle: 'مصممة لتكون بسيطة حتى يتمكن فريق المسجد من نشر الأخبار وإرسال التبرعات بدون مهارات تقنية.',
      tabNews: 'إضافة خبر',
      tabDonation: 'إنشاء حملة تبرع',
      pubNews: 'نشر مقال جديد',
      pubDonation: 'نشر الحملة',
    },
    footer: {
      description: 'مسجد استقلال أوساكا هو ملاذ ومركز ثقافي ومجمع للمسلمين في اليابان.',
      quickLinks: 'روابط سريعة',
      address: 'العنوان: 1-Chome-1-21 Nakazato, Nishinari Ward, Osaka, 557-0042, Japan',
      rights: '© 2026 مسجد استقلال أوساكا. جميع الحقوق محفوظة.',
    },
  },
};
