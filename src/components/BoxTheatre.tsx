import { useEffect, useRef, useState } from 'react'
import { img } from '../data/catalog'
import { money } from '../lib/format'
import { go } from '../lib/router'
import { useStore } from '../lib/store'

/**
 * Главный момент магазина кроссовок — открытие коробки.
 * Крышка съезжает, из папиросной бумаги поднимается пара, сверху ложится штамп.
 * При закрытии вещь перелетает в корзину: видно, куда она делась.
 */
export function BoxTheatre() {
  const { theatre, closeTheatre } = useStore()
  const shot = useRef<HTMLImageElement>(null)
  const [hold, setHold] = useState(30 * 60)

  useEffect(() => {
    if (!theatre) return
    setHold(30 * 60)
    const t = setInterval(() => setHold((h) => Math.max(0, h - 1)), 1000)
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && fly()
    window.addEventListener('keydown', esc)
    return () => {
      clearInterval(t)
      window.removeEventListener('keydown', esc)
    }
  }, [theatre]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!theatre) return null
  const { product, size } = theatre

  /** Перелёт из коробки в корзину — вещь не исчезает, а уходит туда, куда ждёшь. */
  function fly(then?: () => void) {
    const src = shot.current
    const target = document.querySelector('[data-cart-anchor]')
    if (!src || !target || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      closeTheatre()
      then?.()
      return
    }
    const a = src.getBoundingClientRect()
    const b = target.getBoundingClientRect()
    const ghost = src.cloneNode(true) as HTMLImageElement
    ghost.className = 'flyer'
    Object.assign(ghost.style, {
      left: `${a.left}px`, top: `${a.top}px`, width: `${a.width}px`, height: `${a.height}px`,
      objectFit: 'contain', transform: 'translate3d(0,0,0) scale(1)', opacity: '1',
    })
    document.body.appendChild(ghost)
    closeTheatre()
    requestAnimationFrame(() => {
      const dx = b.left + b.width / 2 - (a.left + a.width / 2)
      const dy = b.top + b.height / 2 - (a.top + a.height / 2)
      ghost.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(0.08) rotate(14deg)`
      ghost.style.opacity = '0.25'
    })
    setTimeout(() => {
      ghost.remove()
      then?.()
    }, 720)
  }

  const mm = String(Math.floor(hold / 60)).padStart(2, '0')
  const ss = String(hold % 60).padStart(2, '0')

  return (
    <div className="fixed inset-0 z-70 grid place-items-center bg-ink/80 p-4 backdrop-blur-[3px]" onClick={() => fly()}>
      <div className="box-in w-[min(560px,94vw)]" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {/* Крышка коробки — съезжает */}
          <div className="box-lid absolute inset-x-0 -top-6 z-20 h-16 border-2 border-ink bg-[#d9cfbb] shadow-[0_16px_30px_-18px_rgba(0,0,0,.9)]">
            <div className="flex h-full items-center justify-between px-4">
              <span className="h-display text-[24px] leading-none">SINI</span>
              <span className="num text-[10px] tracking-[0.2em]">{product.sku ?? 'ORIGINAL'}</span>
            </div>
          </div>

          {/* Тело коробки */}
          <div className="relative overflow-hidden border-2 border-ink bg-[#cdc2ad] px-5 pb-5 pt-10">
            {/* Папиросная бумага */}
            <div
              className="box-tissue absolute inset-x-0 bottom-0 h-[62%]"
              style={{
                background:
                  'repeating-linear-gradient(115deg, rgba(255,255,255,.85) 0 16px, rgba(255,255,255,.62) 16px 32px)',
              }}
            />
            <div className="relative grid place-items-center">
              <img
                ref={shot}
                src={img(product.images[0])}
                alt={product.title}
                width={420}
                height={420}
                className="box-rise h-[min(46vh,300px)] w-auto object-contain drop-shadow-[0_22px_18px_rgba(0,0,0,.35)]"
              />
              <span className="box-stamp pointer-events-none absolute -right-1 top-2 border-[3px] border-sale px-3 py-1.5 text-sale">
                <span className="h-display block text-[26px] leading-none">снято с полки</span>
                <span className="num block text-center text-[9px] tracking-[0.22em]">SINI · {size}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Что дальше */}
        <div className="border-2 border-t-0 border-ink bg-paper p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="min-w-0">
              <p className="lbl text-ink-soft">{product.brand}</p>
              <p className="truncate text-[15px] font-bold">{product.title}</p>
            </div>
            <p className="num text-[17px] font-bold">{money(product.price)}</p>
          </div>

          <div className="mt-3 flex items-center justify-between border border-ink bg-volt px-3 py-2">
            <span className="lbl">РАЗМЕР {size} · ДЕРЖИМ ЗА ВАМИ</span>
            <span className="num text-[15px] font-bold">
              {mm}:{ss}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <button onClick={() => fly(() => go('/cart'))} className="lbl flex-1 bg-cobalt px-4 py-3.5 text-paper hover:bg-cobalt-dim">
              ОФОРМИТЬ ЗАКАЗ
            </button>
            <button onClick={() => fly()} className="lbl border border-ink px-4 py-3.5 hover:bg-ink hover:text-paper">
              СМОТРЕТЬ ДАЛЬШЕ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
