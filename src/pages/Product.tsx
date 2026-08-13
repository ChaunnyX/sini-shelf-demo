import { useEffect, useMemo, useRef, useState } from 'react'
import { PRODUCTS, byId, img, inStock, type Product as P } from '../data/catalog'
import { SHOP } from '../data/shop'
import { crossSell, similar } from '../lib/search'
import { discount, money, perMonth } from '../lib/format'
import { go, href } from '../lib/router'
import { useStore } from '../lib/store'
import { ProductCard } from '../components/ProductCard'
import { Reveal } from '../components/Reveal'

const SEEN_KEY = 'sini-seen'

export function Product({ id }: { id: string }) {
  const p = byId(id)
  const { take: takeFromShelf, fav, toggleFav, mySize, say } = useStore()
  const [shot, setShot] = useState(0)
  const [size, setSize] = useState<string | null>(null)
  const [taken, setTaken] = useState(false)
  const tagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setShot(0)
    setTaken(false)
    setSize(p && p.sizes.length === 1 ? p.sizes[0].label : mySize && p?.sizes.some((s) => s.label === mySize) ? mySize : null)
    window.scrollTo({ top: 0 })
    if (p) {
      const prev: string[] = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')
      localStorage.setItem(SEEN_KEY, JSON.stringify([p.id, ...prev.filter((x) => x !== p.id)].slice(0, 8)))
    }
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  const seen = useMemo(() => {
    const ids: string[] = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]')
    return ids.filter((x) => x !== id).map(byId).filter(Boolean).slice(0, 4) as P[]
  }, [id])

  if (!p) {
    return (
      <div className="mx-auto max-w-[720px] px-4 py-24 text-center">
        <h1 className="h-display text-[44px]">Такой вещи нет</h1>
        <p className="mt-2 text-[15px] text-ink-soft">Возможно, её уже забрали — позиции у нас в одном экземпляре.</p>
        <a href={href('/catalog')} className="lbl mt-5 inline-block bg-ink px-4 py-3 text-paper">ВЕРНУТЬСЯ В КАТАЛОГ</a>
      </div>
    )
  }

  const off = discount(p.price, p.old)
  const chosen = p.sizes.find((s) => s.label === size)
  const liked = fav.includes(p.id)
  const cross = crossSell(p, mySize)
  const near = similar(p)

  const take = (btn?: HTMLElement | null) => {
    if (!size) {
      say('Выберите размер — он у этой вещи один')
      return
    }
    takeFromShelf(p, size, btn ?? tagRef.current)
    setTaken(true)
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8 lg:py-10">
      <nav className="lbl text-ink-soft">
        <a href={href('/')} className="hover:text-ink">Главная</a> /{' '}
        <a href={href(`/catalog?cat=${p.cat}`)} className="hover:text-ink">{p.catRu}</a> /{' '}
        <a href={href(`/catalog?brand=${encodeURIComponent(p.brand)}`)} className="hover:text-ink">{p.brand}</a>
      </nav>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        {/* Галерея */}
        <div>
          <div className="relative aspect-square overflow-hidden border border-line bg-card">
            <img src={img(p.images[shot])} alt={p.title} width={1000} height={1000} className="h-full w-full object-contain p-6" />
            <div ref={tagRef} className="absolute left-0 top-5 flex flex-col items-start gap-1.5">
              <span className="tag text-[11px]">{p.brand.toUpperCase()}</span>
              {p.sku && <span className="tag text-[11px]">АРТ. {p.sku}</span>}
              <span className="tag tag-volt text-[11px]">
                {inStock(p)} {inStock(p) === 1 ? 'ШТ · ПОСЛЕДНЯЯ' : 'ШТ НА ПОЛКЕ'}
              </span>
            </div>
            {off > 0 && (
              <span className="tag absolute right-0 top-5 text-[11px]" style={{ background: 'var(--color-sale)', clipPath: 'polygon(9px 0,100% 0,100% 100%,9px 100%,0 50%)', paddingLeft: '16px' }}>
                −{off}%
              </span>
            )}
          </div>
          {p.images.length > 1 && (
            <div className="mt-2 flex gap-2">
              {p.images.map((im, i) => (
                <button
                  key={im}
                  onClick={() => setShot(i)}
                  className={`h-20 w-20 shrink-0 border bg-card p-1 ${i === shot ? 'border-ink' : 'border-line hover:border-ink'}`}
                >
                  <img src={img(im)} alt="" width={80} height={80} className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Покупка */}
        <div>
          <p className="lbl text-ink-soft">{p.brand}</p>
          <h1 className="h-display mt-1.5 text-[clamp(30px,4.6vw,52px)]">{p.title}</h1>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="num text-[30px] font-bold">{money(p.price)}</span>
            {off > 0 && (
              <>
                <span className="num text-[15px] text-ink-soft line-through">{money(p.old!)}</span>
                <span className="lbl bg-sale px-2 py-1 text-paper">ВЫГОДА {money(p.old! - p.price)}</span>
              </>
            )}
          </div>
          <p className="num mt-1 text-[12px] text-ink-soft">или около {money(perMonth(p.price))} в месяц частями — условия подтверждает менеджер</p>

          {/* Размер: единственный настоящий вопрос */}
          <div className="mt-6 border border-ink bg-card p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="h-display text-[22px]">
                {p.sizeSystem === 'EU' ? 'Размер, EU' : p.sizeSystem === 'ONE' ? 'Размер' : 'Размер'}
              </p>
              <p className="num text-[11px] text-ink-soft">
                {p.sizes.length === 1 ? 'остался один размер' : `${p.sizes.length} размера в наличии`}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.sizes.map((s) => (
                <button
                  key={s.label}
                  onClick={() => setSize(s.label)}
                  className={`num min-w-[62px] border px-3 py-2.5 text-[13px] transition ${
                    size === s.label ? 'border-ink bg-volt font-bold' : 'border-line bg-paper hover:border-ink'
                  }`}
                >
                  {s.label}
                  <span className="block text-[9px] opacity-60">{s.stock} шт</span>
                </button>
              ))}
            </div>

            {/* Конвертер: «43 EU — это сколько?» — вопрос, на который в нише обычно не отвечают */}
            {chosen?.eu && (
              <p className="num mt-3 border-t border-line pt-3 text-[11px] text-ink-soft">
                EU {chosen.eu}
                {chosen.us && ` · US ${chosen.us}`}
                {chosen.cm && ` · по стельке ≈ ${chosen.cm} см`} — ориентир, у брендов бывает ±0,5
              </p>
            )}
            {chosen?.alt && <p className="num mt-3 text-[11px] text-ink-soft">Размер бренда: {chosen.alt}</p>}

            {taken ? (
              <div className="mt-4 border-2 border-ink bg-volt p-4 flip-in">
                <p className="h-display text-[26px]">Снято с полки</p>
                <p className="mt-1 text-[13px]">
                  {p.title}, размер {size}. Держим за вами 30 минут — этого хватает, чтобы дособрать заказ.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href={href('/cart')} className="lbl bg-ink px-4 py-3 text-paper">ОФОРМИТЬ ЗАКАЗ</a>
                  <a href={href('/catalog')} className="lbl border border-ink px-4 py-3">ПРОДОЛЖИТЬ ВЫБОР</a>
                </div>
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={(e) => take(e.currentTarget)} className="lbl flex-1 bg-cobalt px-5 py-4 text-paper transition hover:bg-cobalt-dim">
                  {size ? `ВЗЯТЬ РАЗМЕР ${size} · ${money(p.price)}` : 'ВЫБЕРИТЕ РАЗМЕР'}
                </button>
                <button
                  onClick={() => toggleFav(p.id)}
                  className={`lbl border px-4 py-4 ${liked ? 'border-ink bg-ink text-paper' : 'border-ink hover:bg-ink hover:text-paper'}`}
                >
                  {liked ? '♥ В ИЗБРАННОМ' : '♡ ОТЛОЖИТЬ'}
                </button>
              </div>
            )}

            <a href={SHOP.tg.manager} target="_blank" rel="noreferrer" className="lbl mt-2 block border border-line bg-paper py-3 text-center hover:border-ink">
              СПРОСИТЬ ПРО ЭТУ ВЕЩЬ В TELEGRAM
            </a>
          </div>

          <ul className="mt-5 grid gap-2">
            {[
              ['Оригинал', 'Пришлём фото и видео артикула, бирок и коробки до отправки'],
              ['Примерка', `Можно померить в магазине: ${SHOP.address}`],
              ['Доставка', `СДЭК по России, РБ и КЗ. Бесплатно от ${money(SHOP.freeFrom)}, по России обычно 2–7 дней`],
              ['Возврат 14 дней', 'При сохранении вида, бирок и упаковки'],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-2.5 border-b border-line pb-2 text-[13px] leading-snug">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-cobalt" />
                <span>
                  <b>{t}</b> <span className="text-ink-soft">— {d}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <h2 className="h-display text-[22px]">Что это</h2>
            <p className="mt-2 max-w-[62ch] text-[14px] leading-snug text-ink-soft">{p.desc}</p>
            <dl className="num mt-4 grid grid-cols-2 gap-px border border-line bg-line text-[11px]">
              {[
                ['Бренд', p.brand],
                ['Категория', p.catRu],
                p.sku ? ['Артикул', p.sku] : ['Артикул', 'уточним у менеджера'],
                ['Состояние', 'Новое, с бирками'],
                ['Размеры в наличии', p.sizes.map((s) => s.label).join(', ')],
                ['Всего на полке', `${inStock(p)} шт`],
              ].map(([k, v]) => (
                <div key={k} className="bg-card px-3 py-2">
                  <dt className="text-ink-soft">{k}</dt>
                  <dd className="mt-0.5 font-bold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* С этим берут — с причиной, а не наугад */}
      {cross.length > 0 && (
        <section className="mt-14">
          <Reveal>
            <h2 className="h-display border-b-2 border-ink pb-3 text-[clamp(28px,4vw,44px)]">С этим берут</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {cross.map(({ product, reason }) => (
              <div key={product.id} className="flex gap-3 border border-line bg-card p-3">
                <button onClick={() => go(`/p/${product.id}`)} className="h-24 w-24 shrink-0 bg-paper">
                  <img src={img(product.images[0])} alt="" width={96} height={96} loading="lazy" className="h-full w-full object-contain p-1" />
                </button>
                <div className="flex min-w-0 flex-col">
                  <p className="lbl text-ink-soft">{product.brand}</p>
                  <button onClick={() => go(`/p/${product.id}`)} className="line-clamp-2 text-left text-[13px] font-semibold leading-tight hover:text-cobalt">
                    {product.title}
                  </button>
                  <p className="mt-1 text-[11px] leading-snug text-cobalt">✓ {reason}</p>
                  <p className="num mt-auto text-[13px] font-bold">{money(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {near.length > 0 && (
        <section className="mt-14">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-3">
              <h2 className="h-display text-[clamp(28px,4vw,44px)]">Похожее по цене</h2>
              <a href={href(`/catalog?cat=${p.cat}`)} className="lbl border-b border-ink pb-0.5">ВСЯ КАТЕГОРИЯ →</a>
            </div>
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {near.map((x) => (
              <ProductCard key={x.id} p={x} compact />
            ))}
          </div>
        </section>
      )}

      {seen.length > 0 && (
        <section className="mt-14">
          <h2 className="h-display border-b-2 border-ink pb-3 text-[clamp(24px,3.2vw,34px)]">Вы смотрели</h2>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {seen.map((x) => (
              <ProductCard key={x.id} p={x} compact />
            ))}
          </div>
        </section>
      )}

      <p className="num mt-14 text-[11px] text-ink-soft">
        Всего в каталоге {PRODUCTS.length} позиций · {new Date().getFullYear()} · {SHOP.name}, {SHOP.city}
      </p>
    </div>
  )
}
