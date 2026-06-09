/** Единые контакты для hero, плавающей кнопки и т.д. */

export const CONTACT_YANDEX_MAPS =
  "https://yandex.ru/maps/org/liga_skorosti/159751802800/?ll=20.502097%2C54.714646&z=1";

export const CONTACT_TELEGRAM = "https://t.me/ligaskorosti_39";

export const CONTACT_PHONE_TEL = "tel:+79937809035";

export const CONTACT_PHONE_DISPLAY = "+7 (993) 780-90-35";

export const CONTACT_WHATSAPP =
  "https://api.whatsapp.com/send/?phone=79937809035&text&type=phone_number&app_absent=0";

/** Порядок как в hero: карты, Telegram, телефон, WhatsApp */
export const contactChannels = [
  {
    id: "maps",
    href: CONTACT_YANDEX_MAPS,
    external: true,
    label: "Яндекс.Карты",
    hint: "Офис на карте · Калининград, ул. Гаражная, 2в (заезд с ул. Юношеская)",
    ariaLabel: "Лига скорости на Яндекс.Картах",
  },
  {
    id: "telegram",
    href: CONTACT_TELEGRAM,
    external: true,
    label: "Telegram",
    hint: "@ligaskorosti_39",
    ariaLabel: "Написать в Telegram Лига скорости",
  },
  {
    id: "phone",
    href: CONTACT_PHONE_TEL,
    external: false,
    label: "Телефон",
    hint: CONTACT_PHONE_DISPLAY,
    ariaLabel: `Позвонить ${CONTACT_PHONE_DISPLAY}`,
  },
  {
    id: "whatsapp",
    href: CONTACT_WHATSAPP,
    external: true,
    label: "WhatsApp",
    hint: "Написать в WhatsApp",
    ariaLabel: "Написать в WhatsApp",
  },
];
