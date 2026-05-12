import { motion } from "framer-motion";
import { Search, ArrowRight, Zap, GraduationCap } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const floatingLabels = [
  { text: "Full Discussion", x: "75%", y: "15%", delay: 0 },
  { text: "Friendly Vibe", x: "85%", y: "55%", delay: 0.5 },
  { text: "Deep Diver", x: "70%", y: "80%", delay: 1 },
];

const HeroSection = () => {
  return (
    <section id="beranda" className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-x-hidden overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full bg-indigo/8 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-40 -left-40 w-[250px] h-[250px] md:w-[600px] md:h-[600px] rounded-full bg-teal/8 blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-coral/5 blur-3xl animate-pulse-soft" style={{ animationDelay: "4s" }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-teal to-teal-light text-accent-foreground text-xs font-semibold">
                <GraduationCap className="w-3 h-3" />
                SDG 4
              </span>
              <span className="text-sm text-muted-foreground">Quality Education</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-foreground mb-6 tracking-tight">
              Temukan Dosen
              <br />
              Ideal,{" "}
              <span className="text-gradient">Optimalkan</span>
              <br />
              Pengalaman Belajar
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Platform navigasi akademik yang membantu mahasiswa memahami gaya mengajar dosen 
              melalui sistem label inovatif.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cari-dosen"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-indigo to-indigo-dark text-primary-foreground font-semibold text-sm shadow-glow-indigo hover:shadow-glow-indigo/80 hover:scale-[1.02] transition-all"
              >
                <Search className="w-4 h-4" />
                Cari Dosen Sekarang
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl glass text-foreground font-semibold text-sm hover:bg-secondary transition-all"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 md:gap-8 mt-12 pt-8 border-t border-border/50 flex-wrap">
              {[
                { value: "10+", label: "Universitas" },
                { value: "100+", label: "Dosen Terdaftar" },
                { value: "5", label: "Kategori Label" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex-shrink-0"
                >
                  <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-indigo/10 animate-spin-slow" />
            </div>

            <div className="relative z-10 animate-float">
              <img
                src={heroIllustration}
                alt="Mahasiswa Indonesia berkolaborasi untuk pendidikan berkualitas"
                className="w-full max-w-[200px] sm:max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </div>

            {/* Floating label badges */}
            {floatingLabels.map((fl, i) => (
              <motion.div
                key={fl.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + fl.delay }}
                className="absolute hidden md:block animate-float-slow glass px-3 py-1.5 rounded-xl shadow-card"
                style={{ left: fl.x, top: fl.y, animationDelay: `${fl.delay * 2}s` }}
              >
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-indigo" />
                  <span className="text-xs font-medium text-foreground whitespace-nowrap">{fl.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
