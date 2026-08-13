import { useEffect, useMemo, useRef, useState } from 'react'
import { CATEGORIES, PRODUCTS, SHOE_SIZES, APPAREL_SIZES, img } from '../data/catalog'
import { filterProducts } from '../lib/search'
import { money, mmss } from '../lib/format'
import { go, href } from '../lib/router'
import { plural, useStore } from '../lib/store'

const NAV = [
  { to: '/catalog?fresh=1', label: 'Новинки' },
  { to: '/catalog?cat=sneakers', label: 'Кроссовки' },
  { to: '/catalog?group=clothing', label: 'Одежда' },
  { to: '/catalog?sale=1', label: 'Sale' },
  { to: '/concierge', label: 'Привезём под заказ' },
]

export function Header() {
  const { cart, fav, mySize, setMySize, cartTotal } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [openSize, setOpenSize] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [q, setQ] = useState('')
  const [now, setNow] = useState(Date.now())
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!cart.length) return
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [cart.length])

  useEffect(() => {
    if (openSearch) setTimeout(() => inputRef.current?.focus(), 40)
  }, [openSearch])

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenSearch(false); setOpenSize(false); setOpenMenu(false) }
    }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])

  const results = useMemo(() => (q.trim().length < 2 ? [] : filterProducts({ q }).slice(0, 6)), [q])
  const hold = cart.length ? Math.min(...cart.map((l) => l.reservedUntil)) - now : 0
  const mySizeCount = mySize ? PRODUCTS.filter((p) => p.sizes.some((s) => s.label === mySize && s.stock > 0)).length : 0

  const runSearch = () => {
    if (!q.trim()) return
    setOpenSearch(false)
    go(`/catalog?q=${encodeURIComponent(q.trim())}`)
  }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    runSearch()
  }

  return (
    <>
      {/* Одна конкретная выгода — статичной строкой, читаемой, а не бегущей */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-1.5 lg:px-8">
          <p className="lbl truncate text-paper/70">
            Воронеж · Орджоникидзе 2/4<span className="hidden sm:inline"> · примерка в магазине</span>
          </p>
          <p className="lbl hidden text-volt sm:block">Промокод SINI2026 — −5% на первый заказ</p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-paper/95 backdrop-blur transition-shadow ${
          scrolled ? 'border-line shadow-[0_10px_30px_-24px_rgba(0,0,0,.6)]' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-2.5 lg:px-8">
          <button className="lbl -ml-1 px-2 py-2 lg:hidden" onClick={() => setOpenMenu(true)} aria-label="Меню">
            ☰ Меню
          </button>

          <a href={href('/')} className="h-display shrink-0 text-[30px] leading-none tracking-tight lg:text-[34px]">
            SINI
          </a>

          <nav className="ml-6 hidden items-center gap-5 lg:flex">
            {NAV.map((n) => (
              <a key={n.to} href={href(n.to)} className="text-[13px] font-semibold uppercase tracking-[0.06em] hover:text-cobalt">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1.5">
            {/* Ключевой инструмент ниши: один раз задал размер — сайт стал твоим */}
            <button
              onClick={() => setOpenSize(true)}
              className={`num flex items-center gap-1.5 border px-2.5 py-1.5 text-[11px] transition ${
                mySize ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'
              }`}
            >
              {/* На узком экране шапке хватает короткой формы */}
              <span className="whitespace-nowrap">
                <span className="hidden sm:inline">МОЙ РАЗМЕР </span>
                {mySize ?? <span className="sm:hidden">РАЗМЕР</span>}
              </span>
              {mySize && <span className="whitespace-nowrap text-ink/60">· {mySizeCount}</span>}
            </button>

            <button onClick={() => setOpenSearch(true)} aria-label="Поиск" className="grid h-9 w-9 place-items-center border border-line bg-card hover:border-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" />
              </svg>
            </button>

            <a href={href('/fav')} aria-label="Избранное" className="relative hidden h-9 w-9 place-items-center border border-line bg-card hover:border-ink sm:grid">
              ♡
              {fav.length > 0 && <span className="num absolute -right-1.5 -top-1.5 grid h-4 min-w-4 place-items-center bg-ink px-1 text-[9px] text-paper">{fav.length}</span>}
            </a>

            <a data-cart-anchor href={href('/cart')} className="relative flex h-9 items-center gap-2 border border-ink bg-ink px-3 text-paper hover:bg-cobalt hover:border-cobalt">
              <span className="lbl">КОРЗИНА</span>
              {cart.length > 0 && <span key={cart.length} className="num pop text-[11px] font-bold">{cart.length}</span>}
            </a>
          </div>
        </div>

        {/* Честная бронь: товар в одном экземпляре, поэтому его реально держат */}
        {cart.length > 0 && hold > 0 && (
          <div className="border-t border-line bg-volt">
            <div className="num mx-auto flex max-w-[1400px] items-center justify-between px-4 py-1 text-[11px] lg:px-8">
              <span>Держим {cart.length} {plural(cart.length, 'вещь', 'вещи', 'вещей')} за вами · {mmss(hold)}</span>
              <a href={href('/cart')} className="font-bold underline">Оформить {money(cartTotal)}</a>
            </div>
          </div>
        )}
      </header>

      {openMenu && (
        <div className="fixed inset-0 z-50 bg-ink/50" onClick={() => setOpenMenu(false)}>
          <div className="h-full w-[86%] max-w-[340px] bg-paper p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="h-display text-[28px]">SINI</span>
              <button onClick={() => setOpenMenu(false)} className="lbl px-2 py-1">Закрыть ✕</button>
            </div>
            <nav className="mt-6 flex flex-col">
              {NAV.map((n) => (
                <a key={n.to} href={href(n.to)} onClick={() => setOpenMenu(false)} className="h-display border-b border-line py-3 text-[26px]">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 grid gap-1.5">
              {CATEGORIES.map((c) => (
                <a key={c.slug} href={href(`/catalog?cat=${c.slug}`)} onClick={() => setOpenMenu(false)} className="flex items-center justify-between border border-line bg-card px-3 py-2 text-[13px]">
                  <span>{c.ru}</span>
                  <span className="num text-[10px] text-ink-soft">{c.count}</span>
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-1.5">
              <a href={href('/fav')} onClick={() => setOpenMenu(false)} className="lbl border border-line bg-card px-3 py-2.5">♡ Избранное · {fav.length}</a>
              <a href={href('/info/delivery')} onClick={() => setOpenMenu(false)} className="lbl border border-line bg-card px-3 py-2.5">Доставка и оплата</a>
              <a href={href('/info/faq')} onClick={() => setOpenMenu(false)} className="lbl border border-line bg-card px-3 py-2.5">Вопросы</a>
              <a href={href('/info/about')} onClick={() => setOpenMenu(false)} className="lbl border border-line bg-card px-3 py-2.5">О магазине</a>
            </div>
          </div>
        </div>
      )}

      {openSize && <SizeGate onClose={() => setOpenSize(false)} value={mySize} onPick={(s) => { setMySize(s); setOpenSize(false) }} />}

      {openSearch && (
        <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px]" onClick={() => setOpenSearch(false)}>
          <div className="mx-auto mt-[10vh] w-[min(760px,92vw)] border border-ink bg-paper p-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submit} className="flex items-center gap-2 border-b-2 border-ink pb-2">
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Модель, бренд, артикул — «2002R», «нб», «FD0780-100»"
                className="h-display w-full bg-transparent text-[26px] outline-none placeholder:text-ink-soft/60"
              />
              <button className="lbl shrink-0 bg-ink px-3 py-2 text-paper">Найти</button>
            </form>

            {q.trim().length >= 2 && (
              <div className="mt-3">
                {results.length === 0 ? (
                  <div className="py-6">
                    <p className="text-[15px] font-semibold">По запросу «{q}» ничего нет в наличии.</p>
                    <p className="mt-1 text-[13px] text-ink-soft">Это не значит, что не достанем — напишите модель менеджеру, привезём под заказ.</p>
                    <a href={href('/concierge')} onClick={() => setOpenSearch(false)} className="lbl mt-3 inline-block bg-cobalt px-3 py-2 text-paper">Заказать поиск модели</a>
                  </div>
                ) : (
                  <>
                    {results.map((p) => (
                      <a
                        key={p.id}
                        href={href(`/p/${p.id}`)}
                        onClick={() => setOpenSearch(false)}
                        className="flex items-center gap-3 border-b border-line py-2 hover:bg-card"
                      >
                        <img src={img(p.images[0])} alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                        <div className="min-w-0 flex-1">
                          <div className="lbl text-ink-soft">{p.brand}</div>
                          <div className="truncate text-[14px] font-semibold">{p.title}</div>
                        </div>
                        <div className="num shrink-0 text-[13px] font-bold">{money(p.price)}</div>
                      </a>
                    ))}
                    <button onClick={runSearch} className="lbl mt-3 w-full bg-ink py-2.5 text-paper">Показать все результаты</button>
                  </>
                )}
              </div>
            )}

            {q.trim().length < 2 && (
              <div className="mt-4">
                <p className="lbl text-ink-soft">Часто ищут</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['New Balance 2002R', 'Air Max', 'Samba', 'C.P. Company', 'Stone Island', 'Carhartt'].map((s) => (
                    <button key={s} onClick={() => setQ(s)} className="border border-line bg-card px-2.5 py-1.5 text-[12px] hover:border-ink">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export function SizeGate({ value, onPick, onClose }: { value: string | null; onPick: (s: string | null) => void; onClose: () => void }) {
  const count = (s: string) => PRODUCTS.filter((p) => p.sizes.some((x) => x.label === s && x.stock > 0)).length
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4" onClick={onClose}>
      <div className="w-[min(680px,94vw)] border border-ink bg-paper p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="h-display text-[34px]">Ваш размер</h2>
            <p className="mt-1 max-w-[46ch] text-[13px] text-ink-soft">
              Каждая позиция у нас в одном экземпляре. Выберите размер — оставим на витрине только то, что реально можно забрать.
            </p>
          </div>
          <button onClick={onClose} className="lbl px-2 py-1">✕</button>
        </div>

        <p className="lbl mt-5 text-ink-soft">Обувь, EU</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {SHOE_SIZES.map((s) => {
            const n = count(s)
            return (
              <button
                key={s}
                disabled={!n}
                onClick={() => onPick(s)}
                className={`num min-w-[54px] border px-2 py-2 text-[12px] transition ${
                  value === s ? 'border-ink bg-volt font-bold' : n ? 'border-line bg-card hover:border-ink' : 'border-line/60 text-ink-soft/40'
                }`}
              >
                {s}
                <span className="block text-[9px] opacity-60">{n || '—'}</span>
              </button>
            )
          })}
        </div>

        <p className="lbl mt-5 text-ink-soft">Одежда</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {APPAREL_SIZES.map((s) => {
            const n = count(s)
            return (
              <button
                key={s}
                disabled={!n}
                onClick={() => onPick(s)}
                className={`num min-w-[54px] border px-2 py-2 text-[12px] ${
                  value === s ? 'border-ink bg-volt font-bold' : n ? 'border-line bg-card hover:border-ink' : 'border-line/60 text-ink-soft/40'
                }`}
              >
                {s}
                <span className="block text-[9px] opacity-60">{n || '—'}</span>
              </button>
            )
          })}
        </div>

        {value && (
          <button onClick={() => onPick(null)} className="lbl mt-5 border border-line bg-card px-3 py-2">
            Показывать всё, без фильтра по размеру
          </button>
        )}
      </div>
    </div>
  )
}
