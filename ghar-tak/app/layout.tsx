import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'GHAR TAK - Water Delivery Service in Pakistan',
  description: 'GHAR TAK offers high-quality mineral water, filtered water, and RO water delivery services in Lahore, Karachi, Islamabad, and across Pakistan. Enjoy safe, healthy drinking water with our reliable and affordable delivery service.',
  keywords: 'Water delivery service, Mineral water delivery, Filtered water delivery, RO water delivery, Drinking water delivery, Fresh water supply, Online water delivery, Pure water delivery, Bottled water delivery, Home water delivery, Lahore water delivery, Pakistan water delivery service, Water delivery near me, Water supply in Pakistan, Water supply in Lahore, Water supply in Karachi, Water supply in Islamabad, Water supply in Multan, Water supply in Peshawar, Affordable water delivery in Lahore, Healthy drinking water, High-quality mineral water, Safe drinking water, Hydration solutions, RO purified water, Same-day water delivery, Scheduled water delivery, Bulk water supply, Emergency water delivery, Corporate water solutions, Eco-friendly water delivery, Reusable water bottles, Sustainable water supply, Reducing plastic waste, Water purification process, Trusted water delivery, Best water delivery service, Reliable water delivery service, Cheap water delivery near me, Customer-focused water delivery, Water delivery discounts, Free water delivery, Affordable water packages, Monthly water delivery plans, Subscribe for water delivery, Reverse osmosis water, Drinking water supplier, Water delivery app, Premium water service, Filtered water supplier, GHAR TAK water, Lahore RO water service, Pure water for homes, Water for businesses, Best water service Near Me',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>        
        {children}
        <div className="absolute w-px h-px p-0 -m-px overflow-hidden clip-rect-0 whitespace-nowrap border-0">
          Water delivery service, Mineral water delivery, Filtered water delivery, RO water delivery, Drinking water delivery, Fresh water supply, Online water delivery, Pure water delivery, Bottled water delivery, Home water delivery, Lahore water delivery, Pakistan water delivery service, Water delivery near me, Water supply in Pakistan, Water supply in Lahore, Water supply in Karachi, Water supply in Islamabad, Water supply in Multan, Water supply in Peshawar, Affordable water delivery in Lahore, Healthy drinking water, High-quality mineral water, Safe drinking water, Hydration solutions, RO purified water, Same-day water delivery, Scheduled water delivery, Bulk water supply, Emergency water delivery, Corporate water solutions, Eco-friendly water delivery, Reusable water bottles, Sustainable water supply, Reducing plastic waste, Water purification process, Trusted water delivery, Best water delivery service, Reliable water delivery service, Cheap water delivery near me, Customer-focused water delivery, Water delivery discounts, Free water delivery, Affordable water packages, Monthly water delivery plans, Subscribe for water delivery, Reverse osmosis water, Drinking water supplier, Water delivery app, Premium water service, Filtered water supplier, GHAR TAK water, Lahore RO water service, Pure water for homes, Water for businesses, Best water service Near Me
        </div>
      </body>
    </html>
  );
}
