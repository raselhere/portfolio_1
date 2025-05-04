import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "PASMA - Personalised AI-Powered Smart Medical Assistant",
      description:
        "An intelligent medical assistant system that uses AI to provide personalized healthcare recommendations and support to users based on their medical history and symptoms.",
      date: "2023",
      tags: ["AI", "Healthcare", "Machine Learning", "Medical Tech"],
    },
    {
      title: "Sign Language Detection",
      description:
        "A real-time sign language detection model that detects BDSL and ESL from any device with camera in built.",
      date: "August 2023",
      tags: ["AI", "Computer Vision", "Machine Learning"],
    },
    {
      title: "Zakat Management System",
      description:
        "Digital Zakat collection and distribution system for efficient management of charitable contributions.",
      date: "February 2021 - May 2021",
      tags: ["Full Stack", "Database", "Management"],
    },
    {
      title: "Need A Bus",
      description: "Dhaka indoor travel app: plan trips, compare routes, estimate fares & distances, track journeys.",
      date: "July 2020 - September 2020",
      tags: ["Mobile App", "Transportation", "UX Design"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  {project.title}
                  <a
                    href="https://github.com/raselhere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{project.date}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a
              href="https://github.com/raselhere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

