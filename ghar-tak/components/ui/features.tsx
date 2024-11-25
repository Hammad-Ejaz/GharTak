import { Droplet, Truck, Clock, Shield } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Features() {
  return (
    <section  className="py-20 md:py-32 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-blue-600">Why Choose Ghar Tak?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Droplet className="h-10 w-10 text-blue-600" />}
            title="Pure Water"
            description="We ensure the highest quality of purified water for your health and well-being."
          />
          <FeatureCard
            icon={<Truck className="h-10 w-10 text-blue-600" />}
            title="Fast Delivery"
            description="Our efficient delivery system ensures you get your water on time, every time."
          />
          <FeatureCard
            icon={<Clock className="h-10 w-10 text-blue-600" />}
            title="24/7 Service"
            description="We're available round the clock to cater to your hydration needs."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 text-blue-600" />}
            title="Safe & Hygienic"
            description="Our bottling process adheres to strict safety and hygiene standards."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      {icon}
      <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

