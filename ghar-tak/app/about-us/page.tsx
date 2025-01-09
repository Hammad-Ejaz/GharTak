import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Users, Leaf, DollarSign, Zap } from 'lucide-react'
import { Features } from '@/components/ui/features'

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
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
                Welcome to GHAR TAK, your trusted partner in delivering top-quality water solutions to homes and businesses. At GHAR TAK, we believe water is more than just a necessity&mdash;it's a source of life, health, and vitality. With a steadfast commitment to excellence, we strive to provide not only clean and refreshing water but also a seamless and dependable delivery service that ensures your hydration needs are always met.
                <br /><br />
                Water is at the heart of what we do, and we are passionate about making pure, safe, and great-tasting water accessible to everyone. Our range of offerings includes high-quality filtered and mineral water, as well as a variety of water-related accessories such as dispensers, taps, and more. Whatever your water needs, GHAR TAK is here to deliver&mdash;literally and figuratively.
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{product}</h3>
                  <Droplet className={`w-16 h-16 mb-4 mx-auto text-blue-500 animate-bounce`} style={{animationDelay: `${index * 200}ms`}} />
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
    </main>
  )
}
