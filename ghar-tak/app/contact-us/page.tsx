'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', contact: '', address: '', message: '' })
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600 overflow-hidden">
        <Image
          src="/contact-hero.jpg"
          alt="Contact Us Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">We're Here to Help</h2>
            <p className="text-gray-600 mb-6">
              At GHAR TAK, we&apos;re committed to providing you with the best water delivery service. 
              Whether you have questions, feedback, or need assistance, our team is ready to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <span>+92 329 218 218 0</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <span>contactus@ghartak.store</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <span>Jalal Park, Harbansepura Road Lahore, Pakistan</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><Twitter /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><Instagram /></a>
                <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin /></a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <Input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
