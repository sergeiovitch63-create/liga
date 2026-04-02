export function ContactMapsIcon({ className } = {}) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 4C11.58 4 8 7.58 8 12c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8z"
        fill="#FC3F1D"
      />
      <circle cx="16" cy="12" r="3.5" fill="#fff" />
    </svg>
  );
}

export function ContactTelegramIcon({ className } = {}) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#2AABEE" />
      <path
        d="M5.5 11.8l12.8-4.9c.9-.4 1.8.5 1.3 1.4l-3.3 7.7c-.4.9-1.7 1-2.3.2l-2.4-3.3-3.5 3.5c-.7.7-1.9.2-1.7-.8l1.4-6.8z"
        fill="#fff"
      />
    </svg>
  );
}

export function ContactPhoneIcon({ className } = {}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ContactWhatsAppIcon({ className } = {}) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 448 512" fill="none" aria-hidden>
      <path
        fill="#25D366"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.5c-33.1 0-65.3-8.9-93.4-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-30-28.2-65.1-28.2-100.9C39.5 148.5 129 59 223.9 59c45.9 0 89.1 17.9 121.3 50.4 32.2 32.5 50 75.6 49.9 121.4-.1 94.9-89.5 184.2-194.2 194.2zm104.4-141.4c-5.7-2.8-33.9-16.7-39.1-18.6-5.3-1.9-9.1-2.8-13 2.8-3.8 5.5-14.7 18.6-18.1 22.4-3.3 3.8-6.7 4.3-12.4 1.4-33.9-16.9-56.2-30.1-78.6-68.1-5.9-10.2 5.9-9.4 16.8-31.3 1.9-3.8-.1-7.1-1.4-10-1.4-2.8-13-31.3-17.8-42.9-4.7-11.3-9.5-9.7-13-9.9-3.4-.2-7.3-.2-11.2-.2-3.8 0-10 1.4-15.3 7.1-5.2 5.7-19.9 19.4-19.9 47.4s20.4 55 23.2 58.8c2.8 3.8 40.1 61.2 97.1 85.9 13.6 5.9 24.2 9.4 32.5 12 13.7 4.4 26.1 3.8 36 2.3 11-1.7 33.9-13.8 38.7-27.2 4.8-13.3 4.8-24.8 3.4-27.2-1.4-2.5-5.1-4-10.7-7z"
      />
    </svg>
  );
}

export function ContactChannelIcon({ id, className }) {
  switch (id) {
    case "maps":
      return <ContactMapsIcon className={className} />;
    case "telegram":
      return <ContactTelegramIcon className={className} />;
    case "phone":
      return <ContactPhoneIcon className={className} />;
    case "whatsapp":
      return <ContactWhatsAppIcon className={className} />;
    default:
      return null;
  }
}
