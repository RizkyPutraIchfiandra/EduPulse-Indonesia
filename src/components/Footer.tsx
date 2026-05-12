import { BookOpen, Heart } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-indigo-dark" />

    <div className="relative container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground/80" />
          </div>
          <div className="flex items-center gap-1">
            <span className="font-display font-bold text-primary-foreground/90">EduPulse</span>
            <span className="font-display font-bold text-teal-light">ID</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-primary-foreground/40 text-sm">
          <span>Dibuat dengan</span>
          <Heart className="w-3.5 h-3.5 text-coral fill-coral" />
          <span>untuk pendidikan Indonesia</span>
        </div>

        <p className="text-primary-foreground/40 text-sm">
          © 2026 EduPulse Indonesia · SDG 4
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
