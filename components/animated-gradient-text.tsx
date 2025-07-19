"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className,
      )}
      style={
        {
          "--bg-size": "400%",
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  )
}
