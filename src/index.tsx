import {
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  LineChart,
  Users2,
  Headphones,
} from "lucide-react";

import heroMeeting from "./assets/hero-meeting.jpg";
import aboutTeam from "./assets/about-team.jpg";
import mark from "./assets/imperium-mark.png";
import jesika from "./assets/jesika.png";
import atikoh from "./assets/atikoh.png";
import gabriela from "./assets/gabriela.png";
import iqlima from "./assets/iqlima.png";
import lubna from "./assets/lubna.png";
import tesa from "./assets/tesa.png";
import fadjri from "./assets/fadjri.png";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
];

const services = [
  {
    num: "01",
    tag: "DEVELOPMENT",
    icon: Code2,
    title: "Custom Software Development",
    desc: "Pengembangan aplikasi web dan sistem internal yang dirancang khusus mengikuti alur kerja bisnis Anda secara presisi.",
    highlights: ["Sistem Web Custom", "Alur Kerja Otomatis", "Arsitektur Scalable"],
  },
  {
    num: "02",
    tag: "CONSULTATION",
    icon: LineChart,
    title: "Free IT & Business Consultation",
    desc: "Sesi diskusi & analisis gratis untuk memetakan kebutuhan teknologi serta menentukan prioritas digitalisasi perusahaan.",
    highlights: ["Analisis Kebutuhan", "Pemetaan Alur Kerja", "Rekomendasi Solusi"],
  },
  {
    num: "03",
    tag: "TRAINING",
    icon: Users2,
    title: "Free Hands-on Training / Bimtek",
    desc: "Pelatihan teknis langsung bagi tim Anda agar sistem baru dapat dioperasikan secara mandiri dan optimal.",
    highlights: ["Bimbingan Langsung", "Modul Operasional", "Pendampingan Tim"],
  },
  {
    num: "04",
    tag: "SUPPORT",
    icon: Headphones,
    title: "Free Maintenance During Contract",
    desc: "Perawatan sistem rutin, perbaikan kendala, dan support teknis tanpa biaya tambahan selama masa kontrak berjalan.",
    highlights: ["Jaminan Bebas Bug", "Support Fast-Response", "Update Berkala"],
  },
];

const members = [
  { name: "Jesika Tan", role: "Project Manager", img: jesika },
  { name: "Atikoh", role: "Marketing", img: atikoh },
  { name: "Gabriela Evelyn Anzelbi", role: "System Analyst", img: gabriela },
  { name: "Iqlima Nur'ain", role: "UI/UX Designer", img: iqlima },
  { name: "Lubna Adibah", role: "Quality Assurance", img: lubna },
  { name: "Tesa Firna Ananta", role: "Programmer", img: tesa },
  { name: "M Fadjri Akbar", role: "Programmer", img: fadjri },
];

const contactItems = [
  { icon: User, label: "Kontak Utama", value: "Jesika Tan" },
  { icon: Phone, label: "Telepon / WhatsApp", value: "+62 896 6854 6886" },
  { icon: Mail, label: "Email Resmi", value: "jesikatan90@gmail.com" },
  { icon: MapPin, label: "Lokasi Kantor", value: "Pontianak, Kalimantan Barat" },
];

// Component Logo Presisi Sejajar & Tanpa Jeda
function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#beranda" className={`inline-flex items-center leading-none group cursor-pointer ${className}`}>
      {/* Icon logo im menempel langsung tanpa margin kanan */}
      <img
        src={mark}
        alt="Imperium Logo"
        className="h-7 w-auto object-contain -mr-0.5 transition-transform group-hover:scale-105"
      />
      {/* PERIUM & STUDIO disamakan ukuran, font-family, dan font-weight */}
      <span className="inline-flex items-center gap-1 text-base font-black tracking-wider uppercase font-spartan">
        <span className={light ? "text-white" : "text-brand"}>PERIUM</span>
        <span className={light ? "text-white" : "text-foreground font-black"}>STUDIO</span>
      </span>
    </a>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/10 bg-background/95 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <ul className="flex items-center space-x-6 sm:space-x-8 text-xs font-bold tracking-widest uppercase text-brand font-spartan">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-brand/70 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// SEKSI 01: HERO / BERANDA (Sisi kanan Intro diperbaiki total)
function HeroSection() {
  return (
    <section id="beranda" className="relative border-b border-brand/10 bg-background py-16 lg:py-20 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sisi Kiri: Typography Header & Hero Image Frame */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-bold tracking-widest text-brand uppercase font-spartan mb-4">
                <Sparkles size={14} className="text-brand" />
                <span>IT CONSULTANT & SYSTEM AUTOMATION</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-brand tracking-tighter leading-[0.9] font-spartan">
                OTOMATISASI<br />
                PINTAR.
              </h1>
              <p className="mt-4 text-base font-medium text-foreground/80 max-w-xl">
                Akselerasi efisiensi bisnis Anda melalui sistem digital terintegrasi yang dirancang khusus sesuai alur kerja perusahaan.
              </p>
            </div>

            {/* Frame Foto Utama dengan Floating Badge */}
            <div className="relative mt-8 group">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-brand/20 shadow-xl bg-card">
                <img
                  src={heroMeeting}
                  alt="Tim Imperium Studio"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold font-spartan tracking-wider uppercase">
                    ✦ TRANSFORMASI DIGITAL BISNIS
                  </span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold">
                    PONTIANAK HQ
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#tentang-kami"
                className="inline-flex items-center gap-3 rounded-lg bg-brand px-8 py-4 text-xs font-extrabold tracking-widest uppercase text-brand-foreground shadow-lg transition-all hover:bg-brand/90 hover:scale-[1.02] hover:shadow-xl font-spartan"
              >
                EKSPLORASI SELENGKAPNYA <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Intro Card Bersih & Interaktif (Tanpa angka menimpa) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-brand/20 bg-card p-8 shadow-md relative overflow-hidden">
            {/* Top Bar Card */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand/10">
                <span className="text-xs font-black tracking-widest text-brand font-spartan uppercase">
                  #01 INTRODUCTIONS
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  AKTIF & SIAP
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-extrabold text-brand font-spartan uppercase">
                  MITRA TEKNOLOGI TERPERCAYA
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80 font-medium">
                  Imperium Studio merancang dan mengintegrasikan sistem digital yang disesuaikan penuh dengan operasional bisnis Anda. Kami memastikan tim Anda memiliki kendali penuh atas teknologi masa depan.
                </p>
              </div>

              {/* Poin-poin Keunggulan Interaktif */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-brand/5 border border-brand/10">
                  <Zap className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand font-spartan uppercase">100% Custom Workflow</h4>
                    <p className="text-[12px] text-foreground/70">Disesuaikan tanpa batasan template kaku.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-brand/5 border border-brand/10">
                  <ShieldCheck className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-brand font-spartan uppercase">Pendampingan & Garansi</h4>
                    <p className="text-[12px] text-foreground/70">Bimbingan bimtek & maintenance terjamin.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="mt-8 pt-4 border-t border-brand/10 flex items-center justify-between text-xs font-bold text-foreground/60 font-spartan">
              <span>SOLUSI IT TERINTEGRASI</span>
              <a href="#layanan" className="text-brand hover:underline flex items-center gap-1">
                LAYANAN →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 02: TENTANG KAMI
function AboutSection() {
  return (
    <section id="tentang-kami" className="relative border-b border-brand/10 bg-background py-20 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Kolom Kiri: Teks & Visi */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold tracking-widest text-brand font-spartan uppercase block mb-2">
              #02 TENTANG IMPERIUM STUDIO
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-brand tracking-tighter leading-tight font-spartan">
              KEDAULATAN DIGITAL UNTUK BISNIS ANDA.
            </h2>
            
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-foreground/80 font-medium">
              Kami percaya bahwa teknologi terbaik adalah teknologi yang mudah digunakan dan memberikan kendali penuh kepada pemilik bisnis.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-brand/15 bg-card">
                <CheckCircle2 className="h-6 w-6 text-brand mb-2" />
                <h3 className="font-bold text-sm text-brand font-spartan uppercase">Otomatisasi Data</h3>
                <p className="text-xs text-foreground/70 mt-1">Mengurangi pekerjaan manual yang berulang secara efektif.</p>
              </div>
              <div className="p-4 rounded-xl border border-brand/15 bg-card">
                <CheckCircle2 className="h-6 w-6 text-brand mb-2" />
                <h3 className="font-bold text-sm text-brand font-spartan uppercase">Kemudahan Kelola</h3>
                <p className="text-xs text-foreground/70 mt-1">Sistem dirancang intuitif untuk dapat dikelola tim mandiri.</p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Foto Tim dengan Frame Stylized */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border-2 border-brand/20 shadow-2xl bg-card">
                <img
                  src={aboutTeam}
                  alt="Tim Imperium Studio"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-brand text-brand-foreground px-6 py-4 rounded-xl shadow-lg border border-white/20">
                <p className="text-2xl font-black font-spartan">100%</p>
                <p className="text-[10px] font-bold tracking-widest uppercase font-spartan opacity-90">Dedikasi Solusi</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 03: LAYANAN (Bento Grid Interaktif)
function ServicesSection() {
  return (
    <section id="layanan" className="relative border-b border-brand/10 bg-muted/30 py-20 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-brand/15">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand font-spartan uppercase block mb-2">
              #03 PENGEMBANGAN & PENDAMPINGAN
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-brand tracking-tighter font-spartan">
              LAYANAN UTAMA.
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/75 leading-relaxed font-medium">
            Solusi pengembangan sistem modern dan dukungan IT komprehensif tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Bento Grid Layout Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative flex flex-col justify-between rounded-2xl border border-brand/15 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    <s.icon size={20} />
                  </span>
                  <span className="font-spartan text-xl font-black text-brand/30 group-hover:text-brand">
                    {s.num}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-brand font-spartan uppercase leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-foreground/75">
                  {s.desc}
                </p>

                {/* Highlight Badges */}
                <div className="mt-6 space-y-2">
                  {s.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-[11px] font-semibold text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border text-[10px] font-bold tracking-widest text-brand uppercase font-spartan flex items-center justify-between">
                <span>IMPERIUM SERVICE</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SEKSI 04: ANGGOTA TIM
function TeamSection() {
  return (
    <section id="anggota" className="relative border-b border-brand/10 bg-background py-20 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-brand/15">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand font-spartan uppercase block mb-2">
              #04 TIM PROFESIONAL
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-brand tracking-tighter font-spartan">
              ANGGOTA TIM.
            </h2>
          </div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-brand font-spartan bg-brand/5 px-4 py-2 rounded-full border border-brand/10">
            7 TALENTA DEDIKATIF
          </p>
        </div>

        {/* Card Grid Anggota Tim */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="group relative rounded-2xl border border-brand/15 bg-card overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-card border-t border-brand/10">
                <p className="font-extrabold text-sm text-brand font-spartan uppercase tracking-tight">
                  {m.name}
                </p>
                <p className="text-xs text-foreground/70 font-medium mt-0.5">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SEKSI 05: KONTAK & FOOTER
function ContactSection() {
  return (
    <section id="kontak" className="relative bg-brand text-brand-foreground py-20 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Informasi Kontak */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold tracking-widest uppercase opacity-75 font-spartan block mb-2">
              #05 MARI BEKERJA SAMA
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-tight font-spartan">
              INFORMASI KONTAK.
            </h2>
            <p className="mt-4 text-sm opacity-90 max-w-md">
              Siap melangkah ke tahap berikutnya? Hubungi kami untuk konsultasi awal mengenai kebutuhan otomatisasi bisnis Anda.
            </p>

            <div className="mt-10 space-y-5 max-w-lg">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-brand">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-75 font-spartan">
                      {item.label}
                    </span>
                    <span className="block text-base font-extrabold font-spartan tracking-tight">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Foto Kontak Manager */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border-4 border-white/20 shadow-2xl overflow-hidden bg-white/5">
              <img
                src={jesika}
                alt="Jesika Tan Kontak Utama"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-brand/90 p-5 backdrop-blur-md border-t border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest font-spartan opacity-80">
                  PROJECT MANAGER
                </p>
                <p className="text-xl font-black font-spartan">Jesika Tan</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Minimalis (Tulisan IMPERIUM STUDIO Serba Putih) */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold tracking-widest uppercase font-spartan gap-4">
          {/* Memakai prop light={true} agar teks logo berwarna putih penuh */}
          <Logo light={true} />
          <span className="opacity-80">© {new Date().getFullYear()} IMPERIUM STUDIO. ALL RIGHTS RESERVED.</span>
        </div>

      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-brand selection:text-brand-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}