import {
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
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
    title: "Custom Software Development",
    desc: "Pengembangan aplikasi web dan sistem internal khusus yang disesuaikan presisi dengan alur kerja bisnis Anda.",
  },
  {
    num: "02",
    tag: "CONSULTATION",
    title: "Free IT & Business Consultation",
    desc: "Sesi konsultasi gratis untuk memetakan kebutuhan teknologi serta menentukan prioritas digitalisasi perusahaan.",
  },
  {
    num: "03",
    tag: "TRAINING",
    title: "Free Hands-on Training / Bimtek",
    desc: "Pelatihan langsung bagi tim Anda agar sistem baru dapat dioperasikan secara optimal dan dikuasai mandiri.",
  },
  {
    num: "04",
    tag: "SUPPORT",
    title: "Free Maintenance During Contract",
    desc: "Perawatan rutin, perbaikan kendala, dan support teknis tanpa biaya tambahan selama masa kontrak berjalan.",
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
  { icon: Mail, label: "Surel Resmi", value: "jesikatan90@gmail.com" },
  { icon: MapPin, label: "Lokasi Kantor", value: "Pontianak, Kalimantan Barat" },
];

// Logo Component - Sejajar Presisi & Footer White Icon Fix
function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#beranda" className={`inline-flex items-center gap-0.5 group cursor-pointer ${className}`}>
      {/* Icon im menempel rapat dan berubah putih penuh di footer saat light={true} */}
      <img
        src={mark}
        alt="Imperium Studio Logo"
        className={`h-6 w-auto object-contain shrink-0 transition-transform group-hover:scale-105 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
      {/* Teks disesuaikan translate-y-[1px] agar sejajar sempurna di tengah icon */}
      <span className="inline-flex items-center gap-1.5 text-base sm:text-lg font-black tracking-widest uppercase font-spartan translate-y-[1px]">
        <span className={light ? "text-white" : "text-brand"}>PERIUM</span>
        <span className={light ? "text-white" : "text-foreground font-black"}>STUDIO</span>
      </span>
    </a>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/15 bg-background/95 backdrop-blur-md">
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

// SEKSI 01: HERO / BERANDA (Desain Editorial Dinamis + Penomoran 01 Seragam)
function HeroSection() {
  return (
    <section id="beranda" className="relative border-b border-brand/15 bg-background py-16 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi Beranda dengan Nomor 01 Seragam */}
        <div className="grid lg:grid-cols-12 gap-6 items-end pb-8 border-b border-brand/15 mb-10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-brand font-spartan">
              <Sparkles size={14} />
              <span>IT CONSULTANT & SYSTEM AUTOMATION</span>
            </div>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-6xl sm:text-7xl font-black text-brand/20 font-spartan leading-none">
              01
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Sisi Kiri: Editorial Hero Text & Foto Utama */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan">
                OTOMATISASI<br />
                PINTAR.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-foreground/80 font-medium max-w-xl">
                Akselerasi efisiensi bisnis Anda melalui integrasi sistem digital pintar yang dirancang presisi sesuai alur kerja perusahaan.
              </p>
            </div>

            {/* Frame Foto Utama dengan Visual Tag */}
            <div className="relative mt-8 group w-full max-w-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-xl border-2 border-brand/20 bg-card">
                <img
                  src={heroMeeting}
                  alt="Tim Imperium Studio Berdiskusi"
                  className="h-full w-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-xs font-bold font-spartan tracking-wider uppercase">
                    ✦ DIGITAL WORKFLOW INTEGRATION
                  </span>
                  <span className="text-[10px] bg-background/90 text-brand px-3 py-1 font-extrabold uppercase font-spartan">
                    PONTIANAK HQ
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#tentang-kami"
                className="inline-flex items-center gap-3 bg-brand text-brand-foreground px-8 py-4 text-xs font-extrabold tracking-widest uppercase font-spartan hover:bg-brand/90 transition-all shadow-lg hover:translate-x-1"
              >
                TENTANG KAMI <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Editorial Column / Intro (Bebas dari Kesan Card AI) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-l-0 lg:border-l border-brand/15 lg:pl-10 pt-6 lg:pt-0">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-foreground/50 font-spartan uppercase block mb-3">
                // MITRA TEKNOLOGI ANDALAN
              </span>
              <h3 className="text-2xl font-black text-brand font-spartan uppercase leading-tight">
                Membangun Kemandirian Sistem Digital Perusahaan
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 font-medium">
                Kami membantu organisasi beralih dari proses manual yang lambat menuju otomatisasi terstruktur tanpa perlu ketergantungan penuh pada pihak luar.
              </p>

              {/* Feature Points dengan Style Minimalis Editorial */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-brand/10 text-brand font-black text-xs font-spartan">
                    01
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand font-spartan uppercase">Alur Kerja Disesuaikan 100%</h4>
                    <p className="text-xs text-foreground/70 mt-0.5">Sistem dibangun khusus mengikuti proses operasional unik perusahaan Anda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-brand/10 text-brand font-black text-xs font-spartan">
                    02
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand font-spartan uppercase">Dukungan & Pelatihan Mandiri</h4>
                    <p className="text-xs text-foreground/70 mt-0.5">Tim Anda dibimbing hingga mahir mengoperasikan sistem sepenuhnya.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-brand/15 flex items-center justify-between text-[11px] font-bold tracking-widest text-brand uppercase font-spartan">
              <span>EXPLORE SERVICES</span>
              <a href="#layanan" className="hover:underline flex items-center gap-1">
                SELENGKAPNYA →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 02: TENTANG KAMI (Penomoran 02 Seragam)
function AboutSection() {
  return (
    <section id="tentang-kami" className="relative border-b border-brand/15 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi dengan Nomor 02 Seragam */}
        <div className="grid lg:grid-cols-12 gap-6 items-end pb-8 border-b border-brand/15 mb-10">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-1">
              // SECTOR / ABOUT US
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-brand font-spartan">
              VISI & FOKUS UTAMA
            </span>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-6xl sm:text-7xl font-black text-brand/20 font-spartan leading-none">
              02
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Sisi Kiri: Deskripsi & Keunggulan */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-brand font-spartan uppercase tracking-tight">
                Integrasi & Kedaulatan Digital
              </h3>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80 font-medium">
                <p>
                  Imperium Studio berfokus merancang dan mengintegrasikan sistem digital sesuai alur kerja bisnis Anda secara efisien, transparan, dan akurat.
                </p>
                <p>
                  Tujuan kami adalah membantu perusahaan Anda meraih kedaulatan digital dengan kendali penuh atas sistem dan data mandiri.
                </p>
              </div>

              <div className="mt-8 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-brand font-spartan">
                  <CheckCircle2 size={16} /> <span>ALUR KERJA INTUITIF & TERSTRUKTUR</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-brand font-spartan">
                  <CheckCircle2 size={16} /> <span>TRANSPARANSI TANPA BIAYA TERSEMBUNYI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Typography Raksasa & Overlapping Photo */}
          <div className="lg:col-span-7 relative flex flex-col items-end">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan text-right w-full">
              KEDAULATAN<br />
              DIGITAL.
            </h2>

            <div className="relative mt-8 w-full max-w-xl shadow-2xl border-4 border-background overflow-hidden rounded-sm group">
              <img
                src={aboutTeam}
                alt="Tim Imperium Studio"
                className="h-72 w-full object-cover filter contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-brand font-spartan backdrop-blur-sm border border-brand/10">
                PONTIANAK, INDONESIA
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 03: LAYANAN (Penomoran 03 Seragam)
function ServicesSection() {
  return (
    <section id="layanan" className="relative border-b border-brand/15 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi dengan Nomor 03 Seragam */}
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-8 border-b border-brand/15">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-2">
              // SOLUSI & KAPABILITAS
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan">
              LAYANAN<br />
              UTAMA.
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-6xl sm:text-7xl font-black text-brand/20 font-spartan leading-none">
              03
            </span>
          </div>
        </div>

        {/* Editorial Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative flex flex-col justify-between border border-brand/20 bg-card p-6 transition-all duration-300 hover:bg-brand hover:text-brand-foreground hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-black font-spartan">
                  <span className="px-2.5 py-1 bg-brand/10 group-hover:bg-white/20 group-hover:text-white text-brand rounded-none tracking-widest">
                    #{s.tag}
                  </span>
                  <span className="text-2xl font-black opacity-30 group-hover:opacity-100">{s.num}</span>
                </div>

                <h3 className="mt-8 text-lg font-extrabold font-spartan uppercase tracking-tight group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed opacity-75 group-hover:opacity-90">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand/10 group-hover:border-white/20 text-[10px] font-extrabold tracking-widest uppercase font-spartan flex items-center justify-between">
                <span>IMPERIUM SERVICE</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SEKSI 04: ANGGOTA TIM (Penomoran 04 Seragam)
function TeamSection() {
  return (
    <section id="anggota" className="relative border-b border-brand/15 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi dengan Nomor 04 Seragam */}
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-8 border-b border-brand/15">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-2">
              // TALENTA TERBAIK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-brand tracking-tighter font-spartan">
              TIM KREATIF
            </h2>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-6xl sm:text-7xl font-black text-brand/20 font-spartan leading-none">
              04
            </span>
          </div>
        </div>

        {/* Member Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div key={m.name} className="group relative border border-brand/20 bg-card overflow-hidden">
              <div className="aspect-square w-full overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover filter contrast-[1.05] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-4 bg-background border-t border-brand/15">
                <span className="text-[10px] font-bold text-foreground/40 font-spartan block">
                  0{idx + 1} //
                </span>
                <p className="font-extrabold text-sm text-brand font-spartan uppercase tracking-tight mt-0.5">
                  {m.name}
                </p>
                <p className="text-xs text-foreground/70 font-medium mt-1">
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

// SEKSI 05: KONTAK & FOOTER (Penomoran 05 Seragam + Footer Full White Logo)
function ContactSection() {
  return (
    <section id="kontak" className="relative bg-brand text-brand-foreground py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi Kontak dengan Nomor 05 Seragam */}
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-8 border-b border-white/15 mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest uppercase opacity-60 font-spartan block mb-2">
              // MARI BEKERJA SAMA
            </span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.88] font-spartan">
              HUBUNGI<br />
              KAMI.
            </h2>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <span className="text-6xl sm:text-7xl font-black opacity-20 font-spartan leading-none">
              05
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Detail Kontak */}
          <div className="lg:col-span-7">
            <div className="space-y-5 max-w-lg">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 pb-4 border-b border-white/15">
                  <div className="flex h-10 w-10 items-center justify-center bg-white/10 text-white shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60 font-spartan">
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

          {/* Sisi Kanan: Manager Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md border-4 border-white shadow-2xl overflow-hidden bg-white/5">
              <img
                src={jesika}
                alt="Jesika Tan Kontak Utama"
                className="w-full aspect-[4/5] object-cover filter contrast-[1.05]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-brand/90 p-4 backdrop-blur-md border-t border-white/20">
                <p className="text-xs font-bold uppercase tracking-widest font-spartan">
                  PROJECT MANAGER
                </p>
                <p className="text-lg font-black font-spartan">Jesika Tan</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Minimalis Editorial - Logo & Icon Serba Putih Clean */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold tracking-widest uppercase font-spartan gap-4">
          <Logo light={true} />
          <span>© {new Date().getFullYear()} IMPERIUM STUDIO. ALL RIGHTS RESERVED.</span>
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