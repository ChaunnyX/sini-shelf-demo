import { useEffect, useRef } from 'react'

/**
 * Среда, а не заливка: страница живёт в подсобке магазина — тёплый свет ламп,
 * едва различимые линии стеллажей и зерно бумаги. Пятна света медленно дышат
 * и смещаются за курсором. Всё ниже контента и не кликается.
 */
export function Ambient() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let tx = 0.5
    let ty = 0.35
    let x = 0.5
    let y = 0.35
    const move = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth
      ty = e.clientY / window.innerHeight
    }
    const loop = () => {
      x += (tx - x) * 0.045
      y += (ty - y) * 0.045
      const el = ref.current
      if (el) {
        el.style.setProperty('--mx', (x * 100).toFixed(2) + '%')
        el.style.setProperty('--my', (y * 100).toFixed(2) + '%')
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} aria-hidden className="ambient">
      <div className="ambient__lamp" />
      <div className="ambient__pool" />
      <div className="ambient__rails" />
      <div className="ambient__grain" />
    </div>
  )
}
