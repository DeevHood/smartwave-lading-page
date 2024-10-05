"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Bag } from "iconsax-react"
import Image from "next/image"
import FirstCompareHeadphones from "@/public/first-compare-headphones.png"
import SecondCompareHeadphones from "@/public/second-compare-headphones.png"
import ThirdCompareHeadphones from "@/public/third-compare-headphones.png"


const headphones = [
  {
    id: 1,
    image: FirstCompareHeadphones,
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  },
  {
    id: 2,
    image: SecondCompareHeadphones,
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  },
  {
    id: 3,
    image: ThirdCompareHeadphones,
    title: "Smart Functionality And Power Supply",
    description: "Smart Enhanced Connectivity With Voice Devices"
  }
]

export default function HeadphoneSwipper() {
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
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      {cards.map((card, index) => (
        <div key={card.id} className={`relative w-full max-w-xs ${index === 1 ? '' : 'aspect-[5/6] opacity-40'}`}>
          <div 
            className={`absolute -top-[30%] w-full`}
          >
            <Image
              src={card.image} 
              alt={`Headphone ${card.id}`}
              width={950}
              height={950}
              className="size-full object-contain"
            />
          </div>
          <Card 
            className={`w-full cursor-pointer rounded-2xl border-none bg-[#FEBFBF] transition-all duration-300 ease-in-out hover:shadow-lg
              ${index === 1 ? 'aspect-[2/3] bg-opacity-20' : 'aspect-[5/6]'} pt-[30%]`}
            onClick={() => swapCard(index)}
          >
            <CardContent className="mt-[20%] flex h-full flex-col items-center justify-between p-0">
              <div className="text-center">
                <h3 className="mb-2 text-xs font-bold sm:text-base">{card.title}</h3>
                <p className="text-xs text-gray-600">{card.description}</p>
              </div>
              <div className="w-full flex justify-end">
                <div className="bg-white rounded-tl-lg">
                  <div className="rounded-md bg-[#FF8567] p-1 mb-2 mr-2 ml-3 mt-2">
                    <Bag
                      size="16"
                      color="white"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}