/** Общие технические характеристики (Mingto Monster, Kugoo Kirin, GT Pro) */
export const bikeMainSpecs = [
  "Мощность мотора: 800W",
  "Аккумулятор: литий-ионный, 60V, 21Ah (до 50 км на одной зарядке)",
  "Время зарядки: 4–6 часов",
  "Скорость: максимальная — 60 км/ч",
  "Рама: алюминиевая, лёгкая и устойчивая",
  "Колёса: 16 дюймов с высококачественными шинами для лучшего сцепления",
  "Тормоза: дисковые (передние и задние) для надёжной остановки"
];

export const bikeExtraFeatures = [
  "Электронный спидометр",
  "LED-фары, светодиодные фонари",
  "Корзина для вещей"
];

export const bikes = [
  {
    slug: "mingto-monster",
    model: "Mingto Monster",
    tag: "Тяжёлый класс",
    type: "Мощный городской электровелосипед",
    description:
      "Тяжёлый класс с усиленной рамой и аккумулятором 60V — уверенная езда по городу и грунту. Подходит для дальних поездок и работы в любую погоду.",
    mainSpecs: bikeMainSpecs,
    extraFeatures: bikeExtraFeatures,
    price: 500,
    deposit: 2000,
    svgVariant: "mingto"
  },
  {
    slug: "kugoo-kirin",
    model: "Kugoo Kirin",
    tag: "Городской",
    type: "Лёгкий и манёвренный",
    description:
      "Компактный городской электровелосипед: легко паркуется, быстро маневрирует в потоке. Оптимален для коротких и средних маршрутов.",
    mainSpecs: bikeMainSpecs,
    extraFeatures: bikeExtraFeatures,
    price: 650,
    deposit: 2000,
    svgVariant: "kugoo"
  },
  {
    slug: "gt-pro",
    model: "GT Pro",
    tag: "Городской",
    type: "Скорость и комфорт",
    description:
      "Спортивная геометрия и аккумулятор 60V для тех, кто ценит динамику и стабильность на скорости. Хороший выбор для регулярных поездок.",
    mainSpecs: bikeMainSpecs,
    extraFeatures: bikeExtraFeatures,
    price: 650,
    deposit: 2000,
    svgVariant: "gt"
  }
];

export function getBikeBySlug(slug) {
  return bikes.find((b) => b.slug === slug) ?? null;
}

export function getBikeSlugs() {
  return bikes.map((b) => b.slug);
}
