import { useEffect, useState } from 'react'
import { img } from '../data/catalog'
import { SHOP } from '../data/shop'
import { mmss, money } from '../lib/format'
import { href } from '../lib/router'
import { plural, useStore } from '../lib/store'

export function Cart() {
  const { cartProducts, cartTotal, remove, clearCart } = useStore()
  const [now, setNow] = useState(Date.now())
  const [sent, setSent] = useState<null | { name: string; n: number; sum: number; pickup: boolean }>(null)
  const [form, setForm] = useState({ name: '', phone: '', city: 'Воронеж', pickup: true, note: '' })

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const left = SHOP.freeFrom - cartTotal

  if (sent) {
    return (
      <div className="mx-auto max-w-[760px] px-4 py-16 lg:py-24">
        <p className="lbl text-ink-soft">Заявка №{String(Math.floor(now / 1000) % 100000).padStart(5, '0')}</p>
        <h1 className="h-display mt-3 text-[clamp(40px,8vw,86px)]">{sent.name}, вещи за вами</h1>
        <p className="mt-4 max-w-[56ch] text-[16px] leading-snug text-ink-soft">
          {sent.n} {plural(sent.n, 'позиция снята', 'позиции сняты', 'позиций сняты')} с полки на {money(sent.sum)}.
          Менеджер подтвердит наличие, размер, итоговую стоимость и способ оплаты в Telegram — до того, как заказ уйдёт в работу.
        </p>
        <div className="mt-6 border border-ink bg-card p-5">
          <p className="lbl text-ink-soft">Что дальше</p>
          <ol className="mt-3 grid gap-2.5 text-[14px]">
            <li>1. Менеджер пишет и подтверждает позиции и итог.</li>
            <li>2. Присылает фото и видео вещи — артикул, бирки, коробку.</li>
            <li>
              3. {sent.pickup ? `Забираете на ${SHOP.address} после подтверждения готовности.` : 'Отправляем СДЭК и передаём трек для отслеживания.'}
            </li>
          </ol>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href={SHOP.tg.manager} target="_blank" rel="noreferrer" className="lbl bg-cobalt px-4 py-3.5 text-paper">НАПИСАТЬ МЕНЕДЖЕРУ {SHOP.tg.managerName}</a>
          <a href={href('/catalog')} className="lbl border border-ink px-4 py-3.5">ВЕРНУТЬСЯ В КАТАЛОГ</a>
        </div>
      </div>
    )
  }

  if (cartProducts.length === 0) {
    return (
      <div className="mx-auto max-w-[760px] px-4 py-20 text-center lg:py-28">
        <h1 className="h-display text-[clamp(40px,8vw,80px)]">В корзине пусто</h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-[15px] text-ink-soft">
          Мы держим вещь 30 минут после того, как её сняли с полки. Если бронь истекла — позиция вернулась в каталог,
          и её может забрать кто-то другой.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <a href={href('/catalog')} className="lbl bg-ink px-4 py-3.5 text-paper">ОТКРЫТЬ КАТАЛОГ</a>
          <a href={href('/fav')} className="lbl border border-ink px-4 py-3.5">ИЗБРАННОЕ</a>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8 lg:py-10">
      <h1 className="h-display border-b-2 border-ink pb-3 text-[clamp(36px,6vw,64px)]">Корзина</h1>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          {cartProducts.map(({ line, product }) => {
            const left = line.reservedUntil - now
            return (
              <div key={line.id + line.size} className="flex gap-4 border-b border-line py-4">
                <a href={href(`/p/${product.id}`)} className="h-28 w-28 shrink-0 border border-line bg-card">
                  <img src={img(product.images[0])} alt="" width={112} height={112} className="h-full w-full object-contain p-1.5" />
                </a>
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="lbl text-ink-soft">{product.brand}</p>
                  <a href={href(`/p/${product.id}`)} className="text-[15px] font-semibold leading-tight hover:text-cobalt">{product.title}</a>
                  <p className="num mt-1 text-[12px]">
                    размер <b>{line.size}</b>
                    {product.sku && ` · арт. ${product.sku}`}
                  </p>
                  <p className="num mt-1 text-[11px] text-ink-soft">
                    {left > 0 ? `держим ещё ${mmss(left)}` : 'бронь истекла'}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                    <button onClick={() => remove(line.id, line.size)} className="lbl text-ink-soft underline">убрать</button>
                    <span className="num text-[16px] font-bold">{money(product.price)}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <button onClick={clearCart} className="lbl mt-4 text-ink-soft underline">очистить корзину</button>
        </div>

        <div>
          <div className="border border-ink bg-card p-5">
            <div className="flex items-baseline justify-between">
              <span className="h-display text-[26px]">Итого</span>
              <span className="num text-[26px] font-bold">{money(cartTotal)}</span>
            </div>

            <div className="mt-3">
              {left > 0 ? (
                <>
                  <p className="num text-[11px] text-ink-soft">до бесплатной доставки по России — {money(left)}</p>
                  <div className="mt-1.5 h-1.5 w-full bg-line">
                    <div className="h-full bg-cobalt transition-[width] duration-500" style={{ width: `${Math.min(100, (cartTotal / SHOP.freeFrom) * 100)}%` }} />
                  </div>
                </>
              ) : (
                <p className="num text-[11px]">доставка по России — бесплатно</p>
              )}
            </div>

            <form
              className="mt-5 grid gap-2.5"
              onSubmit={(e) => {
                e.preventDefault()
                setSent({ name: form.name.trim().split(' ')[0] || 'Спасибо', n: cartProducts.length, sum: cartTotal, pickup: form.pickup })
                clearCart()
                window.scrollTo({ top: 0 })
              }}
            >
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Имя"
                className="border border-line bg-paper px-3 py-3 text-[15px] outline-none focus:border-ink"
              />
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Телефон или @ник в Telegram"
                className="border border-line bg-paper px-3 py-3 text-[15px] outline-none focus:border-ink"
              />
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, pickup: true })}
                  className={`border px-3 py-3 text-[13px] ${form.pickup ? 'border-ink bg-volt font-bold' : 'border-line bg-paper'}`}
                >
                  Самовывоз, Воронеж
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, pickup: false })}
                  className={`border px-3 py-3 text-[13px] ${!form.pickup ? 'border-ink bg-volt font-bold' : 'border-line bg-paper'}`}
                >
                  СДЭК до пункта
                </button>
              </div>
              {!form.pickup && (
                <input
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Город"
                  className="border border-line bg-paper px-3 py-3 text-[15px] outline-none focus:border-ink"
                />
              )}
              <textarea
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Комментарий: промокод, пожелания по размеру"
                rows={2}
                className="border border-line bg-paper px-3 py-3 text-[15px] outline-none focus:border-ink"
              />
              <button className="lbl bg-cobalt px-4 py-4 text-paper transition hover:bg-cobalt-dim">ОТПРАВИТЬ ЗАКАЗ МЕНЕДЖЕРУ</button>
              <p className="text-[11px] leading-snug text-ink-soft">
                Оплата не списывается сейчас. Менеджер подтверждает наличие, размер, итоговую стоимость и способ оплаты
                до передачи заказа в работу. Оплата — картой (Мир, Visa, Mastercard) или СБП.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
