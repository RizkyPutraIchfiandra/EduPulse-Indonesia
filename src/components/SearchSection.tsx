import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import ProfessorCard from "./ProfessorCard";
import { professors } from "@/data/professors";

const SearchSection = () => {
  const [query, setQuery] = useState("");

  const filtered = professors.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.university.toLowerCase().includes(query.toLowerCase()) ||
      p.department.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="cari-dosen" className="py-16 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal-muted text-teal-dark text-xs font-semibold mb-4">PENCARIAN</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cari <span className="text-gradient">Dosen</span> Favoritmu
          </h2>
          <p className="text-muted-foreground">
            Temukan profil dosen berdasarkan nama, universitas, atau jurusan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-14"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo/20 via-teal/20 to-indigo/20 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity" />
            <div className="relative flex items-center">
              <Search className="absolute left-5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari berdasarkan nama, universitas, atau jurusan..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-14 py-4 rounded-2xl glass-strong text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo/30 transition-all text-sm shadow-card"
              />
              <button className="absolute right-3 p-2.5 rounded-xl bg-gradient-to-r from-indigo to-indigo-dark text-primary-foreground hover:shadow-glow-indigo/50 transition-all">
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {filtered.map((p, i) => (
            <ProfessorCard key={p.nidn} professor={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Sparkles className="w-10 h-10 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Tidak ada dosen yang ditemukan untuk "<span className="text-foreground font-medium">{query}</span>"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchSection;
