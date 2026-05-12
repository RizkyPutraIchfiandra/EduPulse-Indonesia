import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, User, Building2, BookMarked, Send, Tag, Clock, Sparkles, Map, Lightbulb, Shield } from "lucide-react";
import { professors, labelCategories, getReviews, addReview, survivalTips, type Review } from "@/data/professors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const GOOGLE_SCRIPT_URL_RATING =
  "https://script.google.com/macros/s/AKfycbyGkH7X7JNT9ZdyimrH08S9ZmPt69QFFARavFTlLdqdp175Pf5f-J3fRH5cEVjY491JXA/exec";

const ProfessorDetail = () => {
  const { nidn } = useParams<{ nidn: string }>();
  const professor = professors.find((p) => p.nidn === nidn);
  const [reviews, setReviews] = useState<Review[]>(getReviews(nidn || ""));
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [author, setAuthor] = useState("");
  const { toast } = useToast();

  if (!professor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <Sparkles className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">Dosen tidak ditemukan.</p>
          <Link to="/#cari-dosen" className="text-indigo font-medium mt-4 inline-block hover:underline">
            ← Kembali ke pencarian
          </Link>
        </div>
      </div>
    );
  }

  const toggleLabel = (label: string) => {
    setSelectedLabels((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedLabels.length === 0) return;

    const review: Review = {
      id: Date.now().toString(),
      professorNidn: professor.nidn,
      labels: selectedLabels,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      author: author.trim() || "Anonim",
    };

    // 1) Simpan lokal supaya UI tetap responsif
    addReview(review);
    setReviews(getReviews(professor.nidn));
    setSelectedLabels([]);
    setAuthor("");

    // 2) Kirim ke Google Sheets via Apps Script (best effort)
    try {
      const payload = {
        type: "rating",
        id: review.id,

        // timestamps (helps when Apps Script expects ISO or epoch)
        timestamp: Date.now(),
        date: review.date,
        dateISO: new Date().toISOString(),
        waktu_kirim: review.date,
        waktuKirim: review.date,
        waktu_kirim_iso: new Date().toISOString(),
        waktuKirimISO: new Date().toISOString(),

        // identifiers
        professorNidn: review.professorNidn,
        nidn: review.professorNidn,

        // "Nama Dosen"
        professorName: professor.name,
        nama_dosen: professor.name,
        namaDosen: professor.name,
        lecturerName: professor.name,
        dosen: professor.name,

        // "Nama Pengirim"
        author: review.author,
        nama_pengirim: review.author,
        namaPengirim: review.author,
        senderName: review.author,
        pengirim: review.author,

        // "Label Dosen"
        labels: review.labels,
        label: review.labels.join(", "),
        label_dosen: review.labels.join(", "),
        labelDosen: review.labels.join(", "),
        label_dosen_str: review.labels.join(", "),
      };

      await fetch(GOOGLE_SCRIPT_URL_RATING, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      toast({
        title: "✅ Penilaian Terkirim!",
        description: `Terima kasih telah memberikan penilaian untuk ${professor.name}.`,
      });
    } catch {
      toast({
        title: "⚠️ Penilaian tersimpan lokal, tapi gagal kirim ke spreadsheet",
        description: "Silakan coba lagi. Riwayat penilaian tetap ada di perangkat ini.",
        variant: "destructive",
      });
    }
  };

  // Hitung label populer
  const labelVotes: Record<string, number> = {};
  reviews.forEach((r) => r.labels.forEach((l) => {
    labelVotes[l] = (labelVotes[l] || 0) + 1;
  }));
  professor.labels.forEach((l) => {
    labelVotes[l] = (labelVotes[l] || 0) + 1;
  });
  const topLabels = Object.entries(labelVotes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // Survival Roadmap - tips berdasarkan label dominan
  const dominantLabels = topLabels.slice(0, 5).map(([label]) => label);
  const roadmapTips = dominantLabels
    .filter((label) => survivalTips[label])
    .map((label) => ({ label, tip: survivalTips[label] }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Toaster />
      <main className="pt-24 pb-16 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-indigo/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/#cari-dosen"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke pencarian
          </Link>

          {/* Professor Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-6 md:p-8 shadow-card mb-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo via-teal to-coral" />
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-indigo" />
              </div>
              <div className="flex-1">
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {professor.name}
                </h1>
                <p className="text-sm text-muted-foreground mb-3 font-mono">NIDN: {professor.nidn}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-indigo/50" />
                    {professor.university}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookMarked className="w-4 h-4 text-teal/50" />
                    {professor.department}
                  </span>
                </div>
              </div>
            </div>

            {topLabels.length > 0 && (
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-indigo" />
                  Label Populer
                </p>
                <div className="flex flex-wrap gap-2">
                  {topLabels.map(([label, count]) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-muted text-indigo-dark text-xs font-medium"
                    >
                      {label}
                      <span className="bg-indigo/10 text-indigo px-1.5 py-0.5 rounded-lg text-[10px] font-bold">
                        {count}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Survival Roadmap */}
          {roadmapTips.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-card mb-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-coral to-amber" />
              <h2 className="font-display text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                <Map className="w-5 h-5 text-teal" />
                Survival Roadmap
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Tips belajar yang disesuaikan berdasarkan karakteristik mengajar dosen ini.
              </p>
              <div className="space-y-3">
                {roadmapTips.map(({ label, tip }, i) => (
                  <div key={label} className="flex gap-3 items-start bg-secondary/40 rounded-2xl p-4">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal/10 to-coral/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-0.5">{label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Review Form - Objective Labeling Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
                <h2 className="font-display text-xl font-bold text-foreground mb-1 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo" />
                  Beri Penilaian Objektif
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Pilih label yang paling menggambarkan gaya mengajar dosen ini.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {labelCategories.map((cat) => (
                    <div key={cat.title}>
                      <p className="text-sm font-semibold text-foreground mb-2">{cat.title}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.labels.map((label) => {
                          const selected = selectedLabels.includes(label);
                          return (
                            <button
                              type="button"
                              key={label}
                              onClick={() => toggleLabel(label)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                                selected
                                  ? "bg-gradient-to-r from-indigo to-indigo-dark text-primary-foreground shadow-sm scale-105"
                                  : "bg-secondary text-secondary-foreground hover:bg-border hover:-translate-y-0.5"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Nama (opsional)
                    </label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Anonim"
                      maxLength={50}
                      className="w-full px-4 py-3.5 rounded-2xl bg-secondary/70 border-0 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={selectedLabels.length === 0}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo to-indigo-dark text-primary-foreground font-semibold text-sm hover:shadow-glow-indigo/50 hover:scale-[1.02] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Penilaian
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Reviews list - Labels only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-3xl p-6 shadow-card">
                <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-teal" />
                  Riwayat Penilaian
                  <span className="ml-auto text-xs font-normal text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                    {reviews.length}
                  </span>
                </h2>

                {reviews.length === 0 ? (
                  <div className="text-center py-10">
                    <Tag className="w-10 h-10 text-muted-foreground/15 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Belum ada penilaian. Jadilah yang pertama!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                    {[...reviews].reverse().map((r) => (
                      <div key={r.id} className="bg-secondary/40 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-foreground">{r.author}</span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {r.date}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {r.labels.map((l) => (
                            <span key={l} className="px-2 py-0.5 rounded-lg bg-indigo-muted text-indigo-dark text-[10px] font-medium">
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfessorDetail;
