import {
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
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
    desc: "Pengembangan aplikasi web dan sistem internal yang dirancang khusus mengikuti alur kerja bisnis Anda.",
  },
  {
    num: "02",
    tag: "CONSULTATION",
    title: "Free IT & Business Consultation",
    desc: "Sesi konsultasi gratis untuk memetakan kebutuhan teknologi dan prioritas digitalisasi perusahaan.",
  },
  {
    num: "03",
    tag: "TRAINING",
    title: "Free Hands-on Training / Bimtek",
    desc: "Pelatihan langsung bagi tim Anda agar sistem baru benar-benar dipakai dan dikuasai.",
  },
  {
    num: "04",
    tag: "SUPPORT",
    title: "Free Maintenance During Contract",
    desc: "Perawatan, perbaikan, dan dukungan teknis tanpa biaya tambahan selama masa kontrak berjalan.",
  },
];

const members = [
  { name: "Jesika Tan", role: "Project Manager", img: jesika },
  { name: "Atikoh", role: "Marketing", img: atikoh },
  { name: "Gabriela Evelyn Anzelbi", role: "System Analyst", img: gabriela },
  { name: "Iqlima Nur'ain", role: "Ui/Ux Designer", img: iqlima },
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

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 leading-none ${className}`}>
      <img src={mark} alt="Imperium Studio" className="h-7 w-auto object-contain" />
      <span className="inline-flex items-center text-lg font-black tracking-widest font-spartan uppercase">
        <span className="text-brand">perium</span>
        <span className="ml-1 text-[10px] text-foreground/60 tracking-tighter font-extrabold">STUDIO</span>
      </span>
    </span>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand/10 bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#beranda" className="flex items-center">
          <Logo />
        </a>
        <ul className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest uppercase text-brand font-spartan">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#kontak"
          className="text-xs font-bold uppercase tracking-widest text-brand border-b-2 border-brand pb-0.5 hover:opacity-70 transition-opacity font-spartan"
        >
          KONTAK →
        </a>
      </nav>
    </header>
  );
}

// SEKSI 01: HERO / BERANDA (Gaya Modul "1" Gambar Referensi)
function HeroSection() {
  return (
    <section id="beranda" className="relative border-b border-brand/10 bg-background py-16 lg:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sisi Kiri: Large Typography & Main Cutout Image */}
          <div className="lg:col-span-8 relative flex flex-col justify-between">
            <div className="z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-2">
                // IMPERIUM STUDIO IT CONSULTANT
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan">
                OTOMATISASI<br />
                PINTAR.
              </h1>
            </div>

            {/* Overlapping Hero Image Frame */}
            <div className="relative mt-8 lg:mt-6 z-10 w-full max-w-2xl">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-2xl border-4 border-background">
                <img
                  src={heroMeeting}
                  alt="Tim Imperium Studio"
                  className="h-full w-full object-cover filter contrast-[1.05]"
                />
              </div>
            </div>

            {/* Button CTA */}
            <div className="mt-8 z-10">
              <a
                href="#tentang-kami"
                className="inline-flex items-center gap-3 bg-brand text-brand-foreground px-8 py-4 text-xs font-extrabold tracking-widest uppercase font-spartan hover:bg-brand/90 transition-all shadow-lg"
              >
                TENTANG KAMI <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Sisi Kanan: Giant Block Number "1" & Intro Card */}
          <div className="lg:col-span-4 flex flex-col justify-between relative bg-brand-soft/40 p-8 border border-brand/15">
            {/* Giant Number 1 Accent */}
            <div className="absolute right-4 top-0 select-none text-[15rem] sm:text-[18rem] lg:text-[20rem] font-black leading-none text-brand/20 font-spartan pointer-events-none -z-0">
              1
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-brand font-spartan uppercase pb-4 border-b border-brand/15">
                <span>INTRO</span>
                <span>01</span>
              </div>
              <p className="mt-8 text-xs font-semibold tracking-wider uppercase text-brand font-spartan">
                KAMI ADALAH
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 font-medium">
                Mitra teknologi tepercaya yang siap mendampingi transformasi digital perusahaan Anda melalui otomatisasi alur kerja dan integrasi sistem tingkat tinggi.
              </p>
            </div>

            <div className="relative z-10 mt-12 pt-6 border-t border-brand/15 text-[10px] font-bold tracking-widest text-foreground/50 uppercase font-spartan">
              SCROLL UNTUK EKSPLORASI ↓
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 02: TENTANG KAMI (Gaya Modul "2" Gambar Referensi)
function AboutSection() {
  return (
    <section id="tentang-kami" className="relative border-b border-brand/10 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Sisi Kiri: Giant Block Number "2" & Info Detail */}
          <div className="lg:col-span-5 relative flex flex-col justify-between min-h-[400px]">
            {/* Giant Number 2 Accent */}
            <div className="absolute left-0 top-0 select-none text-[16rem] sm:text-[22rem] font-black leading-none text-brand/15 font-spartan pointer-events-none -z-0">
              2
            </div>

            <div className="relative z-10 pt-10">
              <div className="text-xs font-bold tracking-widest text-brand font-spartan uppercase mb-4">
                SECTOR / ABOUT US — 02
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/50 font-spartan">
                FOKUS UTAMA
              </p>
              <h3 className="mt-1 text-2xl font-black text-brand font-spartan uppercase tracking-tight">
                Integrasi & Kedaulatan Digital
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80 font-medium max-w-md">
                Imperium Studio berfokus merancang dan mengintegrasikan sistem digital sesuai alur kerja bisnis Anda secara efisien, transparan, dan akurat.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80 font-medium max-w-md">
                Tujuan kami adalah membantu perusahaan Anda meraih kedaulatan digital dengan kendali penuh atas sistem dan data mandiri.
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Giant Text & Overlapping Team Photo */}
          <div className="lg:col-span-7 relative flex flex-col items-end">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan text-right w-full">
              KEDAULATAN<br />
              DIGITAL.
            </h2>

            {/* Middle Overlapping Photo */}
            <div className="relative mt-8 w-full max-w-xl shadow-2xl border-4 border-background overflow-hidden rounded-sm">
              <img
                src={aboutTeam}
                alt="Tim Imperium"
                className="h-72 w-full object-cover filter contrast-[1.05]"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-brand font-spartan backdrop-blur-sm">
                PONTIANAK, INDONESIA
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// SEKSI 03: LAYANAN (Gaya Modul "3" Gambar Referensi)
function ServicesSection() {
  return (
    <section id="layanan" className="relative border-b border-brand/10 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Seksi Layanan dengan Giant Number 3 */}
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-12 border-b border-brand/15">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-2">
              // SOLUSI & KAPABILITAS
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-brand tracking-tighter leading-[0.88] font-spartan">
              LAYANAN<br />
              UTAMA.
            </h2>
          </div>
          
          <div className="lg:col-span-4 relative flex items-end justify-end">
            <div className="select-none text-[12rem] sm:text-[16rem] font-black leading-none text-brand/20 font-spartan pointer-events-none">
              3
            </div>
          </div>
        </div>

        {/* Modular Grid Layanan Bergaya Editorial */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative flex flex-col justify-between border border-brand/15 bg-card p-6 hover:bg-brand hover:text-brand-foreground transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-black font-spartan">
                  <span className="px-2 py-0.5 bg-brand/10 group-hover:bg-white/20 group-hover:text-white text-brand rounded-none tracking-widest">
                    #{s.tag}
                  </span>
                  <span className="text-2xl font-black opacity-40 group-hover:opacity-100">{s.num}</span>
                </div>
                <h3 className="mt-8 text-lg font-extrabold font-spartan uppercase tracking-tight group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed opacity-75 group-hover:opacity-90">
                  {s.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-brand/10 group-hover:border-white/20 text-[10px] font-extrabold tracking-widest uppercase font-spartan">
                IMPERIUM SERVICE →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// SEKSI 04: ANGGOTA TIM (Gaya Modul Editorial "4")
function TeamSection() {
  return (
    <section id="anggota" className="relative border-b border-brand/10 bg-background py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand/15">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground/50 font-spartan block mb-2">
              // TALENTA TERBAIK — 04
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-brand tracking-tighter font-spartan">
              TIM KREATIF
            </h2>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand font-spartan">
            [ 7 ANGGOTA DEDIKATIF ]
          </p>
        </div>

        {/* Member Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div key={m.name} className="group relative border border-brand/15 bg-card overflow-hidden">
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

// SEKSI 05: KONTAK & FOOTER (Gaya Modul "5")
function ContactSection() {
  return (
    <section id="kontak" className="relative bg-brand text-brand-foreground py-20 lg:py-28 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Header & Contact Info */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest uppercase opacity-60 font-spartan block mb-2">
              // MARI BEKERJA SAMA — 05
            </span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.88] font-spartan">
              HUBUNGI<br />
              KAMI.
            </h2>

            <div className="mt-12 space-y-6 max-w-lg">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 pb-4 border-b border-white/15">
                  <div className="flex h-10 w-10 items-center justify-center bg-white/10 rounded-none text-white">
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

          {/* Kolom Kanan: Contact Photo Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
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

        {/* Footer Minimalist Editorial */}
        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold tracking-widest uppercase font-spartan gap-4">
          <Logo className="text-white" />
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