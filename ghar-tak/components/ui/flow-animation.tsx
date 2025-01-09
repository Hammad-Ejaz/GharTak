'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Droplet, Home, Factory, FlaskRound, Truck } from 'lucide-react'

const FlowAnimation = () => {
  const lineAnimation = useAnimation()
  const bottleAnimation = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [path, setPath] = useState("")
  const [nodePositions, setNodePositions] = useState<[number, number][]>([])

  const nodes = [
    { id: 'source', icon: Droplet, label: 'Natural Source' },
    { id: 'plant', icon: Factory, label: 'Processing Plant' },
    { id: 'quality', icon: FlaskRound, label: 'Quality Testing' },
    { id: 'delivery', icon: Truck, label: 'Delivery Network' },
    { id: 'home', icon: Home, label: 'Customer' },
  ]

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        const height = containerRef.current.offsetHeight

        const amplitude = height * 0.25
        const frequency = Math.PI / (width * 0.8)

        // Calculate node positions
        const positions = nodes.map((_, index) => {
          const x = width * (0.1 + index * 0.2)
          const y = height / 2 + amplitude * Math.sin(frequency * x * (index % 2 ? 1 : -1))
          return [x, y] as [number, number]
        })

        setNodePositions(positions)

        // Create a sine wave SVG path
        let newPath = `M${positions[0][0]},${positions[0][1]}`
        const steps = 100
        for (let i = 1; i <= steps; i++) {
          const x = width * (0.1 + (i / steps) * 0.8)
          const y = height / 2 + amplitude * Math.sin(frequency * x)
          newPath += ` L${x},${y}`
        }

        setPath(newPath)
      }
    }

    updatePath()
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [nodes])

  useEffect(() => {
    const animateFlow = async () => {
      await lineAnimation.start({ pathLength: 1, transition: { duration: 5, ease: "easeInOut" } })
      await bottleAnimation.start({
        offsetDistance: "100%",
        transition: { duration: 5, ease: "easeInOut" }
      })
      await new Promise(resolve => setTimeout(resolve, 1000)) // Pause at the end
      lineAnimation.set({ pathLength: 0 })
      bottleAnimation.set({ offsetDistance: "0%" })
      animateFlow()
    }
    if (path) {
      animateFlow()
    }
  }, [lineAnimation, bottleAnimation, path])

  return (
    <div className="w-full py-12 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px]">
          {/* Nodes */}
          <div className="absolute inset-0">
            {nodes.map((node, index) => {
              const [x, y] = nodePositions[index] || [0, 0]
              return (
                <motion.div
                  key={node.id}
                  className="absolute flex flex-col items-center"
                  style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-2 shadow-lg relative z-10">
                    <node.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-blue-800 text-xs font-medium text-center whitespace-nowrap max-w-[80px]">{node.label}</span>
                </motion.div>
              )
            })}
          </div>

          {/* Animated path */}
          {path && (
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              <motion.path
                d={path}
                stroke="#3B82F6"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={lineAnimation}
              />
            </svg>
          )}

          {/* Animated water bottle */}
          {path && (
            <motion.div
              className="absolute top-0 left-0"
              style={{ 
                offsetPath: `path('${path}')`, 
                offsetRotate: "auto",
                zIndex: 20
              }}
              initial={{ offsetDistance: "0%" }}
              animate={bottleAnimation}
            >
              <Droplet className="w-8 h-8 text-blue-500 filter drop-shadow-md" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlowAnimation

