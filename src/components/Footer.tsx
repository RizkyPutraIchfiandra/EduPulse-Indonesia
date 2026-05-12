import { Heart, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border/50">
    {/* Subtle gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-indigo-muted/20" />

    <div className="relative container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/Icon SE.png" alt="EduPulse Icon" className="w-8 h-8 object-contain" />
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-foreground">EduPulse</span>
              <span className="font-display font-bold text-gradient">ID</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4 max-w-md">
            Platform navigasi akademik yang membantu mahasiswa memahami gaya mengajar dosen melalui sistem label inovatif. Mendukung SDG 4 Quality Education.
          </p>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-indigo fill-indigo/20" />
            <span>untuk pendidikan Indonesia</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <a href="#beranda" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Beranda
              </a>
            </li>
            <li>
              <a href="#cari-dosen" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Cari Dosen
              </a>
            </li>
            <li>
              <a href="#tentang" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#kontak" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-display font-semibold text-foreground mb-4">Ikuti Kami</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-indigo-muted hover:text-indigo transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-indigo-muted hover:text-indigo transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-indigo-muted hover:text-indigo transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-indigo-muted hover:text-indigo transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2026 EduPulse Indonesia · SDG 4 Quality Education
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
