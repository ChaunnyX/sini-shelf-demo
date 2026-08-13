import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { PRODUCTS, type Product } from '../data/catalog'

export type CartLine = { id: string; size: string; reservedUntil: number }
export type Theatre = { product: Product; size: string; from: DOMRect | null }

type Store = {
  cart: CartLine[]
  fav: string[]
  mySize: string | null
  toast: string | null
  theatre: Theatre | null
  /** Взять вещь с полки: открывает театр коробки, затем кладёт в корзину. */
  take: (p: Product, size: string, from?: HTMLElement | null) => void
  closeTheatre: () => void
  remove: (id: string, size: string) => void
  clearCart: () => void
  toggleFav: (id: string) => void
  setMySize: (s: string | null) => void
  say: (msg: string) => void
  cartTotal: number
  cartProducts: { line: CartLine; product: Product }[]
}

const Ctx = createContext<Store | null>(null)
const KEY = 'sini-shelf-v1'
/** Вещь в единственном экземпляре — держим её за покупателем 30 минут. */
export const HOLD_MS = 30 * 60 * 1000

function load<T>(field: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return fallback
    const v = JSON.parse(raw)[field]
    return v === undefined ? fallback : (v as T)
  } catch {
    return fallback
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => load<CartLine[]>('cart', []))
  const [fav, setFav] = useState<string[]>(() => load<string[]>('fav', []))
  const [mySize, setMySizeRaw] = useState<string | null>(() => load<string | null>('mySize', null))
  const [toast, setToast] = useState<string | null>(null)
  const [theatre, setTheatre] = useState<Theatre | null>(null)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify({ cart, fav, mySize }))
  }, [cart, fav, mySize])

  // Бронь истекает — молча снимаем позицию, как и на настоящей полке
  useEffect(() => {
    const t = setInterval(() => {
      setCart((c) => {
        const alive = c.filter((l) => l.reservedUntil > Date.now())
        return alive.length === c.length ? c : alive
      })
    }, 10_000)
    return () => clearInterval(t)
  }, [])

  const say = useCallback((msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast((t) => (t === msg ? null : t)), 3200)
  }, [])

  const put = useCallback((p: Product, size: string) => {
    setCart((c) => (c.some((l) => l.id === p.id && l.size === size) ? c : [...c, { id: p.id, size, reservedUntil: Date.now() + HOLD_MS }]))
  }, [])

  const take = useCallback(
    (p: Product, size: string, from?: HTMLElement | null) => {
      if (cart.some((l) => l.id === p.id && l.size === size)) {
        say(`${p.title}, ${size} уже отложена за вами`)
        return
      }
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        put(p, size)
        say(`Снято с полки · ${p.title}, ${size}`)
        return
      }
      setTheatre({ product: p, size, from: from ? from.getBoundingClientRect() : null })
      put(p, size)
    },
    [cart, put, say],
  )

  const closeTheatre = useCallback(() => setTheatre(null), [])

  const remove = useCallback((id: string, size: string) => {
    setCart((c) => c.filter((l) => !(l.id === id && l.size === size)))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleFav = useCallback(
    (id: string) => {
      setFav((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))
      say(fav.includes(id) ? 'Убрали из избранного' : 'В избранном')
    },
    [fav, say],
  )

  const setMySize = useCallback(
    (s: string | null) => {
      setMySizeRaw(s)
      if (s) {
        const n = PRODUCTS.filter((p) => p.sizes.some((x) => x.label === s && x.stock > 0)).length
        say(n ? `Ваш размер ${s} · ${n} ${plural(n, 'позиция', 'позиции', 'позиций')} на полке` : `В размере ${s} сейчас пусто`)
      }
    },
    [say],
  )

  const cartProducts = useMemo(
    () => cart.map((line) => ({ line, product: PRODUCTS.find((p) => p.id === line.id)! })).filter((x) => x.product),
    [cart],
  )
  const cartTotal = useMemo(() => cartProducts.reduce((s, x) => s + x.product.price, 0), [cartProducts])

  const value: Store = {
    cart, fav, mySize, toast, theatre, take, closeTheatre, remove, clearCart, toggleFav, setMySize, say, cartTotal, cartProducts,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore() {
  const v = useContext(Ctx)
  if (!v) throw new Error('StoreProvider отсутствует')
  return v
}

export function plural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return one
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few
  return many
}
