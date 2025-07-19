"use client"

import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export function ModernCard({ children, className = "", gradient = "from-blue-50 to-blue-100" }: ModernCardProps) {
  return (
    <Card
      className={`group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${gradient} dark:from-blue-900/20 dark:to-blue-800/20 hover:scale-105 hover:-translate-y-2 backdrop-blur-sm ${className}`}
    >
      <CardContent className="p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="relative z-10">{children}</div>
      </CardContent>
    </Card>
  )
}
