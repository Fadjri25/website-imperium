import {
  User,
  Phone,
  Mail,
  MapPin,
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

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
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
      <div className="grid w-full items-center gap-8 lg:grid-cols-2">
        {/* Kolom Kiri: Headline & CTA */}
        <div
          className="relative isolate flex min-h-[520px] items-center overflow-hidden py-20 pr-10 pl-5 sm:py-24 sm:pl-10 lg:min-h-[660px] lg:py-36 lg:pr-24 lg:pl-16"
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

          <div className="max-w-xl">
            <h1 className="text-4xl leading-[1.15] font-extrabold text-brand-foreground sm:text-5xl lg:text-6xl xl:text-7xl font-spartan tracking-tight">
              Otomatisasi Pintar, Akselerasi Sukses Bisnis Anda.
            </h1>
            <div className="mt-10">
              <a
                href="#tentang-kami"
                className="inline-flex items-center justify-center rounded-full bg-white px-9 py-4 text-base font-bold text-brand shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all cursor-pointer font-spartan"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Logo Brand */}
        <div className="relative flex items-center justify-center px-6 py-12 lg:py-0">
          <div className="relative flex items-center justify-center">
            <img
              src={mark}
              alt="Logo Imperium Studio"
              width={340}
              height={340}
              className="h-52 w-52 object-contain sm:h-64 sm:w-64 lg:h-[340px] lg:w-[340px] drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ImperiumBanner() {
  return (
    <div className="w-full overflow-hidden bg-background py-10 sm:py-16 lg:py-20 select-none text-brand">
      <svg
        viewBox="0 0 1000 120"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <text
          x="0"
          y="105"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="currentColor"
          className="font-spartan font-black uppercase"
          style={{ fontSize: "130px" }}
        >
          IMPERIUM
        </text>
      </svg>
    </div>
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
              Imperium Studio adalah konsultan IT yang merancang dan mengintegrasikan sistem digital sesuai alur kerja bisnis Anda.
            </p>
            <p>
              Kami berfokus pada otomatisasi data dan alur kerja yang efisien agar mudah dikelola mandiri oleh tim Anda.
            </p>
            <p>
              Tujuan kami adalah membantu perusahaan Anda memiliki kendali penuh atas sistem dan teknologi masa depan.
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
    <section id="layanan" className="relative bg-muted/30 py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Seksi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand/15">
          <div>
            <span className="text-xs font-extrabold tracking-widest text-brand uppercase font-spartan">
              [ PENAWARAN UTAMA ]
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand sm:text-4xl lg:text-5xl font-spartan tracking-tight">
              Layanan Yang Ditawarkan
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-foreground/75 leading-relaxed">
            Solusi pengembangan software dan pendampingan IT yang dirancang khusus untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Bento Grid Layout Kreatif */}
        <div className="mt-12 grid gap-6 md:grid-cols-12">
          {/* Card 01 - Featured Large Dark Card */}
          <div className="md:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand p-8 sm:p-10 text-brand-foreground shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                #DEVELOPMENT
              </span>
              <span className="font-spartan text-4xl font-black opacity-30">01</span>
            </div>
            <div className="mt-10 sm:mt-14">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-spartan leading-tight">
                Custom Software Development
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed opacity-90 max-w-xl">
                Pengembangan aplikasi web dan sistem internal khusus yang disesuaikan secara presisi dengan alur kerja dan kebutuhan bisnis Anda.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs font-medium opacity-80">
              <span>Sistem Internal & Aplikasi Web</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Card 02 */}
          <div className="md:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand/20 bg-card p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold tracking-wider text-brand">
                #STRATEGY
              </span>
              <span className="font-spartan text-4xl font-black text-brand/20">02</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-brand font-spartan">
                Free IT & Business Consultation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Sesi konsultasi gratis untuk memetakan kebutuhan teknologi serta menentukan prioritas digitalisasi perusahaan Anda.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-xs text-foreground/50">
              Tanpa Biaya Tambahan
            </div>
          </div>

          {/* Card 03 */}
          <div className="md:col-span-5 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand/20 bg-card p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold tracking-wider text-brand">
                #TRAINING
              </span>
              <span className="font-spartan text-4xl font-black text-brand/20">03</span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-brand font-spartan">
                Free Hands-on Training / Bimtek
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                Pelatihan langsung bagi tim Anda agar sistem baru dapat dioperasikan secara optimal dan dikuasai sepenuhnya.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-xs text-foreground/50">
              Bimbingan Langsung
            </div>
          </div>

          {/* Card 04 - Wide Accent Card */}
          <div className="md:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand/25 bg-brand/5 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-brand/10">
            <div className="flex items-center justify-between">
              <span className="inline-block rounded-full bg-brand/15 px-4 py-1 text-xs font-semibold tracking-wider text-brand">
                #SUPPORT
              </span>
              <span className="font-spartan text-4xl font-black text-brand/20">04</span>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand font-spartan">
                Free Maintenance During Contract
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/80 max-w-xl">
                Perawatan rutin, perbaikan kendala, dan dukungan teknis tanpa biaya tambahan selama masa kontrak berjalan.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand/15 flex items-center justify-between text-xs text-brand font-medium">
              <span>Jaminan Dukungan Teknis Full</span>
              <span className="font-bold">100% Covered</span>
            </div>
          </div>
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
        <ImperiumBanner />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}