import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender-2IhC7npBqRTkX8HA55pNcIt4mv8kiM.jpeg"
              alt="Rasel Ahmed Raju"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Extremely elegant and dedicated while working or learning. Solution driven full stack developer with
                  experience in multiple projects, both solo and team-based. Consistently chosen as team leader for
                  collaborative projects.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Education:</span>
                    B.Sc. in Computer Science & Engineering, North South University
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Location:</span>
                    Dhaka, Bangladesh
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-semibold">Focus:</span>
                    Full Stack Development, AI Engineering, Machine Learning
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <a href="#experience">View My Experience</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

