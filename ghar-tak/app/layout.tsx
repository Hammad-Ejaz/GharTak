import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Water Delivery Service in Pakistan',
  description: 'GHAR TAK offers high-quality mineral water, filtered water, and RO water delivery services in Lahore, Karachi, Islamabad, and across Pakistan. Enjoy safe, healthy drinking water with our reliable and affordable delivery service.',
  keywords: 'Water delivery service, Mineral water delivery, Filtered water delivery, RO water delivery, Drinking water delivery, Fresh water supply, Online water delivery, Pure water delivery, Bottled water delivery, Home water delivery, Lahore water delivery, Pakistan water delivery service, Water delivery near me, Water supply in Pakistan, Water supply in Lahore, Water supply in Karachi, Water supply in Islamabad, Water supply in Multan, Water supply in Peshawar, Affordable water delivery in Lahore, Healthy drinking water, High-quality mineral water, Safe drinking water, Hydration solutions, RO purified water, Same-day water delivery, Scheduled water delivery, Bulk water supply, Emergency water delivery, Corporate water solutions, Eco-friendly water delivery, Reusable water bottles, Sustainable water supply, Reducing plastic waste, Water purification process, Trusted water delivery, Best water delivery service, Reliable water delivery service, Cheap water delivery near me, Customer-focused water delivery, Water delivery discounts, Free water delivery, Affordable water packages, Monthly water delivery plans, Subscribe for water delivery, Reverse osmosis water, Drinking water supplier, Water delivery app, Premium water service, Filtered water supplier, GHAR TAK water, Lahore RO water service, Pure water for homes, Water for businesses, Best water service Near Me',
  manifest: '/manifest.json',
  themeColor: '#3B82F6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        {children}
        <div className="absolute w-px h-px p-0 -m-px overflow-hidden clip-rect-0 whitespace-nowrap border-0">
          Water delivery service, Mineral water delivery, Filtered water delivery, RO water delivery, Drinking water delivery, Fresh water supply, Online water delivery, Pure water delivery, Bottled water delivery, Home water delivery, Lahore water delivery, Pakistan water delivery service, Water delivery near me, Water supply in Pakistan, Water supply in Lahore, Water supply in Karachi, Water supply in Islamabad, Water supply in Multan, Water supply in Peshawar, Affordable water delivery in Lahore, Healthy drinking water, High-quality mineral water, Safe drinking water, Hydration solutions, RO purified water, Same-day water delivery, Scheduled water delivery, Bulk water supply, Emergency water delivery, Corporate water solutions, Eco-friendly water delivery, Reusable water bottles, Sustainable water supply, Reducing plastic waste, Water purification process, Trusted water delivery, Best water delivery service, Reliable water delivery service, Cheap water delivery near me, Customer-focused water delivery, Water delivery discounts, Free water delivery, Affordable water packages, Monthly water delivery plans, Subscribe for water delivery, Reverse osmosis water, Drinking water supplier, Water delivery app, Premium water service, Filtered water supplier, GHAR TAK water, Lahore RO water service, Pure water for homes, Water for businesses, Best water service Near Me
        </div>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}