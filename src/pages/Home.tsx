import { useEffect, useMemo, useRef, useState } from 'react'
import { BRANDS, CATEGORIES, PRODUCTS, TOTAL_PAIRS, byId, img, inStock } from '../data/catalog'
import { FAQ, REVIEWS, SHOP, TRUST } from '../data/shop'
import { discount, money } from '../lib/format'
import { href } from '../lib/router'
import { plural, useStore } from '../lib/store'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'
import { Showcase } from '../components/Showcase'
import { LiveDemo } from '../components/LiveDemo'
import { SizeGate } from '../components/Header'

/** Луч лампы идёт за курсором по тёмным блокам — та же сигнатура света, что в герое. */
function useSpot<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const on = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--sx', `${e.clientX - r.left}px`)
      el.style.setProperty('--sy', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', on)
    return () => el.removeEventListener('pointermove', on)
  }, [])
  return ref
}

export function Home() {
  const { mySize, setMySize } = useStore()
  const [sizeOpen, setSizeOpen] = useState(false)
  const lasts = useMemo(() => PRODUCTS.filter((p) => inStock(p) === 1 && p.images.length > 1).slice(0, 6), [])
  const fresh = useMemo(() => PRODUCTS.filter((p) => p.isNew).slice(0, 8), [])
  const mine = useMemo(() => (mySize ? PRODUCTS.filter((p) => p.sizes.some((s) => s.label === mySize && s.stock > 0)) : []), [mySize])
  const sale = useMemo(() => PRODUCTS.filter((p) => p.old).sort((a, b) => discount(b.price, b.old) - discount(a.price, a.old)), [])
  const lastsRef = useSpot<HTMLElement>()
  const conciergeRef = useSpot<HTMLElement>()

  return (
    <>
      {/* ── ГЕРОЙ: стеллаж подсобки, который живёт сам ──────────────────── */}
      <section className="relative overflow-hidden bg-night text-paper">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70vw_50vw_at_50%_-12%,rgba(255,222,150,.16),transparent_66%)]" />
        <div className="relative mx-auto max-w-[1400px] px-4 pt-9 lg:px-8 lg:pt-14">
          <p className="lbl text-paper/50">мультибренд · воронеж · с {SHOP.since}</p>
          <h1 className="h-display mt-2 max-w-[19ch] text-[clamp(40px,8.4vw,112px)]">
            Всё, что здесь стоит, — в одном экземпляре
          </h1>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <p className="max-w-[44ch] text-[15px] leading-snug text-paper/65">
              Мы возим штучно, а не коробками. На полке{' '}
              <b className="text-paper">{TOTAL_PAIRS} {plural(TOTAL_PAIRS, 'вещь', 'вещи', 'вещей')}</b>, почти у каждой
              остался один размер. Забрали — позиция ушла с сайта.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href={href('/catalog')} className="lbl bg-volt px-5 py-4 text-ink transition hover:bg-paper">
                СМОТРЕТЬ ПОЛКУ · {PRODUCTS.length} ПОЗИЦИЙ
              </a>
              <a href={href('/catalog?sale=1')} className="lbl border border-paper/40 px-5 py-4 transition hover:bg-paper hover:text-ink">
                УЦЕНЁННОЕ · {sale.length}
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1400px] px-4 lg:px-8">
          <Showcase />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 pb-8 lg:px-8">
          {/* Быстрые входы статичной строкой — читаются, а не проезжают мимо */}
          <div className="mt-6 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.slice(0, 5).map((c) => (
              <a
                key={c.slug}
                href={href(`/catalog?cat=${c.slug}`)}
                className="group flex items-center justify-between gap-2 border border-paper/20 px-3 py-3 transition hover:border-volt hover:bg-volt hover:text-ink"
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.04em]">{c.ru}</span>
                <span className="num text-[10px] opacity-60">{c.count}</span>
              </a>
            ))}
          </div>

          <ul className="mt-7 grid gap-x-8 gap-y-2 border-t border-paper/15 pt-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <li key={t.t} className="text-[13px] leading-snug">
                <b className="block">{t.t}</b>
                <span className="text-paper/55">{t.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── СВЕЖЕЕ / В ТВОЁМ РАЗМЕРЕ ─────────────────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
              <h2 className="h-display text-[clamp(34px,5.5vw,62px)]">{mySize ? `В размере ${mySize}` : 'Свежее на полке'}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSizeOpen(true)}
                  className={`num border px-2.5 py-1.5 text-[11px] transition ${mySize ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}
                >
                  {mySize ? `ТОЛЬКО ${mySize} · ${mine.length}` : 'ПОКАЗАТЬ ТОЛЬКО МОЙ РАЗМЕР'}
                </button>
                <a href={href(mySize ? `/catalog?size=${mySize}` : '/catalog?fresh=1')} className="lbl border-b border-ink pb-0.5 hover:text-cobalt">
                  ВСЁ →
                </a>
              </div>
            </div>
          </Reveal>

          {mySize && mine.length === 0 ? (
            <div className="mt-8 border border-line bg-card p-8 text-center">
              <p className="h-display text-[30px]">В размере {mySize} сейчас пусто</p>
              <p className="mx-auto mt-2 max-w-[46ch] text-[14px] text-ink-soft">
                Позиции уходят по одной. Оставьте запрос — найдём вашу модель в вашем размере и назовём срок.
              </p>
              <a href={href('/concierge')} className="lbl mt-4 inline-block bg-cobalt px-4 py-3 text-paper">ОСТАВИТЬ ЗАПРОС</a>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
              {(mySize ? mine.slice(0, 8) : fresh).map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 70}>
                  <ProductCard p={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── КАТЕГОРИИ: товар парит над плиткой ───────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <h2 className="h-display text-[clamp(34px,5.5vw,62px)]">Что на полках</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 5) * 60}>
                <a href={href(`/catalog?cat=${c.slug}`)} className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden border border-line bg-card">
                  <img
                    src={img(c.image)}
                    alt={c.ru}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="absolute inset-x-0 top-[6%] mx-auto h-[62%] w-[86%] object-contain transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.08]"
                  />
                  <span className="pointer-events-none absolute inset-x-[22%] top-[64%] h-2 rounded-[50%] bg-ink/15 blur-[7px] transition-all duration-700 group-hover:inset-x-[16%] group-hover:bg-ink/25" />
                  <span className="lbl absolute left-2 top-2 bg-paper/85 px-1.5 py-1">{c.count} шт</span>
                  <span className="relative flex items-end justify-between gap-2 p-3">
                    <span className="h-display text-[20px] leading-none">{c.ru}</span>
                    <span className="num shrink-0 text-[11px] text-ink-soft">от {money(c.min)}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── УЙДУТ ПЕРВЫМИ: тёмная полка со спотлайтом ────────────────────── */}
      <section ref={lastsRef} className="spot border-b border-line bg-night py-10 text-paper lg:py-14">
        <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="lbl text-volt">осталось по одной</p>
                <h2 className="h-display mt-2 text-[clamp(34px,6vw,70px)]">Уйдут первыми</h2>
              </div>
              <p className="max-w-[42ch] text-[14px] text-paper/60">
                Позиции, у которых остался ровно один размер и ровно одна вещь. Вернуться за ними позже, скорее всего, не выйдет.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {lasts.map((p, i) => (
              <Reveal key={p.id} delay={(i % 6) * 60}>
                <ShelfItem id={p.id} />
              </Reveal>
            ))}
          </div>
          <div className="mt-1 h-[3px] w-full bg-volt" />
          <div className="h-4 w-full bg-linear-to-b from-black/50 to-transparent" />
        </div>
      </section>

      {/* ── ЖИВОЕ ДЕМО ───────────────────────────────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <LiveDemo />
          </Reveal>
        </div>
      </section>

      {/* ── SALE ─────────────────────────────────────────────────────────── */}
      {sale.length > 0 && (
        <section className="border-b border-line py-10 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <h2 className="h-display text-[clamp(56px,14vw,180px)] leading-[0.8] text-sale">SALE</h2>
                <p className="max-w-[40ch] text-[14px] text-ink-soft">
                  {sale.length} {plural(sale.length, 'позиция', 'позиции', 'позиций')} с честной старой ценой. Скидка не появляется
                  и не исчезает — цена просто ниже, пока вещь не забрали.
                </p>
              </div>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
              {sale.slice(0, 8).map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 70}>
                  <ProductCard p={p} />
                </Reveal>
              ))}
            </div>
            <a href={href('/catalog?sale=1')} className="lbl mt-6 inline-block border border-ink px-4 py-3 hover:bg-ink hover:text-paper">
              ВСЕ УЦЕНЁННЫЕ →
            </a>
          </div>
        </section>
      )}

      {/* ── БРЕНДЫ: таблица, а не лента ──────────────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <h2 className="h-display text-[clamp(34px,5.5vw,62px)]">Бренды на полке</h2>
          </Reveal>
          <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((b) => (
              <a key={b.slug} href={href(`/catalog?brand=${encodeURIComponent(b.name)}`)} className="group flex items-baseline justify-between gap-3 bg-card px-4 py-3.5 transition hover:bg-volt">
                <span className="h-display text-[24px] leading-none">{b.name}</span>
                <span className="num shrink-0 text-[11px] text-ink-soft group-hover:text-ink">{b.count} · от {money(b.min)}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОНСЬЕРЖ: путь вещи показан схемой ───────────────────────────── */}
      <section ref={conciergeRef} className="spot border-b border-line bg-cobalt py-12 text-paper lg:py-16">
        <div className="relative mx-auto grid max-w-[1400px] gap-8 px-4 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <Reveal>
            <p className="lbl text-volt">SINI CONCIERGE</p>
            <h2 className="h-display mt-3 text-[clamp(38px,7vw,88px)]">
              Нет вашего размера?
              <br />
              Значит, привезём.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-snug text-paper/85">
              У нас свой сервис выкупа из-за рубежа: находим редкие и коллекционные модели, ловим нужный размер и присылаем
              фото и видео вещи до отправки.
            </p>
            <a href={href('/concierge')} className="lbl mt-6 inline-block bg-volt px-5 py-4 text-ink transition hover:bg-paper">
              ОСТАВИТЬ ЗАПРОС НА ПОДБОР
            </a>
          </Reveal>
          <Reveal delay={120}>
            <RouteScheme />
          </Reveal>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ───────────────────────────────────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <span className="h-display text-[clamp(56px,12vw,140px)] leading-[0.8]">{SHOP.rating.value}</span>
              <div className="pb-2">
                <p className="text-[17px] font-bold tracking-[0.2em] text-cobalt">★★★★★</p>
                <p className="text-[14px] text-ink-soft">{SHOP.rating.count} отзывов на {SHOP.rating.source}</p>
                <a href={SHOP.mapUrl} target="_blank" rel="noreferrer" className="lbl mt-1 inline-block border-b border-ink pb-0.5">СМОТРЕТЬ ВСЕ ОТЗЫВЫ →</a>
              </div>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.date} delay={(i % 4) * 70}>
                <figure className="flex h-full flex-col border-t-2 border-ink pt-3">
                  <blockquote className="text-[14px] leading-snug">«{r.text}»</blockquote>
                  <figcaption className="num mt-auto pt-3 text-[10px] text-ink-soft">{r.name} · {r.date}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-line py-10 lg:py-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <Reveal>
            <h2 className="h-display text-[clamp(34px,5.5vw,62px)] lg:sticky lg:top-28">
              Вопросы,
              <br />
              которые задают
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-semibold">
                  {f.q}
                  <span className="shrink-0 text-cobalt transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[70ch] pb-4 text-[14px] leading-snug text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── МАГАЗИН ──────────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <p className="lbl text-ink-soft">Оффлайн</p>
            <h2 className="h-display mt-2 text-[clamp(34px,5.5vw,62px)]">Можно прийти и померить</h2>
            <p className="mt-3 max-w-[46ch] text-[15px] leading-snug text-ink-soft">
              Магазин в центре Воронежа: {SHOP.address}. Здесь стоит то же, что на сайте — вживую, с коробками и бирками.
              Перед визитом за конкретной вещью напишите, чтобы её отложили.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={SHOP.tg.channel} target="_blank" rel="noreferrer" className="lbl bg-ink px-4 py-3 text-paper hover:bg-cobalt">КАНАЛ {SHOP.tg.channelName}</a>
              <a href={SHOP.tg.manager} target="_blank" rel="noreferrer" className="lbl border border-ink px-4 py-3 hover:bg-ink hover:text-paper">НАПИСАТЬ МЕНЕДЖЕРУ</a>
            </div>
            <div className="mt-5 border border-ink bg-volt p-4">
              <p className="lbl">ПРОМОКОД НА ПЕРВЫЙ ЗАКАЗ</p>
              <PromoCode />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] overflow-hidden border border-line">
              <iframe
                title="SINI на карте"
                src="https://yandex.ru/map-widget/v1/?ll=39.196%2C51.669&z=16&text=%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5%2C%202%2F4"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {sizeOpen && <SizeGate value={mySize} onPick={(s) => { setMySize(s); setSizeOpen(false) }} onClose={() => setSizeOpen(false)} />}
    </>
  )
}

/** Путь вещи показан схемой, а не абзацем: где мы её берём и как она доходит. */
function RouteScheme() {
  const nodes = [
    { t: 'Магазин за границей', d: 'находим модель и размер' },
    { t: 'Проверка', d: 'фото и видео до отправки' },
    { t: 'Воронеж', d: 'Орджоникидзе 2/4' },
    { t: 'Вы', d: 'самовывоз или СДЭК' },
  ]
  return (
    <div className="border border-paper/25 bg-ink/25 p-5">
      <div className="relative">
        <span className="absolute left-[11px] top-2 bottom-2 w-px bg-paper/25" />
        <span className="route-spark absolute left-[8px] h-1.5 w-1.5 rounded-full bg-volt" />
        <ol className="relative grid gap-5">
          {nodes.map((n, i) => (
            <li key={n.t} className="flex items-start gap-4">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center border border-paper/40 bg-ink">
                <span className={`h-1.5 w-1.5 ${i === nodes.length - 1 ? 'bg-volt' : 'bg-paper/70'}`} />
              </span>
              <span>
                <b className="block text-[15px] leading-tight">{n.t}</b>
                <span className="text-[13px] text-paper/60">{n.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
      <p className="num mt-5 border-t border-paper/20 pt-3 text-[10px] text-paper/50">
        Сроки и стоимость менеджер подтверждает до оплаты
      </p>
    </div>
  )
}

function ShelfItem({ id }: { id: string }) {
  const p = byId(id)!
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href(`/p/${p.id}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex w-full flex-col text-left"
    >
      <div className="relative flex aspect-square items-end justify-center">
        <img
          src={img(hover && p.images[1] ? p.images[1] : p.images[0])}
          alt={p.title}
          width={1000}
          height={1000}
          loading="lazy"
          className="h-[86%] w-full object-contain transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.06]"
        />
        <span
          className="pointer-events-none absolute inset-x-4 bottom-0 h-[14px] transition-all duration-500 group-hover:inset-x-2"
          style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,.75), transparent 78%)' }}
        />
        <span className="tag tag-volt absolute left-0 top-1">{p.sizes[0]?.label}</span>
      </div>
      <p className="lbl mt-2 text-paper/55">{p.brand}</p>
      <p className="mt-0.5 line-clamp-2 text-[13px] font-semibold leading-tight">{p.title}</p>
      <p className="num mt-1 text-[13px] font-bold text-volt">{money(p.price)}</p>
    </a>
  )
}

function PromoCode() {
  const { say } = useStore()
  const [done, setDone] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(SHOP.promo).catch(() => {})
        setDone(true)
        say('Промокод скопирован')
        setTimeout(() => setDone(false), 2000)
      }}
      className="mt-2 flex w-full items-center justify-between gap-3 border-2 border-dashed border-ink bg-paper px-4 py-3"
    >
      <span className="h-display text-[30px] leading-none">{SHOP.promo}</span>
      <span className="lbl">{done ? 'СКОПИРОВАНО ✓' : `${SHOP.promoText} · НАЖМИТЕ`}</span>
    </button>
  )
}
