"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Globe,
  Layers3,
  LocateFixed,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";

const stats = [
  { label: "Tajriba", value: "2+ yil" },
  { label: "Loyihalar", value: "12+" },
  { label: "Reaktivlik", value: "100%" },
];

const projects = [
  {
    title: "Portfolio v2",
    category: "Frontend",
    description: "Modern personal portfolio with neon aesthetic, animated sections, and responsive components built in React and Tailwind.",
    impact: "GitHub profile",
    url: "https://github.com/rslvmuxa7-art",
  },
  {
    title: "Dashboard UI",
    category: "SaaS",
    description: "Katalog and analytics user interface for a service panel with charts, tables, and clean workflow design.",
    impact: "Admin panel",
    url: "https://github.com/rslvmuxa7-art",
  },
  {
    title: "Mini App Kits",
    category: "Tools",
    description: "Reusable snippets, utility components, and frontend experiments optimized for maintainability and performance.",
    impact: "Code experiments",
    url: "https://github.com/rslvmuxa7-art",
  },
];

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "Tailwind CSS", level: 91 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "UI / UX & Motion", level: 90 },
];

const highlights = [
  { title: "Frontend engineering", text: "I build responsive interfaces with maintainable architecture and clean code structure.", icon: Rocket },
  { title: "Product thinking", text: "I translate business needs into useful, polished, and conversion-friendly interfaces.", icon: Layers3 },
  { title: "Modern stack", text: "I work with React, Next.js, Tailwind, Framer Motion, and animation systems.", icon: Code2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-sm font-bold text-cyan-300">
              M
            </div>
            <span className="text-lg font-semibold tracking-[0.2em] text-slate-200">MUHAMMADQODIR</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">Men haqimda</a>
            <a href="#projects" className="transition hover:text-cyan-300">Loyihalar</a>
            <a href="#skills" className="transition hover:text-cyan-300">Ko&apos;nikmalar</a>
            <a href="#contact" className="transition hover:text-cyan-300">Aloqa</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Menga yozing
          </a>
        </header>

        <main className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <section id="home" className="grid items-center gap-10 pb-24 pt-10 md:grid-cols-[1.15fr_0.85fr] md:pt-16">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-violet-200">
                <Sparkles className="h-3.5 w-3.5" />
                Frontend Developer
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Muhammadqodir <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">Portfolio</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Men frontend ishlab chiquvchi bo‘lib, foydalanuvchi tajribasiga yo‘naltirilgan va zamonaviy, tezkor, vizual chiroyli veb-ilovalarni yarataman.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950 shadow-neon transition hover:scale-[1.02]"
                >
                  Aloqa
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  Loyihalarni ko&apos;rish
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <a
                  href="https://github.com/rslvmuxa7-art"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Globe className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://t.me/rasulv_l7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </a>
                <a
                  href="https://www.google.com/maps/search/Bachqir+MFY,+Buvayda,+Fergana+Region,+Uzbekistan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  Farg&apos;ona, Buvayda
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl p-4">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(119,242,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.22),transparent_32%)]" />

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
                      <MonitorSmartphone className="h-3.5 w-3.5" />
                      Frontend
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                      Online
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 soft-ring">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                      <span>Portfolio</span>
                      <span>2026</span>
                    </div>

                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <div className="text-sm text-slate-400">Loyihalar</div>
                        <div className="mt-2 text-4xl font-black text-white">12+</div>
                      </div>
                      <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-300">
                        +24%
                      </div>
                    </div>

                    <div className="mt-10 space-y-3">
                      {[72, 86, 64, 90, 78].map((bar, index) => (
                        <div key={bar} className="flex items-center gap-3">
                          <span className="w-10 text-[10px] uppercase tracking-[0.2em] text-slate-500">{index + 1}</span>
                          <div className="h-2 flex-1 rounded-full bg-slate-800">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                              style={{ width: `${bar}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Joy</div>
                      <div className="mt-3 text-xl font-semibold text-white">O&apos;zbekiston</div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/Bachqir+MFY,+Buvayda,+Fergana+Region,+Uzbekistan"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-violet-400/20 bg-violet-500/5 p-4 transition hover:border-violet-300/40 hover:bg-violet-500/10"
                    >
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Tarmoq</div>
                      <div className="mt-3 text-xl font-semibold text-white">GitHub / Telegram</div>
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
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Yaratuvchan, responsiv va foydalanuvchi yo‘naltirilgan frontend muhandis.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="section-shell rounded-[2rem] p-6">
                <p className="text-lg leading-8 text-slate-300">
                  Men Muhammadqodir. Frontend sohasida chiroyli va tez ishlaydigan veb-ilovalarni yaratishga qiziqaman. UI/UX, responsivlik, animatsiyalar va foydalanuvchi tajribasi ustida ishlashdan mamnunman. O&apos;zbekistonning Farg&apos;ona viloyatidagi Buvayda tumanida yashayman va rivojlanayotgan dizayn va texnologiya loyihalarini ishlab chiqishni maqsad qilganman.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {highlights.map(({ title, text, icon: Icon }) => (
                    <div key={title} className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4">
                      <div className="mb-3 inline-flex rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="font-semibold text-white">{title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="section-shell rounded-[1.5rem] p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-violet-500/10 p-2 text-violet-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-black text-white">2+</div>
                  <div className="mt-2 text-slate-400">Yillik tajriba</div>
                </div>
                <div className="section-shell rounded-[1.5rem] p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-cyan-500/10 p-2 text-cyan-300">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-black text-white">12+</div>
                  <div className="mt-2 text-slate-400">Yaratilgan loyihalar</div>
                </div>
                <div className="section-shell rounded-[1.5rem] p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-emerald-500/10 p-2 text-emerald-300">
                    <LocateFixed className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-black text-white">Uz</div>
                  <div className="mt-2 text-slate-400">Farg&apos;ona, Buvayda</div>
                </div>
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
                <h2 className="text-3xl font-bold text-white sm:text-4xl">GitHub profilimdagi ishlanmalar.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group section-shell overflow-hidden rounded-[1.75rem] p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-200">
                      {project.category}
                    </span>
                    <span className="text-sm text-cyan-300">0{index + 1}</span>
                  </div>

                  <div className="h-40 rounded-2xl border border-slate-700/80 bg-[radial-gradient(circle_at_20%_20%,rgba(119,242,255,0.24),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.22),transparent_25%),linear-gradient(135deg,#0f172a,#111827_60%,#0b1120)]" />

                  <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-700/80 pt-4">
                    <span className="text-sm font-medium text-emerald-300">{project.impact}</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 transition group-hover:border-cyan-400/40 group-hover:text-cyan-200"
                    >
                      Ko&apos;rish
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
                <div className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">Ko&apos;nikmalar</div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Tezkor, sifatli va zamonaviy frontend texnologiyalari.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-transparent md:block" />
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name} className="section-shell rounded-[1.5rem] p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-base font-medium text-slate-100">{skill.name}</span>
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
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Asosiy stack</div>
                    <div className="text-xl font-semibold text-white">Modern frontend</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {['Next.js', 'React', 'Tailwind', 'Framer Motion', 'TypeScript', 'Git'].map((item) => (
                    <div key={item} className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-3 text-center text-sm font-medium text-slate-200">
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
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">Iltimos, loyiha yoki hamkorlik haqida yozing.</h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                    Men yangi g&apos;oyalar, veb-loyihalar va interaktiv frontend ishlanmalarini qurishga tayyorman. Telegram yoki E-mail orqali bog&apos;lanishingiz mumkin.
                  </p>

                  <div className="mt-8 space-y-3">
                    <a href="mailto:rasulv.l7@gmail.com" className="flex items-center gap-3 text-slate-200 transition hover:text-cyan-300">
                      <span className="rounded-full bg-cyan-500/10 p-2 text-cyan-300"><Mail className="h-4 w-4" /></span>
                      rasulv.l7@gmail.com
                    </a>
                    <a href="https://github.com/rslvmuxa7-art" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 transition hover:text-cyan-300">
                      <span className="rounded-full bg-violet-500/10 p-2 text-violet-300"><Globe className="h-4 w-4" /></span>
                      github.com/rslvmuxa7-art
                    </a>
                    <a href="https://t.me/rasulv_l7" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 transition hover:text-cyan-300">
                      <span className="rounded-full bg-emerald-500/10 p-2 text-emerald-300"><Send className="h-4 w-4" /></span>
                      @rasulv_l7
                    </a>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
