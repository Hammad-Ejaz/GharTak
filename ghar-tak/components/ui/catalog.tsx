'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from 'lucide-react'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

export function Catalog() {
  const [slidesPerView, setSlidesPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = '+923292182180' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  const catalogItems = [
    { name: 'Pet Bottle (720g)', price: 1000, image: '/pet-bottle.png' },
    { name: 'Tap', price: 150, image: '/tap.png' },
    { name: 'Stand', price: 210, image: '/stand.png' },
    { name: 'Water Pump', price: 700, image: '/pump.png' },
    { name: 'Mini Dispenser', price: 900, image: '/dispenser.png' },
    { name: 'Grip Handle', price: 170, image: '/grip-handle.png' },
    { name: 'Bottle Handle', price: 120, image: '/bottle-handle.png' },
  ]

  return (
    <section id="catalog" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">Product Catalog</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"          
        >
          {catalogItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.name}</h3>
                  <p className="text-gray-700 font-bold">{item.price} PKR</p>
                  <Button onClick={openWhatsApp} className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #2563eb;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
\      `}</style>
    </section>
  )
}