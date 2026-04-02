import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-bebas"
});

const montserrat = Montserrat({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat"
});

export const metadata = {
  title: "Лига Скорости",
  description: "Аренда электровелосипедов, АКБ и запчасти"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${bebas.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
