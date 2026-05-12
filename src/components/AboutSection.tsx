import { motion } from "framer-motion";
import { Target, Users, BarChart3, GraduationCap, CheckCircle2, Globe, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Misi Kami",
    description: "Menjembatani kesenjangan informasi antara mahasiswa dan dosen melalui platform transparan dan terpercaya.",
    gradient: "from-indigo to-indigo-light",
    bgMuted: "bg-indigo-muted",
  },
  {
    icon: Users,
    title: "Berbasis Komunitas",
    description: "Didukung oleh ulasan sesama mahasiswa Indonesia untuk perspektif jujur, relevan, dan real-time.",
    gradient: "from-teal to-teal-light",
    bgMuted: "bg-teal-muted",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Sistem label terstruktur untuk analisis gaya mengajar secara objektif dan terukur.",
    gradient: "from-coral to-coral-light",
    bgMuted: "bg-coral-muted",
  },
  {
    icon: GraduationCap,
    title: "SDG 4",
    description: "Sejalan dengan Tujuan Pembangunan Berkelanjutan PBB untuk Pendidikan Berkualitas.",
    gradient: "from-amber to-amber",
    bgMuted: "bg-amber-muted",
  },
];

const stats = [
  { value: "500+", label: "Dosen Terdaftar" },
  { value: "10K+", label: "Ulasan Mahasiswa" },
  { value: "50+", label: "Universitas" },
  { value: "25+", label: "Kategori Label" },
];

const whyPoints = [
  { icon: CheckCircle2, text: "Pilih mata kuliah berdasarkan gaya belajar kamu" },
  { icon: Globe, text: "Platform terbuka untuk seluruh mahasiswa Indonesia" },
  { icon: Shield, text: "Ulasan anonim dan aman — privasi terjaga" },
  { icon: Heart, text: "Kontribusi nyata untuk peningkatan kualitas pendidikan" },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-muted text-indigo text-xs font-semibold mb-4">TENTANG KAMI</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Navigasi Akademik{" "}
            <span className="text-gradient">Generasi Baru</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            EduPulse Indonesia adalah platform komunitas yang membantu mahasiswa menemukan, memahami, dan berbagi informasi tentang gaya mengajar dosen di seluruh Indonesia — agar setiap mahasiswa bisa belajar dengan cara terbaik mereka.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
            >
              <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-12 h-12 rounded-2xl ${f.bgMuted} flex items-center justify-center mb-5`}>
                <f.icon className="w-5 h-5" style={{ color: "hsl(var(--indigo))" }} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 mb-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why EduPulse + Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-teal-muted text-teal text-xs font-semibold mb-4">KENAPA EDUPULSE?</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Belajar Lebih Efektif Dimulai dari{" "}
              <span className="text-gradient">Mengenali Dosenmu</span>
            </h3>
            <div className="space-y-4">
              {whyPoints.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-xl bg-indigo-muted flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-4 h-4 text-indigo" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 shadow-card"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-coral-muted text-coral text-xs font-semibold mb-4">CERITA KAMI</span>
            <h4 className="font-display text-xl font-bold text-foreground mb-4">Lahir dari Kebutuhan Nyata</h4>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                EduPulse Indonesia lahir dari pengalaman nyata mahasiswa yang sering kesulitan memilih dosen atau mata kuliah tanpa informasi yang cukup. Banyak mahasiswa baru yang bingung dan hanya mengandalkan "kata teman" yang belum tentu akurat.
              </p>
              <p>
                Kami percaya setiap mahasiswa berhak mendapatkan informasi transparan tentang gaya mengajar dosen — bukan untuk menilai baik atau buruk, tapi untuk mencocokkan gaya belajar mereka dengan metode pengajaran yang paling efektif.
              </p>
              <p>
                Dengan sistem label yang terstruktur dan ulasan berbasis komunitas, EduPulse menjadi jembatan informasi yang selama ini belum ada di ekosistem pendidikan tinggi Indonesia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
