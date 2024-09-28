"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash } from "iconsax-react"
import Image from "next/image"
import FirstCompareHeadphones from "@/public/first-compare-headphones.png"
import SecondCompareHeadphones from "@/public/second-compare-headphones.png"
import ThirdCompareHeadphones from "@/public/third-compare-headphones.png"

interface HeadphoneCard {
  id: number
  image: string
  title: string
  description: string
}

const headphones: HeadphoneCard[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=100&width=100",
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  },
  {
    id: 2,
    image: "/placeholder.svg?height=120&width=120",
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  },
  {
    id: 3,
    image: "/placeholder.svg?height=100&width=100",
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  }
]

export default function HeadphoneComparison() {
  const [cards, setCards] = useState(headphones)

  const swapCard = (index: number) => {
    if (index === 1) return // Don't swap if clicking the middle card
    const newCards = [...cards]
    const temp = newCards[1]
    newCards[1] = newCards[index]
    newCards[index] = temp
    setCards(newCards)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
      {cards.map((card, index) => (
        <div key={card.id} className="relative">
          <div 
            className={`absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2${index === 1 ? '-top-16 size-32' : '-top-14 size-28'}`}
          >
            <Image
              width={45}
              height={45}
              src={card.image} 
              alt={`Headphone ${card.id}`} 
              className="size-full object-contain"
            />
          </div>
          <Card 
            className={`w-64 ${index === 1 ? 'md:h-80 md:w-72' : 'md:h-72 md:w-64'} 
              cursor-pointer bg-pink-100 pt-16 transition-all duration-300 ease-in-out
              hover:shadow-lg`}
            onClick={() => swapCard(index)}
          >
            <CardContent className="flex h-full flex-col items-center justify-between p-4">
              <div className="mt-4 text-center">
                <h3 className="mb-2 font-bold">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <Button variant="ghost" size="icon" className="mt-4">
                <Trash className="size-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}