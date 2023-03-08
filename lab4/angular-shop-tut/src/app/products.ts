export interface Product {
  id: number;
  name: string;
  url: string;
  pic: string;
  price: number;
  rating: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128gb',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    price: 374444,
    rating: 3,
    description: 'The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). Both models: HDR display.',
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h0f/51166990336030/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    price: 139160,
    rating: 4,
    description: 'Xiaomi Redmi Note 11 Pro Android smartphone. Announced Jan 2022. Features 6.67″ display, Helio G96 chipset, 5000 mAh battery, 128 GB storage, 8 GB RAM',
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ',
    url: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/hcf/64487157956638/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    price: 128350,
    rating: 5,
    description: 'Redmi Note 10 Pro mobile was launched on 4th March 2021. The phone comes with a 6.67-inch touchscreen display. The display sports Gorilla Glass for protection. Redmi Note 10 Pro is powered by an octa-core Qualcomm Snapdragon 732G processor. It comes with 6GB, 8GB of RAM.',
  },
  {
    id: 4,
    name: 'Samsung Galaxy A13 4 ГБ/128 ГБ',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h55/49613818036254/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    price: 91078,
    rating: 4,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 5,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum',
    url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    price: 225000,
    rating: 3,
    description: "Not that much is new for the Apple Watch Series 8, and that's OK. I mean, it might seem less exciting compared to the brand-new Apple Watch Ultra, but don't get me wrong - useful upgrades to health tracking, safety and connectivity make the best smartwatch even better.",
  },
  {
    id: 6,
    name: 'Электронная книга POCKET BOOK PB617-P-CIS',
    url: 'https://kaspi.kz/shop/p/pocket-book-pb617-p-cis-chernyi-105268772/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h43/51482116489246/pocket-book-pb617-p-cis-cernyj-105268772-1.jpg',
    price: 64426,
    rating: 5,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 7,
    name: 'Зарядное устройство Samsung Gear S3/S2',
    url: 'https://kaspi.kz/shop/p/samsung-gear-s3-s2-chernyi-108103245/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h87/67025310842910/samsung-gear-s3-s2-chernyi-108103245-1.jpg',
    price: 4901,
    rating: 4,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 8,
    name: 'Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
    price: 95799,
    rating: 2,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 9,
    name: 'Ремешок S&M для Mi Band 4, Mi Band 3',
    url: 'https://kaspi.kz/shop/p/remeshok-s-m-dlja-mi-band-4-mi-band-3-chernyi-101188339/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h03/h34/33833835986974/remeshok-s-m-dlya-xiaomi-mi-band-3-4-chernyi-101188339-1.jpg',
    price: 450,
    rating: 4,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
  {
    id: 10,
    name: 'Ремешок для Apple Watch Series 1, 2, 3',
    url: 'https://kaspi.kz/shop/p/remeshok-dlja-apple-watch-series-1-2-3-belyi-103820125/?c=750000000#!/item',
    pic: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/ha2/48908244254750/remeshok-oem-dlya-apple-watch-40-mm-belyi-103820125-1.jpg',
    price: 568,
    rating: 3,
    description: 'The Samsung Galaxy A13 is packed with 4GB RAM with 128GB of internal storage. The device runs on the Android 11, One UI operating system. It features GPS, USB, and FM radio. It is fueled with a Li-Po 5000, non-removable + Fast charging 15W.',
  },
];
