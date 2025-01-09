'use client'

import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ShoppingCart, Droplet } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const splashControls = useAnimation()

  const openWhatsApp = () => {
    const phoneNumber = '+923292182180'
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  const handleClick = async (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    await splashControls.start({
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      x: x,
      y: y,
      transition: { duration: 0.5 }
    })
  }

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 lg:py-32 relative overflow-hidden" onClick={handleClick}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pure Water, Delivered to Your Doorstep
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the freshness of filtered and mineral water with GHAR TAK, your trusted partner in hydration and health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button size="lg" onClick={openWhatsApp} className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/aboutus.png"
            alt="Mobile Pic"
            width={500}
            height={500}
            className="mx-auto lg:ml-auto"
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-200 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <motion.div
        className="absolute top-10 left-10 text-blue-200 opacity-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Droplet size={60} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-blue-200 opacity-20"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Droplet size={40} />
      </motion.div>
      <motion.div
        className="water-splash"
        initial={{ opacity: 0, scale: 0 }}
        animate={splashControls}
      >
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="splash-particle"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>
      <style jsx>{`
        .water-splash {
          position: absolute;
          pointer-events: none;
        }
        .splash-particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
        }
      `}</style>
    </section>
  )
}
