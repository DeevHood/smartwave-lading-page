"use client"

import { useRef, useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import clientImagePlaceHolder from "@/public/next.svg"

interface Testimonial {
  id: number
  content: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The sound quality is extraordinary. Every note, every beat, and every nuance comes through with stunning clarity and depth. The active noise cancellation is top-notch, effortlessly drowning out background noise.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder,
    }
  },
  {
    id: 2,
    content: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido pero también el optimiza te permite escuchar lo que se escucha en tu entorno.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder,
    }
  },
  {
    id: 3,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 4,
    content: "The sound quality is extraordinary. Every note, every beat, and every nuance comes through with stunning clarity and depth. The active noise cancellation is top-notch, effortlessly drowning out background noise.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 5,
    content: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido pero también el optimiza te permite escuchar lo que se escucha en tu entorno.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 6,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 7,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 8,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 9,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 10,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 11,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 12,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
  {
    id: 13,
    content: "Very nice headphones, deep rich sound quality and clear without distortion. Easy blue tooth connection with my iPhone. A little expensive, but I am still happy with the purchase as I bought them on sale. Very comfortable when wearing, excellent build quality.",
    author: {
      name: "Jhon Doe",
      title: "Product Designer",
      avatar: clientImagePlaceHolder
    }
  },
]

export default function TestimonialScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        scrollElement.scrollLeft += e.deltaY
      }
      scrollElement.addEventListener('wheel', handleWheel, { passive: false })
      return () => scrollElement.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden  bg-opacity-20 p-8">
      <div 
        ref={scrollRef}
        className="scrollbar-hide flex min-h-fit cursor-grab flex-col overflow-x-auto overflow-y-hidden active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
      <div className="mb-4 flex gap-4">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} isEvenIndex={index % 2 === 0} />
        ))}
      </div>
      <div className="flex gap-4">
        {testimonials.slice(6, 13).map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} isEvenIndex={index % 2 === 0} />
        ))}
      </div>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, isEvenIndex }: { testimonial: Testimonial; isEvenIndex: boolean }) {
  const backgroundColor = isEvenIndex
    ? '#D9D9D9'
    : 'linear-gradient(to left, #FFA089, #F8D9D1, #FFEBEB)';
  return (
    <Card className={`mx-2 w-[300px] shrink-0 border-none`} style={{ background: backgroundColor }}>
      <CardContent className="relative h-full p-6">
        <h4 className='mb-3 text-xs font-medium text-gray-500'>Testimonial</h4>
        <p className="mb-12 text-xs font-medium text-gray-700">{testimonial.content}</p>
        <div className="absolute bottom-0 right-0 flex items-center rounded-tl-3xl bg-white p-1">
          <Avatar className="size-8">
            <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
            <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="mx-2">
            <p className="text-sm font-semibold">{testimonial.author.name}</p>
            <p className="text-xs text-gray-500">{testimonial.author.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}