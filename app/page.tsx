import { Button } from "@/components/ui/button";
import Image from "next/image";
import Girl from "@/public/girl.png"
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AirPodHero from "@/public/air-pods-hero.png"
import { Airpods, ArrowCircleDown, Facebook, Headphone, Instagram, ScanBarcode } from "iconsax-react";
import BlueProduct from "@/public/blue-product.png"
import GrayProduct from "@/public/gray-product.png"
import GreenProduct from "@/public/green-product.png"
import OrangeProduct from "@/public/orange-product.png"
import AirpodWhiteOrangeBg from "@/public/airpod-orange-bg.png"
import HalfAirpodGrayBg from "@/public/half-earpod-gray-bg.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CurvedBorder, DotsFlash, DotsMusic, OrangeSmilingFace } from "@/components/icons";
import { StackedCard } from "@/components/stacked-cards";
import Sidebar from "@/components/ui/side-bar";

const cards = [
  { name: "Jane Doe", message: "Using smartwave took my music playlist to another level", avatarSrc: "/placeholder.svg?height=40&width=40" },
  { name: "Jane Doe", message: "Just discovered an amazing new artist!", avatarSrc: "/placeholder.svg?height=40&width=40" },
  { name: "John Smith", message: "This app's recommendations are spot on!", avatarSrc: "/placeholder.svg?height=40&width=40" },
  { name: "John Smith", message: "This app's recommendations are spot on!", avatarSrc: "/placeholder.svg?height=40&width=40" },
]

export default function LandingPage() {
  return (
    <main>
      {/* Hero Content */}
      <div className="mb-40 flex">
        <Sidebar />
        <div className="flex-2 align-center flex flex-row justify-between gap-6 bg-white p-10">
          {/* Left Section */}
          <section className="flex h-full w-5/12 flex-col justify-between space-y-6">
            <div className="flex justify-center gap-3">
              <Image src={OrangeProduct} width={120} height={50} alt="an orange product in smartwave"/>
              <Image src={BlueProduct} width={80} height={50} alt="a blue product in smartwave" />
              <Image src={GreenProduct} width={120} height={50}  alt="a green product in smartwave" />
              <Image src={GrayProduct} width={80} height={50} alt="a gray product in smartwave" />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold">
                With Smartwave Pro
                Elevate Your <span className="text-[#FF8366]">Music</span> 
                <span className="inline-flex">
                  <svg width="53" height="16" viewBox="0 0 53 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.9226C23 25.9231 33.5695 -8.02305 51 6.9226" stroke="#FF8366" stroke-width="6"/>
                  </svg>
                </span>
              </h1>

              <h1 className="text-xl font-bold">
                <span className="inline-flex">
                  <svg  className="mt-2" width="53" height="16" viewBox="0 0 53 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6.9226C23 25.9231 33.5695 -8.02305 51 6.9226" stroke="#FF8366" stroke-width="6"/>
                  </svg>
                </span>
                And Get <span className="text-[#FF8366]">Seamless</span> Sound Experience
                <span className="mx-3 inline-flex">
                  <Headphone color="#FF8A65" />
                  <Airpods color="#FF8A65"/>
                </span>
              </h1>

              <Button variant="ghost" className="mt-4 flex justify-between rounded-full bg-[#F5F5F7] px-6 py-3">
                <span className="text-[#FF8A65]">
                  Explore Features
                </span>      
                <span className="mx-3 inline-flex">
                  <ArrowCircleDown
                    color="#FF8A65"
                  />
                </span>
              </Button>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 39 39" fill="none">
                    <mask id="mask0_50_245" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="1" y="1" width="37" height="37">
                    <path d="M28.75 1H10.25C5.14137 1 1 5.14137 1 10.25V28.75C1 33.8586 5.14137 38 10.25 38H28.75C33.8586 38 38 33.8586 38 28.75V10.25C38 5.14137 33.8586 1 28.75 1Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_50_245)">
                    <path d="M28.75 1H10.25C5.14137 1 1 5.14137 1 10.25V28.75C1 33.8586 5.14137 38 10.25 38H28.75C33.8586 38 38 33.8586 38 28.75V10.25C38 5.14137 33.8586 1 28.75 1Z" fill="#1F242F"/>
                    <path d="M1 1H38V38H1V1Z" fill="#FF8567"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 19.5C14.4442 19.5 19.5 14.4442 19.5 5.625C19.5 14.4442 24.5558 19.5 33.375 19.5C24.5558 19.5 19.5 24.5558 19.5 33.375C19.5 24.5558 14.4442 19.5 5.625 19.5Z" fill="white"/>
                    </g>
                    <path d="M28.75 1.77087H10.25C5.56713 1.77087 1.77087 5.56713 1.77087 10.25V28.75C1.77087 33.433 5.56713 37.2292 10.25 37.2292H28.75C33.433 37.2292 37.2292 33.433 37.2292 28.75V10.25C37.2292 5.56713 33.433 1.77087 28.75 1.77087Z" stroke="url(#paint0_linear_50_245)" stroke-width="2"/>
                    <defs>
                    <linearGradient id="paint0_linear_50_245" x1="19.5" y1="1.00004" x2="19.5" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.12"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-lg text-orange-500">+</span>
                <span className="text-sm text-[#FF8A65]">34K</span>
                <span className="text-sm">Happy Users around the world</span>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <div className="flex -space-x-4">
                  <Avatar className="relative z-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="relative z-20">
                    <AvatarImage src="https://github.com/user1.png" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <Avatar className="relative z-30">
                    <AvatarImage src="https://github.com/user2.png" />
                    <AvatarFallback>U2</AvatarFallback>
                  </Avatar>
                  <Avatar className="relative z-40">
                    <AvatarImage src="https://github.com/user3.png" />
                    <AvatarFallback>U3</AvatarFallback>
                  </Avatar>
                </div>
                <Button variant="default" className="rounded-full bg-[#FF8A65] px-4">Join Us</Button>
              </div>

            </div>
          </section>

          {/* Right Section */}
          <section className="flex-8 relative grid size-full w-7/12 grid-cols-2 grid-rows-2 place-content-between gap-4" style={{ backgroundImage: `url(${Girl.src})`, backgroundSize: 'cover' }}>
            <div className="col-span-1 flex content-start justify-start">
              <div className="flex flex-col content-start justify-start">
                <div className="flex h-[50px] w-40 flex-wrap content-center justify-center gap-2 rounded-br-3xl border-none bg-white">
                  <div className="z-10 rounded-full border border-[#D68B8C] bg-gray-100 p-2">
                    <Facebook className="size-4 border-solid text-[#D68B8C]" />
                  </div>
                  <div className="z-10 rounded-full border border-[#D68B8C] bg-gray-100 p-2">
                    <Instagram className="size-4 border-solid text-[#D68B8C]"/>
                  </div>
                  <div className="z-10 rounded-full border border-[#D68B8C] bg-gray-100 p-2">
                    <ScanBarcode className="size-4 border-solid text-[#D68B8C]" />
                  </div>
                </div>
                <CurvedBorder />
              </div>

              <div className="flex justify-end ">
                <CurvedBorder />
              </div>
            </div>


            <div className="col-span-1 flex items-start justify-end">
              <div className="flex justify-end ">
                <CurvedBorder className="-rotate-180" />
              </div>
              <div className="flex flex-col items-end">
                  <div className="flex h-[50px] w-40 flex-wrap content-center justify-center rounded-bl-3xl border-none bg-white p-3">
                    <Button className="size-full rounded-full">Sign up</Button>
                  </div>
                  <CurvedBorder className="-rotate-180" />
              </div>
            </div>

            <div className="absolute inset-0">
              <div className="relative mx-auto mt-12 h-64 max-w-64 md:mt-12">
                {cards.map((card, index) => (
                  <StackedCard key={index} {...card} index={index} />
                ))}
              </div>
            </div>
            <div className="relative col-span-1 content-end justify-end">
              <Card className="absolute inset-0 m-auto h-fit w-2/3 rounded-xl">
                <CardHeader className="p-3">
                  <CardTitle className="text-center text-lg">SmartWave</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image src={AirPodHero} alt="smatwave airpod in the hero section" />
                </CardContent>
                <CardFooter>
                  <Button variant={"secondary"} className="h-6 w-full rounded-xl">Connect</Button>
                </CardFooter>
              </Card>`
              <CurvedBorder className="" />
            </div>

            <div className="col-span-1 flex flex-col content-end justify-end">
              <div className="relative flex w-full justify-end">
                <div className="absolute inset-x-0 bottom-4 grid grid-cols-12 grid-rows-2 gap-1 p-4">
                  <Badge variant="outline" className="col-span-4 col-start-2 justify-center bg-gray-500/50 text-right text-xs font-extralight text-white">Quality</Badge>
                  <Badge variant="outline" className="col-span-7 justify-center bg-gray-500/50 text-center text-xs font-extralight text-white">High Precision Sensor</Badge>
                  <Badge variant="outline" className="col-span-6 justify-center bg-gray-500/50 text-center text-xs font-extralight text-white">Ergonomic Design</Badge>
                  <Badge variant="outline" className="col-span-6 justify-center bg-gray-500/50 text-center text-xs font-extralight text-white">Long Battery Life</Badge>
                </div>
                <CurvedBorder className="-rotate-90" />
              </div>
              <div className="flex max-h-[50] content-end items-end justify-items-end gap-0">
                <CurvedBorder className="min-w-[40px] -rotate-90" />
                <div className="rounded-tl-3xl bg-white px-5 pb-5 pt-6 text-center text-xs text-gray-400">
                Introducing <span className="text-[#FF8567]">Smartwave</span> a perfect balance of exhilarating 
                <span className="text-[#FF8567]"> high-fidelity</span> audio and the effortless magic of AirPods.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Second Content */}
      <div className="mb-40 px-20">
        <div className="mb-32 text-5xl font-extralight">
          <h2><span className="font-normal">Discover</span> The Future Of Airpods</h2> 
          <h2>And Sound <span className="font-normal">With</span> <span className="font-bold">SmartWave.</span>
            <div className="mx-2 inline-flex -space-x-4">
            </div>
          </h2>
        </div>

        <div className="flex gap-12">
          <Card className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl bg-[#F5F5F7]">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row">
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                  <Card className="grow rounded-2xl border-0 bg-[#f4543f]">
                    <CardContent className="flex h-full flex-col justify-between p-6">
                      <Image
                        src={AirpodWhiteOrangeBg}
                        alt="White Headphones"
                        className="mb-4 h-auto w-full"
                      />
                      <div className="self-end">
                        <Button className="rounded-3xl border-2 bg-[#f4543f] bg-opacity-30 backdrop-blur-md">
                          Sensors
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="rounded-2xl bg-white p-4">
                    <h3 className="text-xl font-semibold">Take It With You Anywhere .</h3>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-between px-4 md:w-1/2">
                  <div>
                    <p className="mb-2 text-sm text-gray-500">
                      Designed mesh textile wraps the ear cushions to provide pillow-like softness while listening.
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold">A Radically Original Composition</h2>
                  </div>
                  <div className="mt-4 flex justify-end space-x-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-4">
                      <DotsFlash />
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-full bg-white p-4">
                      <DotsMusic />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-full space-y-6 lg:w-1/3">
            <Card className="overflow-hidden rounded-3xl bg-[#F5F5F7]">
              <CardContent className="p-6">
                <Image
                  src={HalfAirpodGrayBg}
                  alt="Pink Earbuds"
                  className="mb-4 h-auto w-full"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-3xl bg-[#F5F5F7]">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Upgrade Your Gear With Us</h3>
              </CardContent>
            </Card>

            <Button variant="outline" className="flex-around flex h-12 w-full justify-around rounded-full border-2 border-red-500 p-4 text-xl text-red-500 hover:bg-red-50">
              Boost Now <span className="ml-2"><OrangeSmilingFace /></span>
            </Button>
          </div>
          <Card className="overflow-hidden rounded-3xl bg-[#F5F5F7]">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold">
              The ultimate personal listening experience is here.
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-32 px-20">
        <div className="flex">
          <div className="flex w-1/3">
            <Card>
              <CardContent>
                Connect
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                Balanced
              </CardContent>
            </Card>
          </div>
          <div className="w-2/3 text-4xl font-extralight">
            <h2 className="font-bold">Precision Meet Comfort Comfor</h2> 
            <h2>For unmatched Performance</h2>
            <p className="text-base">
              Elevate your productivity with ergonomic design, engineered to support multi-use and minimize noise.
            </p>
          </div>
        </div>
        <div className="flex">
          <div></div>
          <div></div>
        </div>
      </div>
    </main>

  );
}
