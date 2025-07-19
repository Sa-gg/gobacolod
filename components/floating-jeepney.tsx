"use client"

import { useEffect, useState } from "react"

export function FloatingJeepney() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Jeepney 1 - Classic Red/Yellow */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="relative w-20 h-8 opacity-15 dark:opacity-8">
          {/* Main body */}
          <div className="absolute bottom-1 left-2 w-16 h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg border border-gray-600">
            <div className="absolute top-0.5 left-1 w-14 h-0.5 bg-blue-500 rounded-full"></div>
            <div className="absolute top-1.5 left-1 w-14 h-0.5 bg-green-500 rounded-full"></div>
            <div className="absolute top-2.5 left-1 w-14 h-0.5 bg-red-600 rounded-full"></div>

            {/* Windows */}
            <div className="absolute top-0.5 left-1 w-1.5 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-3 w-1.5 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-5 w-1.5 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-7 w-1.5 h-1 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Front cab */}
          <div className="absolute bottom-1 left-0 w-4 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-l-lg border border-gray-600">
            <div className="absolute top-0.5 left-0.5 w-2.5 h-1.5 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Roof */}
          <div className="absolute bottom-7 left-0.5 w-17 h-1 bg-gray-600 rounded-lg"></div>

          {/* Wheels */}
          <div className="absolute bottom-0 left-1 w-2.5 h-2.5 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-1 w-2.5 h-2.5 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating Jeepney 2 - Green/Blue Theme */}
      <div className="absolute bottom-40 left-16 animate-float-delayed">
        <div className="relative w-18 h-7 opacity-12 dark:opacity-6">
          {/* Main body */}
          <div className="absolute bottom-1 left-2 w-14 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg border border-gray-600">
            <div className="absolute top-0.5 left-1 w-12 h-0.5 bg-yellow-500 rounded-full"></div>
            <div className="absolute top-1.5 left-1 w-12 h-0.5 bg-red-500 rounded-full"></div>

            {/* Windows */}
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-2.5 w-1 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-4 w-1 h-1 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-0.5 left-5.5 w-1 h-1 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Front cab */}
          <div className="absolute bottom-1 left-0 w-3 h-5 bg-gradient-to-r from-blue-500 to-green-500 rounded-l-lg border border-gray-600">
            <div className="absolute top-0.5 left-0.5 w-2 h-1 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Roof */}
          <div className="absolute bottom-6 left-0.5 w-15 h-1 bg-gray-600 rounded-lg"></div>

          {/* Wheels */}
          <div className="absolute bottom-0 left-1 w-2 h-2 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-1 w-2 h-2 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating Jeepney 3 - Purple/Orange Theme */}
      <div className="absolute top-60 left-1/4 animate-float-slow">
        <div className="relative w-22 h-9 opacity-10 dark:opacity-5">
          {/* Main body */}
          <div className="absolute bottom-1 left-2 w-18 h-7 bg-gradient-to-r from-purple-400 to-orange-500 rounded-lg border border-gray-600">
            <div className="absolute top-1 left-1 w-16 h-0.5 bg-blue-500 rounded-full"></div>
            <div className="absolute top-2 left-1 w-16 h-0.5 bg-green-500 rounded-full"></div>
            <div className="absolute top-3 left-1 w-16 h-0.5 bg-red-500 rounded-full"></div>

            {/* Windows */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-1 left-3 w-1.5 h-1.5 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-1 left-5 w-1.5 h-1.5 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-1 left-7 w-1.5 h-1.5 bg-blue-200 rounded-sm"></div>
            <div className="absolute top-1 left-9 w-1.5 h-1.5 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Front cab */}
          <div className="absolute bottom-1 left-0 w-4 h-7 bg-gradient-to-r from-orange-500 to-purple-500 rounded-l-lg border border-gray-600">
            <div className="absolute top-1 left-0.5 w-3 h-2 bg-blue-200 rounded-sm"></div>
          </div>

          {/* Roof */}
          <div className="absolute bottom-8 left-0.5 w-19 h-1.5 bg-gray-600 rounded-lg"></div>

          {/* Wheels */}
          <div className="absolute bottom-0 left-1 w-3 h-3 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-black rounded-full">
            <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
