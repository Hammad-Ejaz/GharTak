'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
  <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link href="/" className="text-2xl font-bold text-blue-600">
    <Image src="/logo.png" alt="GHAR TAK Logo" width={150} height={150} />      
    </Link>
    <nav className="hidden md:flex space-x-4">
      <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
      <Link href="/about-us" className="text-gray-600 hover:text-blue-600">About Us</Link>
      <Link href="#services" className="text-gray-600 hover:text-blue-600">Blogs</Link>
      <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">Contact</Link>
    </nav>
    <Button className="hidden md:inline-flex" onClick={() => window.open('https://wa.me/+923292182180', '_blank')}>
      Order Now
    </Button>
    <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
    </button>
  </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white py-2">
        <nav className="flex flex-col space-y-2 px-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600" >Home</Link>
          <Link href="/about-us" className="text-gray-600 hover:text-blue-600" >About Us</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600" >Blogs</Link>
          <Link href="/contact-us" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    )}
  </header>
  )
}