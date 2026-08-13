import { useEffect, useRef, useState } from 'react'
import { byId, img, inStock, type Product } from '../data/catalog'
import { money } from '../lib/format'
import { go, href } from '../lib/router'
import { useStore } from '../lib/store'

/**
 * Витрина под лампой: один предмет в фокусе, отражение на столешнице,
 * бирка с ценой и размером. Кадры меняются сами — без бегущих лент,
 * взгляду есть за что зацепиться.
 */
const DROPS = ['krossovki-new-balance-m2002rdd', 'kurtka-c-p-company-green-goggle-jacket', 'krossovki-nike-fd0780-100', 'krossovki-salomon-l49107000', 'hudi-carhartt-wip-onyx-green']

export function Showcase() {
  const { take } = useStore()
  const list = DROPS.map(byId).filter(Boolean) as Product[]
  const [i, setI] = useState(0)
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % list.length), 6000)
    return () => clearInterval(t)
  }, [list.length])

  useEffect(() => {
    const el = stage.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let tx = 0, ty = 0, x = 0, y = 0
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - r.left) / r.width - 0.5
      ty = (e.clientY - r.top) / r.height - 0.5
    }
    const loop = () => {
      x += (tx - x) * 0.05
      y += (ty - y) * 0.05
      el.style.setProperty('--px', x.toFixed(4))
      el.style.setProperty('--py', y.toFixed(4))
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  const cur = list[i]
  if (!cur) return null

  return (
    <div ref={stage} style={{ ['--px' as string]: 0, ['--py' as string]: 0 }}>
      {/* Сцена */}
      <div className="relative h-[clamp(230px,32vw,380px)]">
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(closest-side, rgba(255,226,164,.26), transparent 72%)' }}
        />
        {list.map((p, n) => (
          <button
            key={p.id}
            onClick={() => go(`/p/${p.id}`)}
            aria-label={`Открыть ${p.title}`}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[900ms] ${
              n === i ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            style={{ transform: 'translate3d(calc(var(--px) * 22px), calc(var(--py) * 12px), 0)' }}
          >
            <img
              src={img(p.images[0])}
              alt={p.title}
              width={1100}
              height={1100}
              className="max-h-full w-auto max-w-[72%] object-contain"
              style={{ filter: 'drop-shadow(0 30px 24px rgba(0,0,0,.6))' }}
            />
          </button>
        ))}

        {/* Бирка на нитке — сигнатура, висит в свободном поле справа */}
        <div className="absolute right-0 top-[14%] flex flex-col items-center">
          <span className="h-9 w-px bg-paper/35" />
          <span className="num border border-ink/15 bg-paper px-2.5 py-1.5 text-[11px] font-bold text-ink shadow-[0_8px_18px_-8px_rgba(0,0,0,.9)]">
            {money(cur.price)}
          </span>
          <span className="num mt-1 bg-volt px-2 py-1 text-[10px] font-bold text-ink">{cur.sizes[0]?.label}</span>
        </div>
      </div>

      {/* Отражение на столешнице */}
      <div className="relative h-[clamp(40px,7vw,80px)] overflow-hidden">
        {list.map((p, n) => (
          <div
            key={p.id}
            className={`absolute inset-0 flex justify-center transition-opacity duration-[900ms] ${n === i ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img(p.images[0])}
              alt=""
              aria-hidden
              width={1100}
              height={1100}
              className="w-auto max-w-[72%] scale-y-[-1] object-contain opacity-25"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 12%, #000 92%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 12%, #000 92%)' }}
            />
          </div>
        ))}
      </div>

      <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(239,234,224,.5)_16%,rgba(239,234,224,.5)_84%,transparent)]" />

      {/* Подпись кадра: что это, сколько, какой размер, одно действие */}
      <div className="mt-4 grid gap-3 md:grid-cols-[1.5fr_auto_auto] md:items-end">
        <div className="min-w-0">
          <p className="lbl text-paper/45">{cur.brand} · {cur.catRu}</p>
          <p className="mt-1 truncate text-[clamp(16px,2vw,22px)] font-semibold">{cur.title}</p>
        </div>
        <p className="num text-[13px] text-paper/55">
          размер {cur.sizes.map((s) => s.label).join(', ')} · {inStock(cur) === 1 ? 'одна пара' : `${inStock(cur)} шт`}
        </p>
        <button
          onClick={(e) => take(cur, cur.sizes[0].label, e.currentTarget)}
          className="lbl bg-volt px-5 py-3.5 text-ink transition hover:bg-paper"
        >
          ВЗЯТЬ · {money(cur.price)}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        {list.map((p, n) => (
          <button
            key={p.id}
            onClick={() => setI(n)}
            aria-label={p.title}
            className={`h-[3px] flex-1 transition-colors ${n === i ? 'bg-volt' : 'bg-paper/20 hover:bg-paper/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

export const showcaseHref = href
