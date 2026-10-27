"use client";

import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { newsArticles, newsCategories } from "@/lib/portfolio-data";

export default function UzNewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [query, setQuery] = useState("");
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(newsArticles[0]?.id ?? null);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return newsArticles.filter((article) => {
      const matchesCategory = selectedCategory === "Barchasi" || article.category === selectedCategory;
      const matchesQuery = !normalizedQuery || article.title.toLowerCase().includes(normalizedQuery) || article.summary.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  const selectedArticle = newsArticles.find((article) => article.id === selectedArticleId) ?? filteredArticles[0] ?? null;

  return (
    <div className="space-y-8 pb-10">
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
              UzNews
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">O‘zbekiston yangiliklari</h1>
          </div>

          <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3">
            <Search className="h-4 w-4 text-cyan-300" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Yangilik qidiring..."
              className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {newsCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950"
                  : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-cyan-400/40 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {filteredArticles.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center text-[var(--muted)]">
              Hech qanday maqola topilmadi. Boshqa so’rov yoki kategoriya tanlang.
            </div>
          ) : (
            filteredArticles.slice(0, 6).map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedArticleId(article.id)}
                className={`flex w-full overflow-hidden rounded-[1.8rem] border bg-[var(--surface)] p-3 text-left transition ${selectedArticle?.id === article.id ? "border-cyan-400/40 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]" : "border-[var(--border)]"}`}
              >
                <img src={article.image} alt={article.title} className="h-32 w-40 rounded-[1.2rem] object-cover" />
                <div className="flex-1 px-4 py-2">
                  <div className="mb-2 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                    <span>{article.category}</span>
                    <span>{new Date(article.date).toLocaleDateString("en-GB")}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--foreground)]">{article.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{article.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Batafsil o‘qing
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        <aside className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          {selectedArticle ? (
            <>
              <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="h-52 w-full object-cover" />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                <span>{selectedArticle.category}</span>
                <span>{selectedArticle.author}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[var(--foreground)]">{selectedArticle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{selectedArticle.summary}</p>
              <article className="mt-5 space-y-3 text-sm leading-7 text-[var(--muted)]">
                {selectedArticle.content.split(".").filter(Boolean).map((paragraph) => (
                  <p key={paragraph}>{paragraph.trim()}.</p>
                ))}
              </article>
            </>
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center text-center text-[var(--muted)]">
              Select an article to read it here.
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
