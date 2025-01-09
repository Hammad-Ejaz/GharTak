'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Statistic {
  label: string
  value: number
  suffix: string
  icon: string
}

const statistics: Statistic[] = [
  { label: 'Customers Satisfied', value: 5000, suffix: '+', icon: '/customer-experience.png' },
  { label: 'Bottles Delivered', value: 100000, suffix: '+', icon: '/gallon.png' },
  { label: 'Timely Delivery Rate', value: 99, suffix: '%', icon: 'fast-delivery.png' },
]

export function StatisticsStrip() {
  const [counts, setCounts] = useState(statistics.map(() => 0))

  useEffect(() => {
    const intervals = statistics.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts]
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(
              newCounts[index] + Math.ceil(stat.value / 100),
              stat.value
            )
          }
          return newCounts
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center">
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center px-4 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
<div className="text-5xl md:text-6xl font-bold mb-2 flex items-center justify-center">
  {/* Display the icon */}
  <span className="mr-2">
    <img src={stat.icon} alt="Stat Icon" className="w-12 h-12" />
  </span>
  
  {/* Animate the count */}
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
  >
    {counts[index].toLocaleString()}{stat.suffix}
  </motion.span>
</div>
              <div className="text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-blue-500 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 opacity-30"></div>
    </div>
  )
}

