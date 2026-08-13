// Каталог SINI — реальные товары, цены, размеры и остатки магазина.
export type Size = { label: string; eu: string | null; us: string | null; cm: string | null; alt: string | null; stock: number }
export type Product = {
  id: string; title: string; sku: string | null; brand: string
  cat: string; catRu: string; group: string
  price: number; old: number | null; isNew: boolean; desc: string
  sizeSystem: 'EU' | 'INT' | 'ONE'; sizes: Size[]; images: string[]; heroOk: boolean
}
export type Category = { slug: string; ru: string; count: number; min: number; image: string }
export type Brand = { name: string; slug: string; count: number; min: number }

export const PRODUCTS: Product[] = [
 {
  "id": "krossovki-adidas-samba-sporty-rich-white-burgundy",
  "title": "Кроссовки Adidas Samba Sporty and Rich White Burgundy",
  "sku": null,
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": 18288,
  "isNew": true,
  "desc": "Adidas Samba Sporty and Rich в белой расцветке с бордовыми деталями.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "41",
    "eu": "41",
    "us": "8",
    "cm": "26",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-samba-sporty-rich-white-burgund-1.webp",
   "krossovki-adidas-samba-sporty-rich-white-burgund-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dunk-low-retro-black-white",
  "title": "Кроссовки Nike Dunk Low Retro Black White",
  "sku": null,
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14000,
  "old": 14990,
  "isNew": true,
  "desc": "Nike Dunk Low Retro Black White.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "41",
    "eu": "41",
    "us": "8",
    "cm": "26",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dunk-low-retro-black-white-1.webp",
   "krossovki-nike-dunk-low-retro-black-white-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-blazer-low-acronym-night-maroon",
  "title": "Кроссовки Nike Blazer Low x ACRONYM Night Maroon",
  "sku": null,
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 11990,
  "old": 14988,
  "isNew": false,
  "desc": "Nike Blazer Low x ACRONYM в расцветке Night Maroon.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-blazer-low-acronym-night-maroon-2.webp",
   "krossovki-nike-blazer-low-acronym-night-maroon-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-rivalry-lux-low-black",
  "title": "Кроссовки Adidas Rivalry Lux Low Black",
  "sku": null,
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 11950,
  "old": 14340,
  "isNew": true,
  "desc": "Adidas Rivalry Lux Low в чёрной коже. Лаконичная низкая пара под базовый гардероб.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-rivalry-lux-low-black-1.webp",
   "krossovki-adidas-rivalry-lux-low-black-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-asics-gel-flux-4-cream-brown",
  "title": "Кроссовки ASICS Gel-Flux 4 Cream Brown",
  "sku": null,
  "brand": "ASICS",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 11490,
  "old": 14018,
  "isNew": true,
  "desc": "ASICS Gel-Flux 4 в светлой расцветке Cream Brown. Комфортная пара для повседневной носки.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-asics-gel-flux-4-cream-brown-1.webp",
   "krossovki-asics-gel-flux-4-cream-brown-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-574-white-red",
  "title": "Кроссовки New Balance 574 White Red",
  "sku": null,
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10360,
  "old": 12950,
  "isNew": true,
  "desc": "New Balance 574 в бело-красной расцветке.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-574-white-red-1.webp",
   "krossovki-new-balance-574-white-red-2.webp",
   "krossovki-new-balance-574-white-red-3.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-samba-og-black-white-gum",
  "title": "Кроссовки Adidas Samba OG Black White Gum",
  "sku": null,
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 8380,
  "old": 10990,
  "isNew": true,
  "desc": "Adidas Samba OG Black White Gum в чёрно-белой расцветке с gum-подошвой.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-samba-og-black-white-gum-1.webp",
   "krossovki-adidas-samba-og-black-white-gum-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-237-white-burgundy",
  "title": "Кроссовки New Balance 237 White Burgundy",
  "sku": null,
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 8500,
  "old": 10200,
  "isNew": false,
  "desc": "New Balance 237 в бело-бордовой расцветке. Повседневная пара для спокойных образов; перед покупкой можно уточнить посадку у менеджера.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-237-white-burgundy-1.webp",
   "krossovki-new-balance-237-white-burgundy-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "kedy-converse-all-star-white",
  "title": "Кеды Converse All Star White",
  "sku": null,
  "brand": "Converse",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 3500,
  "old": 4200,
  "isNew": false,
  "desc": "Белые Converse All Star Low.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "kedy-converse-all-star-white-1.webp",
   "kedy-converse-all-star-white-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fq8156-142",
  "title": "Кроссовки Air Jordan 1 Low SE (GS) «Mocha Blue»",
  "sku": "FQ8156-142",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "Ещё один вариант расцветки Air Jordan 1 Low — сочетание пыльно-синего и молочно-белого тонов. Комбинация кожи и замши, мягкая амортизация и низкий профиль делают модель удобной для ежедневной носки.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fq8156-142-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fq8041-300",
  "title": "Кроссовки Air Jordan 1 Low SE (GS) «Oxidized Green»",
  "sku": "FQ8041-300",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": false,
  "desc": "Низкий силуэт культовой баскетбольной модели Air Jordan 1 в приглушённой зелёно-оливковой расцветке с состаренным эффектом. Верх из кожи и замши, характерный свуш и высокий язычок — узнаваемые элементы силуэта.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "37.5",
    "eu": "37.5",
    "us": "5",
    "cm": "23.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fq8041-300-1.webp",
   "krossovki-nike-fq8041-300-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m1906nd",
  "title": "Кроссовки New Balance 1906 «Clay Ash»",
  "sku": "M1906ND",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Технологичная беговая модель New Balance 1906R в пыльно-глиняном оттенке. Комбинация сетки, замши и синтетических накладок, объёмная многослойная подошва с амортизацией ABZORB и N-ergy.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m1906nd-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m1906rcb",
  "title": "Кроссовки New Balance 1906R «Silver» (Urbancore)",
  "sku": "M1906RCB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 1906R из линейки Urbancore в серебристо-серой гамме. Технологичная беговая модель с амортизацией ABZORB и N-ergy.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "41.5",
    "eu": "41.5",
    "us": "8",
    "cm": "26",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m1906rcb-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u1906nvp",
  "title": "Кроссовки New Balance 1906U «Eclipse» (Navy/Phantom)",
  "sku": "U1906NVP",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "Технологичная модель New Balance 1906U в тёмно-синей гамме \"Eclipse\". Комбинированный верх и многослойная амортизирующая подошва линейки 1906.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "45",
    "eu": "45",
    "us": "11",
    "cm": "29",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u1906nvp-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-2002r-cloud-grey",
  "title": "Кроссовки New Balance 2002R Cloud Grey",
  "sku": "ML2002R0",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": false,
  "desc": "New Balance 2002R Cloud Grey в ретро-беговом силуэте.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-2002r-cloud-grey-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rbv",
  "title": "Кроссовки New Balance 2002R «Black/Grey»",
  "sku": "M2002RBV",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 2002R в чёрно-серой гамме. Комбинированный верх, объёмная амортизирующая подошва ABZORB.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rbv-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rbl",
  "title": "Кроссовки New Balance 2002R «Black/Magnet»",
  "sku": "M2002RBL",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "Модель New Balance 2002R в чёрно-графитовой гамме. Многослойный верх из сетки, замши и синтетики, объёмная подошва ABZORB — фирменная черта линейки 2002R.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   },
   {
    "label": "45",
    "eu": "45",
    "us": "11",
    "cm": "29",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rbl-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u2002rca",
  "title": "Кроссовки New Balance 2002R «Dark Olivine»",
  "sku": "U2002RCA",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 2002R в приглушённой оливково-зелёной гамме. Тот же технологичный силуэт линейки — комбинированный верх и массивная амортизирующая подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u2002rca-1.webp",
   "krossovki-new-balance-u2002rca-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-ml2002ro",
  "title": "Кроссовки New Balance 2002R «Marblehead/Grey Salt»",
  "sku": "ML2002RO",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 2002R в светло-серой гамме \"Marblehead\". Технологичный многослойный верх и объёмная амортизирующая подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-ml2002ro-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rdd",
  "title": "Кроссовки New Balance 2002R «Mirage Grey» (Protection Pack)",
  "sku": "M2002RDD",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 19990,
  "old": null,
  "isNew": false,
  "desc": "New Balance 2002R из капсулы Protection Pack в серой гамме \"Mirage Grey\". Защитные накладки на верхе, амортизирующая подошва ABZORB.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rdd-1.webp",
   "krossovki-new-balance-m2002rdd-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rem",
  "title": "Кроссовки New Balance 2002R «New Spruce/Magnet»",
  "sku": "M2002REM",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 16990,
  "old": null,
  "isNew": true,
  "desc": "Модель New Balance 2002R в тёмно-зелёной гамме \"New Spruce\". Многослойный верх и характерная для линейки массивная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rem-1.webp",
   "krossovki-new-balance-m2002rem-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rdb",
  "title": "Кроссовки New Balance 2002R «Phantom» (Protection Pack)",
  "sku": "M2002RDB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 17990,
  "old": null,
  "isNew": false,
  "desc": "Модель New Balance 2002R из капсулы Protection Pack в приглушённом сером цвете \"Phantom\". Многослойный верх из сетки и замши, объёмная подошва ABZORB с рифлёным протектором.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rdb-1.webp",
   "krossovki-new-balance-m2002rdb-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-m2002rdo",
  "title": "Кроссовки New Balance 2002R «Ripstop» (Protection Pack)",
  "sku": "M2002RDO",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 17990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 2002R из капсулы Protection Pack с рипстоп-накладками. Защитный верх и фирменная амортизирующая подошва ABZORB.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-m2002rdo-1.webp",
   "krossovki-new-balance-m2002rdo-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u204lmma",
  "title": "Кроссовки New Balance 204L «Mushroom/Arid Stone»",
  "sku": "U204LMMA",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 18990,
  "old": null,
  "isNew": true,
  "desc": "Модель из современной линейки New Balance 204L в спокойных бежево-коричневых тонах. Сетчатый верх с замшевыми накладками и невысокая массивная подошва в духе актуальных ретро-беговых силуэтов.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39.5",
    "eu": "39.5",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   },
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u204lmma-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-ms327sv",
  "title": "Кроссовки New Balance 327 «Natural Indigo»",
  "sku": "MS327SV",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": false,
  "desc": "New Balance 327 в однотонной синей гамме Natural Indigo/Serene Blue. Сетчатый верх с замшевыми накладками, асимметричный логотип N.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-ms327sv-1.webp",
   "krossovki-new-balance-ms327sv-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-ms327pbb",
  "title": "Кроссовки New Balance 327 «Summer Fog» (Multicolor)",
  "sku": "MS327PBB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12490,
  "old": null,
  "isNew": true,
  "desc": "New Balance 327 в разноцветной гамме Summer Fog. Силуэт вдохновлён беговыми моделями 70-х, крупный логотип N, флэйрд-подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-ms327pbb-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-gr530sb1",
  "title": "Кроссовки New Balance 530 (детская линейка) White",
  "sku": "GR530SB1",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 11990,
  "old": null,
  "isNew": true,
  "desc": "Детская версия New Balance 530 в белом цвете. Тот же ретро-беговой силуэт, что и во взрослой линейке, но в уменьшенных размерах — сетчатый верх, замшевые накладки, рифлёная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "37",
    "eu": "37",
    "us": "4.5",
    "cm": "23",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-gr530sb1-1.webp",
   "krossovki-new-balance-gr530sb1-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-mr530aa1",
  "title": "Кроссовки New Balance 530 «Moonbeam/Sea Salt»",
  "sku": "MR530AA1",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 530 в светлой бежево-серой гамме \"лунный луч\". Сетка и замша на верхе, характерная для 530-й линейки массивная подошва с выраженным протектором.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "36",
    "eu": "36",
    "us": "4",
    "cm": "22.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-mr530aa1-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-gsb550cd",
  "title": "Кроссовки New Balance 550 «Pink Haze» (детская линейка)",
  "sku": "GSB550CD",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10490,
  "old": null,
  "isNew": true,
  "desc": "Детская версия New Balance 550 в бело-розовой гамме. Тот же баскетбольный силуэт 80-х, что и во взрослой линейке — кожаный верх и накладка на пятке, уменьшенные размеры.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-gsb550cd-1.webp",
   "krossovki-new-balance-gsb550cd-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-bb550la1",
  "title": "Кроссовки New Balance 550 «Varsity Gold»",
  "sku": "BB550LA1",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10480,
  "old": null,
  "isNew": true,
  "desc": "Баскетбольная модель New Balance 550 в бело-золотой гамме \"Varsity Gold\". Кожаный верх, накладка на пятке, массивная подошва в стиле 80-х.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-bb550la1-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-bb550swb",
  "title": "Кроссовки New Balance 550 «White/Green/Cream»",
  "sku": "BB550SWB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 8990,
  "old": null,
  "isNew": false,
  "desc": "Баскетбольная модель New Balance 550 в стиле 80-х — белый верх из кожи с зелёными акцентами и кремовой подошвой. Плотная посадка, накладка на пятке и классическая шнуровка.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39.5",
    "eu": "39.5",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   },
   {
    "label": "41.5",
    "eu": "41.5",
    "us": "8",
    "cm": "26",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-bb550swb-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-gsb550pb",
  "title": "Кроссовки New Balance 550 «White/Grey» (детская линейка)",
  "sku": "GSB550PB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10490,
  "old": null,
  "isNew": true,
  "desc": "Детская версия New Balance 550 в бело-серой расцветке. Классический баскетбольный силуэт линейки 550 в уменьшенном размере.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-gsb550pb-1.webp",
   "krossovki-new-balance-gsb550pb-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-bbw550bc",
  "title": "Кроссовки New Balance 550 «White/Sky Blue»",
  "sku": "BBW550BC",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10490,
  "old": null,
  "isNew": true,
  "desc": "Женская версия баскетбольной модели New Balance 550 в бело-голубой гамме. Кожаный верх, накладка на пятке и характерная для линейки массивная подошва с рифлёным протектором.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   },
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-bbw550bc-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574soa",
  "title": "Кроссовки New Balance 574 Cordura «Navy»",
  "sku": "U574SOA",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в тёмно-синей гамме с использованием прочной ткани Cordura на верхе. Сетчатые и текстильные вставки, классическая рифлёная подошва ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574soa-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574rf2",
  "title": "Кроссовки New Balance 574 «Alloy Red»",
  "sku": "U574RF2",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": false,
  "desc": "New Balance 574 в серо-красной гамме Alloy/White/Red. Комбинированный замшево-сетчатый верх, классическая амортизация ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574rf2-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574skb",
  "title": "Кроссовки New Balance 574 «Arid Stone/Monarch Burgundy»",
  "sku": "U574SKB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в тёплой бежево-бордовой гамме Arid Stone/Monarch Burgundy. Кожаный/замшевый верх, классическая подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "45",
    "eu": "45",
    "us": "11",
    "cm": "29",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574skb-1.webp",
   "krossovki-new-balance-u574skb-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-ml574evg",
  "title": "Кроссовки New Balance 574 «Core Grey/White»",
  "sku": "ML574EVG",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Классическая ретро-беговая модель New Balance 574 в серо-белой гамме. Сетчатый верх с замшевыми накладками, рифлёная подошва ENCAP — база линейки 574.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-ml574evg-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574wbg",
  "title": "Кроссовки New Balance 574 «Dark Arctic Grey/Sea Salt»",
  "sku": "U574WBG",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в тёмно-серой гамме с оттенком Sea Salt. Классический хайбрид road/trail силуэт на подошве ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574wbg-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574rac",
  "title": "Кроссовки New Balance 574 «Incense/Black»",
  "sku": "U574RAC",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": false,
  "desc": "New Balance 574 в сочетании тёплого бежевого (incense) и чёрного. Замшево-сетчатый верх, амортизация ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574rac-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574vpa",
  "title": "Кроссовки New Balance 574 «Infield Clay/Sea Salt»",
  "sku": "U574VPA",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в тёплой терракотовой гамме Infield Clay с оттенком Sea Salt. Замша и сетка, амортизация ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574vpa-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574rc2",
  "title": "Кроссовки New Balance 574 «Retro Bright» (Orange/Yellow)",
  "sku": "U574RC2",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 из капсулы Retro Bright в ярком оранжево-жёлтом сочетании. Замшево-сетчатый верх, классическая подошва ENCAP.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574rc2-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574gwh",
  "title": "Кроссовки New Balance 574 «Shadow Grey/Sea Salt»",
  "sku": "U574GWH",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в нейтральной серо-белой гамме Shadow Grey/Sea Salt. Премиальная замша и сетка на верхе.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574gwh-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u574rbj",
  "title": "Кроссовки New Balance 574 «Vintage Indigo»",
  "sku": "U574RBJ",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 574 в глубоком синем цвете с белыми акцентами и лёгким оттенком angora. Универсальная база для повседневной носки.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u574rbj-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-gr740wn",
  "title": "Кроссовки New Balance 740 «Navy/White» (детская линейка)",
  "sku": "GR740WN",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Детская версия New Balance 740 в бело-синей гамме. Комбинированный верх из сетки и замши, массивная амортизирующая подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   },
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-gr740wn-1.webp",
   "krossovki-new-balance-gr740wn-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u740bk2",
  "title": "Кроссовки New Balance 740 «Sea Salt»",
  "sku": "U740BK2",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Спортивная модель New Balance 740 в светлом нейтральном оттенке \"морская соль\". Комбинированный верх из сетки и замши, характерный для линейки объёмный подошвенный блок с амортизацией.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u740bk2-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u740ab2",
  "title": "Кроссовки New Balance 740 «Woodland/Dark Olivine»",
  "sku": "U740AB2",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 740 в зелёно-оливковой гамме \"Woodland\". Комбинированный верх из сетки и замши, объёмная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u740ab2-1.webp",
   "krossovki-new-balance-u740ab2-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-u996te",
  "title": "Кроссовки New Balance 996 Made in USA «Grey Day 2023» (Teddy Santis)",
  "sku": "U996TE",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 17990,
  "old": null,
  "isNew": true,
  "desc": "New Balance 996, произведённая в США под руководством Тедди Сантиса, в честь Grey Day 2023. Пигскин-замша поверх сетки, тёмно-синие акценты.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-u996te-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-uwrpdmus",
  "title": "Кроссовки New Balance WRPD Runner «Dark Mushroom»",
  "sku": "UWRPDMUS",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": false,
  "desc": "Модель New Balance WRPD Runner с массивным дизайном подошвы в коричнево-бежевой гамме \"Dark Mushroom\". Технологичный верх и выразительная многослойная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-uwrpdmus-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-new-balance-uwrpdfsb",
  "title": "Кроссовки New Balance WRPD Runner «Light Chrome Blue / Sea Salt»",
  "sku": "UWRPDFSB",
  "brand": "New Balance",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "New Balance WRPD Runner в светлой бело-голубой гамме. Тот же массивный технологичный силуэт линейки WRPD.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-new-balance-uwrpdfsb-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dv7186-300",
  "title": "Кроссовки Nike Air Force 1 '07 LX «Mica Green»",
  "sku": "DV7186-300",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": false,
  "desc": "Версия Air Force 1 Low с добавлением текстильных вставок и мятно-зелёной гаммы \"Mica Green\". Комбинация кожи и текстиля, классический низкий силуэт.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dv7186-300-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dd8959-100",
  "title": "Кроссовки Nike Air Force 1 '07 White",
  "sku": "DD8959-100",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Легендарная модель, покорившая баскетбольные площадки ещё в 1982 году и ставшая одной из самых узнаваемых в мире. Верх выполнен из плотной натуральной кожи, подошва — амортизирующий блок Nike Air. Универсальная база белого цвета сочетается практически с любым образом.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "37.5",
    "eu": "37.5",
    "us": "5",
    "cm": "23.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dd8959-100-1.webp",
   "krossovki-nike-dd8959-100-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-cw2288-001",
  "title": "Кроссовки Nike Air Force 1 '07 «Triple Black»",
  "sku": "CW2288-001",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "Полностью чёрная версия культовой Air Force 1 — кожаный верх, подошва и логотип в одном тоне. Один из самых универсальных и востребованных вариантов модели.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-cw2288-001-1.webp",
   "krossovki-nike-cw2288-001-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dz5355-126",
  "title": "Кроссовки Nike Air Force 1 Low '07 LX «Somos Familia»",
  "sku": "DZ5355-126",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "Специальная версия Air Force 1 Low, приуроченная к Дню мёртвых (Día de Muertos), с декоративными элементами и дополнительной символикой. Кожаный верх, узнаваемый низкий силуэт.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dz5355-126-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fb1906-100",
  "title": "Кроссовки Nike Air Force 1 Low '07 «Cut Out» White (W)",
  "sku": "FB1906-100",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 11990,
  "old": null,
  "isNew": true,
  "desc": "Женская версия Air Force 1 Low с фактурными фигурными вырезами (\"cut out\") на верхе — переосмысление классического силуэта. Кожаный/синтетический верх, белая гамма, амортизация Nike Air.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fb1906-100-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-ih1698-200",
  "title": "Кроссовки Nike Air Force 1 Low «Velvet Brown»",
  "sku": "IH1698-200",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 15990,
  "old": null,
  "isNew": true,
  "desc": "Классическая Air Force 1 Low в тёплом коричневом оттенке \"Velvet Brown\". Кожаный верх, узнаваемый низкий силуэт, амортизация Nike Air.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-ih1698-200-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-ao2606-001",
  "title": "Кроссовки Nike Air Humara 17 Premium «Hay Camo»",
  "sku": "AO2606-001",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 16990,
  "old": null,
  "isNew": false,
  "desc": "Камуфляжная расцветка Hay/Black с плетёным рисунком.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-ao2606-001-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fq1099-200",
  "title": "Кроссовки Nike Air Humara x Future Movement «Dark Russet»",
  "sku": "FQ1099-200",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 16990,
  "old": null,
  "isNew": true,
  "desc": "Рипстоп-верх в тёплой терракотово-розовой гамме.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fq1099-200-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-do9549-001",
  "title": "Кроссовки Nike Air Max 1 x Patta «Rush Maroon» (Waves)",
  "sku": "DO9549-001",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Коллаборация Nike Air Max 1 с амстердамским брендом Patta, серия \"Waves\", в тёмно-бордовой гамме. Комбинированный верх, классическая для Air Max 1 амортизирующая вставка на подошве.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-do9549-001-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fd0780-100",
  "title": "Кроссовки Nike Air Max 95 «White/Oil Green»",
  "sku": "FD0780-100",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 16990,
  "old": null,
  "isNew": true,
  "desc": "Волнообразный силуэт в бело-оливковой гамме с видимыми Air-баллонами.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fd0780-100-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-air-max-dn-black-metallic-grey",
  "title": "Кроссовки Nike Air Max DN Black Metallic Grey",
  "sku": "DV3337-006",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Nike Air Max DN Black Metallic Grey с отзывчивой системой Dynamic Air.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-air-max-dn-black-metallic-grey-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-air-max-dn-light-bone-taupe",
  "title": "Кроссовки Nike Air Max Dn SP «Light Bone/Light Taupe»",
  "sku": "HQ0912-001",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Спецверсия Nike Air Max Dn в светлой бежево-серой гамме. Комбинированный верх, массивная подошва с видимыми воздушными камерами Dynamic Air.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-air-max-dn-light-bone-taupe-1.webp",
   "krossovki-nike-air-max-dn-light-bone-taupe-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-air-max-dn-black-red-crimson",
  "title": "Кроссовки Nike Air Max Dn «Bred»",
  "sku": "HV5235-002",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Технологичная модель Nike Air Max Dn с фирменной системой воздушных камер Dynamic Air. Расцветка \"Bred\" — сочетание чёрного и красного, крупная фактурная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-air-max-dn-black-red-crimson-1.webp",
   "krossovki-nike-air-max-dn-black-red-crimson-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dv7215-700",
  "title": "Кроссовки Nike Dunk High Retro Premium «Gold Canvas»",
  "sku": "DV7215-700",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": true,
  "desc": "Канвасовый верх в тёплой золотисто-горчичной гамме с оранжевой подошвой.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dv7215-700-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fq6965-700",
  "title": "Кроссовки Nike Dunk Low CO.JP «Dark Curry» (Reverse)",
  "sku": "FQ6965-700",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Японская версия культовых Dunk Low в тёмно-горчичном цвете \"Dark Curry\". Кожаный верх, контрастная светлая подошва, классическая шнуровка.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fq6965-700-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-fj2260-002",
  "title": "Кроссовки Nike Dunk Low LX «Gorge Green» (Ostrich)",
  "sku": "FJ2260-002",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": false,
  "desc": "Женская версия Nike Dunk Low с фактурной отделкой \"под страуса\" в тёмно-зелёном цвете. Кожаный верх, контрастная белая подошва, классическая шнуровка.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-fj2260-002-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-hf4878-053",
  "title": "Кроссовки Nike Dunk Low Retro Premium «Urban Landscape 2.0» (зелёный/белый)",
  "sku": "HF4878-053",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": false,
  "desc": "Премиальная версия Dunk Low с фактурными деталями и зелёно-белой гаммой из капсулы Urban Landscape 2.0.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-hf4878-053-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dd1391-104",
  "title": "Кроссовки Nike Dunk Low Retro «Court Purple»",
  "sku": "DD1391-104",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": true,
  "desc": "Dunk Low в сочетании белого и насыщенного фиолетового \"Court Purple\". Кожаный верх, контрастные вставки на языке и пятке.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dd1391-104-1.webp",
   "krossovki-nike-dd1391-104-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dd1391-101",
  "title": "Кроссовки Nike Dunk Low Retro «Team Green» / «Varsity Green»",
  "sku": "DD1391-101",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Классические Dunk Low в сочетании белого и насыщенного зелёного. Кожаный верх, контрастные вставки на пятке и языке.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dd1391-101-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dd1503-124",
  "title": "Кроссовки Nike Dunk Low «Cacao Wow»",
  "sku": "DD1503-124",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": true,
  "desc": "Женская версия культовых Dunk Low в тёплой бежево-коричневой гамме. Кожаный верх, контрастные вставки на языке и пятке, классическая шнуровка. Модель хорошо садится по ноге и подходит как для повседневной носки, так и для активного города.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dd1503-124-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-dd1503-101",
  "title": "Кроссовки Nike Dunk Low «Panda» (Black/White)",
  "sku": "DD1503-101",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Созданные изначально для баскетбола, кроссовки Nike Dunk Low давно стали уличной классикой. Контрастное сочетание чёрного и белого — один из самых узнаваемых и востребованных вариантов расцветки модели. Верх из натуральной кожи, невысокий профиль и плотная посадка.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "47",
    "eu": "47",
    "us": "12.5",
    "cm": "30.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-dd1503-101-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-cd6404-202",
  "title": "Кроссовки Nike P-6000 «Cave Stone/Metallic Silver»",
  "sku": "CD6404-202",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 12990,
  "old": null,
  "isNew": false,
  "desc": "Ретро-беговая модель Nike P-6000 в бежево-серебристой гамме. Многослойный верх из сетки и синтетики, характерная для линии массивная рифлёная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42",
    "eu": "42",
    "us": "8.5",
    "cm": "26.5",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-cd6404-202-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-hq7540-600",
  "title": "Кроссовки Nike Shox Z «Dark Team Red»",
  "sku": "HQ7540-600",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": true,
  "desc": "Возвращение культовой технологии Nike Shox — видимые пружинящие столбики в пятке. Расцветка \"Dark Team Red\" в тёмно-красных тонах, спортивный силуэт начала 2000-х.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-hq7540-600-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-nike-io4862-100",
  "title": "Кроссовки Nike WMNS Air Max Moto 2K SE «Sail/Pale Ivory-Phantom»",
  "sku": "IO4862-100",
  "brand": "Nike",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 13990,
  "old": null,
  "isNew": false,
  "desc": "Женская версия Nike Air Max Moto 2K SE в мягкой светлой гамме Sail/Pale Ivory/Phantom. Технологичный многослойный верх и массивная подошва с амортизацией Air Max — силуэт в стиле мотокросса.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "37.5",
    "eu": "37.5",
    "us": "5",
    "cm": "23.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-nike-io4862-100-1.webp",
   "krossovki-nike-io4862-100-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-puma-401366-01",
  "title": "Кроссовки Puma Palermo «Road To Unity» (чёрный)",
  "sku": "401366-01",
  "brand": "Puma",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": false,
  "desc": "Чёрная версия ретро-футбольного силуэта Palermo из капсулы Road To Unity.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-puma-401366-01-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-puma-398846-01",
  "title": "Кроссовки Puma Speedcat OG «Black»",
  "sku": "398846-01",
  "brand": "Puma",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": true,
  "desc": "Низкий гоночный силуэт Puma Speedcat, вдохновлённый обувью пилотов Формулы-1. Кожаный верх, эластичный язычок-носок без шнуровки в классических моделях линейки, плотная посадка по ноге.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "38",
    "eu": "38",
    "us": "5.5",
    "cm": "24",
    "alt": null,
    "stock": 1
   },
   {
    "label": "38.5",
    "eu": "38.5",
    "us": "6",
    "cm": "24.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-puma-398846-01-1.webp",
   "krossovki-puma-398846-01-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-puma-406329-31",
  "title": "Кроссовки Puma Speedcat OG «Dark Brown»",
  "sku": "406329-31",
  "brand": "Puma",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": false,
  "desc": "Та же культовая гоночная форма Speedcat, выполненная в тёмно-коричневой гамме. Компактный низкий профиль и характерная форма мыска делают модель легко узнаваемой.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39",
    "eu": "39",
    "us": "6.5",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-puma-406329-31-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-salomon-l49107000",
  "title": "Кроссовки Salomon x MM6 Maison Margiela XT-MM6 «Black/Silver»",
  "sku": "L49107000",
  "brand": "Salomon",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 18990,
  "old": null,
  "isNew": true,
  "desc": "Коллаборация Salomon и MM6 Maison Margiela — трейловый силуэт XT-6, переосмысленный модным домом. Технологичный верх, объёмная многослойная подошва, чёрно-серебристая гамма.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-salomon-l49107000-1.webp",
   "krossovki-salomon-l49107000-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-jh5458",
  "title": "Кроссовки adidas Bermuda «Mystery Green»",
  "sku": "JH5458",
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": true,
  "desc": "Зелёная гамма Mystery Green/Tactile Green, замшевый верх.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   },
   {
    "label": "43",
    "eu": "43",
    "us": "9.5",
    "cm": "27.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-jh5458-1.webp",
   "krossovki-adidas-jh5458-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-jh5457",
  "title": "Кроссовки adidas Bermuda «Night Indigo/Purple Rush»",
  "sku": "JH5457",
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": true,
  "desc": "Тёмно-синяя гамма с фиолетовым оттенком, замшевый верх, гумовая подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "44",
    "eu": "44",
    "us": "10",
    "cm": "28",
    "alt": null,
    "stock": 1
   },
   {
    "label": "44.5",
    "eu": "44.5",
    "us": "10.5",
    "cm": "28.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-jh5457-1.webp",
   "krossovki-adidas-jh5457-2.webp",
   "krossovki-adidas-jh5457-3.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-jh5459",
  "title": "Кроссовки adidas Bermuda «Real Gold/Solar Orange»",
  "sku": "JH5459",
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 9990,
  "old": null,
  "isNew": true,
  "desc": "Ретро-силуэт из линии Island Series конца 70-х — 80-х, замшевый верх, золотисто-оранжевая гамма.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "42.5",
    "eu": "42.5",
    "us": "9",
    "cm": "27",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-jh5459-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-jr9553",
  "title": "Кроссовки adidas Stadt «Velvet Brown»",
  "sku": "JR9553",
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 10990,
  "old": null,
  "isNew": true,
  "desc": "Кэжуал-модель adidas Stadt в коричневой замшевой гамме, вдохновлённая старой ретро-линией. Мягкий замшевый верх, невысокая рифлёная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "40",
    "eu": "40",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-jr9553-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "krossovki-adidas-js0297",
  "title": "Кроссовки adidas Taekwondo Mei «Cow Print» (Off White/Gum)",
  "sku": "JS0297",
  "brand": "Adidas",
  "cat": "sneakers",
  "catRu": "Кроссовки",
  "group": "footwear",
  "price": 14990,
  "old": null,
  "isNew": false,
  "desc": "Модель adidas из линии единоборств Taekwondo Mei, переосмысленная как повседневный кроссовок — с принтом \"под корову\". Невысокий профиль, лёгкий верх и минималистичная подошва.",
  "sizeSystem": "EU",
  "sizes": [
   {
    "label": "39.5",
    "eu": "39.5",
    "us": "7",
    "cm": "25",
    "alt": null,
    "stock": 1
   },
   {
    "label": "40.5",
    "eu": "40.5",
    "us": "7.5",
    "cm": "25.5",
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "krossovki-adidas-js0297-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "kurtka-c-p-company-green-goggle-jacket",
  "title": "Куртка C.P. Company Green Goggle Jacket",
  "sku": null,
  "brand": "C.P. Company",
  "cat": "outerwear",
  "catRu": "Верхняя одежда",
  "group": "clothing",
  "price": 31990,
  "old": 39988,
  "isNew": true,
  "desc": "Зелёная куртка C.P. Company с фирменными goggle-деталями. Подойдёт как акцентная верхняя одежда на сезон.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "kurtka-c-p-company-green-goggle-jacket-1.webp",
   "kurtka-c-p-company-green-goggle-jacket-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "kurtka-c-p-company-flatt-nylon-goggle-jacket-black",
  "title": "Куртка C.P. Company Flatt Nylon Goggle Jacket Black",
  "sku": "20CMOW013A005991G 999",
  "brand": "C.P. Company",
  "cat": "outerwear",
  "catRu": "Верхняя одежда",
  "group": "clothing",
  "price": 39990,
  "old": null,
  "isNew": true,
  "desc": "Черная куртка C.P. Company Goggle из матового нейлона Flatt Nylon.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "M",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "kurtka-c-p-company-flatt-nylon-goggle-jacket-bla-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "zip-hudi-carhartt-rain-defender-black",
  "title": "Зип-худи Carhartt Rain Defender Black",
  "sku": null,
  "brand": "Carhartt WIP",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 10990,
  "old": 13408,
  "isNew": true,
  "desc": "Чёрное зип-худи Carhartt Rain Defender. Фото временные; перед production заменить на клиентские или утверждённые ассеты.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "zip-hudi-carhartt-rain-defender-black-1.webp",
   "zip-hudi-carhartt-rain-defender-black-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "hudi-carhartt-wip-onyx-green",
  "title": "Худи Carhartt WIP Onyx Green",
  "sku": null,
  "brand": "Carhartt WIP",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 10490,
  "old": 12378,
  "isNew": true,
  "desc": "Зелёное худи Carhartt WIP Onyx. Базовая посадка, мягкий повседневный слой под верхнюю одежду.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "S",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "M",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "hudi-carhartt-wip-onyx-green-1.webp",
   "hudi-carhartt-wip-onyx-green-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "svitshot-stone-island-cotton-waffle-regular",
  "title": "Свитшот Stone Island Cotton Waffle Regular",
  "sku": null,
  "brand": "Stone Island",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 31990,
  "old": null,
  "isNew": true,
  "desc": "Свитшот Stone Island Cotton Waffle Regular из плотного органического хлопка.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "svitshot-stone-island-cotton-waffle-regular-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "svitshot-stone-island-ghost-pieces-black",
  "title": "Свитшот Stone Island Ghost Pieces Black",
  "sku": "7815611F3",
  "brand": "Stone Island",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 26990,
  "old": null,
  "isNew": true,
  "desc": "Черный монохромный свитшот Stone Island Ghost Pieces.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "svitshot-stone-island-ghost-pieces-black-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "hudi-na-molnii-c-p-company-beige-corduroy-350-full-zip-hooded-sweatshirt",
  "title": "Худи на молнии C.P. Company Beige Corduroy 350 Full Zip Hooded Sweatshirt",
  "sku": null,
  "brand": "C.P. Company",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 24990,
  "old": null,
  "isNew": true,
  "desc": "Бежевое худи C.P. Company 350 Full Zip из бархатистого вельвета.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XXL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "hudi-na-molnii-c-p-company-beige-corduroy-350-fu-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "hudi-na-molnii-c-p-company-blue-corduroy-350-full-zip-hooded-sweatshirt",
  "title": "Худи на молнии C.P. Company Blue Corduroy 350 Full Zip Hooded Sweatshirt",
  "sku": null,
  "brand": "C.P. Company",
  "cat": "hoodies-sweatshirts",
  "catRu": "Худи и свитшоты",
  "group": "clothing",
  "price": 24990,
  "old": null,
  "isNew": false,
  "desc": "Синее худи C.P. Company 350 Full Zip из бархатистого вельвета.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "M",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "hudi-na-molnii-c-p-company-blue-corduroy-350-ful-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "futbolka-carhartt-wip-white",
  "title": "Футболка Carhartt WIP White",
  "sku": null,
  "brand": "Carhartt WIP",
  "cat": "tshirts",
  "catRu": "Футболки",
  "group": "clothing",
  "price": 2500,
  "old": 3125,
  "isNew": true,
  "desc": "Белая футболка Carhartt WIP.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "M",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   },
   {
    "label": "XXL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "futbolka-carhartt-wip-white-1.webp",
   "futbolka-carhartt-wip-white-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "futbolka-c-p-company-logo-jersey-green",
  "title": "Футболка C.P. Company Logo Jersey Green",
  "sku": "20CMTS084A 005100W",
  "brand": "C.P. Company",
  "cat": "tshirts",
  "catRu": "Футболки",
  "group": "clothing",
  "price": 7990,
  "old": null,
  "isNew": true,
  "desc": "Зеленая футболка C.P. Company Logo Jersey из трикотажа средней плотности.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "XXXL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "futbolka-c-p-company-logo-jersey-green-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "burberry-classic-check-shirt",
  "title": "Рубашка Burberry Classic Check",
  "sku": null,
  "brand": "Burberry",
  "cat": "shirts-polos",
  "catRu": "Рубашки и поло",
  "group": "clothing",
  "price": 9990,
  "old": null,
  "isNew": false,
  "desc": "Рубашка Burberry Classic Check в фирменном клетчатом узоре.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "S",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "burberry-classic-check-shirt-1.webp",
   "burberry-classic-check-shirt-2.webp",
   "burberry-classic-check-shirt-3.webp",
   "burberry-classic-check-shirt-4.webp"
  ],
  "heroOk": true
 },
 {
  "id": "svitshot-stone-island-white",
  "title": "Свитшот Stone Island White",
  "sku": null,
  "brand": "Stone Island",
  "cat": "sweaters-cardigans",
  "catRu": "Свитеры",
  "group": "clothing",
  "price": 19990,
  "old": 24588,
  "isNew": false,
  "desc": "Белый свитшот Stone Island с фирменным патчем на рукаве. Размер и посадку можно уточнить перед заказом.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "XXL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "svitshot-stone-island-white-1.webp",
   "svitshot-stone-island-white-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "shtany-c-p-company-flatt-nylon-cargo-lens-blue",
  "title": "Штаны C.P. Company Flatt Nylon Cargo Lens Blue",
  "sku": "20CMPA140A 005991G",
  "brand": "C.P. Company",
  "cat": "pants-shorts",
  "catRu": "Брюки и шорты",
  "group": "clothing",
  "price": 18990,
  "old": null,
  "isNew": true,
  "desc": "Синие брюки карго C.P. Company Flatt Nylon с фирменной линзой.",
  "sizeSystem": "INT",
  "sizes": [
   {
    "label": "L",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": "IT 50",
    "stock": 1
   },
   {
    "label": "XL",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": "IT 52",
    "stock": 1
   }
  ],
  "images": [
   "shtany-c-p-company-flatt-nylon-cargo-lens-blue-1.webp"
  ],
  "heroOk": true
 },
 {
  "id": "kepka-c-p-company-green",
  "title": "Кепка C.P. Company Green",
  "sku": null,
  "brand": "C.P. Company",
  "cat": "hats",
  "catRu": "Головные уборы",
  "group": "accessories",
  "price": 6990,
  "old": 8248,
  "isNew": true,
  "desc": "Зелёная кепка C.P. Company. Универсальный аксессуар для повседневных образов.",
  "sizeSystem": "ONE",
  "sizes": [
   {
    "label": "ONE SIZE",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "kepka-c-p-company-green-1.webp",
   "kepka-c-p-company-green-2.webp"
  ],
  "heroOk": true
 },
 {
  "id": "sumka-c-p-company-crossbody-black",
  "title": "Сумка C.P. Company Crossbody Black",
  "sku": null,
  "brand": "C.P. Company",
  "cat": "accessories",
  "catRu": "Аксессуары",
  "group": "accessories",
  "price": 13490,
  "old": 15918,
  "isNew": false,
  "desc": "Чёрная сумка C.P. Company crossbody.",
  "sizeSystem": "ONE",
  "sizes": [
   {
    "label": "ONE SIZE",
    "eu": null,
    "us": null,
    "cm": null,
    "alt": null,
    "stock": 1
   }
  ],
  "images": [
   "sumka-c-p-company-crossbody-black-1.webp",
   "sumka-c-p-company-crossbody-black-2.webp",
   "sumka-c-p-company-crossbody-black-3.webp"
  ],
  "heroOk": true
 }
]

export const CATEGORIES: Category[] = [
 {
  "slug": "sneakers",
  "ru": "Кроссовки",
  "count": 82,
  "min": 3500,
  "image": "krossovki-adidas-samba-sporty-rich-white-burgund-1.webp"
 },
 {
  "slug": "outerwear",
  "ru": "Верхняя одежда",
  "count": 2,
  "min": 31990,
  "image": "kurtka-c-p-company-green-goggle-jacket-1.webp"
 },
 {
  "slug": "hoodies-sweatshirts",
  "ru": "Худи и свитшоты",
  "count": 6,
  "min": 10490,
  "image": "zip-hudi-carhartt-rain-defender-black-1.webp"
 },
 {
  "slug": "tshirts",
  "ru": "Футболки",
  "count": 2,
  "min": 2500,
  "image": "futbolka-carhartt-wip-white-1.webp"
 },
 {
  "slug": "shirts-polos",
  "ru": "Рубашки и поло",
  "count": 1,
  "min": 9990,
  "image": "burberry-classic-check-shirt-1.webp"
 },
 {
  "slug": "sweaters-cardigans",
  "ru": "Свитеры",
  "count": 1,
  "min": 19990,
  "image": "svitshot-stone-island-white-1.webp"
 },
 {
  "slug": "pants-shorts",
  "ru": "Брюки и шорты",
  "count": 1,
  "min": 18990,
  "image": "shtany-c-p-company-flatt-nylon-cargo-lens-blue-1.webp"
 },
 {
  "slug": "hats",
  "ru": "Головные уборы",
  "count": 1,
  "min": 6990,
  "image": "kepka-c-p-company-green-1.webp"
 },
 {
  "slug": "accessories",
  "ru": "Аксессуары",
  "count": 1,
  "min": 13490,
  "image": "sumka-c-p-company-crossbody-black-1.webp"
 }
]

export const BRANDS: Brand[] = [
 {
  "name": "New Balance",
  "slug": "new-balance",
  "count": 40,
  "min": 8500
 },
 {
  "name": "Nike",
  "slug": "nike",
  "count": 28,
  "min": 9990
 },
 {
  "name": "Adidas",
  "slug": "adidas",
  "count": 8,
  "min": 8380
 },
 {
  "name": "C.P. Company",
  "slug": "c-p-company",
  "count": 8,
  "min": 6990
 },
 {
  "name": "Puma",
  "slug": "puma",
  "count": 3,
  "min": 9990
 },
 {
  "name": "Carhartt WIP",
  "slug": "carhartt-wip",
  "count": 3,
  "min": 2500
 },
 {
  "name": "Stone Island",
  "slug": "stone-island",
  "count": 3,
  "min": 19990
 },
 {
  "name": "ASICS",
  "slug": "asics",
  "count": 1,
  "min": 11490
 },
 {
  "name": "Converse",
  "slug": "converse",
  "count": 1,
  "min": 3500
 },
 {
  "name": "Salomon",
  "slug": "salomon",
  "count": 1,
  "min": 18990
 },
 {
  "name": "Burberry",
  "slug": "burberry",
  "count": 1,
  "min": 9990
 }
]

export const SHOE_SIZES: string[] = ["36", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41", "41.5", "42", "42.5", "43", "44", "44.5", "45", "47"]
export const APPAREL_SIZES: string[] = ["S", "M", "L", "XL", "XXL", "XXXL"]

export const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}`
export const byId = (id: string) => PRODUCTS.find(p => p.id === id)
export const inStock = (p: Product) => p.sizes.reduce((n, s) => n + s.stock, 0)
export const hasSize = (p: Product, size: string) => p.sizes.some(s => s.label === size && s.stock > 0)
export const TOTAL_PAIRS = PRODUCTS.reduce((n, p) => n + inStock(p), 0)
