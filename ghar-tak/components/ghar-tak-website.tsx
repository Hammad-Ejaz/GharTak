'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Catalog } from "@/components/ui/catalog"
import { MessageCircle } from 'lucide-react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { PWAInstallPrompt } from './pwa-install-prompt'
import { Services } from './services'
import { AdvertisementSlider } from './advertisement-slider'
import { Hero } from './hero'
import { StatisticsStrip } from './statistics-strip'

export function GharTakWebsite() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = '+923292182180' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>      
      <main className="flex-grow pt-16">      
        <Hero/>
        <StatisticsStrip/>
        <AdvertisementSlider/>
        <Services/>
        <Catalog/>
      </main>
      <PWAInstallPrompt />
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 text-lg px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:shadow-xl">
          <MessageCircle className="w-6 h-6 mr-2" />
          Order Now
        </Button>
      </div>
    </div>
  )
}
