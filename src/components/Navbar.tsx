import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Menu, X, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Cari Dosen", href: "#cari-dosen" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (hashHref: string) => {
    // Kalau user sedang di route lain (/dosen/:nidn), pindahkan dulu ke "/" supaya section id ada,
    // baru hash-nya yang menentukan scroll.
    if (location.pathname !== "/") {
      navigate(`/${hashHref}`);
      return;
    }

    // Jika sudah di "/", cukup biarkan browser melakukan scroll berdasarkan hash.
    window.location.hash = hashHref;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-card" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="#beranda"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#beranda");
          }}
        >
          <img src="/Icon SE.png" alt="EduPulse Icon" className="w-9 h-9 object-contain" />
          <div className="flex items-center gap-1">
            <span className="font-display font-bold text-lg text-foreground">EduPulse</span>
            <span className="font-display font-bold text-lg text-gradient">ID</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-2xl bg-secondary/60 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo ml-2" />
          <p className="text-xs text-muted-foreground italic pr-3">
            Pahami Gaya Mengajar, Optimalkan Cara Belajar.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="relative px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-indigo to-teal group-hover:w-4 transition-all" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    handleNav(l.href);
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
