import { User, Phone, Mail, MapPin, Code2, MessagesSquare, GraduationCap, Wrench } from "lucide-react";

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

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Pengembangan aplikasi web dan sistem internal yang dirancang khusus mengikuti alur kerja bisnis Anda.",
  },
  {
    icon: MessagesSquare,
    title: "Free IT & Business Consultation",
    desc: "Sesi konsultasi gratis untuk memetakan kebutuhan teknologi dan prioritas digitalisasi perusahaan.",
  },
  {
    icon: GraduationCap,
    title: "Free Hands-on Training / Bimtek",
    desc: "Pelatihan langsung bagi tim Anda agar sistem baru benar-benar dipakai dan dikuasai.",
  },
  {
    icon: Wrench,
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
  { icon: User, label: "Nama Kontak", value: "Jesika Tan" },
  { icon: Phone, label: "Nomor Telepon", value: "+62 896 6854 6886" },
  { icon: Mail, label: "Email", value: "jesikatan90@gmail.com" },
  { icon: MapPin, label: "Alamat", value: "Pontianak, Kalimantan Barat" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 leading-none ${className}`}>
      <img src={mark} alt="Imperium Studio" className="h-8 w-auto object-contain" />
      <span className="inline-flex items-center text-xl font-extrabold tracking-tight font-spartan">
        <span className="-ml-1 text-brand">perium</span>
        <span className="ml-1 text-xs font-extrabold tracking-wider text-foreground/70">STUDIO</span>
      </span>
    </span>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#beranda" className="flex items-center">
          <Logo />
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm font-medium text-brand sm:gap-x-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="beranda" className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden bg-background scroll-mt-20">
      <div className="grid w-full items-center gap-6 lg:grid-cols-2">
        <div
          className="relative isolate flex min-h-[500px] items-center overflow-hidden py-20 pr-12 pl-5 sm:py-24 sm:pl-10 lg:min-h-[620px] lg:py-36 lg:pr-32 lg:pl-16"
          style={{
            borderTopRightRadius: "55% 100%",
            borderBottomRightRadius: "55% 100%",
          }}
        >
          <img
            src={heroMeeting}
            alt="Tim Imperium Studio berdiskusi di ruang rapat"
            width={1024}
            height={1024}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-brand/85" />

          <div className="max-w-lg">
            <h1 className="text-3xl leading-tight font-extrabold text-brand-foreground sm:text-4xl lg:text-5xl font-spartan">
              Otomatisasi Pintar, Akselerasi Sukses Bisnis Anda.
            </h1>
            <a
              href="#tentang-kami"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-md hover:bg-gray-100 hover:shadow-lg transition-all cursor-pointer font-spartan"
            >
              Tentang Kami
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 pb-12 lg:pb-0">
          <img
            src={mark}
            alt="Logo Imperium Studio"
            width={420}
            height={420}
            className="h-72 w-72 object-contain sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="tentang-kami" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 scroll-mt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-brand sm:text-4xl font-spartan">Tentang Kami</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
            <p>
              Imperium Studio adalah konsultan IT yang membantu organisasi merancang,
              membangun, dan mengintegrasikan sistem digital yang benar-benar sesuai dengan
              proses bisnis mereka.
            </p>
            <p>
              Kami percaya integrasi yang rapi adalah kunci: data yang terhubung, alur kerja
              yang otomatis, dan laporan yang bisa dipercaya. Setiap solusi dibangun agar mudah
              dirawat dan dikembangkan oleh tim internal Anda.
            </p>
            <p>
              Tujuan akhirnya adalah kedaulatan digital — Anda memiliki penuh sistem, data, dan
              masa depan teknologi bisnis Anda sendiri.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={aboutTeam}
            alt="Tim Imperium Studio"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full max-w-md rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="layanan" className="bg-brand-soft/60 py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-center text-3xl font-extrabold text-brand sm:text-4xl font-spartan">
          Layanan Yang Ditawarkan
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-brand/15 bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                <s.icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand font-spartan">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="anggota" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 scroll-mt-20">
      <h2 className="text-3xl font-extrabold text-brand sm:text-4xl font-spartan">Mengenal Tim Kami</h2>
      <p className="mt-3 text-lg text-foreground/80">
        Di Balik Setiap Solusi Digital, Ada Tim yang Berdedikasi.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((m) => (
          <figure key={m.name} className="text-center">
            <img
              src={m.img}
              alt={m.name}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-4">
              <p className="font-bold text-brand font-spartan">{m.name}</p>
              <p className="text-sm text-foreground/70">{m.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontak" className="relative overflow-hidden py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl font-extrabold text-brand sm:text-4xl font-spartan">Informasi Kontak</h2>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-muted p-6">
            <img
              src={jesika}
              alt="Jesika Tan, kontak Imperium Studio"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
          <ul className="space-y-6">
            {contactItems.map((i) => (
              <li key={i.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <i.icon size={20} />
                </span>
                <span>
                  <span className="block text-sm text-foreground/60">{i.label}</span>
                  <span className="block text-lg font-semibold text-foreground font-spartan">{i.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand/15 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 -bottom-16 h-56 w-56 rounded-full border-[12px] border-brand/20"
      />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-medium opacity-90">Butuh Bantuan?</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl font-spartan">Kami Hadir Sebagai Solusi</h2>
          <p className="mt-3 max-w-md text-sm opacity-90">
            Ceritakan tantangan bisnis Anda, dan tim kami akan membantu merancang solusi digital
            yang tepat sasaran.
          </p>
          <a
            href="#kontak"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand shadow-md hover:bg-gray-100 hover:shadow-lg transition-all cursor-pointer font-spartan"
          >
            Hubungi Kami
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold font-spartan">Daftar Menu</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="opacity-90 transition-opacity hover:opacity-60">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-xs opacity-80">
        © {new Date().getFullYear()} Imperium Studio
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}