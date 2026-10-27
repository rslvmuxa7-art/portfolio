export const GITHUB_URL = "https://github.com/rslvmuxa7-art";
export const TELEGRAM_URL = "https://t.me/rasulv_l7";
export const MAP_URL = "https://www.google.com/maps/search/Bachqir+MFY,+Buvayda,+Fergana+Region,+Uzbekistan";
export const EMAIL_ADDRESS = "rslvmuxa7@gmail.com";

export const profile = {
  name: "Muhammadqodir Rasuljonov",
  location: "Fergana, Buvayda, O‘zbekiston",
  role: "Frontend dasturchi",
  shortBio:
    "Men responsiv, yuqori sifatli va foydalanuvchi uchun qulay veb-interfeyslarni yarataman. Ishimda tezlik, dizayn va mahsulot sifati muhim o'rin tutadi.",
};

export const featuredProjects = [
  {
    title: "Mehmonxona bron qilish",
    category: "Sayohat va bron",
    description:
      "Mobil va kompyuter uchun moslangan premium mehmonxona qidiruv va bron qilish tajribasi, filtrlar, mavjudlik tekshiruvi va tasdiqlash bosqichlari bilan.",
    tags: ["Next.js", "TypeScript", "React"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    route: "/projects/hotel-booking",
    githubUrl: GITHUB_URL,
  },
  {
    title: "UzNews",
    category: "Yangiliklar va media",
    description:
      "O‘zbek tilidagi zamonaviy yangiliklar portali, kategoriyalar bo‘yicha filtrlash, qidiruv, ustun maqolalar va silliq redaksiya tartibi bilan.",
    tags: ["Next.js", "Dizayn", "UX"],
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    route: "/projects/uznews",
    githubUrl: GITHUB_URL,
  },
  {
    title: "Moliya boshqaruvi",
    category: "Moliya va analitika",
    description:
      "Daromad, xarajat, balans va kategoriya tendentsiyalarini kuzatib borish uchun shaxsiy moliya ishlashi va tranzaksiyalar menejmenti.",
    tags: ["LocalStorage", "Dashboard", "Charts"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    route: "/projects/finance-dashboard",
    githubUrl: GITHUB_URL,
  },
];

export type Hotel = {
  id: number;
  name: string;
  destination: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  description: string;
  amenities: string[];
  category: string;
};

export const hotelHotels: Hotel[] = [
  {
    id: 1,
    name: "Aurora Plaza Hotel",
    destination: "Tashkent",
    location: "Yakkasaroy district",
    rating: 4.9,
    reviews: 248,
    price: 185,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description:
      "A refined city stay with panoramic views, premium interiors, and seamless business-friendly services.",
    amenities: ["Wi-Fi", "Pool", "Gym", "Breakfast"],
    category: "Luxury",
  },
  {
    id: 2,
    name: "Desert Bloom Resort",
    destination: "Bukhara",
    location: "Old town edge",
    rating: 4.8,
    reviews: 186,
    price: 142,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "A warm boutique property blending local design with calm courtyards and cultural experiences.",
    amenities: ["Spa", "Parking", "Restaurant", "Shuttle"],
    category: "Boutique",
  },
  {
    id: 3,
    name: "Blue Harbor Suites",
    destination: "Samarkand",
    location: "Registan Avenue",
    rating: 4.7,
    reviews: 214,
    price: 160,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Contemporary suites near historic attractions with quiet rooms, curated dining, and quick city access.",
    amenities: ["Airport transfer", "Room service", "Gym", "Bar"],
    category: "Premium",
  },
  {
    id: 4,
    name: "Cedar Heights",
    destination: "Tashkent",
    location: "Chilonzor",
    rating: 4.6,
    reviews: 132,
    price: 120,
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    description:
      "An urban escape designed for comfort, easy access, and stress-free work trips.",
    amenities: ["Wi-Fi", "Coffee bar", "EV charger"],
    category: "Business",
  },
  {
    id: 5,
    name: "Alpine Nest Lodge",
    destination: "Khiva",
    location: "Historic quarter",
    rating: 4.9,
    reviews: 171,
    price: 175,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "A restorative stay shaped around cultural immersion, quiet terraces, and handcrafted hospitality.",
    amenities: ["Terrace", "Breakfast", "Guided tours", "Wi-Fi"],
    category: "Heritage",
  },
];

export type NewsArticle = {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
};

export const newsCategories = [
  "Barchasi",
  "O‘zbekiston",
  "Jahon",
  "Siyosat",
  "Texnologiya",
  "Sport",
  "Iqtisodiyot",
];

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "toshkentda-yangi-transport-innovatsiyasi",
    title: "Toshkentda yangi transport innovatsiyasi joriy etilmoqda",
    category: "Texnologiya",
    summary:
      "Shahar transportida sun'iy intellekt asosidagi boshqaruv tizimi ishlab chiqilmoqda.",
    content:
      "Toshkent shahridagi transport infratuzilmasi modernizatsiya jarayonida. Mahalliy hokimiyat sun'iy intellektga asoslangan harakat tizimlarini joriy etish bilan bog'liq pilot dasturini boshladi. Bu yondashuv yo'l harakati va sayohat vaqtini optimallashtirishga xizmat qiladi.",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-18",
    author: "Diyorbek S",
  },
  {
    id: 2,
    slug: "ozbekiston-koronavirusdan-keyingi-turizmni-qayta-yuksaltirishga-urinish-qiladi",
    title: "O‘zbekiston turizmni qayta yuksaltirishga kirishmoqda",
    category: "O‘zbekiston",
    summary:
      "Yevropa va O'rta Osiyo turistlari uchun yangi mahsulotlar va yo'nalishlar ishlab chiqilmoqda.",
    content:
      "Turizm sohasidagi qayta tiklanish dasturi mahalliy mehmonxonalar va sayyohlik kompaniyalari bilan hamkorlikda amalga oshirilmoqda. Yangi marketing kampaniyalar va tarixiy yo'nalishlar orqali O‘zbekiston xalqaro bozorlar uchun yanada jozibador bo'lib bormoqda.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-16",
    author: "Malika R",
  },
  {
    id: 3,
    slug: "siyosiy-tahlil-ozbekistonda-yangi-infratuzilma-qarorlar",
    title: "Yangi infratuzilma qarorlari mahalliy iqtisodga ta'sir ko'rsatmoqda",
    category: "Siyosat",
    summary:
      "Mintaqaviy loyihalar va yo'l-transport tizimlari rivojlanish jarayonini tezlashtirmoqda.",
    content:
      "Hukumat tomonidan tasdiqlangan yangi infratuzilma dasturi hududlararo bog'lanishni mustahkamlash, ishlab chiqarishni tezlashtirish va aholi xizmatlariga yaxshilovchi ta'sir ko'rsatmoqda.",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-15",
    author: "Nodir A",
  },
  {
    id: 4,
    slug: "sport-ozbekiston-olimpiya-yo'lida",
    title: "O‘zbekiston sportchilarining yangi muvaffaqiyatlari",
    category: "Sport",
    summary:
      "Milliy terma jamoalar sport musobaqalarida ko'rsatgan natijalari yuqori baholanmoqda.",
    content:
      "So'nggi yillarda sportchilarimiz xalqaro musobaqalarda namoyon etayotgan natijalaridan kelib chiqib, bo'limlar va murabbiylar bilan ishlashdagi samarali yondashuvlar davom etmoqda.",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-14",
    author: "Jasur T",
  },
  {
    id: 5,
    slug: "iqtisodiyot-agrar-sektorni-modernizatsiya-qiladi",
    title: "Agrar sektor yangi texnologiyalar yordamida rivojlanmoqda",
    category: "Iqtisodiyot",
    summary:
      "Qishloq xo'jaligi sohasida avtomatlashtirish va monitoring tizimlari kengaymoqda.",
    content:
      "Mintaqadagi fermerlar uchun yangi agro-monitoring platformasi joriy etildi. Bu tizim hosildorlikni nazorat qilish, suv resurslarini tejash va ish unumini oshirish imkonini beradi.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-12",
    author: "Sardor Y",
  },
  {
    id: 6,
    slug: "jahon-ai-texnologiyalari-taqdimoti",
    title: "Jahon miqyosida AI texnologiyalari yanada keng joriy etilmoqda",
    category: "Jahon",
    summary:
      "Yangi generativ AI yechimlari biznes va ta'lim sohalarini o'zgartirmoqda.",
    content:
      "Aqlli assistentlar va avtomatlashtirishga yo'naltirilgan platformalar soni ko'payib bormoqda, bu esa jahon bizneslari uchun tezkor qaror qabul qilish imkonini yaratmoqda.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-11",
    author: "Lobar K",
  },
  {
    id: 7,
    slug: "ozbekiston-yangi-telekommunikatsiya-loyihasi",
    title: "O'zbekiston telekommunikatsiya tarmoqlarini modernizatsiya qilmoqda",
    category: "O‘zbekiston",
    summary:
      "Mahalliy operatorlar 5G va yuqori tezlikdagi internet infratuzilmasini kengaytirmoqda.",
    content:
      "Yangi telekommunikatsiya loyihalari orqali viloyatlararo aloqalar mustahkamlanmoqda. Bu esa especially digital services and education sectors now benefit from improved connectivity.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-09",
    author: "Bekzod N",
  },
  {
    id: 8,
    slug: "siyosat-mamlakatlararo-hamkorlik-kuchaymoqda",
    title: "Mamlakatlararo hamkorlik yangi iqtisodiy imkoniyatlar yaratmoqda",
    category: "Siyosat",
    summary:
      "Boshqaruv organlari yangi tashqi iqtisodiy aloqalar va kelishuvlarni muhokama qilmoqda.",
    content:
      "Hududlararo samarali kelishuvlar va savdo-iqtisodiy aloqalar orqali O‘zbekistonning tashqi hamkorlik ko'lamini kengaytirish imkoniyati paydo bo'ldi.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-07",
    author: "Gulnora P",
  },
  {
    id: 9,
    slug: "texnologiya-kiberxavfsizlik-yangi-muammo",
    title: "Kiberxavfsizlik bo‘yicha yangi standartlar qabul qilinmoqda",
    category: "Texnologiya",
    summary:
      "Axborot xavfsizligi bo'yicha davlat va xususiy sektorga mo'ljallangan chora-tadbirlar kuchaymoqda.",
    content:
      "Yangi texnologiyalar bilan birga, axborot xavfsizligi va ma'lumotlarni himoya qilish bo'yicha standartlar takomillashtirilmoqda. Bu kadrlar va korxonalar uchun muhim omil bo'ldi.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-05",
    author: "Farhod D",
  },
  {
    id: 10,
    slug: "sport-uchinchi-marta-yevropa-chempionati",
    title: "Milliy jamoa Yevropa musobaqasiga tayyorgarlik ko'rmoqda",
    category: "Sport",
    summary:
      "Murabbiylar va sportchilarga zamonaviy tayyorgarlik tizimlari joriy etilmoqda.",
    content:
      "Yukori natijalar uchun xalqaro tajriba va ilmiy yondashuvlar integratsiyasi amalga oshirilmoqda. Bu harakatlar jamoaning musobaqadagi salohiyatini oshirishga xizmat qilmoqda.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-03",
    author: "Aliya M",
  },
  {
    id: 11,
    slug: "iqtisodiyot-ichki-bozor-tekshiruvi",
    title: "Ichki bozorni rivojlantirish maqsadida yangi chora-tadbirlar ko'rilmoqda",
    category: "Iqtisodiyot",
    summary:
      "Mahalliy iste'molchilar uchun savdo va xizmat ko'rsatish sektoriga yangi davlat dasturi ishlanmoqda.",
    content:
      "Kichik va o'rta biznesni qo'llab-quvvatlash maqsadida yangi kredit va subsidiyalar rejalashtirilmoqda. Bu esa ishlab chiqarish va tadbirkorlikni rag'batlantiradi.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    date: "2026-10-01",
    author: "Samira T",
  },
  {
    id: 12,
    slug: "jahon-uy-joy-sohasidagi-yangi-innovatsiya",
    title: "Yangi texnologik uy-joy yechimlari bozorda tezlik bilan kengaymoqda",
    category: "Jahon",
    summary:
      "Smart home platformalari turar-joylar uchun yangi standart bo'lib qoldi.",
    content:
      "Uylar va binolarni avtomatlashtirish, energiya tejash va xodimlarni boshqarishda yangi platformalar joriy etilmoqda. Bu yangi iqtisodiy istiqbolni yaratmoqda.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    date: "2026-09-28",
    author: "Erkin S",
  },
];
