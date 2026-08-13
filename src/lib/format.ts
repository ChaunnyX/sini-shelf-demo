export const money = (n: number) => n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽'

export const discount = (price: number, old: number | null) =>
  old && old > price ? Math.round((1 - price / old) * 100) : 0

/** Магазин пишет цену «в месяц» — это снимает боль оплаты, но врать нельзя: это просто деление на 6. */
export const perMonth = (n: number) => Math.ceil(n / 6 / 10) * 10

export function mmss(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

/** Поиск по названию, бренду, артикулу и категории — с учётом «нб», «сп компани» и опечаток раскладки. */
const ALIAS: Record<string, string> = {
  нб: 'new balance', nb: 'new balance', 'нью баланс': 'new balance',
  найк: 'nike', ноык: 'nike', 'сп компани': 'c.p. company', сп: 'c.p. company',
  'стон айленд': 'stone island', стоник: 'stone island', адидас: 'adidas', адик: 'adidas',
  кархарт: 'carhartt', пума: 'puma', конверс: 'converse', асикс: 'asics',
  кросы: 'кроссовки', кроссы: 'кроссовки', сники: 'кроссовки', обувь: 'кроссовки',
  худак: 'худи', кофта: 'худи', штаны: 'брюки', шмот: '',
}

export function normalizeQuery(q: string) {
  const low = q.toLowerCase().trim()
  return ALIAS[low] ?? low
}
