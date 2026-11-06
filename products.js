/* ============================================================
   DATA PRODUK DONGETIK DIGITAL
   ------------------------------------------------------------
   SATU-SATUNYA tempat mengedit produk.
   Commit & push → Cloudflare Pages deploy ulang otomatis.

   SKEMA:
   - id            (wajib) slug unik, huruf kecil tanpa spasi
   - title         (wajib) nama produk
   - subtitle      (opsional) tagline singkat
   - category      (wajib) 'Aplikasi' | 'Ebook' | 'Jasa'
   - categoryLabel (opsional) label tampil; default = category
   - tags          (opsional) array sektor/subtopik, mis. ['Govtech','ASN']
   - price         (wajib) angka rupiah
   - normalPrice   (opsional) harga coret
   - status        (opsional) mis. 'Siap Pakai', 'Pre-Order'
   - featured      (opsional) true → tampil di halaman kategori (unggulan)
   - galeri        (opsional) array path foto. Foto pertama = thumbnail.
                   Kosongkan [] untuk pakai ikon.
   - icon          (wajib) kelas FontAwesome
   - iconBg        (wajib) kelas Tailwind warna latar ikon
   - badgeBg       (wajib) kelas Tailwind warna badge kategori
   - shortDesc     (wajib) 1-2 kalimat untuk kartu
   - longDesc      (opsional) deskripsi panjang untuk modal
   - features      (opsional) array fitur utama
   - url           (opsional) path halaman produk terpisah (jika ada)

   PANDUAN WARNA PER KATEGORI:
   - Aplikasi → biru   (bg-blue-*, text-blue-*, border-blue-*)
   - Ebook    → emerald (bg-emerald-*, text-emerald-*, border-emerald-*)
   - Jasa     → ungu   (bg-purple-*, text-purple-*, border-purple-*)

   CATATAN UNGGULAN:
   - Tandai produk dengan `featured: true` agar muncul di halaman
     kategori (apps.html / ebook.html / jasa.html).
   - Halaman kategori menampilkan maksimal 6 produk unggulan.
   - Jika tidak ada yang ditandai, fallback memilih yang bergambar
     dan berstatus 'Siap Pakai' (lihat window.pilihUnggulan).
   - Katalog tetap menampilkan SELURUH produk, tanpa terkecuali.
   ============================================================ */

window.PRODUCTS = [

    // ============================================================
    // KATEGORI: APLIKASI (biru)
    // ============================================================

    {
    id: 'gasekin',
    title: 'GASEKIN',
    subtitle: 'Bantu Siapkan Bahan Pengisian e-Kinerja ASN',
    category: 'Aplikasi',
    categoryLabel: 'Aplikasi',
    tags: ['Govtech', 'ASN'],
    price: 99000,
    normalPrice: 199000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/gasekin-1.jpg', 'images/gasekin-2.jpg', 'images/gasekin-3.jpg', 'images/gasekin-4.jpg'],
    icon: 'fa-solid fa-id-card-clip',
    iconBg: 'bg-blue-100 text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',

    shortDesc: 'Masukkan kegiatan, upload bukti dukung, dan biarkan GASEKIN membantu menyiapkan bahan e-Kinerja. Saat waktunya mengisi, tinggal salin dan tempel.',

    longDesc: 'GASEKIN adalah aplikasi sederhana yang membantu ASN menyiapkan bahan pengisian e-Kinerja dari kegiatan yang sudah dilakukan. Cukup masukkan KLU kegiatan, pilih target, lalu upload bukti dukung dan simpan. GASEKIN membantu menyiapkan Rencana Aksi dengan bantuan AI, Target, Nama Bukti Dukung, Link Bukti Dukung, Realisasi, dan Sumber Data. Semua kegiatan tersimpan dalam Riwayat GASEKIN sehingga bahan dapat dibuka kembali dan disalin saat waktunya mengisi e-Kinerja. Tidak perlu membuka Google Drive hanya untuk mengunggah bukti atau mencari dan menyalin link secara manual. Dapat digunakan melalui smartphone maupun laptop tanpa perlu instalasi aplikasi.',

    features: [
        'Menyiapkan Rencana Aksi kegiatan dengan bantuan AI',
        'Menyimpan dan menyiapkan nama serta link bukti dukung',
        'Upload bukti kegiatan langsung tanpa perlu membuka Google Drive',
        'Riwayat kegiatan tersusun dengan 6 bagian bahan pengisian e-Kinerja',
        'Salin dan tempel bahan ke aplikasi e-Kinerja saat waktunya input',
        'Dapat diakses melalui smartphone maupun laptop tanpa instalasi'
    ]
},

    {
    id: 'sasuke',
    title: 'SASUKE',
    subtitle: 'Sistem Agenda Surat Masuk & Keluar',
    category: 'Aplikasi',
    categoryLabel: 'Aplikasi',
    tags: ['Govtech', 'Persuratan', 'Administrasi Digital'],
    price: 149000,
    normalPrice: 299000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/sasuke-1.jpg', 'images/sasuke-2.jpg', 'images/sasuke-3.jpg', 'images/sasuke-4.jpg'],
    icon: 'fa-solid fa-box-archive',
    iconBg: 'bg-blue-100 text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',

    shortDesc: 'Solusi digital untuk mengelola agenda surat masuk dan surat keluar secara lebih tertib, praktis, dan terorganisir. Dilengkapi penomoran agenda, klasifikasi surat, dashboard monitoring, serta pencetakan laporan.',

    longDesc: 'SASUKE (Sistem Agenda Surat Masuk Keluar) merupakan aplikasi administrasi persuratan yang dirancang untuk membantu instansi pemerintah dalam mengelola pencatatan dan pengarsipan agenda surat secara digital. Melalui satu sistem, petugas dapat mencatat surat masuk, mengelola agenda surat keluar, mengambil nomor urut secara praktis, serta memantau aktivitas persuratan melalui dashboard. Dilengkapi pengelolaan klasifikasi surat, fitur perubahan data, dan pencetakan laporan PDF untuk memudahkan dokumentasi serta kebutuhan administrasi. Dapat diakses melalui browser tanpa perlu instalasi aplikasi tambahan maupun langganan server tahunan.',

    features: [
        'Pencatatan dan pengelolaan agenda surat masuk secara digital',
        'Pengelolaan agenda surat keluar dengan pengambilan nomor urut otomatis',
        'Master klasifikasi surat untuk membantu standarisasi pencatatan',
        'Dashboard monitoring statistik dan aktivitas persuratan',
        'Pencarian, pengelolaan, dan perubahan data agenda surat',
        'Pencetakan dan dokumentasi laporan agenda dalam format PDF'
    ]
},

    {
        id: 'eska',
        title: 'eSKA',
        subtitle: 'Otomasi Surat Keterangan & Administrasi Desa/Kelurahan',
        category: 'Aplikasi',
        categoryLabel: 'Aplikasi',
        tags: ['Govtech', 'Desa', 'Kelurahan'],
        price: 199000,
        normalPrice: 350000,
        status: 'Siap Pakai',
        featured: false,
        galeri: ['images/eska-1.jpg', 'images/eska-2.jpg'],
        icon: 'fa-solid fa-file-signature',
        iconBg: 'bg-blue-100 text-blue-600',
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        shortDesc: 'Sistem pencetakan cepat puluhan jenis Surat Keterangan Warga (SKTM, Domisili, Usaha) dalam sekali klik.',
        longDesc: 'eSKA memangkas waktu pelayanan administrasi di tingkat Kelurahan/Desa dari hitungan puluhan menit menjadi hitungan detik. Data pemohon otomatis tersimpan di database. Sistem Web/App Script terintegrasi Google Docs & Sheets, siap pakai tanpa konfigurasi rumit.',
        features: [
            'Multi-template surat (SKTM, Domisili, Usaha, dll)',
            'Otomasi pembuatan PDF siap cetak atau cetak QR Code validasi',
            'Database Kependudukan lokal sederhana & pencarian NIK',
            'Laporan statistik pelayanan publik bulanan'
        ]
    },

    {
    id: 'adis',
    title: 'ADIS',
    subtitle: 'Absensi Digital Siswa Multi-Kanal untuk Sekolah',
    category: 'Aplikasi',
    categoryLabel: 'Aplikasi',
    tags: ['EdTech', 'Sekolah'],
    price: 149000,
    normalPrice: 299000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/adis-1.jpg', 'images/adis-2.jpg', 'images/adis-3.jpg', 'images/adis-4.jpg'],
    icon: 'fa-solid fa-graduation-cap',
    iconBg: 'bg-indigo-100 text-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    shortDesc: 'Sistem absensi sekolah multi-kanal (Admin, Guru, Wali Murid) dengan penjadwalan per jam pelajaran, notifikasi WA gratis, dan rekap siap lampir raport.',
    longDesc: 'ADIS adalah platform absensi digital siswa yang dirancang untuk sekolah modern dengan tiga kanal akses terpisah—Admin mengelola data master, kelas, dan jadwal per jam pelajaran; Guru melihat daftar jadwal mengajar hari itu dan langsung menginput absensi dengan satu klik; Wali Murid memantau kehadiran anaknya secara real-time tanpa bisa melihat data siswa lain. Dibangun di atas Cloudflare Pages untuk frontend dan Google Apps Script + Google Sheets sebagai backend, ADIS berjalan tanpa biaya server bulanan, mendukung multi-sekolah dengan isolasi data, dan dilengkapi notifikasi WhatsApp gratis langsung dari perangkat guru untuk siswa berstatus alpa atau sakit.',
    features: [
        'Tiga kanal akses terpisah: Admin (password), Guru (nama & password), Wali Murid (NIS & tanggal lahir)',
        'Penjadwalan per hari dan jam ke berapa—guru hanya melihat & menginput absensi untuk jadwalnya hari ini',
        'Notifikasi WhatsApp ke orang tua untuk siswa alpa/sakit, gratis via wa.me tanpa biaya API',
        'Rekap kehadiran bulanan siap ekspor Excel/PDF sebagai lampiran raport',
        'Multi-sekolah (multi-tenant) dengan data terisolasi dan backup otomatis'
    ]
},

    {
    id: 'sidika',
    title: 'SIDIKA',
    subtitle: 'Sistem Tes Diagnostik & Akademik Siswa',
    category: 'Aplikasi',
    categoryLabel: 'Aplikasi',
    tags: ['Edukasi', 'Bimbingan Konseling', 'Asesmen Digital'],
    price: 249000,
    normalPrice: 400000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/sidika-1.jpg', 'images/sidika-2.jpg', 'images/sidika-3.jpg'],
    icon: 'fa-solid fa-brain',
    iconBg: 'bg-blue-100 text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    shortDesc: 'Platform asesmen digital terintegrasi untuk memetakan gaya belajar, tipe kepribadian, kecerdasan majemuk, bakat karier, serta kemampuan akademik siswa dalam satu sistem.',
    longDesc: 'SiDIKA (Sistem Tes Diagnostik & Akademik) adalah aplikasi web berbasis Google Apps Script yang dirancang untuk membantu Guru Bimbingan Konseling (BK) dan Wali Kelas dalam memahami profil siswa secara menyeluruh. Siswa mengerjakan empat sesi tes diagnostik non-kognitif — Gaya Belajar (Visual/Auditori/Kinestetik), Tipe Kepribadian (MBTI), Kecerdasan Majemuk (Multiple Intelligences), dan Bakat Minat Karier — dilanjutkan dengan tes akademik terpadu yang mengukur kecenderungan siswa terhadap Paket A (MIPA) atau Paket B (IPS). Seluruh hasil tersimpan otomatis di spreadsheet, dihitung secara real-time, dan dapat dicetak dalam format laporan satu halaman melalui panel admin. Sistem dilengkapi manajemen siswa, verifikasi kode unik, pengaturan jumlah soal, konfigurasi nama & logo sekolah, serta penguncian waktu tes yang fleksibel.',
    features: [
        'Empat sesi tes diagnostik non-kognitif: Gaya Belajar, MBTI, Kecerdasan Majemuk, dan Bakat Minat Karier',
        'Tes akademik terpadu 80 soal untuk mengukur kecenderungan Paket A (MIPA) vs Paket B (IPS)',
        'Panel admin lengkap: dashboard statistik, manajemen siswa, impor/ekspor Excel, dan kontrol akses tes',
        'Verifikasi kode unik siswa untuk mencegah duplikasi peserta',
        'Perhitungan skor otomatis real-time dan penyimpanan jawaban mentah ke spreadsheet',
        'Cetak laporan hasil siswa dalam satu halaman lengkap dengan logo sekolah',
        'Pengaturan jumlah soal fleksibel, konfigurasi nama & logo sekolah, serta ganti password admin'
    ]
},

    {
        id: 'uplodrive',
        title: 'Uplodrive',
        subtitle: 'Unggah Cepat Dokumen ke Google Drive',
        category: 'Aplikasi',
        categoryLabel: 'Aplikasi',
        tags: ['Lintas Sektor', 'Google Drive', 'Produktivitas'],
        price: 29000,
        normalPrice: 99000,
        status: 'Siap Pakai',
        featured: true,
        galeri: ['images/uplodrive-1.jpg', 'images/uplodrive-2.jpg'],
        icon: 'fa-solid fa-cloud-arrow-up',
        iconBg: 'bg-blue-100 text-blue-600',
        badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
        shortDesc: 'Web app ringan untuk mengunggah dokumen ke Google Drive dengan cepat, rapi, dan tanpa ribet.',
        longDesc: 'Uplodrive membantu siapa pun—ASN, guru, penulis, maupun tim bisnis—mengunggah dokumen ke Google Drive dengan alur yang lebih cepat dan terorganisir. Cocok untuk pekerjaan harian yang menuntut efisiensi.',
        features: [
            'Antarmuka ringan dan cepat di HP maupun PC',
            'Struktur folder otomatis sesuai kebutuhan',
            'Mendukung unggahan banyak file sekaligus',
            'Cocok untuk lintas sektor: pemerintahan, pendidikan, bisnis'
        ]
    },

{
    id: 'manalupa',
    title: 'MANALUPA',
    subtitle: 'Kelola Lupa, Ingat Tanpa Batas',
    category: 'Aplikasi',
    categoryLabel: 'Aplikasi',
    tags: ['Produktivitas', 'Manajemen Waktu', 'Privasi', 'Offline'],
    price: 10000,
    normalPrice: 79000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/manalupakatalog.png'],
    icon: 'fa-solid fa-cloud-arrow-up',
    iconBg: 'bg-blue-100 text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',

    shortDesc: 'Lupa itu wajar. Manalupa membantumu mencatat, mengingat, dan mengelola beban pikiran tanpa perlu koneksi internet. 100% privat, 0% ribet.',

    longDesc: 'Manalupa adalah asisten anti-lupa pribadi yang berjalan sepenuhnya offline di browser Anda. Dirancang berdasarkan prinsip psikologi kognitif, Manalupa membantu Anda memindahkan beban ingatan dari kepala ke sistem yang aman (Single Point of Capture). Dilengkapi dengan indikator beban pikiran, fitur "Rumah Barang" untuk mencatat lokasi pasti barang, dan aturan "Kalau-Maka" (Implementation Intention) untuk mengikat pengingat pada rutinitas harian. Semua data disimpan secara lokal di perangkat Anda (tidak ada server, tidak ada pelacakan), dan dapat di-backup dengan mudah. Buka, ketik, tutup—kurang dari 10 detik.',

    features: [
        'Bekerja 100% Offline: Tidak butuh internet, data tersimpan aman di perangkat',
        'Single Point of Capture: Catat tugas, janji, atau ide dalam waktu < 10 detik',
        'Indikator Beban Pikiran: Pantau kapasitas kognitif agar tidak overthinking',
        'Fitur Rumah Barang: Catat lokasi pasti barang agar tak panik saat mencarinya',
        'Aturan Kalau-Maka: Ikat pengingat baru pada rutinitas yang sudah pasti dilakukan',
        'Gratis ebook eksklusif: Manajemen Lupa - Solusi Cerdas Hadapi Sifat Alami Manusia'
    ]
},
    // ============================================================
    // KATEGORI: EBOOK (emerald)
    // ============================================================

    {
    id: 'ebook-rokok',
    title: 'Ebook: 100 Alasan Kuat Berhenti Merokok',
    subtitle: '100 Alasan untuk Memperkuat Keputusan Berhenti Merokok',
    category: 'Ebook',
    categoryLabel: 'Ebook',
    tags: ['Literasi', 'Kesehatan', 'Motivasi'],
    price: 35000,
    normalPrice: 99000,
    status: 'Ebook Digital + Bonus Web App',
    featured: true,
    galeri: ['images/100alasan-1.jpg', 'images/100alasan-2.jpg', 'images/100alasan-3.jpg', 'images/100alasan-4.jpg'],
    icon: 'fa-solid fa-book-open-reader',
    iconBg: 'bg-emerald-100 text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',

    shortDesc: '100 Alasan Kuat Mengapa Saya Harus Berhenti Merokok Hari Ini. Ebook berisi 100 alasan dari sisi kesehatan, keluarga, keuangan, dan masa depan untuk membantu memperkuat motivasi dan keputusan berhenti merokok.',

    longDesc: 'Sudah tahu rokok berbahaya, tetapi masih sulit berhenti? Ebook ini mengajak Anda melihat kebiasaan merokok dari berbagai sudut pandang melalui 100 alasan yang logis dan emosional. Bukan sekadar mengingatkan bahaya rokok, tetapi membantu menemukan alasan personal yang bisa menguatkan keputusan untuk berhenti. Dilengkapi bonus Web App BebasRokok sebagai pendamping perjalanan, untuk memantau hari tanpa rokok, menghitung uang yang berhasil dihemat, serta menggunakan tombol darurat sebagai pengalih perhatian ketika keinginan merokok datang. Produk digital, praktis dibaca dan diakses melalui HP.',

    features: [
        '100 alasan kuat dari sisi kesehatan, keluarga, keuangan, dan masa depan',
        'Membantu mengubah cara pandang terhadap kebiasaan merokok',
        'Alasan-alasan singkat, logis, dan emosional untuk direnungkan kembali',
'eBook interaktif dan bisa didengarkan (tersedia pemutar suara) sambil beraktifitas',
        'Bonus Web App BebasRokok untuk memantau perjalanan tanpa rokok',
        'Kalkulator penghematan uang dari rokok yang berhasil dihindari',
        'Tombol darurat untuk membantu mengalihkan perhatian saat craving',
        'Ebook digital yang praktis dibaca melalui HP atau laptop'
    ]
},

   {
    id: 'ebook-manajemen-lupa',
    title: 'Ebook: Manajemen Lupa',
    subtitle: 'Lupa Itu Wajar — Solusi Cerdas Hadapi Sifat Alami Manusia',
    category: 'Ebook',
    categoryLabel: 'Ebook',
    tags: ['Literasi', 'Produktivitas', 'Psikologi', 'Manajemen Waktu'],
    price: 10000,
    normalPrice: 79000,
    status: 'Ebook Digital + Lembar Kerja Interaktif',
    featured: true,
    galeri: ['images/Manajemen Lupa_ Solusi Cerdas.png'],
    icon: 'fa-solid fa-book-open-reader',
    iconBg: 'bg-emerald-100 text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',

    shortDesc: 'Lupa itu wajar. Yang membedakan individu produktif adalah bagaimana mereka mengantisipasinya. Temukan sistem mitigasi memori berbasis psikologi kognitif untuk melindungi Anda dari keterbatasan alami otak.',

    longDesc: 'Sering lupa jadwal, menaruh kunci, atau melewatkan tenggat kerja? Buku ini hadir bukan untuk memaksa otak Anda memiliki ingatan fotografi, melainkan untuk membangun sistem eksternal yang kokoh. Berangkat dari Kurva Lupa Ebbinghaus hingga teori Extended Mind, ebook ini memandu Anda membangun "Otak Kedua". Dilengkapi dengan kontekstualisasi realitas kerja Indonesia (seperti kebiasaan WhatsApp dan budaya "nanti dulu"), 3 pilar sistem mitigasi, serta 10 skenario praktis sehari-hari. Ditutup dengan Lembar Kerja (Worksheet) yang bisa langsung Anda isi untuk merancang sistem manajemen lupa versi Anda sendiri.',

    features: [
        'Pemahaman mendalam tentang anatomi lupa dan 7 jenis dosa memori',
        'Tiga Pilar Sistem Manajemen Lupa (Offloading, Triggers, Batching)',
        'Kontekstualisasi solusi untuk realitas kerja Indonesia yang sesungguhnya',
        '10 Skenario praktis (tagihan, janji temu, instruksi rapat, dokumen, dll)',
        'Lembar Kerja (Worksheet) interaktif untuk audit dan perancangan sistem',
        'Pendekatan Self-Compassion: berhenti menyalahkan diri karena lupa',
        'Ebook digital dengan tata letak modern, nyaman dibaca di HP maupun laptop',
        'Gratis Aplikasi: Manalupa - Kelola Lupa, Ingat Tanpa Batas'
    ]
},

{
    id: 'ebook-jangan-jadi-penonton',
    title: 'Ebook: Jangan Jadi Penonton saat Kecelakaan',
    subtitle: 'Panduan Hangat untuk Menjadi Penolong yang Cerdas dan Berempati',
    category: 'Ebook',
    categoryLabel: 'Ebook',
    tags: ['Keselamatan', 'Kesehatan', 'Psikologi', 'Kewargaan Digital'],
    price: 0,
    normalPrice: 0,
    status: 'Ebook Digital Gratis',
    featured: true,
    galeri: ['images/stopjadipenontonkatalog.png'],
    icon: 'fa-solid fa-book-open-reader',
    iconBg: 'bg-emerald-100 text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',

    shortDesc: 'Kecelakaan bukan tontonan. Panduan ringkas, hangat, dan tak menghakimi untuk mengubah kita dari penonton pasif menjadi penolong pertama yang cerdas—tanpa harus jadi dokter.',

    longDesc: 'Setiap hari kita berpapasan dengan kecelakaan di jalan raya. Sayangnya, mayoritas dari kita memilih memperlambat kendaraan, merekam, atau sekadar berkerumun—bukan menolong. Ebook ini hadir bukan untuk menghakimi, melainkan membekali. Ditulis bersama perspektif psikolog, tim medis, dan tim penyelamat, ebook ini memandu Anda mengubah mentalitas dari pengamat menjadi penolong responsif. Dimulai dari memahami fenomena bystander effect, protokol "Amankan, Nilai, Bertindak", nomor darurat yang benar (119, 110, 113, 112), batas aman pertolongan pertama (termasuk kapan JANGAN melepas helm), etika digital di lokasi kejadian, hingga Lampiran "Kartu Cepat" yang bisa disimpan di ponsel atau ditempel di dasbor. Bahasa hangat, tanpa jargon, bisa diterapkan siapa saja—kapan saja.',

    features: [
        'Penjelasan sederhana fenomena bystander effect dan mengapa kita sering hanya menonton',
        'Protokol tiga langkah: Amankan, Nilai, Bertindak',
        'Panduan lengkap nomor darurat Indonesia (119, 110, 113, 112) dan cara menelepon yang benar',
        'Batas aman pertolongan pertama: apa yang boleh, apa yang jangan, apa yang harus tunggu instruksi',
        'Etika digital di lokasi kejadian: simpan ponsel, ulurkan tangan',
        'Lampiran "Kartu Cepat" berisi tiga langkah emas, nomor darurat, dan daftar boleh/tidak boleh',
        'Bahasa hangat, tak menghakimi, dan mudah dipahami—cocok untuk pembaca umum',
        'Ebook digital gratis, dirancang nyaman dibaca di HP maupun dicetak A5'
    ]
},
   
    {
    id: 'sangkatan',
    title: 'SANGKATAN',
    subtitle: 'Platform Digital Komunitas Alumni & Manajemen Kenangan',
    category: 'Jasa',
    categoryLabel: 'Jasa',
    tags: ['Custom', 'Platform', 'Web App'],
    price: 199000,                // gratis untuk alumni
    normalPrice: 499000,
    status: 'Siap Pakai',
    featured: true,
    galeri: ['images/sangkatan.jpg'],
    icon: 'fa-solid fa-users',
    iconBg: 'bg-purple-100 text-purple-600',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
    shortDesc: 'Ruang silaturahmi digital alumni: direktori, kisah inspiratif, galeri kenangan, etalase usaha, dan peta persebaran.',
    longDesc: 'SANGKATAN adalah platform digital yang dirancang khusus untuk menyatukan seluruh alumni angkatan dalam satu wadah. Dilengkapi direktori alumni dengan profil lengkap, galeri foto kenangan, kisah inspiratif, etalase usaha alumni, agenda kegiatan dengan fitur RSVP, serta peta persebaran alumni. Semua data terintegrasi dengan Google Sheets dan Apps Script, mudah dikelola melalui portal admin, dan dapat diakses kapan saja melalui smartphone maupun PC.',
    features: [
        'Direktori alumni lengkap dengan pencarian & filter jurusan',
        'Galeri kenangan interaktif dengan fitur like (❤️)',
        'Kisah inspiratif alumni untuk memotivasi sesama',
        'Etalase usaha alumni untuk mendukung bisnis teman',
        'Agenda kegiatan dengan konfirmasi kehadiran (RSVP) per alumni',
        'Peta persebaran alumni otomatis berdasarkan domisili',
        'Portal admin terpisah untuk mengelola semua konten',
        'Login aman dengan PIN angkatan + identitas nama alumni'
    ]
},

    // ============================================================
    // KATEGORI: JASA (ungu)
    // ============================================================

    {
        id: 'jasa-custom',
        title: 'Jasa Custom Micro-Web',
        subtitle: 'Solusi Pengembangan Sistem Kerja Khusus',
        category: 'Jasa',
        categoryLabel: 'Jasa',
        tags: ['Custom', 'Otomasi', 'Web App'],
        price: 499000,
        normalPrice: 999000,
        status: 'Pre-Order',
        featured: true,
        galeri: ['images/jasa.jpg'],
        icon: 'fa-solid fa-laptop-code',
        iconBg: 'bg-purple-100 text-purple-600',
        badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
        shortDesc: 'Layanan rancang bangun web internal, spreadsheet otomatis, atau aplikasi dinas sesuai spesifikasi unik Anda.',
        longDesc: 'Tim Dongetik Digital akan menganalisis alur kerja manual di instansi/sekolah/bisnis Anda dan mengubahnya menjadi aplikasi berbasis web yang cepat & efisien. Pengerjaan 3-7 hari kerja, sertifikat garansi teknis.',
        features: [
            'Konsultasi kebutuhan alur sistem via WA/Zoom',
            'Desain antarmuka bersih & ramah pengguna HP',
            'Garansi perbaikan bug & pendampingan penggunaan',
            'Biaya fleksibel menyesuaikan tingkat kerumitan'
        ]
    }

];

/* ============================================================
   FUNGSI GLOBAL: pilihUnggulan(list, max)
   ------------------------------------------------------------
   Dipakai oleh apps.html, ebook.html, jasa.html.

   Aturan:
   1. Jika ada produk `featured: true` → ambil itu, maksimal `max`.
   2. Jika tidak ada → fallback: prioritaskan yang punya gambar
      (galeri berisi) dan berstatus 'Siap Pakai'.
   3. Katalog TIDAK memakai fungsi ini—katalog menampilkan semua.

   Contoh pemakaian di halaman kategori:
       const produkKategori = window.PRODUCTS.filter(
           p => (p.category || '').trim().toLowerCase() === 'ebook'
       );
       const unggulan = window.pilihUnggulan(produkKategori);
   ============================================================ */
window.pilihUnggulan = function (list, max = 6) {
    if (!Array.isArray(list)) return [];

    const featured = list.filter(p => p.featured === true);
    if (featured.length) return featured.slice(0, max);

    const skor = p => {
        const bergambar = Array.isArray(p.galeri) && p.galeri[0] ? 2 : 0;
        const siapPakai = p.status === 'Siap Pakai' ? 1 : 0;
        return bergambar + siapPakai;
    };

    return [...list].sort((a, b) => skor(b) - skor(a)).slice(0, max);
};
