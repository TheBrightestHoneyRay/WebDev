export interface Product {
  id: number;
  name: string;
  category: string;
  url: string;
  pic: string;
  price: number;
  rating: number;
  like: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128gb',
    category: 'Phones',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    price: 374444,
    rating: 3,
    like: 0,
    description: 'The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). Both models: HDR display.',
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    category: 'Phones',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h0f/51166990336030/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    price: 139160,
    rating: 4,
    like: 0,
    description: 'Xiaomi Redmi Note 11 Pro Android smartphone. Announced Jan 2022. Features 6.67″ display, Helio G96 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM',
  },
  {
    id: 3,
    name: 'Apple iPad 2021 10.2',
    category: 'Tablets',
    url: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg',
    price: 169980,
    rating: 4,
    like: 0,
    description: 'онкий, легкий, рамки маленькие, а сам дисплей 10.2. Быстрый. Передняя камера 12 МП',
  },
  {
    id: 4,
    name: 'Samsung Galaxy A13 4 ГБ/128 ГБ',
    category: 'Phones',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h55/49613818036254/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    price: 91078,
    rating: 4,
    like: 0,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 5,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum',
    category: 'Gadgets',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    price: 225000,
    rating: 3,
    like: 0,
    description: "Not that much is new for the Apple Watch Series 8, and that's OK. I mean, it might seem less exciting compared to the brand-new Apple Watch Ultra, but don't get me wrong - useful upgrades to health tracking, safety and connectivity make the best smartwatch even better.",
  },
  {
    id: 6,
    name: 'Электронная книга POCKET BOOK PB617-P-CIS',
    category: 'Tablets',
    url: 'https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h43/51482116489246/pocket-book-pb617-p-cis-cernyj-105268772-1.jpg',
    price: 64426,
    rating: 5,
    like: 0,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 7,
    name: 'Зарядное устройство Samsung Gear S3/S2',
    category: 'Accessories',
    url: 'https://kaspi.kz/shop/p/samsung-gear-s3-s2-chernyi-108103245/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h87/67025310842910/samsung-gear-s3-s2-chernyi-108103245-1.jpg',
    price: 4901,
    rating: 4,
    like: 0,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 8,
    name: 'Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм',
    category: 'Gadgets',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
    price: 95799,
    rating: 2,
    like: 0,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 9,
    name: 'Ремешок S&M для Mi Band 4, Mi Band 3',
    category: 'Accessories',
    url: 'https://kaspi.kz/shop/p/remeshok-s-m-dlja-mi-band-4-mi-band-3-chernyi-101188339/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h34/33833835986974/remeshok-s-m-dlya-xiaomi-mi-band-3-4-chernyi-101188339-1.jpg',
    price: 450,
    rating: 4,
    like: 0,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 10,
    name: 'Ремешок для Apple Watch Series 1, 2, 3',
    category: 'Accessories',
    url: 'https://kaspi.kz/shop/p/remeshok-dlja-apple-watch-series-1-2-3-belyi-103820125/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/ha2/48908244254750/remeshok-oem-dlya-apple-watch-40-mm-belyi-103820125-1.jpg',
    price: 568,
    rating: 3,
    like: 0,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 11,
    name: 'Samsung Galaxy Tab A8 SM-X205N 10.5',
    category: 'Tablets',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-128-gb-seryi-103450834/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h01/48290724970526/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-64-gb-seryj-103450834-1.jpg',
    price: 113164,
    rating: 4,
    like: 0,
    description: 'Размер оперативной памяти: 4 Гб',
  },
  {
    id: 12,
    name: 'Чехол Smart Case для Apple iPhone 13',
    category: 'Accessories',
    url: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/h21/61970077581342/prozracnyj-cehol-na-iphone-13-106185651-1.jpg',
    price: 234,
    rating: 5,
    like: 0,
    description: 'тип: накладка с защитой камеры, совместимый бренд: Apple, материал: силикон',
  },
  {
    id: 13,
    name: 'Наклейка для телефона DIVAD 531848',
    category: 'Accessories',
    url: 'https://kaspi.kz/shop/p/divad-531848-1-sht-107416843/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/ha9/65316836540446/divad-531848-1-sht-107416843-1.jpg',
    price: 800,
    rating: 4,
    like: 0,
    description: 'Необычные наклейки. Ночью светятся.',
  },
  {
    id: 14,
    name: 'Система нагревания IQOS ORIGINALS DUO',
    category: 'Gadgets',
    url: 'https://kaspi.kz/shop/p/iqos-originals-duo-grafitovyi-106486618/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h73/62545225875486/iqos-iqos-originals-duo-grafitovyi-106486618-1.jpg',
    price: 18990,
    rating: 2,
    like: 0,
    description: "Держатель с зарядным устройством",
  },
  {
    id: 15,
    name: 'Смарт-кольцо iQibla ZIKR1-22F',
    category: 'Gadgets',
    url: 'https://kaspi.kz/shop/p/smart-kol-tso-iqibla-zikr1-22f-chernyi-107070750/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/he5/63613354737694/smart-kol-co-iqibla-zikr1-22f-cernyj-107070750-1.jpg',
    price: 16487,
    rating: 5,
    like: 0,
    description: "Со встроенным bluetooth-совместимым, счетчик кольцо легко подключается к приложению.",
  },
  {
    id: 16,
    name: 'Рация Baofeng BF-888S',
    category: 'Gadgets',
    url: 'https://kaspi.kz/shop/p/ratsija-baofeng-bf-888s-100648176/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/hb8/33287144800286/baofeng-bf-888s-cernyj-100648176-1-Container.jpg',
    price: 9800,
    rating: 5,
    like: 0,
    description: "Для работы в пределах 1,5-2 километров их вполне хватает",
  },
  {
    id: 17,
    name: 'Xiaomi Redmi 10C',
    category: 'Phones',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/hea/51348549828638/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg',
    price: 69449,
    rating: 3,
    like: 0,
    description: 'Телефон очень удобный в пользовании. Цвет приятный, площадь телефона удобная для просматривания.'
  },
  {
    id: 18,
    name: 'Apple iPad 2021 10.2',
    category: 'Tablets',
    url: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg',
    price: 169980,
    rating: 4,
    like: 0,
    description: 'онкий, легкий, рамки маленькие, а сам дисплей 10.2. Быстрый. Передняя камера 12 МП',
  },
  {
    id: 19,
    name: 'Samsung Galaxy Tab A8 SM-X205N 10.5',
    category: 'Tablets',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-sm-x205n-10-5-djuimov-4-gb-128-gb-seryi-103450834/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h01/48290724970526/samsung-galaxy-tab-a8-10-5-dujmov-4-gb-64-gb-seryj-103450834-1.jpg',
    price: 113164,
    rating: 4,
    like: 0,
    description: 'Размер оперативной памяти: 4 Гб',
  },
  {
    id: 20,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ',
    category: 'Phones',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    price: 128350,
    rating: 5,
    like: 0,
    description: 'Redmi Note 10 Pro mobile was launched on 4th March 2021. The phone comes with a 6.67-inch touchscreen display. The display sports Gorilla Glass for protection. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor. It comes with 6GB, 8GB of RAM.',
  },

];
