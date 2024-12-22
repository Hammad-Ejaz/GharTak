'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplet, Package, Truck, Zap, ShieldCheck, Recycle, MessageCircle, Menu, X } from 'lucide-react'

const products = [
  {
    name: "19L Mineral Water Bottle",
    description: "Pure, refreshing mineral water in a convenient 19L bottle for home or office use.",
    price: "₹70",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "1L Packaged Drinking Water",
    description: "On-the-go hydration with our 1L packaged drinking water bottles.",
    price: "₹20",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Water Dispenser",
    description: "Easy-to-use water dispenser compatible with our 19L bottles.",
    price: "₹2000",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Water Purifier",
    description: "Advanced water purification system for your home or office.",
    price: "₹15000",
    image: "/placeholder.svg?height=200&width=200"
  }
]

const services = [
  {
    name: "Regular Water Delivery",
    description: "Scheduled delivery of 19L water bottles to your doorstep.",
    icon: Truck
  },
  {
    name: "Water Quality Testing",
    description: "Professional water quality testing for your peace of mind.",
    icon: ShieldCheck
  },
  {
    name: "Dispenser Maintenance",
    description: "Regular maintenance and cleaning of water dispensers.",
    icon: Zap
  },
  {
    name: "Bottle Recycling",
    description: "Eco-friendly recycling program for used water bottles.",
    icon: Recycle
  }
]

export function BlockPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const openWhatsApp = () => {
    const phoneNumber = '+15551234567' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center text-blue-600">
            <Image
              src="/logo.png"
              alt="GHAR TAK Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            GHAR TAK
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300">Home</Link></li>
              <li><Link href="/#about" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300">About</Link></li>
              <li><Link href="/#customers" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300">Customers</Link></li>
              <li><Link href="/#contact" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300">Contact</Link></li>
              <li><Link href="/blog" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300">Blog</Link></li>
            </ul>
          </nav>
          <button className="md:hidden text-blue-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><Link href="/" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="/#about" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={toggleMenu}>About</Link></li>
              <li><Link href="/#customers" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={toggleMenu}>Customers</Link></li>
              <li><Link href="/#contact" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={toggleMenu}>Contact</Link></li>
              <li><Link href="/blog" className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300" onClick={toggleMenu}>Blog</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Our Products and Services</h1>
        
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.name} className="flex flex-col">
                  <CardHeader>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="mx-auto mb-4"
                    />
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={openWhatsApp}>
                      <Package className="mr-2 h-4 w-4" /> Order Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.name}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" onClick={openWhatsApp}>
                      <MessageCircle className="mr-2 h-4 w-4" /> Enquire Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 GHAR TAK. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">Privacy Policy</a>
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">Terms of Service</a>
            <a href="#" className="hover:underline transition-colors duration-300 hover:text-blue-200">FAQ</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 text-lg px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
          <MessageCircle className="w-6 h-6 mr-2" />
          Order Now
        </Button>
      </div>
    </div>
  )
}