'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from 'lucide-react'

const services = [
  {
    name: "Bottle Refill",
    description: "Refill your water bottles with fresh, high-quality mineral water at our facility or during our delivery rounds.",
    image: "/bottle-refil.png"
  },
  {
    name: "Exchange Your Old Bottle",
    description: "Trade in your empty bottles for new, fully sanitized, and refilled ones during delivery.",
    image: "/exchange-bottle.png"
  },
  {
    name: "Weekly Delivery",
    description: "Enjoy hassle-free, scheduled weekly delivery of fresh mineral water right to your doorstep.",
    image: "/weekly-delivery.png"
  },
  {
    name: "Express Delivery",
    description: "Need water urgently? Our express delivery service ensures you never run out of clean drinking water.",
    image: "/express-delivery.png"
  },
  {
    name: "Membership Program",
    description: "Join our membership program for exclusive discounts, priority service, and added convenience.",
    image: "/membership.png"
  },
  {
    name: "Bottle Cleaning",
    description: "Ensure hygiene with our professional bottle cleaning service for a spotless and safe drinking experience.",
    image: "/bottle-cleaning.png"
  },
  {
    name: "Water Tank Cleaning",
    description: "Maintain clean and safe water storage with our thorough water tank cleaning service.",
    image: "/water-tank-cleaning.png"
  }
];

export function Services() {
  const openWhatsApp = () => {
    const phoneNumber = '+923292182180' // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="relative overflow-hidden mt-10 sm:mt-20 mx-4 sm:mx-8 bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">
        Our Services
      </h2>
      <Card className="shadow-lg bg-gradient-to-br from-blue-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.name} className="flex flex-col">
                <CardHeader>
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <CardTitle className="text-xl font-semibold text-blue-600">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
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
      </Card>
    </div>
  )
}