'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Tag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const advertisements = [
  {
    id: 1,
    title: "Special Offer: Like-New 19-Liter Water Bottles",
    description: "Take advantage of our limited-time offer! Get 2 second-hand 19-liter water bottles that look and feel like new for just 1500 PKR. These bottles are perfect for your home or office, delivering pure and refreshing water at an incredibly affordable price. Don't miss out on this amazing deal. Place your order now and enjoy our fast and reliable delivery service. Stay hydrated with high-quality water at a price that’s easy on your wallet!",
    image: "/OldBottlesOffer.png",
    discount: "SPECIAL OFFER"
  },
  {
    id: 2,
    title: "Exciting News from GHAR TAK",
    description: "We are thrilled to announce that GHAR TAK is now expanding its reach to serve the Shokat Town, Hajji Camp and Urban Villas area! Our mission has always been to deliver pure and refreshing water to homes and businesses, and we’re excited to bring our reliable service to even more customers. At GHAR TAK, we pride ourselves on offering premium-quality 19-litre mineral water bottles, ensuring safe and healthy hydration for you and your loved ones. With our hassle-free doorstep delivery, you can enjoy clean and refreshing water without any inconvenience. Plus, our services come with affordable pricing and exceptional reliability, making us the go-to choice for water delivery. Stay hydrated effortlessly with GHAR TAK as we continue to ensure every home and business in Royal Garrison has access to high-quality, refreshing water.",
    image: "/Expanding-News.png",
    discount: "NEWS"
  },
  {
    id: 3,
    title: "60 Days of Excellence",
    description: "We are excited to celebrate 60 incredible days of GHAR TAK, your trusted partner for water delivery! As a heartfelt thank-you for your unwavering trust and support, we are thrilled to announce an Exclusive 60-Day Celebration Offer just for you. Here’s how it works: The more you refill, the bigger your discount! For every refill you’ve purchased with us since day one, you’ll unlock amazing savings on our 19-litre plastic bottles. For example, if you’ve purchased 60 refills, you’ll receive 60% off on a bottle. If you’ve reached 100 refills, we’ll give you a FREE 19-litre bottle as a token of appreciation. It’s simple: the number of refills equals your discount percentage! This special offer is valid for a limited time only, so don’t miss the chance to save big while ensuring your family stays hydrated with pure, refreshing water.",
    image: "/60DaysOffer.png",
    discount: "₹100 CREDIT"
  }
]

export function AdvertisementSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentSlide])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % advertisements.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + advertisements.length) % advertisements.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <div className="relative overflow-hidden mt-10 sm:mt-20 mx-4 sm:mx-8 bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-8 text-center px-2">
        Exclusive Offers & Discounts
      </h1>
      <div className="relative h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <AnimatePresence initial={false} custom={currentSlide}>
          {advertisements.map((ad, index) => (
            <motion.div
              key={ad.id}
              custom={index}
              variants={{
                enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (direction) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 }),
              }}
              initial="enter"
              animate={index === currentSlide ? "center" : "exit"}
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute inset-0 w-full h-full ${
                index === currentSlide ? 'z-10' : 'z-0'
              }`}
            >
              <Card className="relative h-full overflow-hidden border-0 bg-white shadow-md">
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-1/2 h-[40%] sm:h-full relative overflow-hidden bg-gray-200">
                    <Image
                      src={ad.image}
                      alt={ad.title}
                      fill
                      className="object-contain p-2 sm:p-4"
                      priority
                    />
                    <motion.div 
                      className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-sm font-bold text-gray-800 flex items-center">
                        <Tag size={16} className="mr-1" />
                        {ad.discount}
                      </span>
                    </motion.div>
                  </div>
                  <div className="w-full sm:w-1/2 h-[60%] sm:h-full p-4 sm:p-6 flex flex-col justify-center">
                    <motion.h3 
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-800"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {ad.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {ad.description}
                    </motion.p>
                    <motion.button 
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm sm:text-base rounded-full transition-colors duration-300 self-start flex items-center group"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Order Now
                      <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 sm:p-3 hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg z-20"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 sm:p-3 hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg z-20"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {advertisements.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  )
}