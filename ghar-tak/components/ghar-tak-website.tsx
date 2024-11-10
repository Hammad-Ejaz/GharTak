'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Droplet, Mail, MapPin, Phone, MessageCircle } from "lucide-react"

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
      <header className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
             GHAR TAK
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline transition-colors duration-300 hover:text-blue-200">About</a></li>
              <li><a href="#products" className="hover:underline transition-colors duration-300 hover:text-blue-200">Products</a></li>
              <li><a href="#contact" className="hover:underline transition-colors duration-300 hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-500 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Pure Water, Delivered to Your Doorstep</h2>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-300">Experience the freshness of filtered and mineral water with GHAR TAK</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" onClick={openWhatsApp} className="bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up animation-delay-600">
                Order Now
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-repeat rotate-45 scale-150 animate-water-flow"></div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About Us</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
              GHAR TAK is dedicated to delivering the purest, high-quality filtered and mineral water directly to homes and businesses. Our state-of-the-art purification system centers around a top-tier RO (Reverse Osmosis) plant, a technology known for its unparalleled efficiency in removing impurities and contaminants. By filtering out dissolved solids, harmful chemicals, and unwanted particles, our RO plant produces water that meets the highest standards of purity and taste.
Our water is carefully balanced to retain essential minerals, offering not only refreshing but also health-enhancing hydration. With GHAR TAK, customers can trust that every drop of water is clean, safe, and satisfying. Our mission is to support health and wellness through our reliable, efficient delivery service, ensuring that pure, great-tasting water is always within reach at your doorstep
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Filtered Water', 'Mineral Water', 'Alkaline Water'].map((product, index) => (
                <Card key={product} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-blue-600">{product}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Droplet className={`w-16 h-16 mb-4 mx-auto text-blue-500 animate-bounce animation-delay-${index * 200}`} />
                    <p className="text-gray-700">
                      {product === 'Filtered Water' && 'Pure, clean water filtered through our advanced purification system, ensuring the highest quality for your daily hydration needs.'}
                      {product === 'Mineral Water' && 'Natural mineral water sourced from pristine springs, rich in essential minerals to support your health and well-being.'}
                      {product === 'Alkaline Water' && 'Balanced pH water to help neutralize acid in your body, promoting better hydration and overall wellness.'}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Input type="email" placeholder="Your Email" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Input placeholder="Subject" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Textarea placeholder="Your Message" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Send Message</Button>
                </form>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: 'Jalal Park, Harbansepura Road Lahore, Pakistan' },
                    { icon: Phone, text: '+92 329 218 218 0 ' },
                    { icon: Mail, text: 'info@ghartak.com' },
                  ].map(({ icon: Icon, text }, index) => (
                    <div key={text} className={`flex items-center text-gray-700 animate-fade-in-right animation-delay-${index * 200}`}>
                      <Icon className="w-6 h-6 mr-2 text-blue-600" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GHAR TAK. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">Privacy Policy</a>
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">Terms of Service</a>
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">FAQ</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 text-lg px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:shadow-xl">
          <MessageCircle className="w-6 h-6 mr-2" />
          Order Now
        </Button>
      </div>
    </div>
  )
}