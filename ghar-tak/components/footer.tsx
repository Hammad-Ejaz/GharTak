import Link from 'next/link'
import { Facebook, Phone, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">GHAR TAK</h3>
            <p className="text-sm">Pure water delivered to your doorstep.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:underline">About Us</Link></li>
              <li><Link href="#products" className="hover:underline">Products</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61568314534403&mibextid=ZbWKwL" className="hover:text-blue-300 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
  <Facebook />
</a>
<a href="https://whatsapp.com/channel/0029VavBT4S8PgsKHYZaLN0C" className="hover:text-blue-300 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
  <Phone />
</a>
<a href="https://www.instagram.com/ghartak_official/profilecard/?igsh=MTUwa2VyZ2t2cDV5MQ==" className="hover:text-blue-300 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
  <Instagram />
</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 GHAR TAK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

