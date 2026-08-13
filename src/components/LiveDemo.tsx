import { useEffect, useMemo, useRef, useState } from 'react'
import { PRODUCTS, img } from '../data/catalog'
import { money } from '../lib/format'

const QUERY = '2002R'
/** Сценарий проигрывается сам: набрали модель → полка сжалась → взяли размер → коробка. */
const STEPS = [
  { at: 0, label: 'ищем модель' },
  { at: 2600, label: 'осталось только то, что есть' },
  { at: 5200, label: 'берём свой размер' },
  { at: 7600, label: 'снято с полки' },
]
const TOTAL = 10600

export function LiveDemo() {
  const [t, setT] = useState(0)
  const [live, setLive] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

  const grid = useMemo(() => PRODUCTS.filter((p) => p.images.length).slice(4, 12), [])
  const hits = useMemo(() => PRODUCTS.filter((p) => p.title.includes(QUERY)).slice(0, 3), [])
  const hero = hits[0] ?? grid[0]

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!live || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const started = performance.now()
    let raf = 0
    const loop = (now: number) => {
      setT((now - started) % TOTAL)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [live])

  const step = STEPS.reduce((s, x, i) => (t >= x.at ? i : s), 0)
  const typed = QUERY.slice(0, Math.min(QUERY.length, Math.floor(t / 260)))

  return (
    <div ref={wrap} className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="lbl text-cobalt">как это работает</p>
        <h2 className="h-display mt-2 text-[clamp(34px,5.5vw,62px)]">
          Модель — размер —
          <br />
          коробка
        </h2>
        <p className="mt-4 max-w-[50ch] text-[15px] leading-snug text-ink-soft">
          Не нужно писать менеджеру, чтобы узнать, есть ли ваш размер: он написан на карточке. Нашли, взяли —
          вещь снимается с полки и держится за вами 30 минут, пока вы дособираете заказ.
        </p>
        <ol className="mt-5 grid gap-2">
          {STEPS.map((s, i) => (
            <li key={s.label} className={`num flex items-center gap-3 border-b border-line pb-2 text-[12px] transition-colors ${i === step ? 'text-ink' : 'text-ink-soft/50'}`}>
              <span className={`grid h-5 w-5 shrink-0 place-items-center text-[10px] ${i === step ? 'bg-volt' : 'bg-line'}`}>{i + 1}</span>
              {s.label}
            </li>
          ))}
        </ol>
      </div>

      {/* Окно продукта: всё внутри двигается само */}
      <div className="relative overflow-hidden border-2 border-ink bg-card">
        <div className="flex items-center gap-2 border-b border-line bg-paper px-3 py-2">
          <span className="h-display text-[18px] leading-none">SINI</span>
          <span className="num ml-auto flex-1 max-w-[280px] border border-line bg-card px-2 py-1 text-[11px]">
            {typed}
            <span className={`ml-px inline-block w-[6px] ${Math.floor(t / 420) % 2 ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </span>
          <span className="num text-[10px] text-ink-soft">{step === 0 ? PRODUCTS.length : hits.length} шт</span>
        </div>

        <div className="relative h-[300px] p-3 sm:h-[340px]">
          {/* Полка сжимается до найденного */}
          <div className={`grid grid-cols-4 gap-2 transition-all duration-700 ${step >= 1 ? 'scale-[0.98] opacity-0' : 'opacity-100'}`}>
            {grid.map((p) => (
              <div key={p.id} className="aspect-square border border-line bg-paper p-1">
                <img src={img(p.images[0])} alt="" width={120} height={120} loading="lazy" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>

          <div className={`absolute inset-3 grid grid-cols-3 gap-2 transition-all duration-700 ${step === 1 ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            {hits.map((p) => (
              <div key={p.id} className="flex flex-col border border-ink bg-paper p-2">
                <img src={img(p.images[0])} alt="" width={160} height={160} loading="lazy" className="h-24 w-full object-contain" />
                <p className="num mt-auto text-[10px] font-bold">{money(p.price)}</p>
                <p className="num text-[9px] text-ink-soft">{p.sizes.map((s) => s.label).join(' · ')}</p>
              </div>
            ))}
          </div>

          {/* Карточка с размерами */}
          <div className={`absolute inset-3 flex gap-3 transition-all duration-700 ${step === 2 ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}>
            <div className="w-1/2 border border-line bg-paper p-2">
              <img src={img(hero.images[0])} alt="" width={260} height={260} loading="lazy" className="h-full w-full object-contain" />
            </div>
            <div className="flex w-1/2 flex-col">
              <p className="lbl text-ink-soft">{hero.brand}</p>
              <p className="text-[13px] font-bold leading-tight">{hero.title}</p>
              <p className="num mt-1 text-[15px] font-bold">{money(hero.price)}</p>
              <p className="lbl mt-3 text-ink-soft">РАЗМЕР</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {hero.sizes.map((s, i) => (
                  <span key={s.label} className={`num border px-2 py-1 text-[10px] ${i === 0 ? 'border-ink bg-volt font-bold' : 'border-line'}`}>
                    {s.label}
                  </span>
                ))}
              </div>
              <span className="lbl mt-auto bg-cobalt px-2 py-2 text-center text-paper">ВЗЯТЬ</span>
            </div>
          </div>

          {/* Коробка */}
          <div className={`absolute inset-3 grid place-items-center transition-all duration-500 ${step === 3 ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="relative w-[74%]">
              <div className={`absolute inset-x-0 -top-3 h-9 border-2 border-ink bg-[#d9cfbb] transition-transform duration-700 ${step === 3 ? '-translate-y-9 -rotate-6 opacity-0' : ''}`} />
              <div className="border-2 border-ink bg-[#cdc2ad] px-3 pb-3 pt-6">
                <img src={img(hero.images[0])} alt="" width={260} height={260} loading="lazy" className={`mx-auto h-24 w-auto object-contain transition-transform duration-700 ${step === 3 ? '-translate-y-1.5' : 'translate-y-6'}`} />
              </div>
              <div className="num mt-2 flex items-center justify-between border border-ink bg-volt px-2 py-1.5 text-[10px] font-bold">
                <span>СНЯТО С ПОЛКИ · {hero.sizes[0]?.label}</span>
                <span>29:59</span>
              </div>
            </div>
          </div>
        </div>

        {/* Курсор ведёт сценарий */}
        <span
          aria-hidden
          className="pointer-events-none absolute z-20 text-[18px] transition-all duration-[900ms] ease-out"
          style={{
            left: step === 0 ? '42%' : step === 1 ? '26%' : step === 2 ? '78%' : '52%',
            top: step === 0 ? '10%' : step === 1 ? '46%' : step === 2 ? '78%' : '62%',
          }}
        >
          ➤
        </span>
      </div>
    </div>
  )
}
