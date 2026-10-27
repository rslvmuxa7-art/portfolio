"use client";

import Link from "next/link";
import { ArrowDownLeft, ArrowUpRight, Pencil, Plus, Search, Trash2, Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "finance-dashboard-transactions";

type TransactionType = "income" | "expense";

type Transaction = {
  id: number;
  type: TransactionType;
  amount: number;
  category: string;
  description: string;
  date: string;
};

type TransactionForm = {
  amount: string;
  category: string;
  type: TransactionType;
  description: string;
  date: string;
};

const initialTransactions: Transaction[] = [
  { id: 1, type: "income", amount: 4200, category: "Salary", description: "Monthly salary", date: "2026-10-01" },
  { id: 2, type: "expense", amount: 680, category: "Housing", description: "Rent payment", date: "2026-10-02" },
  { id: 3, type: "expense", amount: 245, category: "Food", description: "Groceries", date: "2026-10-05" },
  { id: 4, type: "income", amount: 350, category: "Freelance", description: "Landing page project", date: "2026-10-10" },
  { id: 5, type: "expense", amount: 120, category: "Transport", description: "Metro card top-up", date: "2026-10-12" },
];

const categories = ["Salary", "Freelance", "Housing", "Food", "Transport", "Utilities", "Savings", "Entertainment"];

const getTodayDate = () => {
  if (typeof window === "undefined") {
    return "2026-10-27";
  }

  return new Date().toISOString().slice(0, 10);
};

const formatCurrency = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

export default function FinanceDashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (typeof window === "undefined") {
      return initialTransactions;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return initialTransactions;
    }

    try {
      const parsed = JSON.parse(saved) as Transaction[];
      return parsed.length ? parsed : initialTransactions;
    } catch {
      return initialTransactions;
    }
  });
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [form, setForm] = useState<TransactionForm>(() => ({ amount: "", category: "Food", type: "expense", description: "", date: getTodayDate() }));
  const [editingId, setEditingId] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (transactions.length) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    }
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return transactions.filter((transaction) => {
      const matchesCategory = selectedCategory === "All" || transaction.category === selectedCategory;
      const matchesQuery = !normalized || transaction.description.toLowerCase().includes(normalized) || transaction.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory, transactions]);

  const totals = useMemo(() => {
    const income = transactions.filter((item) => item.type === "income").reduce((sum, item) => sum + item.amount, 0);
    const expense = transactions.filter((item) => item.type === "expense").reduce((sum, item) => sum + item.amount, 0);
    const balance = income - expense;
    return { income, expense, balance };
  }, [transactions]);

  const categoryBreakdown = useMemo(() => {
    const map = new Map<string, number>();
    for (const transaction of transactions) {
      const current = map.get(transaction.category) ?? 0;
      map.set(transaction.category, current + transaction.amount);
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, 4);
  }, [transactions]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const amount = Number(form.amount);

    if (!form.description.trim()) {
      setStatus("Please add a description.");
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      setStatus("Please enter a valid amount.");
      return;
    }

    if (editingId !== null) {
      setTransactions((current) => current.map((item) => item.id === editingId ? {
        ...item,
        amount,
        description: form.description.trim(),
        category: form.category,
        type: form.type,
        date: form.date,
      } : item));
      setEditingId(null);
    } else {
      setTransactions((current) => [{
        id: Date.now(),
        amount,
        description: form.description.trim(),
        category: form.category,
        type: form.type,
        date: form.date,
      }, ...current]);
    }

    setForm({ amount: "", category: "Food", type: "expense", description: "", date: getTodayDate() });
    setStatus(editingId !== null ? "Transaction updated." : "Transaction added successfully.");
  };

  const handleEdit = (transaction: Transaction) => {
    setEditingId(transaction.id);
    setForm({
      amount: String(transaction.amount),
      category: transaction.category,
      type: transaction.type,
      description: transaction.description,
      date: transaction.date,
    });
    setStatus("Editing selected transaction.");
  };

  const handleDelete = (id: number) => {
    setTransactions((current) => current.filter((item) => item.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
    setStatus("Transaction removed.");
  };

  return (
    <div className="space-y-8 pb-10">
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
              Moliya boshqaruvi
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">Shaxsiy moliya kuzatuvchisi</h1>
          </div>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-300">
            Portfoliga qaytish
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--muted)]">Jami balans</span>
            <Wallet className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="mt-3 text-3xl font-black text-[var(--foreground)]">{formatCurrency(totals.balance)}</div>
        </div>
        <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--muted)]">Daromad</span>
            <ArrowUpRight className="h-5 w-5 text-emerald-300" />
          </div>
          <div className="mt-3 text-3xl font-black text-emerald-300">{formatCurrency(totals.income)}</div>
        </div>
        <div className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--muted)]">Xarajat</span>
            <ArrowDownLeft className="h-5 w-5 text-rose-300" />
          </div>
          <div className="mt-3 text-3xl font-black text-rose-300">{formatCurrency(totals.expense)}</div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="text-xl font-bold text-[var(--foreground)]">Tranzaksiya qo‘shish</h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Miqdor</span>
                <input type="number" min="0.01" step="0.01" value={form.amount} onChange={(event) => setForm((prev) => ({ ...prev, amount: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" placeholder="0.00" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Turi</span>
                <select value={form.type} onChange={(event) => setForm((prev) => ({ ...prev, type: event.target.value as Transaction["type"] }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50">
                  <option value="expense">Xarajat</option>
                  <option value="income">Daromad</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--muted)]">Izoh</span>
              <input value={form.description} onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" placeholder="Groceries, salary, rent..." />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Kategoriya</span>
                <select value={form.category} onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--muted)]">Sana</span>
                <input type="date" value={form.date} onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" />
              </label>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 font-semibold text-slate-950">
                <Plus className="h-4 w-4" />
                {editingId !== null ? "Tranzaktsiyani yangilash" : "Tranzaksiya qo‘shish"}
              </button>
              {editingId !== null ? (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setForm({ amount: "", category: "Food", type: "expense", description: "", date: getTodayDate() });
                  }}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]"
                >
                  Bekor qilish
                </button>
              ) : null}
            </div>

            {status ? <div className="text-sm text-cyan-300">{status}</div> : null}
          </form>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-[var(--foreground)]">Tranzaksiyalar</h2>
            <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2">
              <Search className="h-4 w-4 text-cyan-300" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tranzaksiya qidirish" className="w-28 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-slate-500" />
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {['All', ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-2.5 py-1.5 text-xs transition ${selectedCategory === category ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]"}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            {filteredTransactions.length === 0 ? (
              <div className="rounded-[1.5rem] border border-dashed border-[var(--border)] p-6 text-center text-[var(--muted)]">Joriy filtrga mos keladigan tranzaksiya yo‘q.</div>
            ) : (
              filteredTransactions.map((transaction) => (
                <div key={transaction.id} className="flex flex-col gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[var(--foreground)]">
                      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${transaction.type === "income" ? "bg-emerald-400" : "bg-rose-400"}`} />
                      <span className="font-semibold">{transaction.description}</span>
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{transaction.category} • {new Date(transaction.date).toLocaleDateString("en-GB")}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`text-lg font-bold ${transaction.type === "income" ? "text-emerald-300" : "text-rose-300"}`}>
                      {transaction.type === "income" ? "+" : "-"}{formatCurrency(transaction.amount)}
                    </div>
                    <button type="button" onClick={() => handleEdit(transaction)} className="rounded-full border border-[var(--border)] p-2 text-cyan-300 hover:border-cyan-400/40">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button type="button" onClick={() => handleDelete(transaction.id)} className="rounded-full border border-[var(--border)] p-2 text-rose-300 hover:border-rose-400/40">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Top kategoriyalar</div>
            <div className="space-y-3">
              {categoryBreakdown.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">Hozircha ma’lumotlar yo‘q.</p>
              ) : (
                categoryBreakdown.map(([category, amount]) => (
                  <div key={category} className="flex items-center justify-between text-sm text-[var(--muted)]">
                    <span>{category}</span>
                    <span className="font-semibold text-[var(--foreground)]">{formatCurrency(amount)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
