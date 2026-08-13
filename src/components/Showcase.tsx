import { useEffect, useMemo, useRef, useState } from 'react'
import { PRODUCTS, byId, img, type Product } from '../data/catalog'
import { money } from '../lib/format'
import { href } from '../lib/router'

/**
 * Витрина под лампой: один главный предмет в фокусе и два в глубине.
 * Композиция сменяется сама раз в несколько секунд, всё остальное неподвижно —
 * взгляду есть за что зацепиться, он не бегает за движением.
 */
const STARS = [
  'krossovki-new-balance-m2002rdd',
  'kurtka-c-p-company-green-goggle-jacket',
  'krossovki-nike-fd0780-100',
  'krossovki-salomon-l49107000',
  'hudi-carhartt-wip-onyx-green',
]

export function Showcase() {
  const [i, setI] = useState(0)
  const stage = useRef<HTMLDivElement>(null)

  const scenes = useMemo(() => {
    const stars = STARS.map(byId).filter(Boolean) as Product[]
    const pool = PRODUCTS.filter((p) => p.heroOk && !STARS.includes(p.id))
    return stars.map((star, n) => ({
      star,
      left: pool[(n * 7 + 2) % pool.length],
      right: pool[(n * 11 + 5) % pool.length],
    }))
  }, [])

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % scenes.length), 6200)
    return () => clearInterval(t)
  }, [scenes.length])

  // Лёгкий параллакс: главный предмет ведёт, дальние отстают — появляется глубина
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
      x += (tx - x) * 0.06
      y += (ty - y) * 0.06
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

  const s = scenes[i]
  if (!s) return null

  return (
    <div ref={stage} className="relative" style={{ ['--px' as string]: 0, ['--py' as string]: 0 }}>
      {/* Свет лампы над витриной */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[78%] w-[92%] -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, rgba(255,226,164,.30), transparent 74%)' }}
      />

      <div className="relative flex h-[clamp(280px,42vw,460px)] items-end justify-center gap-[3%] pb-10">
        {scenes.map((sc, n) => (
          <div key={sc.star.id} className={`absolute inset-0 transition-opacity duration-[900ms] ${n === i ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <Item p={sc.left} depth={0.35} size="22%" x="4%" dim />
            <Item p={sc.right} depth={0.5} size="21%" x="73%" dim />
            <Item p={sc.star} depth={1} size="46%" x="29%" star />
          </div>
        ))}
      </div>

      {/* Столешница витрины */}
      <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(239,234,224,.5)_16%,rgba(239,234,224,.5)_84%,transparent)]" />
      <div className="h-8 w-full bg-[linear-gradient(180deg,rgba(0,0,0,.5),transparent)]" />

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {scenes.map((sc, n) => (
          <button
            key={sc.star.id}
            onClick={() => setI(n)}
            aria-label={sc.star.title}
            className={`h-[3px] w-9 transition-colors ${n === i ? 'bg-volt' : 'bg-paper/25 hover:bg-paper/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

function Item({ p, depth, size, x, star, dim }: { p: Product; depth: number; size: string; x: string; star?: boolean; dim?: boolean }) {
  return (
    <a
      href={href(`/p/${p.id}`)}
      className="group absolute bottom-0 block"
      style={{
        left: x,
        width: size,
        transform: `translate3d(calc(var(--px) * ${18 * depth}px), calc(var(--py) * ${10 * depth}px), 0)`,
      }}
    >
      <img
        src={img(p.images[0])}
        alt={p.title}
        width={900}
        height={900}
        className={`w-full object-contain transition-transform duration-500 group-hover:-translate-y-2 ${dim ? 'opacity-45 blur-[0.6px] group-hover:opacity-80' : ''}`}
        style={{ filter: star ? 'drop-shadow(0 26px 22px rgba(0,0,0,.55))' : 'drop-shadow(0 14px 14px rgba(0,0,0,.5))' }}
      />
      {star && (
        <span className="absolute -right-2 top-[18%] flex flex-col items-center">
          <span className="h-8 w-px bg-paper/40" />
          <span className="num border border-ink/15 bg-paper px-2 py-1 text-[10px] font-bold text-ink shadow-[0_6px_14px_-6px_rgba(0,0,0,.9)]">
            {money(p.price)}
          </span>
          <span className="num mt-1 bg-volt px-1.5 py-[3px] text-[9px] font-bold text-ink">
            {p.sizes[0]?.label}
          </span>
        </span>
      )}
      {star && (
        <span className="absolute inset-x-[18%] -bottom-3 block h-3" style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,.7), transparent 76%)' }} />
      )}
    </a>
  )
}
