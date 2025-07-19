"use client"

import { useEffect, useState } from "react"
import { MapPin, Route, Bot } from "lucide-react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-400/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-16 h-16 bg-green-500/10 dark:bg-green-400/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Route className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-slow">
        <div className="w-14 h-14 bg-purple-500/10 dark:bg-purple-400/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Bot className="w-7 h-7 text-purple-600 dark:text-purple-400" />
        </div>
      </div>
    </div>
  )
}
