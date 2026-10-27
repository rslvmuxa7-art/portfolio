"use client";

import Link from "next/link";
import { CalendarDays, Check, MapPin, Minus, Plus, Search, ShieldCheck, Star, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { hotelHotels, type Hotel } from "@/lib/portfolio-data";

const today = new Date();
const defaultCheckIn = new Date(today.getTime() + 86400000).toISOString().slice(0, 10);
const defaultCheckOut = new Date(today.getTime() + 3 * 86400000).toISOString().slice(0, 10);

const formatPrice = (value: number) => `$${value}`;

const isDateValid = (start: string, end: string) => !start || !end || start >= end ? false : true;

export default function HotelBookingPage() {
  const [search, setSearch] = useState("");
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(hotelHotels[0]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const filteredHotels = useMemo(() => {
    const destination = search.trim().toLowerCase();
    return hotelHotels.filter((hotel) => {
      const matchesDestination = !destination || hotel.destination.toLowerCase().includes(destination) || hotel.name.toLowerCase().includes(destination);
      return matchesDestination;
    });
  }, [search]);

  const validStay = isDateValid(checkIn, checkOut);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!bookingForm.name.trim()) nextErrors.name = "To‘liq ism kiriting.";
    if (!bookingForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email)) nextErrors.email = "Yaroqli elektron pochta manzilini kiriting.";
    if (!selectedHotel) nextErrors.hotel = "Mehmonxonani tanlang.";
    if (!validStay) nextErrors.dates = "Chiqish sanasi kelish sanasidan keyin bo‘lishi kerak.";
    if (guests < 1) nextErrors.guests = "Mehmonlar soni kamida 1 bo‘lishi kerak.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setBookingConfirmed(true);
  };

  const nights = validStay ? Math.max(1, Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)) : 1;
  const totalPrice = (selectedHotel?.price ?? 0) * nights;

  return (
    <div className="space-y-8 pb-10">
      <section className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200">
              Hotel Booking
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">Keyingi dam olish joyini toping.</h1>
          </div>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-cyan-400/40 hover:text-cyan-300">
            Portfolioni ko‘rish
          </Link>
        </div>

        <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--panel)] p-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Manzil</span>
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)]">
              <Search className="h-4 w-4 text-cyan-300" />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Toshkent, Samarqand..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Kelish</span>
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              <input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none" />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ketish</span>
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              <input type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} className="w-full bg-transparent text-sm text-[var(--foreground)] outline-none" />
            </div>
          </label>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
            <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Mehmonlar</div>
            <div className="flex items-center justify-between gap-3">
              <button type="button" onClick={() => setGuests((value) => Math.max(1, value - 1))} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] hover:border-cyan-400/40">
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 text-[var(--foreground)]">
                <Users className="h-4 w-4 text-cyan-300" />
                <span className="font-semibold">{guests}</span>
              </div>
              <button type="button" onClick={() => setGuests((value) => value + 1)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] hover:border-cyan-400/40">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {!validStay ? (
          <div className="mt-4 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-200">
            Ketish sanasi kelish sanasidan keyin bo‘lishi kerak.
          </div>
        ) : null}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {filteredHotels.length === 0 ? (
            <div className="rounded-[2rem] border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center text-[var(--muted)]">
              Qidiruvga mos mehmonxona topilmadi. Boshqa manzilni sinab ko‘ring.
            </div>
          ) : (
            filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className={`overflow-hidden rounded-[1.8rem] border bg-[var(--surface)] p-3 transition ${selectedHotel?.id === hotel.id ? "border-cyan-400/40 shadow-[0_0_0_1px_rgba(34,211,238,0.2)]" : "border-[var(--border)]"}`}
              >
                <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                  <img src={hotel.image} alt={hotel.name} className="h-48 w-full rounded-[1.4rem] object-cover md:h-full" />
                  <div className="flex flex-col justify-between p-2">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-[var(--foreground)]">{hotel.name}</h2>
                          <p className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]">
                            <MapPin className="h-4 w-4 text-cyan-300" />
                            {hotel.location}
                          </p>
                        </div>
                        <div className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-sm font-medium text-amber-200">
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            {hotel.rating}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{hotel.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {hotel.amenities.map((item) => (
                          <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-2.5 py-1 text-xs text-[var(--muted)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
                      <div>
                        <div className="text-2xl font-black text-[var(--foreground)]">{formatPrice(hotel.price)}<span className="text-sm font-medium text-[var(--muted)]">/night</span></div>
                        <div className="text-xs text-[var(--muted)]">{hotel.reviews} reviews</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedHotel(hotel)}
                        className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-slate-950"
                      >
                        Mehmonxonani tanlash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5">
          {selectedHotel ? (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Sizning qolishingiz</div>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--foreground)]">{selectedHotel.name}</h3>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-200">
                  {selectedHotel.category}
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2">
                  <span>Mehmonlar</span>
                  <span className="font-semibold text-[var(--foreground)]">{guests}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2">
                  <span>Sana</span>
                  <span className="font-semibold text-[var(--foreground)]">{checkIn} → {checkOut}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2">
                  <span>Kecha</span>
                  <span className="font-semibold text-[var(--foreground)]">{nights}</span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-500/5 p-4">
                <div className="flex items-center justify-between text-[var(--muted)]">
                  <span>Bron summasi</span>
                  <span className="text-2xl font-black text-[var(--foreground)]">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">To‘liq ism</label>
                  <input value={bookingForm.name} onChange={(event) => setBookingForm((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" placeholder="Ismingiz" />
                  {errors.name ? <div className="mt-2 text-xs text-rose-300">{errors.name}</div> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">Elektron pochta</label>
                  <input type="email" value={bookingForm.email} onChange={(event) => setBookingForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" placeholder="name@example.com" />
                  {errors.email ? <div className="mt-2 text-xs text-rose-300">{errors.email}</div> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">Izoh</label>
                  <textarea value={bookingForm.notes} onChange={(event) => setBookingForm((prev) => ({ ...prev, notes: event.target.value }))} rows={3} className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-[var(--foreground)] outline-none focus:border-cyan-400/50" placeholder="Maxsus so‘rovingiz bormi?" />
                </div>

                {errors.dates ? <div className="text-xs text-rose-300">{errors.dates}</div> : null}
                {errors.guests ? <div className="text-xs text-rose-300">{errors.guests}</div> : null}
                {errors.hotel ? <div className="text-xs text-rose-300">{errors.hotel}</div> : null}

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 font-semibold text-slate-950">
                  <ShieldCheck className="h-4 w-4" />
                  Bronni tasdiqlash
                </button>
              </form>
            </>
          ) : (
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-[var(--border)] p-6 text-center text-[var(--muted)]">
              Select a hotel to begin your booking.
            </div>
          )}

          {bookingConfirmed ? (
            <div className="mt-6 rounded-[1.5rem] border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              <div className="flex items-center gap-2 text-base font-semibold text-emerald-200">
                <Check className="h-4 w-4" />
                Bron tasdiqlandi
              </div>
              <div className="mt-2">{selectedHotel?.name} uchun {nights} kecha bo‘yicha bron yaratildi. Tasdiqlovchi xabar {bookingForm.email} manziliga yuboriladi.</div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
