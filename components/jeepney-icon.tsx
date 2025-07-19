import React from "react"

interface JeepneyIconProps {
  className?: string
  size?: number
}

export const JeepneyIcon: React.FC<JeepneyIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main body of jeepney */}
      <rect
        x="3"
        y="8"
        width="18"
        height="8"
        rx="1"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Front windshield */}
      <rect
        x="3"
        y="6"
        width="4"
        height="2"
        rx="0.5"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Side windows */}
      <rect
        x="8"
        y="9"
        width="2"
        height="2"
        rx="0.3"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="11"
        y="9"
        width="2"
        height="2"
        rx="0.3"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="14"
        y="9"
        width="2"
        height="2"
        rx="0.3"
        fill="currentColor"
        opacity="0.5"
      />
      
      {/* Front bumper */}
      <rect
        x="1"
        y="10"
        width="2"
        height="4"
        rx="0.5"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Back entrance */}
      <rect
        x="19"
        y="10"
        width="2"
        height="4"
        rx="0.5"
        fill="currentColor"
        opacity="0.6"
      />
      
      {/* Wheels */}
      <circle
        cx="6"
        cy="17"
        r="2"
        fill="currentColor"
        opacity="0.9"
      />
      <circle
        cx="18"
        cy="17"
        r="2"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Wheel rims */}
      <circle
        cx="6"
        cy="17"
        r="1"
        fill="currentColor"
        opacity="0.5"
      />
      <circle
        cx="18"
        cy="17"
        r="1"
        fill="currentColor"
        opacity="0.5"
      />
      
      {/* Roof/Top detail */}
      <rect
        x="4"
        y="5"
        width="16"
        height="1"
        rx="0.5"
        fill="currentColor"
        opacity="0.6"
      />
      
      {/* Front grille */}
      <rect
        x="2"
        y="11"
        width="1"
        height="2"
        fill="currentColor"
        opacity="0.4"
      />
      
      {/* Decorative stripes (iconic jeepney design) */}
      <rect
        x="3"
        y="12"
        width="18"
        height="0.5"
        fill="currentColor"
        opacity="0.3"
      />
      <rect
        x="3"
        y="14"
        width="18"
        height="0.5"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  )
}
