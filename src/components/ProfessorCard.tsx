import { motion } from "framer-motion";
import { User, Building2, BookMarked, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Professor } from "@/data/professors";

const labelColorMap: Record<string, string> = {
  "Full Discussion": "bg-teal-muted text-teal-dark",
  "Deep Diver": "bg-teal-muted text-teal-dark",
  "Analogi Realistis": "bg-teal-muted text-teal-dark",
  "Friendly Vibe": "bg-indigo-muted text-indigo-dark",
  "Instruksi Clear": "bg-teal-muted text-teal-dark",
  "Reward Proses": "bg-amber-muted text-amber",
  "On Time": "bg-teal-muted text-teal-dark",
  "Resourceful": "bg-indigo-muted text-indigo-dark",
  "Experience Oriented": "bg-coral-muted text-coral",
  "Feedback Detail": "bg-amber-muted text-amber",
  "Project Based": "bg-indigo-muted text-indigo-dark",
  "Case Study": "bg-indigo-muted text-indigo-dark",
  "Ujian Open Book": "bg-coral-muted text-coral",
  "Bahasa Santai": "bg-teal-muted text-teal-dark",
  "Standard Ketat": "bg-rose-muted text-rose",
  "Speed Runner": "bg-coral-muted text-coral",
  "To the Point": "bg-amber-muted text-amber",
  "Kuis Dadakan": "bg-rose-muted text-rose",
  "Slide-Heavy": "bg-secondary text-secondary-foreground",
  "High-Level Language": "bg-indigo-muted text-indigo-dark",
  "Fokus Hafalan": "bg-rose-muted text-rose",
  "Metode Satu Arah": "bg-secondary text-secondary-foreground",
  "Nilai Objektif": "bg-amber-muted text-amber",
};

const getColor = (label: string) => labelColorMap[label] || "bg-secondary text-secondary-foreground";

const ProfessorCard = ({ professor, index }: { professor: Professor; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="group relative bg-card rounded-3xl p-5 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1.5 overflow-hidden"
    >
      <Link
        to={`/dosen/${professor.nidn}`}
        className="absolute inset-0 z-10"
        aria-label={`Lihat detail ${professor.name}`}
      />
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/3 to-teal/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

      <div className="relative z-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo/10 to-teal/10 flex items-center justify-center flex-shrink-0 group-hover:from-indigo/20 group-hover:to-teal/20 transition-colors">
              <User className="w-5 h-5 text-indigo" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-sm text-foreground truncate">{professor.name}</h3>
              <p className="text-[11px] text-muted-foreground font-mono">NIDN: {professor.nidn}</p>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-muted-foreground transition-colors flex-shrink-0" />
        </div>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-indigo/50" />
            <span className="truncate">{professor.university}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <BookMarked className="w-3.5 h-3.5 flex-shrink-0 text-teal/50" />
            <span className="truncate">{professor.department}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {professor.labels.map((label) => (
            <span
              key={label}
              className={`inline-flex px-2.5 py-1 rounded-lg text-[11px] font-medium ${getColor(label)}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessorCard;
