"use client"

import { useEffect, useState } from "react"

export function AnimatedJeepney() {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 100)
    }, 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute top-1/2 left-0 w-full h-24 overflow-hidden pointer-events-none">
      <div
        className="absolute transition-all duration-50 ease-linear"
        style={{
          left: `${position}%`,
          transform: "translateY(-50%)",
        }}
      >
        <div className="relative">
          {/* Authentic Philippine Jeepney */}
          <div className="relative w-28 h-12">
            {/* Main body - elongated like real jeepney */}
            <div className="absolute bottom-2 left-3 w-22 h-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-lg shadow-lg border-2 border-gray-800">
              {/* Side decorative stripes */}
              <div className="absolute top-1 left-1 w-20 h-1 bg-blue-500 rounded-full"></div>
              <div className="absolute top-2.5 left-1 w-20 h-1 bg-green-500 rounded-full"></div>
              <div className="absolute top-4 left-1 w-20 h-1 bg-red-600 rounded-full"></div>

              {/* Windows - multiple like passenger seating */}
              <div className="absolute top-0.5 left-2 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
              <div className="absolute top-0.5 left-5 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
              <div className="absolute top-0.5 left-8 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
              <div className="absolute top-0.5 left-11 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
              <div className="absolute top-0.5 left-14 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
              <div className="absolute top-0.5 left-17 w-2.5 h-2 bg-blue-200 rounded-sm border border-gray-600"></div>
            </div>

            {/* Front cab/driver section */}
            <div className="absolute bottom-2 left-0 w-6 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-l-lg border-2 border-gray-800">
              {/* Driver windshield */}
              <div className="absolute top-0.5 left-0.5 w-4 h-2.5 bg-blue-200 rounded-sm border border-gray-600"></div>
              {/* Side window */}
              <div className="absolute top-4 left-0.5 w-4 h-1.5 bg-blue-200 rounded-sm border border-gray-600"></div>
            </div>

            {/* Chrome front bumper and grille */}
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-sm border border-gray-600">
              <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-gray-200 rounded-sm"></div>
            </div>

            {/* Roof with luggage rack */}
            <div className="absolute bottom-10 left-1 w-24 h-2 bg-gray-600 rounded-lg shadow-md">
              {/* Luggage rack bars */}
              <div className="absolute top-0.5 left-2 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute top-0.5 left-4 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute top-0.5 left-6 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute top-0.5 left-8 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute top-0.5 left-10 w-0.5 h-1 bg-gray-400"></div>
            </div>

            {/* "PHILIPPINES" signage */}
            <div className="absolute bottom-8 left-8 w-12 h-2 bg-green-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">PHILIPPINES</span>
            </div>

            {/* "FOR HIRE" text */}
            <div className="absolute bottom-5 left-12 w-8 h-1.5 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">FOR HIRE</span>
            </div>

            {/* Wheels - proper jeepney wheel style */}
            <div className="absolute bottom-0 left-2 w-4 h-4 bg-black rounded-full border-2 border-gray-600">
              <div className="absolute inset-1 bg-gray-400 rounded-full border border-gray-600">
                <div className="absolute inset-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-2 w-4 h-4 bg-black rounded-full border-2 border-gray-600">
              <div className="absolute inset-1 bg-gray-400 rounded-full border border-gray-600">
                <div className="absolute inset-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Back entrance/door */}
            <div className="absolute bottom-2 right-0 w-2 h-8 bg-yellow-600 rounded-r-lg border-2 border-gray-800">
              <div className="absolute top-2 left-0.5 w-1 h-4 bg-gray-300 rounded-sm"></div>
            </div>

            {/* Exhaust smoke */}
            <div className="absolute bottom-1 right-0 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-ping"></div>
            <div
              className="absolute bottom-0.5 right-2 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-30 animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-0 right-4 w-1 h-1 bg-gray-200 rounded-full opacity-20 animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
