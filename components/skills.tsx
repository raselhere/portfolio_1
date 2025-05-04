import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Brain, Laptop, Users, Calendar, DollarSign } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      title: "Data Structures & Algorithms",
      description: "Proficient in designing and implementing efficient software solutions",
      icon: Code2,
    },
    {
      title: "Programming Languages",
      description: "C, C++, Python, Java, HTML, CSS, SQL",
      icon: Laptop,
    },
    {
      title: "Full Stack Development",
      description: "Front-end and back-end development expertise",
      icon: Database,
    },
    {
      title: "Machine Learning",
      description: "Experience with data analysis and model building",
      icon: Brain,
    },
    {
      title: "Real-Time Applications",
      description: "Development and deployment of real-time systems",
      icon: Users,
    },
    {
      title: "Event Organization",
      description: "Successful track record in managing various events",
      icon: Calendar,
    },
    {
      title: "Team Leadership",
      description: "Led multiple team projects with effective coordination",
      icon: Users,
    },
    {
      title: "Financial Management",
      description: "Experience as Treasurer handling event budgets",
      icon: DollarSign,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <skill.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a href="#contact" className="flex items-center gap-2">
              Discuss My Skills
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

