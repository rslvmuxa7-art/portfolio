"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Ismingizni kiriting.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Yaroqli elektron pochta manzilini kiriting.";
    if (!form.message.trim() || form.message.trim().length < 10) return "Kamida 10 ta belgidan iborat xabar yozing.";
    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate();

    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    setStatus("loading");
    setFeedback("");

    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "@rasulv_l7";

    try {
      if (token && chatId) {
        const text = [
          "📩 Portfolio inquiry",
          `Ism: ${form.name}`,
          `Email: ${form.email}`,
          "",
          form.message,
        ].join("\n");

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
          throw new Error(data.description || "Xabar yetkazib berilmadi.");
        }
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback(
        token && chatId
          ? "Xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beraman."
          : "Demo jo‘natish tayyor. Haqiqiy xabar yuborish uchun Telegram botini konfiguratsiya qiling.",
      );
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Xabar yuborishda nosozlik yuz berdi.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-[var(--muted)]">Ismingiz</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Muhammadqodir"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-[var(--muted)]">Elektron pochtangiz</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-[var(--muted)]">Xabaringiz</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Loyihangiz, maqsadingiz yoki hamkorlik g‘oyangiz haqida yozing..."
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Yuborilmoqda...
            </>
          ) : (
            <>
              Xabar yuborish
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        {feedback ? (
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
              status === "success"
                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                : status === "error"
                  ? "border-rose-400/40 bg-rose-500/10 text-rose-200"
                  : "border-slate-600 bg-slate-800 text-slate-200"
            }`}
          >
            {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
            {feedback}
          </div>
        ) : null}
      </div>
    </form>
  );
}
