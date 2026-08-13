import { PRODUCTS, type Product } from '../data/catalog'
import { normalizeQuery } from './format'

export type Filters = {
  q?: string
  cat?: string
  group?: string
  brand?: string
  size?: string
  sale?: boolean
  fresh?: boolean
  min?: number
  max?: number
  sort?: string
}

const haystack = (p: Product) =>
  [p.title, p.brand, p.catRu, p.sku ?? '', p.desc, p.sizes.map((s) => s.label).join(' ')]
    .join(' ')
    .toLowerCase()

export function match(p: Product, q: string) {
  const nq = normalizeQuery(q)
  if (!nq) return true
  const hay = haystack(p)
  return nq.split(/\s+/).every((w) => hay.includes(w))
}

export function filterProducts(f: Filters): Product[] {
  let list = PRODUCTS.slice()
  if (f.q) list = list.filter((p) => match(p, f.q!))
  if (f.cat) list = list.filter((p) => p.cat === f.cat)
  if (f.group) list = list.filter((p) => p.group === f.group)
  if (f.brand) list = list.filter((p) => p.brand === f.brand)
  if (f.size) list = list.filter((p) => p.sizes.some((s) => s.label === f.size && s.stock > 0))
  if (f.sale) list = list.filter((p) => p.old && p.old > p.price)
  if (f.fresh) list = list.filter((p) => p.isNew)
  if (f.min != null) list = list.filter((p) => p.price >= f.min!)
  if (f.max != null) list = list.filter((p) => p.price <= f.max!)

  switch (f.sort) {
    case 'cheap': list.sort((a, b) => a.price - b.price); break
    case 'rich': list.sort((a, b) => b.price - a.price); break
    case 'sale': list.sort((a, b) => (b.old ? b.old - b.price : 0) - (a.old ? a.old - a.price : 0)); break
    default: list.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.price - a.price)
  }
  return list
}

/** Похожие: та же категория, ближайшие по цене — сравнивающий покупатель не уходит с сайта. */
export function similar(p: Product, n = 4) {
  return PRODUCTS.filter((x) => x.id !== p.id && x.cat === p.cat)
    .sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price))
    .slice(0, n)
}

/** «С этим берут»: другая категория, но того же характера — с причиной, а не наугад. */
export function crossSell(p: Product, mySize: string | null) {
  const other = PRODUCTS.filter((x) => x.group !== p.group)
  const sameBrand = other.filter((x) => x.brand === p.brand)
  const pool = sameBrand.length >= 2 ? sameBrand : other
  const fits = mySize ? pool.filter((x) => x.sizes.some((s) => s.label === mySize && s.stock > 0)) : []
  const list = (fits.length >= 2 ? fits : pool).slice(0, 20)
  return list
    .sort((a, b) => Math.abs(a.price - p.price / 2) - Math.abs(b.price - p.price / 2))
    .slice(0, 3)
    .map((x) => ({
      product: x,
      reason:
        x.brand === p.brand
          ? `Тот же бренд — соберётся в один образ`
          : mySize && x.sizes.some((s) => s.label === mySize)
            ? `Есть в вашем размере ${mySize}`
            : `Часто берут к этой категории`,
    }))
}
