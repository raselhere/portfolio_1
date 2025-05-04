"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Github, Linkedin, Download } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1796351793",
      href: "tel:+8801796351793",
    },
    {
      icon: Mail,
      label: "Email",
      value: "raselraju.queries@gmail.com",
      href: "mailto:raselraju.queries@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/raselhere",
      href: "https://github.com/raselhere",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/raselhere",
      href: "https://linkedin.com/in/raselhere",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="grid gap-6 p-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-4">
                <Button size="icon" variant="outline" className="h-12 w-12" asChild>
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <contact.icon className="h-6 w-6" />
                  </a>
                </Button>
                <div>
                  <p className="font-medium">{contact.label}</p>
                  <p className="text-sm text-muted-foreground">{contact.value}</p>
                </div>
              </div>
            ))}
            <div className="mt-6 text-center">
              <Button className="w-full">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("Resume download would start here")
                  }}
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Full Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

