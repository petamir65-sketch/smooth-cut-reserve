import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import barberMark from "@/assets/barber-mark.jpg";
import barberDima from "@/assets/barber-dima.jpg";
import barberTimur from "@/assets/barber-timur.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRIM — барбершоп | Запись онлайн" },
      {
        name: "description",
        content:
          "Городской барбершоп TRIM: мужские стрижки, оформление бороды, комплекс. Запишитесь онлайн за минуту.",
      },
      { property: "og:title", content: "TRIM — барбершоп" },
      {
        property: "og:description",
        content:
          "Мужские стрижки, борода, комплекс. Чистые линии, точный фейд, запись за минуту.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    price: "900",
    meta: "₽ · 30 мин",
    title: "Классическая стрижка",
    description: "Стрижка машинкой и ножницами с укладкой.",
    className: "bg-amber text-ink",
    textMuted: "opacity-70",
  },
  {
    price: "1200",
    meta: "₽ · 45 мин",
    title: "Стрижка + борода",
    description: "Комплекс: голова и оформление бороды.",
    className: "bg-teal text-cream",
    textMuted: "opacity-80",
  },
  {
    price: "600",
    meta: "₽ · 20 мин",
    title: "Оформление бороды",
    description: "Подбор формы, контур и горячее полотенце.",
    className: "bg-accent text-ink",
    textMuted: "opacity-70",
  },
];

const barbers = [
  {
    photo: barberMark,
    name: "Марк",
    specialty: "Стрижка · Фейд",
    specialtyClass: "text-amber",
  },
  {
    photo: barberDima,
    name: "Дима",
    specialty: "Борода · Комбинирование",
    specialtyClass: "text-teal",
  },
  {
    photo: barberTimur,
    name: "Тимур",
    specialty: "Классика · Укладка",
    specialtyClass: "text-accent",
  },
];

const inputClasses =
  "rounded-2xl bg-cream/10 border-2 border-cream/20 px-5 py-4 text-cream placeholder:text-cream/40 focus:outline-none focus:border-amber";

function Index() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="font-display font-black text-2xl tracking-tight">
          TRIM<span className="text-accent">.</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
          <a href="#services" className="transition-colors hover:text-accent">
            Услуги
          </a>
          <a href="#team" className="transition-colors hover:text-accent">
            Барберы
          </a>
          <a href="#book" className="transition-colors hover:text-accent">
            Запись
          </a>
        </nav>
        <a
          href="#book"
          className="rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-cream transition hover:bg-accent hover:text-ink"
        >
          Записаться
        </a>
      </header>

      <main className="px-6 pb-20 md:px-12">
        <section className="relative overflow-hidden pt-6 pb-14">
          <div className="md:flex md:items-start md:gap-10">
            <div className="min-w-0 flex-1">
              <h1 className="font-display font-black select-none text-[24vw] uppercase leading-[0.82] tracking-tighter md:text-[13vw]">
                <span className="block text-ink">TRIM</span>
              </h1>
              <div
                aria-hidden="true"
                className="mt-1 whitespace-nowrap text-right font-display font-black select-none uppercase leading-[0.9] tracking-tighter text-accent text-[15vw] md:hidden"
              >
                BARBER
              </div>
              <div className="relative z-10 mt-8 max-w-2xl md:mt-12">
                <p className="inline-block max-w-md rounded-2xl border-2 border-ink bg-paper px-5 py-4 text-lg font-medium shadow-[5px_5px_0_0_#17120E] md:text-xl">
                  Городской барбершоп с характером. Чистые линии, точный фейд и
                  спокойная атмосфера без суеты.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href="#book"
                    className="rounded-full bg-teal px-9 py-5 text-lg font-bold uppercase tracking-wide text-ink shadow-[6px_6px_0_0_#17120E] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#17120E]"
                  >
                    Выбрать время
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border-2 border-ink px-9 py-5 text-lg font-bold uppercase tracking-wide transition hover:bg-ink hover:text-cream"
                  >
                    Услуги и цены
                  </a>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="hidden shrink-0 self-start whitespace-nowrap text-right font-display font-black select-none uppercase leading-[0.82] tracking-tighter text-accent text-[13vw] md:block"
            >
              BARBER
            </div>
          </div>
        </section>

        <section id="services" className="mt-4 scroll-mt-8">
          <h2 className="font-display font-black mb-6 text-3xl uppercase md:text-5xl">
            Услуги <span className="text-accent">и цены</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-3xl border-2 border-ink p-7 ${s.className}`}
              >
                <div className="font-display font-black text-5xl">{s.price}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide">
                  {s.meta}
                </div>
                <div className="mt-4 text-lg font-bold">{s.title}</div>
                <div className={`mt-1 text-sm ${s.textMuted}`}>
                  {s.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" className="mt-12 scroll-mt-8">
          <h2 className="font-display font-black mb-6 text-3xl uppercase md:text-5xl">
            Наши барберы
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {barbers.map((b) => (
              <div
                key={b.name}
                className="rounded-3xl border-2 border-ink bg-paper p-5"
              >
                <img
                  src={b.photo}
                  alt={`Барбер ${b.name}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="mb-4 aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <div className="font-display font-black text-2xl">{b.name}</div>
                <div
                  className={`text-sm font-semibold uppercase tracking-wide ${b.specialtyClass}`}
                >
                  {b.specialty}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="book"
          className="mt-12 scroll-mt-8 rounded-[2.5rem] bg-ink p-8 text-cream md:p-12"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display font-black text-4xl uppercase leading-[0.9] md:text-6xl">
                Запишись
                <br />на <span className="text-amber">сегодня</span>
              </h2>
              <p className="mt-5 max-w-sm text-cream/70">
                Выбери время — подтвердим за пару минут.
              </p>
              <div className="mt-4 inline-block rounded-full border-2 border-cream/20 bg-amber px-5 py-2.5 text-sm font-black uppercase tracking-wide text-ink shadow-[4px_4px_0_0_#FF5C39]">
                Первое посещение — скидка 10%
              </div>
              <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
                <span>ул. Громова, 12 · ежедневно 10:00–21:00</span>
                <a href="tel:+79221847305" className="text-accent">
                  +7 (922) 184-73-05
                </a>
              </div>
            </div>
            {submitted ? (
              <div className="rounded-3xl border-2 border-amber/60 bg-cream/10 p-10 text-center">
                <div className="font-display font-black text-3xl uppercase text-amber">
                  Готово!
                </div>
                <p className="mt-4 text-cream/80">
                  Заявка принята — перезвоним в течение 15 минут и подтвердим
                  время.
                </p>
              </div>
            ) : (
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Имя"
                  className={inputClasses}
                />
                <input
                  type="tel"
                  required
                  placeholder="Телефон"
                  className={inputClasses}
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className={inputClasses} defaultValue="Стрижка">
                    <option>Стрижка</option>
                    <option>Стрижка + борода</option>
                    <option>Борода</option>
                  </select>
                  <select className={inputClasses} defaultValue="12:00">
                    <option>12:00</option>
                    <option>14:30</option>
                    <option>17:00</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-amber px-8 py-5 text-lg font-bold uppercase tracking-wide text-ink shadow-[5px_5px_0_0_#FF5C39] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#FF5C39]"
                >
                  Забронировать
                </button>
              </form>
            )}
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-sm font-semibold uppercase tracking-wide md:flex-row">
          <div className="font-display font-black text-xl">
            TRIM<span className="text-accent">.</span>
          </div>
          <div className="text-ink/50">© 2026 · Сделано с характером</div>
        </footer>
      </main>
    </div>
  );
}
