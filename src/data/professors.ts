export interface Professor {
  name: string;
  nidn: string;
  university: string;
  department: string;
  labels: string[];
}

export const professors: Professor[] = [
  { name: "Dr. Aris Setiawan", nidn: "0012038701", university: "Universitas Indonesia", department: "Teknik Informatika", labels: ["Full Discussion", "Bahasa Santai", "Friendly Vibe"] },
  { name: "Prof. Siti Rahayu", nidn: "0025047602", university: "Institut Teknologi Bandung", department: "Matematika", labels: ["Deep Diver", "Standard Ketat", "On Time"] },
  { name: "Budi Prasetyo, M.T.", nidn: "0031058803", university: "Universitas Gadjah Mada", department: "Teknik Mesin", labels: ["Analogi Realistis", "Reward Proses", "Project Based"] },
  { name: "Dr. Dewi Lestari", nidn: "0014069204", university: "Universitas Airlangga", department: "Kedokteran", labels: ["Metode Satu Arah", "Instruksi Clear", "Nilai Objektif"] },
  { name: "Prof. Hendra Wijaya", nidn: "0008077505", university: "Institut Teknologi Sepuluh Nopember", department: "Teknik Elektro", labels: ["Speed Runner", "To the Point", "Kuis Dadakan"] },
  { name: "Dr. Ratna Kusuma", nidn: "0019088506", university: "Universitas Diponegoro", department: "Hukum", labels: ["Slide-Heavy", "High-Level Language", "Fokus Hafalan"] },
  { name: "Ahmad Fauzi, M.Sc.", nidn: "0022099007", university: "Universitas Brawijaya", department: "Fisika", labels: ["Case Study", "Feedback Detail", "Experience Oriented"] },
  { name: "Dr. Maya Indah", nidn: "0005108208", university: "Universitas Padjadjaran", department: "Psikologi", labels: ["Full Discussion", "Friendly Vibe", "Reward Proses"] },
  { name: "Prof. Rudi Hartono", nidn: "0017117409", university: "Universitas Hasanuddin", department: "Ekonomi", labels: ["Ujian Open Book", "Resourceful", "Bahasa Santai"] },
  { name: "Dr. Lina Marlina", nidn: "0003128910", university: "Universitas Pendidikan Indonesia", department: "Pendidikan", labels: ["Deep Diver", "Instruksi Clear", "On Time"] },
];

export const labelCategories = [
  {
    title: "Cara Mengajar",
    labels: [
      "Metode Satu Arah", "Full Discussion", "Speed Runner", "Deep Diver",
      "Analogi Realistis", "Slide-Heavy", "Hands-On Practice", "Storytelling",
      "Demonstrasi Langsung", "Flipped Classroom", "Problem Solving", "Ceramah Interaktif",
    ],
  },
  {
    title: "Bahasa & Komunikasi",
    labels: [
      "High-Level Language", "Bahasa Santai", "Instruksi Clear", "Butuh Google",
      "To the Point", "Sering Humor", "Bilingual", "Monoton",
      "Ekspresif", "Penjelasan Berulang", "Sabar Menjawab",
    ],
  },
  {
    title: "Penilaian",
    labels: [
      "Nilai Objektif", "Fokus Presensi", "Reward Proses", "Standard Ketat",
      "Feedback Detail", "Nilai Murah", "Nilai Pelit", "Bonus Keaktifan",
      "Transparansi Nilai", "Rubrik Jelas", "Grading Curve",
    ],
  },
  {
    title: "Ujian & Tugas",
    labels: [
      "Ujian Open Book", "Case Study", "Fokus Hafalan", "Project Based",
      "Kuis Dadakan", "Take Home Exam", "Tugas Mingguan", "Presentasi Kelompok",
      "Essay Panjang", "Multiple Choice", "Praktikum Intensive", "Deadline Fleksibel",
    ],
  },
  {
    title: "Vibe Check",
    labels: [
      "Experience Oriented", "On Time", "Resourceful", "Friendly Vibe",
      "Galak Tapi Baik", "Approachable", "Inspiratif", "Tegas",
      "Humoris", "Supportive", "Perfeksionis", "Santai Tapi Serius",
    ],
  },
  {
    title: "Materi & Referensi",
    labels: [
      "Materi Up-to-Date", "Banyak Referensi", "Pakai Jurnal Internasional",
      "Slide Lengkap", "Modul Sendiri", "Rekomendasi Buku", "Video Pendukung",
      "Studi Kasus Lokal", "Real-World Example",
    ],
  },
  {
    title: "Ketersediaan & Bimbingan",
    labels: [
      "Mudah Dihubungi", "Bimbingan Intensif", "Konsultasi Terbuka",
      "Respon Cepat", "Mentoring Personal", "Office Hour Rutin",
      "Sulit Ditemui", "Sibuk Tapi Responsif",
    ],
  },
];

// Penilaian (tanpa komentar bebas - Objective Labeling System)
export interface Review {
  id: string;
  professorNidn: string;
  labels: string[];
  date: string;
  author: string;
}

export const getReviews = (nidn: string): Review[] => {
  const stored = localStorage.getItem(`reviews_${nidn}`);
  return stored ? JSON.parse(stored) : [];
};

export const addReview = (review: Review) => {
  const existing = getReviews(review.professorNidn);
  existing.push(review);
  localStorage.setItem(`reviews_${review.professorNidn}`, JSON.stringify(existing));
};

// Contact messages
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

export const getContactMessages = (): ContactMessage[] => {
  const stored = localStorage.getItem("contact_messages");
  return stored ? JSON.parse(stored) : [];
};

export const addContactMessage = (msg: ContactMessage) => {
  const existing = getContactMessages();
  existing.push(msg);
  localStorage.setItem("contact_messages", JSON.stringify(existing));
};

// Survival Roadmap - tips belajar berdasarkan label dosen
export const survivalTips: Record<string, string> = {
  "Metode Satu Arah": "Siapkan catatan sendiri karena dosen cenderung ceramah satu arah. Rekam poin penting dan review setelah kelas.",
  "Full Discussion": "Persiapkan materi sebelum kelas agar bisa aktif berdiskusi. Semakin aktif, semakin banyak insight yang didapat.",
  "Speed Runner": "Dosen ini cepat! Baca materi terlebih dahulu dan catat pertanyaan agar tidak tertinggal.",
  "Deep Diver": "Siap-siap mendalami topik secara mendetail. Bawa rasa penasaran dan jangan takut bertanya lebih dalam.",
  "Analogi Realistis": "Manfaatkan analogi dosen untuk memahami konsep kompleks. Hubungkan dengan pengalaman nyata kamu.",
  "Slide-Heavy": "Download dan pelajari slide sebelum kelas. Fokus pada poin yang tidak ada di slide saat kuliah berlangsung.",
  "Hands-On Practice": "Siapkan laptop/peralatan praktik. Belajar sambil mencoba langsung akan sangat membantu pemahaman.",
  "Storytelling": "Dengarkan cerita dosen dengan seksama — seringkali ada pelajaran tersembunyi di balik setiap kisah.",
  "High-Level Language": "Dosen menggunakan bahasa akademik tinggi. Siapkan kamus istilah dan jangan malu bertanya jika tidak paham.",
  "Bahasa Santai": "Suasana kelas cenderung santai. Manfaatkan untuk bertanya lebih bebas tanpa tekanan.",
  "Instruksi Clear": "Instruksi dosen jelas — ikuti step-by-step dan kamu akan aman. Catat setiap instruksi yang diberikan.",
  "To the Point": "Dosen ini efisien. Fokus pada inti materi, jangan banyak bertanya di luar topik.",
  "Standard Ketat": "Perhatikan rubrik penilaian dengan detail. Pastikan semua kriteria terpenuhi sebelum mengumpulkan tugas.",
  "Reward Proses": "Tunjukkan progres belajarmu! Dosen ini menghargai usaha dan proses, bukan hanya hasil akhir.",
  "Nilai Objektif": "Penilaian berdasarkan standar yang jelas. Pelajari rubrik dan pastikan kualitas jawaban konsisten.",
  "Feedback Detail": "Manfaatkan feedback dosen untuk perbaikan. Setiap masukan adalah peluang untuk meningkatkan nilai.",
  "Project Based": "Mulai kerjakan proyek sejak awal. Konsultasikan progress secara berkala agar tidak menumpuk di akhir.",
  "Kuis Dadakan": "Selalu siap! Baca materi setiap minggu karena kuis bisa datang kapan saja tanpa pemberitahuan.",
  "Ujian Open Book": "Meskipun open book, pahami konsep dasarnya. Siapkan catatan yang terorganisir untuk akses cepat saat ujian.",
  "Case Study": "Latih kemampuan analisis dengan banyak membaca studi kasus. Pelajari framework analisis yang sering dipakai.",
  "Fokus Hafalan": "Buat flashcard atau mind map untuk materi yang perlu dihafal. Ulang secara rutin menjelang ujian.",
  "Friendly Vibe": "Dosen ini ramah dan approachable. Jangan ragu untuk berkonsultasi di luar jam kelas.",
  "On Time": "Datang tepat waktu! Dosen ini menghargai kedisiplinan dan bisa mempengaruhi penilaian kehadiran.",
  "Experience Oriented": "Siapkan pertanyaan berbasis pengalaman. Dosen menghargai mahasiswa yang mengaitkan teori dengan praktek.",
  "Resourceful": "Manfaatkan semua sumber belajar yang diberikan. Dosen ini biasanya memberikan banyak referensi tambahan.",
  "Galak Tapi Baik": "Jangan takut dengan kesan galak — dibaliknya ada niat baik. Tunjukkan usaha dan dosen akan mendukung.",
  "Mudah Dihubungi": "Gunakan kesempatan ini! Konsultasi via chat atau email untuk klarifikasi materi yang belum dipahami.",
  "Sulit Ditemui": "Rencanakan jadwal konsultasi jauh-jauh hari. Kirim email terlebih dahulu sebelum datang ke ruangan.",
  "Materi Up-to-Date": "Ikuti perkembangan terbaru di bidang ini. Dosen mungkin menguji dari materi terkini yang belum ada di buku.",
  "Banyak Referensi": "Minimal baca 2-3 referensi utama yang direkomendasikan. Jangan hanya mengandalkan satu sumber.",
  "Monoton": "Bawa strategi fokus sendiri — catat poin utama dan buat pertanyaan agar tetap engaged selama kelas.",
  "Sering Humor": "Nikmati suasana kelas yang menyenangkan, tapi tetap catat poin penting di balik humor dosen.",
  "Inspiratif": "Ambil motivasi dari dosen ini. Catat quotes atau insight yang bisa membantu perjalanan akademikmu.",
  "Supportive": "Jangan ragu minta bantuan. Dosen ini siap mendukung mahasiswa yang menunjukkan usaha.",
  "Take Home Exam": "Kelola waktu dengan baik. Meskipun dikerjakan di rumah, kualitas jawaban tetap harus dijaga.",
  "Tugas Mingguan": "Buat jadwal rutin untuk mengerjakan tugas mingguan. Jangan menunda agar tidak menumpuk.",
  "Presentasi Kelompok": "Latihan presentasi bersama tim. Pastikan setiap anggota memahami materi yang dipresentasikan.",
  "Slide Lengkap": "Slide sudah lengkap — fokus pada penjelasan verbal dosen yang tidak ada di slide.",
  "Bimbingan Intensif": "Manfaatkan sesi bimbingan sebaik-baiknya. Datang dengan persiapan dan pertanyaan yang jelas.",
  "Respon Cepat": "Dosen merespon cepat — jangan tunda untuk bertanya jika ada yang tidak dipahami.",
};
