import { motion } from "framer-motion";
import { Lightbulb, MessageCircle, Award, ClipboardList, Sparkles, BookOpen, HeartHandshake } from "lucide-react";

const categories = [
  {
    icon: Lightbulb,
    title: "Cara Mengajar",
    gradient: "from-indigo to-indigo-light",
    bgIcon: "bg-indigo-muted",
    iconColor: "text-indigo",
    labels: [
      "Metode Satu Arah", "Full Discussion", "Speed Runner", "Deep Diver",
      "Analogi Realistis", "Slide-Heavy", "Hands-On Practice", "Storytelling",
      "Demonstrasi Langsung", "Flipped Classroom", "Problem Solving", "Ceramah Interaktif",
    ],
  },
  {
    icon: MessageCircle,
    title: "Bahasa & Komunikasi",
    gradient: "from-teal to-teal-light",
    bgIcon: "bg-teal-muted",
    iconColor: "text-teal",
    labels: [
      "High-Level Language", "Bahasa Santai", "Instruksi Clear", "Butuh Google",
      "To the Point", "Sering Humor", "Bilingual", "Monoton",
      "Ekspresif", "Penjelasan Berulang", "Sabar Menjawab",
    ],
  },
  {
    icon: Award,
    title: "Penilaian",
    gradient: "from-amber to-amber",
    bgIcon: "bg-amber-muted",
    iconColor: "text-amber",
    labels: [
      "Nilai Objektif", "Fokus Presensi", "Reward Proses", "Standard Ketat",
      "Feedback Detail", "Nilai Murah", "Nilai Pelit", "Bonus Keaktifan",
      "Transparansi Nilai", "Rubrik Jelas", "Grading Curve",
    ],
  },
  {
    icon: ClipboardList,
    title: "Ujian & Tugas",
    gradient: "from-coral to-coral-light",
    bgIcon: "bg-coral-muted",
    iconColor: "text-coral",
    labels: [
      "Ujian Open Book", "Case Study", "Fokus Hafalan", "Project Based",
      "Kuis Dadakan", "Take Home Exam", "Tugas Mingguan", "Presentasi Kelompok",
      "Essay Panjang", "Multiple Choice", "Praktikum Intensive", "Deadline Fleksibel",
    ],
  },
  {
    icon: Sparkles,
    title: "Vibe Check",
    gradient: "from-rose to-rose",
    bgIcon: "bg-rose-muted",
    iconColor: "text-rose",
    labels: [
      "Experience Oriented", "On Time", "Resourceful", "Friendly Vibe",
      "Galak Tapi Baik", "Approachable", "Inspiratif", "Tegas",
      "Humoris", "Supportive", "Perfeksionis", "Santai Tapi Serius",
    ],
  },
  {
    icon: BookOpen,
    title: "Materi & Referensi",
    gradient: "from-indigo to-teal",
    bgIcon: "bg-indigo-muted",
    iconColor: "text-indigo",
    labels: [
      "Materi Up-to-Date", "Banyak Referensi", "Pakai Jurnal Internasional",
      "Slide Lengkap", "Modul Sendiri", "Rekomendasi Buku", "Video Pendukung",
      "Studi Kasus Lokal", "Real-World Example",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Ketersediaan & Bimbingan",
    gradient: "from-teal to-coral",
    bgIcon: "bg-teal-muted",
    iconColor: "text-teal",
    labels: [
      "Mudah Dihubungi", "Bimbingan Intensif", "Konsultasi Terbuka",
      "Respon Cepat", "Mentoring Personal", "Office Hour Rutin",
      "Sulit Ditemui", "Sibuk Tapi Responsif",
    ],
  },
];

const LabelCloudSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-coral-muted text-coral text-xs font-semibold mb-4">LABEL SYSTEM</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Sistem Label{" "}
            <span className="text-gradient">Terstruktur</span>
          </h2>
          <p className="text-muted-foreground">
            Tujuh kategori dengan 75+ label unik untuk menggambarkan gaya mengajar dosen secara komprehensif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative bg-card rounded-3xl p-5 shadow-card hover:shadow-card-hover transition-all ${i === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${cat.gradient} opacity-40`} />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-2xl ${cat.bgIcon} flex items-center justify-center`}>
                  <cat.icon className={`w-4.5 h-4.5 ${cat.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground">{cat.labels.length} label</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.labels.map((label) => (
                  <span
                    key={label}
                    className="px-2.5 py-1 rounded-xl bg-secondary text-secondary-foreground text-xs font-medium hover:bg-border hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabelCloudSection;
