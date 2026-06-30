"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "motion/react"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number
  attractRadius?: number
  children?: React.ReactNode
}

interface Particle {
  id: number
  x: number
  y: number
}

function MagnetizeButton({
  className,
  particleCount = 12,
  // Extracted so it is not spread onto the DOM; reserved for future tuning.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attractRadius = 50,
  children,
  ...props
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesControl = useAnimation()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    })
  }, [particlesControl])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await particlesControl.start((i) => ({
      x: particles[i]?.x ?? 0,
      y: particles[i]?.y ?? 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }))
  }, [particlesControl, particles])

  return (
    <Button
      className={cn(
        "relative min-w-44 touch-none overflow-visible",
        "bg-yellow text-ink",
        "hover:bg-yellow-deep hover:text-paper",
        "border-0",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x ?? 0, y: particles[index]?.y ?? 0 }}
          animate={particlesControl}
          className={cn(
            "absolute h-1.5 w-1.5 rounded-full bg-yellow-deep",
            "pointer-events-none transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      <span className="relative flex w-full items-center justify-center gap-2">
        {children ?? (isAttracting ? "Attracting..." : "Book a Free Session")}
      </span>
    </Button>
  )
}

export { MagnetizeButton }
