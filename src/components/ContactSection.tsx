import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGY7wnhUH8lhJ07Hytpyo-LNl8beTf4-KI7_W3iQE6tjnQPFnq4NHgKuGjjpZLIdwJ/exec";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "⚠️ Form Belum Lengkap", description: "Mohon isi semua field sebelum mengirim.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({ title: "⚠️ Email Tidak Valid", description: "Mohon masukkan alamat email yang benar.", variant: "destructive" });
      return;
    }

    setSending(true);

    try {
      const payload = {
        id: Date.now().toString(),
        name: name.trim().slice(0, 100),
        email: email.trim().slice(0, 255),
        message: message.trim().slice(0, 1000),
        date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setName("");
      setEmail("");
      setMessage("");
      toast({ title: "✅ Pesan Berhasil Dikirim!", description: "Terima kasih! Kami akan segera merespons pesan Anda." });
    } catch {
      toast({ title: "❌ Gagal Mengirim", description: "Terjadi kesalahan. Silakan coba lagi.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontak" className="py-16 relative">
      <Toaster />
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-muted text-indigo text-xs font-semibold mb-4">KONTAK</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-muted-foreground">
            Punya pertanyaan atau masukan? Kami senang mendengar dari Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-7 shadow-card"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-2xl bg-secondary/70 border-0 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@contoh.com"
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-2xl bg-secondary/70 border-0 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Pesan</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan Anda di sini..."
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-2xl bg-secondary/70 border-0 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo to-indigo-dark text-primary-foreground font-semibold text-sm hover:shadow-glow-indigo/50 hover:scale-[1.02] transition-all disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {sending ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="bg-card rounded-3xl p-7 shadow-card space-y-4">
              {[
                { icon: Mail, label: "Email", value: "info@edupulse.id", color: "text-indigo", bg: "bg-indigo-muted" },
                { icon: Phone, label: "Telepon", value: "+62 21 1234 5678", color: "text-teal", bg: "bg-teal-muted" },
                { icon: MapPin, label: "Alamat", value: "Jakarta, Indonesia", color: "text-coral", bg: "bg-coral-muted" },
              ].map(({ icon: Icon, label, value, color, bg }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{label}</p>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Ikuti Kami</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, color: "hover:text-coral" },
                    { icon: Twitter, color: "hover:text-indigo" },
                    { icon: Linkedin, color: "hover:text-teal" },
                  ].map(({ icon: Icon, color }, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground ${color} hover:bg-secondary/80 transition-all`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl overflow-hidden shadow-card flex-1 min-h-[200px]">
              <iframe
                title="Lokasi EduPulse Indonesia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=106.7%2C-6.25%2C106.9%2C-6.15&layer=mapnik"
                className="w-full h-full min-h-[200px] border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
