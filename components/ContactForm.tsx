"use client";

import { ArrowRight, CheckCircle2, Loader2, UserRound } from "lucide-react";
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "@rasulv_l7";

    if (!token || !chatId) {
      setStatus("error");
      setFeedback("Telegram bot token yoki chat ID topilmadi. .env.example faylini ko‘rib chiqing.");
      return;
    }

    try {
      const text = [
        "📩 Yangi portfolio xabari",
        `Ism: ${form.name}`,
        `Email: ${form.email}`,
        "",
        form.message,
      ].join("\n");

      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.description || "Xabar yuborilmadi.");
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Xabar muvaffaqiyatli yuborildi!");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Xabar yuborishda nosozlik yuz berdi.",
      );
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Ismingiz</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Muhammadqodir"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="namuna@mail.com"
            required
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-slate-300">Xabar</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder="Mening loyiham haqida qisqacha yozing..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
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
              Yuborish
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
            {status === "success" && <CheckCircle2 className="h-4 w-4" />}
            {status === "idle" && <UserRound className="h-4 w-4" />}
            {feedback}
          </div>
        ) : null}
      </div>
    </form>
  );
}
