import { useRef, useState } from 'react'
import { img, inStock, type Product } from '../data/catalog'
import { discount, money } from '../lib/format'
import { useStore } from '../lib/store'

export function ProductCard({ p, compact = false }: { p: Product; compact?: boolean }) {
  const { fav, toggleFav, mySize, take } = useStore()
  const [hover, setHover] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const off = discount(p.price, p.old)
  const liked = fav.includes(p.id)
  const sizes = p.sizes.filter((s) => s.stock > 0)
  const mine = mySize ? sizes.find((s) => s.label === mySize) : null
  const missesMySize = Boolean(mySize && !mine && p.sizeSystem !== 'ONE')
  const second = p.images[1] ?? p.images[0]

  /** Лёгкий наклон к курсору — товар ощущается предметом, который можно взять в руки. */
  const tilt = (e: React.MouseEvent) => {
    const el = box.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`)
  }
  const reset = () => {
    setHover(false)
    const el = box.current
    if (el) {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }
  }

  return (
    <article
      className={`group relative flex flex-col ${missesMySize ? 'opacity-80 hover:opacity-100' : ''} transition-opacity`}
      onMouseEnter={() => setHover(true)}
      onMouseMove={tilt}
      onMouseLeave={reset}
    >
      <div ref={box} className="tilt relative border border-line bg-card">
        <a href={`#/p/${p.id}`} className="block" aria-label={`Открыть ${p.title}`}>
          <div className="flex aspect-square items-center justify-center px-4 pb-6 pt-4">
            <img
              src={img(hover ? second : p.images[0])}
              alt={p.title}
              width={1000}
              height={1000}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.05]"
            />
          </div>
        </a>

        {/* Контактная тень — вещь стоит на полке, а не висит в вакууме */}
        <span
          className="pointer-events-none absolute inset-x-8 bottom-3 h-[14px] transition-all duration-500 group-hover:inset-x-6"
          style={{ background: 'radial-gradient(closest-side, rgba(23,21,15,.34), transparent 76%)' }}
        />

        {/* Сигнатура: складская бирка — артикул и остаток честно на лицевой стороне */}
        <div className="pointer-events-none absolute left-0 top-3 flex flex-col items-start gap-1">
          {mine ? (
            <span className="tag tag-volt">{mine.label} · ЕСТЬ</span>
          ) : off > 0 ? (
            <span className="tag" style={{ background: 'var(--color-sale)' }}>−{off}%</span>
          ) : inStock(p) === 1 && !compact ? (
            <span className="tag">ПОСЛЕДНЯЯ</span>
          ) : p.isNew ? (
            <span className="tag">NEW</span>
          ) : null}
        </div>

        <button
          onClick={() => toggleFav(p.id)}
          aria-label={liked ? 'Убрать из избранного' : 'В избранное'}
          className={`absolute right-2 top-2 grid h-9 w-9 place-items-center border text-sm transition ${
            liked ? 'border-ink bg-ink text-paper' : 'border-line bg-card/85 text-ink opacity-0 group-hover:opacity-100 focus-visible:opacity-100'
          }`}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-2.5">
        <div className="lbl text-ink-soft">{p.brand}</div>
        <a href={`#/p/${p.id}`} className="mt-1 text-[15px] font-semibold leading-tight hover:text-cobalt">
          {p.title}
        </a>

        <div className="mt-auto pt-2.5">
          <div className="flex items-baseline gap-2">
            <span className="num text-[15px] font-bold">{money(p.price)}</span>
            {off > 0 && <span className="num text-[11px] text-ink-soft line-through">{money(p.old!)}</span>}
          </div>

          {/* Размеры прямо в сетке — главный вопрос закрывается без открытия карточки */}
          <div className="mt-2 flex flex-wrap items-center gap-1">
            {sizes.slice(0, 5).map((s) => {
              const isMine = mySize === s.label
              return (
                <button
                  key={s.label}
                  onClick={(e) => take(p, s.label, e.currentTarget)}
                  title={`Взять размер ${s.label}`}
                  className={`num border px-1.5 py-0.5 text-[10px] leading-none transition hover:bg-volt ${
                    isMine ? 'border-ink bg-volt font-bold' : 'border-line bg-card hover:border-ink'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
            {sizes.length > 5 && <span className="num text-[10px] text-ink-soft">+{sizes.length - 5}</span>}
            {missesMySize && <span className="lbl text-ink-soft">нет {mySize} · под заказ</span>}
          </div>
        </div>
      </div>
    </article>
  )
}
