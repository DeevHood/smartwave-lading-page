"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star1 as Star } from "iconsax-react"

interface Feature {
  id: number
  title: string
  description: string
}

const features: Feature[] = [
  { id: 1, title: "On-Head Detection", description: "Automatically detects when you put on or take off the headphones." },
  { id: 2, title: "Wireless Freedom", description: "Enjoy your music without the hassle of wires." },
  { id: 3, title: "Noise Isolation", description: "Elevate your productivity with ergonomic design, engineered to support multi-use and minimize noise." },
  { id: 4, title: "Announce Notifications", description: "Hear your notifications without interrupting your music." },
  { id: 5, title: "Always-On Siri", description: "Access Siri hands-free, anytime." },
  { id: 6, title: "Customizable Options", description: "Tailor your headphone settings to your preferences." },
]

export default function FeatureHeadphones() {
  const [openId, setOpenId] = useState<number | null>(3)

  return (
    <Card className="mx-auto w-full max-w-md border-none">
      <CardContent className="p-0">
        <ul 
          className="divide-y divide-gray-200"
        >
          {features.map((feature) => (
            <li
              key={feature.id}
              className={`relative cursor-pointer p-4 transition-colors duration-150 ease-in-out
                ${openId === feature.id ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}`}
              onMouseEnter={() => setOpenId(feature.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-medium ${openId === feature.id ? 'text-orange-500' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <Star className={`size-5 shrink-0 ${openId === feature.id ? 'text-orange-500' : 'text-gray-400'}`} />
              </div>
              <div 
                className={`mt-1 text-sm text-gray-500 transition-opacity duration-150 ease-in-out
                  ${openId === feature.id ? 'opacity-100' : 'h-0 overflow-hidden opacity-0'}`}
              >
                {feature.description}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}