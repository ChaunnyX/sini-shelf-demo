import { useMemo, useState } from 'react'
import { APPAREL_SIZES, BRANDS, CATEGORIES, PRODUCTS, SHOE_SIZES, type Product } from '../data/catalog'

const chunk = (arr: Product[], n: number) =>
  Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n))
import { filterProducts, type Filters } from '../lib/search'
import { money } from '../lib/format'
import { go, href, type Route } from '../lib/router'
import { plural, useStore } from '../lib/store'
import { ProductCard } from '../components/ProductCard'

const SORTS = [
  { k: '', l: 'Сначала новинки' },
  { k: 'cheap', l: 'Сначала дешевле' },
  { k: 'rich', l: 'Сначала дороже' },
  { k: 'sale', l: 'Больше скидка' },
]
const PRICE_STEPS = [
  { l: 'до 10 000', min: undefined, max: 10000 },
  { l: '10–20 000', min: 10000, max: 20000 },
  { l: 'от 20 000', min: 20000, max: undefined },
]

export function Catalog({ route }: { route: Route }) {
  const { mySize, setMySize } = useStore()
  const [openFilters, setOpenFilters] = useState(false)
  const q = route.query

  const f: Filters = {
    q: q.get('q') || undefined,
    cat: q.get('cat') || undefined,
    group: q.get('group') || undefined,
    brand: q.get('brand') || undefined,
    size: q.get('size') || undefined,
    sale: q.get('sale') === '1' || undefined,
    fresh: q.get('fresh') === '1' || undefined,
    min: q.get('min') ? Number(q.get('min')) : undefined,
    max: q.get('max') ? Number(q.get('max')) : undefined,
    sort: q.get('sort') || undefined,
  }

  const list = useMemo(() => filterProducts(f), [route.query.toString()]) // eslint-disable-line react-hooks/exhaustive-deps

  const setParam = (k: string, v?: string | null) => {
    const next = new URLSearchParams(q.toString())
    if (!v) next.delete(k)
    else next.set(k, v)
    go(`/catalog${next.toString() ? `?${next}` : ''}`, true)
  }

  const title = f.q
    ? `Поиск: ${f.q}`
    : f.cat
      ? CATEGORIES.find((c) => c.slug === f.cat)?.ru || 'Каталог'
      : f.brand || (f.sale ? 'Уценённое' : f.fresh ? 'Новинки' : f.group === 'clothing' ? 'Одежда' : 'Весь каталог')

  const chips: { label: string; clear: () => void }[] = []
  if (f.q) chips.push({ label: `«${f.q}»`, clear: () => setParam('q', null) })
  if (f.cat) chips.push({ label: CATEGORIES.find((c) => c.slug === f.cat)?.ru || f.cat, clear: () => setParam('cat', null) })
  if (f.group) chips.push({ label: 'Одежда', clear: () => setParam('group', null) })
  if (f.brand) chips.push({ label: f.brand, clear: () => setParam('brand', null) })
  if (f.size) chips.push({ label: `Размер ${f.size}`, clear: () => setParam('size', null) })
  if (f.sale) chips.push({ label: 'Со скидкой', clear: () => setParam('sale', null) })
  if (f.fresh) chips.push({ label: 'Новинки', clear: () => setParam('fresh', null) })
  if (f.min || f.max) chips.push({ label: `${f.min ? money(f.min) : '0'} — ${f.max ? money(f.max) : '∞'}`, clear: () => { const n = new URLSearchParams(q.toString()); n.delete('min'); n.delete('max'); go(`/catalog?${n}`, true) } })

  const Filters = (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lbl mb-2 text-ink-soft">Размер обуви, EU</p>
        <div className="flex flex-wrap gap-1">
          {SHOE_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setParam('size', f.size === s ? null : s)}
              className={`num border px-2 py-1.5 text-[11px] ${f.size === s ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}
            >
              {s}
            </button>
          ))}
        </div>
        <p className="lbl mb-2 mt-4 text-ink-soft">Размер одежды</p>
        <div className="flex flex-wrap gap-1">
          {APPAREL_SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setParam('size', f.size === s ? null : s)}
              className={`num border px-2 py-1.5 text-[11px] ${f.size === s ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}
            >
              {s}
            </button>
          ))}
        </div>
        {f.size && f.size !== mySize && (
          <button onClick={() => setMySize(f.size!)} className="lbl mt-3 border border-ink px-2.5 py-2 hover:bg-ink hover:text-paper">
            ЗАПОМНИТЬ {f.size} КАК МОЙ РАЗМЕР
          </button>
        )}
      </div>

      <div>
        <p className="lbl mb-2 text-ink-soft">Категория</p>
        <div className="flex flex-col">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setParam('cat', f.cat === c.slug ? null : c.slug)}
              className={`flex items-baseline justify-between gap-2 border-b border-line py-1.5 text-left text-[14px] ${f.cat === c.slug ? 'font-bold text-cobalt' : 'hover:text-cobalt'}`}
            >
              {c.ru}
              <span className="num text-[10px] text-ink-soft">{c.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="lbl mb-2 text-ink-soft">Бренд</p>
        <div className="flex flex-col">
          {BRANDS.map((b) => (
            <button
              key={b.slug}
              onClick={() => setParam('brand', f.brand === b.name ? null : b.name)}
              className={`flex items-baseline justify-between gap-2 border-b border-line py-1.5 text-left text-[14px] ${f.brand === b.name ? 'font-bold text-cobalt' : 'hover:text-cobalt'}`}
            >
              {b.name}
              <span className="num text-[10px] text-ink-soft">{b.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="lbl mb-2 text-ink-soft">Цена</p>
        <div className="flex flex-wrap gap-1">
          {PRICE_STEPS.map((p) => {
            const on = f.min === p.min && f.max === p.max
            return (
              <button
                key={p.l}
                onClick={() => {
                  const n = new URLSearchParams(q.toString())
                  if (on) { n.delete('min'); n.delete('max') }
                  else {
                    p.min ? n.set('min', String(p.min)) : n.delete('min')
                    p.max ? n.set('max', String(p.max)) : n.delete('max')
                  }
                  go(`/catalog${n.toString() ? `?${n}` : ''}`, true)
                }}
                className={`num border px-2.5 py-1.5 text-[11px] ${on ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}
              >
                {p.l}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <button onClick={() => setParam('sale', f.sale ? null : '1')} className={`border px-3 py-2 text-left text-[13px] ${f.sale ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}>
          Только со скидкой
        </button>
        <button onClick={() => setParam('fresh', f.fresh ? null : '1')} className={`border px-3 py-2 text-left text-[13px] ${f.fresh ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}>
          Только новинки
        </button>
      </div>
    </div>
  )

  return (
    <div>
      {/* Шапка раздела — тёмная полка с крупным именем и живым счётчиком */}
      <div className="border-b border-line bg-night text-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-7 lg:px-8 lg:py-10">
          <nav className="lbl text-paper/45">
            <a href={href('/')} className="hover:text-paper">Главная</a> / <span className="text-paper">{title}</span>
          </nav>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="h-display max-w-[16ch] text-[clamp(40px,7.6vw,96px)]">{title}</h1>
            <p className="num pb-2 text-[13px] text-paper/60">
              <b className="text-volt">{list.length}</b> {plural(list.length, 'позиция', 'позиции', 'позиций')} на полке
              {f.size ? ` в размере ${f.size}` : ''}
            </p>
          </div>

          {/* Быстрые входы — вместо стены фильтров в глаза */}
          <div className="mt-5 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <a href={href('/catalog')} className={`lbl shrink-0 border px-3 py-2 transition ${!f.cat && !f.group && !f.sale && !f.fresh ? 'border-volt bg-volt text-ink' : 'border-paper/25 hover:border-paper'}`}>ВСЁ · {PRODUCTS.length}</a>
            {CATEGORIES.map((c) => (
              <a
                key={c.slug}
                href={href(`/catalog?cat=${c.slug}`)}
                className={`lbl shrink-0 border px-3 py-2 transition ${f.cat === c.slug ? 'border-volt bg-volt text-ink' : 'border-paper/25 hover:border-paper'}`}
              >
                {c.ru.toUpperCase()} · {c.count}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8 lg:py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setParam('size', mySize && f.size !== mySize ? mySize : null)}
            className={`num border px-2.5 py-2 text-[11px] transition ${f.size ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'}`}
          >
            {f.size ? `РАЗМЕР ${f.size} · СБРОСИТЬ` : mySize ? `ПОКАЗАТЬ МОЙ РАЗМЕР ${mySize}` : 'РАЗМЕР — В ФИЛЬТРАХ'}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={f.sort || ''}
            onChange={(e) => setParam('sort', e.target.value || null)}
            className="num border border-line bg-card px-2 py-2 text-[11px]"
          >
            {SORTS.map((s) => (
              <option key={s.k} value={s.k}>{s.l}</option>
            ))}
          </select>
          <button onClick={() => setOpenFilters(true)} className="lbl border border-ink px-3 py-2 lg:hidden">
            ФИЛЬТРЫ{chips.length ? ` · ${chips.length}` : ''}
          </button>
        </div>
      </div>

      {chips.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {chips.map((c) => (
            <button key={c.label} onClick={c.clear} className="num flex items-center gap-1.5 border border-ink bg-card px-2.5 py-1.5 text-[11px] hover:bg-volt">
              {c.label} <span className="text-ink-soft">✕</span>
            </button>
          ))}
          <a href={href('/catalog')} className="lbl px-2 py-1.5 text-ink-soft underline">сбросить всё</a>
        </div>
      )}

      <div className="mt-6 grid gap-8 lg:grid-cols-[230px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 scrollbar-none">{Filters}</div>
        </aside>

        <div>
          {list.length === 0 ? (
            <div className="border border-line bg-card p-10 text-center">
              <p className="h-display text-[34px]">Под эти условия ничего нет</p>
              <p className="mx-auto mt-2 max-w-[48ch] text-[14px] text-ink-soft">
                Каждая вещь у нас в одном экземпляре, поэтому узкий фильтр легко упирается в пустоту.
                Снимите часть условий — или закажите модель под себя, менеджер найдёт её в вашем размере.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a href={href('/catalog')} className="lbl border border-ink px-4 py-3 hover:bg-ink hover:text-paper">СБРОСИТЬ ФИЛЬТРЫ</a>
                <a href={href('/concierge')} className="lbl bg-cobalt px-4 py-3 text-paper">ЗАКАЗАТЬ ПОДБОР</a>
              </div>
            </div>
          ) : (
            // Длинную ленту режем на «полки» — иначе сетка на сотню позиций читается как обои
            chunk(list, 12).map((shelf, si) => (
              <section key={si}>
                {si > 0 && (
                  <div className="my-8 flex items-center gap-3">
                    <span className="num text-[10px] tracking-[0.2em] text-ink-soft">ПОЛКА {String(si + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-line" />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
                  {shelf.map((p) => (
                    <ProductCard key={p.id} p={p} />
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
      </div>

      {openFilters && (
        <div className="fixed inset-0 z-50 bg-ink/50 lg:hidden" onClick={() => setOpenFilters(false)}>
          <div className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-y-auto border-t-2 border-ink bg-paper p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <span className="h-display text-[28px]">Фильтры</span>
              <button onClick={() => setOpenFilters(false)} className="lbl px-2 py-1">Закрыть ✕</button>
            </div>
            {Filters}
            <button onClick={() => setOpenFilters(false)} className="lbl mt-6 w-full bg-ink py-3.5 text-paper">
              ПОКАЗАТЬ {list.length} {plural(list.length, 'ПОЗИЦИЮ', 'ПОЗИЦИИ', 'ПОЗИЦИЙ')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
