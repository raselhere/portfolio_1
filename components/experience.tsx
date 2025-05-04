import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer & Data Engineer",
      company: "Tutors Plan",
      period: "February 2025 - Present",
      description: "TutorsPlan: Personalized, affordable education tailored to every student's needs.",
    },
    {
      title: "Research Assistant",
      company: "Human Computer Interaction, DIAL, NSU",
      period: "February 2023 - February 2024",
      description: "Worked on several projects to gather hands-on experience with a focus on Machine Learning.",
    },
    {
      title: "Treasurer",
      company: "North South University ACM SC",
      period: "February 2023 - Present",
      description:
        "Successfully handled financial responsibilities, leading to the successful execution of back-to-back events including HACKNSU S3 (2022), Innovation Challenge Season 10 (2022), through Season 13 (2023).",
    },
    {
      title: "Client Officer",
      company: "TriSMART SOLAR",
      period: "January 2022 - January 2023",
      description:
        "Resolved client disputes and successfully handled international clients for telemarketing and after-sales service while maintaining brand promise.",
    },
    {
      title: "Event Organizer",
      company: "Rendezvous Asia Pvt. Ltd.",
      period: "July 2022",
      description:
        "Fulfilled the role of an organizer leading to the successful execution of back-to-back events including 'Otilia Live in Dhaka'.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <Badge variant="secondary">{exp.period}</Badge>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a href="#contact" className="flex items-center gap-2">
              View Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

