import { BRANDS, CATEGORIES, PRODUCTS, TOTAL_PAIRS } from '../data/catalog'
import { SHOP } from '../data/shop'
import { href } from '../lib/router'
import { plural } from '../lib/store'

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-paper/20 pb-8">
          <div>
            <p className="h-display text-[clamp(52px,10vw,120px)] leading-[0.82]">SINI</p>
            <p className="lbl mt-2 text-paper/60">
              {SHOP.address} · с {SHOP.since} года · {TOTAL_PAIRS} {plural(TOTAL_PAIRS, 'вещь', 'вещи', 'вещей')} на полке
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={SHOP.tg.channel} target="_blank" rel="noreferrer" className="lbl bg-volt px-4 py-3 text-ink">КАНАЛ {SHOP.tg.channelName}</a>
            <a href={SHOP.tg.manager} target="_blank" rel="noreferrer" className="lbl border border-paper/40 px-4 py-3 hover:bg-paper hover:text-ink">МЕНЕДЖЕР {SHOP.tg.managerName}</a>
          </div>
        </div>

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="lbl text-paper/50">Каталог</p>
            <ul className="mt-3 grid gap-1.5">
              {CATEGORIES.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <a href={href(`/catalog?cat=${c.slug}`)} className="text-[14px] text-paper/85 hover:text-volt">
                    {c.ru} <span className="num text-[10px] text-paper/45">{c.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl text-paper/50">Бренды</p>
            <ul className="mt-3 grid gap-1.5">
              {BRANDS.slice(0, 6).map((b) => (
                <li key={b.slug}>
                  <a href={href(`/catalog?brand=${encodeURIComponent(b.name)}`)} className="text-[14px] text-paper/85 hover:text-volt">{b.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lbl text-paper/50">Покупателю</p>
            <ul className="mt-3 grid gap-1.5">
              <li><a href={href('/info/delivery')} className="text-[14px] text-paper/85 hover:text-volt">Доставка и оплата</a></li>
              <li><a href={href('/sizes')} className="text-[14px] text-paper/85 hover:text-volt">Как выбрать размер</a></li>
              <li><a href={href('/info/faq')} className="text-[14px] text-paper/85 hover:text-volt">Вопросы и ответы</a></li>
              <li><a href={href('/concierge')} className="text-[14px] text-paper/85 hover:text-volt">Привезём под заказ</a></li>
              <li><a href={href('/info/about')} className="text-[14px] text-paper/85 hover:text-volt">О магазине</a></li>
            </ul>
          </div>
          <div>
            <p className="lbl text-paper/50">Оплата и получение</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {['МИР', 'VISA', 'MASTERCARD', 'СБП', 'СДЭК', 'САМОВЫВОЗ'].map((x) => (
                <span key={x} className="num border border-paper/25 px-2 py-1.5 text-[10px] text-paper/70">{x}</span>
              ))}
            </div>
            <p className="mt-4 text-[12px] leading-snug text-paper/50">
              Бесплатная доставка по России от {SHOP.freeFrom.toLocaleString('ru-RU')} ₽. Возврат 14 дней при сохранении
              вида, бирок и упаковки.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-paper/20 pt-6">
          <p className="lbl text-paper/45">
            © {new Date().getFullYear()} {SHOP.name} · {SHOP.city} · {PRODUCTS.length} позиций в каталоге
          </p>
          <p className="lbl text-paper/45">Демо-версия витрины · цены и наличие подтверждает менеджер</p>
        </div>
      </div>
    </footer>
  )
}
