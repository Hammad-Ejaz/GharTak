'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Features } from "@/components/ui/features"
import { Catalog } from "@/components/ui/catalog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Droplet, Mail, MapPin, Phone, Waves, MessageCircle, Menu, X, ShoppingCart , Users, Leaf, DollarSign, Zap } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'


// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export function GharTakWebsite() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      const sections = ['hero', 'about', 'products', 'catalog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = '+923292182180' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const fadeIsUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>   
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 transition-all duration-300 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left-aligned Logo */}
          <h1 className="text-2xl font-bold flex items-center text-blue-600">
            <Image
              src="/logo.png"
              alt="GHAR TAK Delivery Service"
              width={150} 
              height={150} 
              className="object-contain rounded-lg"
            />
          </h1>

          {/* Right-aligned Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['about', 'products', 'catalog', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden text-blue-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <ul className="flex flex-col items-center space-y-4">
              {['about', 'products', 'catalog', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      activeSection === section ? 'text-blue-600' : 'text-gray-800 hover:text-blue-500'
                    }`}
                    onClick={toggleMenu}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow pt-16">
        <section id="hero" className="bg-blue-600 text-white py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Pure Water, Delivered to Your Doorstep</h2>
            <p className="text-xl mb-10 animate-fade-in-up animation-delay-300 max-w-2xl mx-auto">Experience the freshness of filtered and mineral water with GHAR TAK, your trusted partner in hydration and health.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIsUp}
              transition={{ delay: 1 }}>
                <Button size="lg" onClick={openWhatsApp} className="animate-bounce bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300 animate-fade-in-up animation-delay-600">
                  <ShoppingCart className="w-5 h-5 mr-2"/>
                  Order Now
                </Button>
            </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%, 0 100%)' }}></div>
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 animate-water-flow"></div>
          </div>
        </section>
        
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between max-w-6xl mx-auto">
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex-shrink-0 md:mr-8">
                <Image
                  src="/aboutus.png"
                  alt="GHAR TAK Delivery Service"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Welcome to GHAR TAK, your trusted partner in delivering top-quality water solutions to homes and businesses. At GHAR TAK, we believe water is more than just a necessity—it’s a source of life, health, and vitality. With a steadfast commitment to excellence, we strive to provide not only clean and refreshing water but also a seamless and dependable delivery service that ensures your hydration needs are always met.
                  <br /><br />
                  Water is at the heart of what we do, and we are passionate about making pure, safe, and great-tasting water accessible to everyone. Our range of offerings includes high-quality filtered and mineral water, as well as a variety of water-related accessories such as dispensers, taps, and more. Whatever your water needs, GHAR TAK is here to deliver—literally and figuratively.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="py-20 md:py-32 bg-blue-50 md:mx-[7.5rem]">
            <h2 className="text-3xl md:text-4xl font-bold mb-8  text-center text-blue-600">Our Mission</h2>
            <Card className="bg-gradient-to-br items-center from-blue-500 to-blue-600 text-white p-8">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center">
                  <Droplet className="w-24 h-24 mb-4 md:mb-0 md:mr-8" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Promoting Health and Hydration</h3>
                    <p className="text-lg">
                      At GHAR TAK, our mission is simple yet profound: to promote health and hydration by providing pure water solutions with unmatched convenience and quality. We envision a world where every individual has access to safe and great-tasting water, fostering better health and an improved quality of life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
        </section>
        <Features/>
        <section id="products" className="py-20 md:py-32 bg-blue-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-600">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Customer-Centric Approach", description: "We place our customers at the center of everything we do, tailoring our services to meet your unique needs." },
                { icon: Leaf, title: "Sustainability Focus", description: "We actively promote sustainable practices, including recycling and reusing water bottles to reduce environmental impact." },
                { icon: DollarSign, title: "Affordable Pricing", description: "High quality doesn't have to come at a high cost. We offer competitive pricing without compromising on quality or service." },
                { icon: Zap, title: "Innovative Technology", description: "We leverage the latest technologies to enhance our purification, delivery, and customer service processes." }
              ].map((item, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="products" className="py-20 md:py-32 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">Our Products</h2>
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
        <Catalog/>
        <section id="contact" className="py-20 md:py-32 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Input type="email" placeholder="Your Email" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Input placeholder="Subject" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Textarea placeholder="Your Message" className="bg-white transition-all duration-300 focus:ring-2 focus:ring-blue-400" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Send Message</Button>
                </form>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Our Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: 'Jalal Park, Harbansepura Road Lahore, Pakistan' },
                    { icon: Phone, text: '+92 329 218 218 0'},
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