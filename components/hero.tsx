import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender%206.jpg-s7E2NSGNAP9q8hNC1W9d7CGbuMvn0y.jpeg"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Rasel Ahmed Raju</h1>
        <p className="text-xl md:text-2xl text-gray-200">Full Stack Developer & AI Engineer</p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <a href="https://github.com/raselhere" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

