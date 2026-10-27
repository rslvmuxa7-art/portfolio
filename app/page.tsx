"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  GitBranch,
  Layers3,
  Menu,
  MoonStar,
  Rocket,
  Sparkles,
  SunMedium,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";
import { GITHUB_URL, MAP_URL, TELEGRAM_URL, featuredProjects, profile } from "@/lib/portfolio-data";

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 91 },
  { name: "Accessibility", level: 88 },
  { name: "UI / UX & Motion", level: 90 },
  { name: "Performance", level: 87 },
];

const highlights = [
  { title: "Frontend engineering", text: "I build responsive interfaces with maintainable architecture and clear user flows.", icon: Rocket },
  { title: "Product thinking", text: "I turn product goals into polished, useful experiences that feel effortless to use.", icon: Layers3 },
  { title: "Modern stack", text: "I work with React, Next.js, TypeScript, Tailwind, and motion-driven UI patterns.", icon: Code2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const navItems = [
    { label: "Men haqimda", href: "#about" },
    { label: "Loyihalar", href: "#projects" },
    { label: "Ko‘nikmalar", href: "#skills" },
    { label: "Aloqa", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--foreground)]">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="#home" className="flex items-center gap-3" aria-label="Back to top">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-sm font-bold text-[var(--foreground)]">
                M
              </div>
              <span className="text-sm font-semibold tracking-[0.18em] text-[var(--foreground)] sm:text-base">RASULJONOV</span>
            </Link>

            <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-[var(--accent)]">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--accent)]/40"
                aria-label="Toggle color theme"
              >
                {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </button>
              <a
                href="#contact"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
              >
                Men bilan bog‘lanish
              </a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]"
                aria-label="Toggle color theme"
              >
                {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
              <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-[var(--muted)]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-xl px-3 py-2 transition hover:bg-[var(--surface-strong)] hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-4 py-2.5 font-medium text-white"
                >
                  Men bilan bog‘lanish
                </a>
              </nav>
            </div>
          ) : null}
        </header>

        <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <section id="home" className="grid items-center gap-10 pb-20 pt-12 md:pt-18 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                <Sparkles className="h-3.5 w-3.5" />
                {profile.role}
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Rasuljonov
                <br />
                <span className="text-[var(--accent)]">Frontend</span> dasturchi.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {profile.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white transition hover:translate-y-[-1px]"
                >
                  Loyihalarni ko‘rish
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/35 hover:text-[var(--accent)]"
                >
                  Men bilan bog‘lanish
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 transition hover:border-[var(--accent)]/35 hover:text-[var(--accent)]"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 transition hover:border-[var(--accent)]/35 hover:text-[var(--accent)]"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[10px] text-[var(--accent)]">●</span>
                  {profile.location}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Tajriba", value: "2+ yil" },
                  { label: "Loyihalar", value: "12+" },
                  { label: "Yo‘nalish", value: "UX-first" },
                ].map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl p-4">
                    <div className="text-2xl font-bold text-[var(--foreground)]">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--foreground)]">
                      <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                      Portfolio
                    </div>
                    <div className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--success)]">
                      Mavjud
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      <span>Ishlab chiqarish</span>
                      <span>2026</span>
                    </div>

                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <div className="text-sm text-[var(--muted)]">Lanshlar</div>
                        <div className="mt-2 text-4xl font-black text-[var(--foreground)]">03</div>
                      </div>
                      <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-600">+24%</div>
                    </div>

                    <div className="mt-10 space-y-3">
                      {[72, 86, 64, 90, 78].map((bar, index) => (
                        <div key={bar} className="flex items-center gap-3">
                          <span className="w-10 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{index + 1}</span>
                          <div className="h-2 flex-1 rounded-full bg-[var(--surface-strong)]">
                            <div className="h-2 rounded-full bg-[var(--accent)]" style={{ width: `${bar}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Manzil</div>
                      <div className="mt-3 text-xl font-semibold text-[var(--foreground)]">O‘zbekiston</div>
                    </div>
                    <a
                      href={TELEGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Bog‘lanish</div>
                      <div className="mt-3 text-xl font-semibold text-[var(--foreground)]">GitHub • Telegram</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <motion.section
            id="about"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="pb-24"
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Men haqimda</div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">Aniq, tezkor va mahsulot sifatiga yo‘naltirilgan frontend muhandis.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="section-shell rounded-[2rem] p-6">
                <p className="text-lg leading-8 text-[var(--muted)]">
                  Mening ismim {profile.name}. Men birinchi aloqadan tortib yakuniy konvertatsiyaga qadar premium ta’sir qoldiradigan tez, qulay va foydalanishga mos veb-interfeyslarni yarataman. Mahsulot dizayni, frontend arxitekturasi va responsiv UI sohasida ishlayman.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {highlights.map(({ title, text, icon: Icon }) => (
                    <div key={title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                      <div className="mb-3 inline-flex rounded-xl bg-[var(--accent-soft)] p-2 text-[var(--accent)]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="font-semibold text-[var(--foreground)]">{title}</div>
                      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[{ label: "Tajriba", value: "2+ yil", icon: Briefcase }, { label: "Loyihalar", value: "12+", icon: Rocket }, { label: "Manzil", value: "O‘zbekiston", icon: Sparkles }].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="section-shell rounded-[1.5rem] p-5">
                    <div className="mb-3 inline-flex rounded-xl bg-[var(--accent-soft)] p-2 text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-3xl font-black text-[var(--foreground)]">{value}</div>
                    <div className="mt-2 text-[var(--muted)]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="pb-24"
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Loyihalar</div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl"><span className="text-cyan-300">03</span> Mening loyihalarim</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group section-shell overflow-hidden rounded-[1.75rem] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                      {project.category}
                    </span>
                    <span className="text-sm text-[var(--accent)]">0{index + 1}</span>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)]/35 hover:text-[var(--accent)]"
                    >
                      <GitBranch className="h-4 w-4" />
                      GitHub
                    </a>
                    <Link
                      href={project.route}
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                    >
                      Demo’ni ochish
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="pb-24"
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Ko‘nikmalar</div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">Ishonchli va kengaytiriladigan mahsulotlar uchun frontend asboblar to‘plami.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name} className="section-shell rounded-[1.5rem] p-5">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-base font-medium text-[var(--foreground)]">{skill.name}</span>
                      <span className="text-sm text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-3">
                      <span style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-shell rounded-[2rem] p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Asosiy stack</div>
                    <div className="text-xl font-semibold text-[var(--foreground)]">Zamonaviy frontend</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['Next.js', 'React', 'Tailwind', 'Framer Motion', 'TypeScript', 'Git'].map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-center text-sm font-medium text-[var(--foreground)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="pb-20"
          >
            <div className="section-shell rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Aloqa</div>
                  <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">Birgalikda ajoyib loyiha yarataylik.</h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted)]">
                    Men mahsulotlar, kreativ veb-tajribalari va frontend hamkorliklari uchun ochiqman. G‘oyangiz yoki loyiha tavsifi bilan bog‘laning, keyingi qadami haqida amaliy tavsiyani beraman.
                  </p>

                  <div className="mt-8 space-y-3 text-[var(--muted)]">
                    <a href="mailto:rslvmuxa7@gmail.com" className="flex items-center gap-3 transition hover:text-[var(--accent)]">
                      <span className="rounded-full bg-[var(--accent-soft)] p-2 text-[var(--accent)]"><span className="text-lg">✉</span></span>
                      rslvmuxa7@gmail.com
                    </a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[var(--accent)]">
                      <span className="rounded-full bg-[var(--accent-soft)] p-2 text-[var(--accent)]"><GitBranch className="h-4 w-4" /></span>
                      github.com/rslvmuxa7-art
                    </a>
                    <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[var(--accent)]">
                      <span className="rounded-full bg-[var(--accent-soft)] p-2 text-[var(--accent)]"><span className="text-lg">✦</span></span>
                      @rasulv_l7
                    </a>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </motion.section>
        </main>

        <footer className="border-t border-[var(--border)] bg-[color:var(--surface-strong)]/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 {profile.name}. Barcha huquqlar himoyalangan.</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#about" className="transition hover:text-[var(--accent)]">Men haqimda</a>
              <a href="#projects" className="transition hover:text-[var(--accent)]">Loyihalar</a>
              <a href="#contact" className="transition hover:text-[var(--accent)]">Aloqa</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
