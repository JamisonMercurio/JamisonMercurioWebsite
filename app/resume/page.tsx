import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Aman Gupta
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/resume" className="text-sm font-medium transition-colors hover:text-primary">
              Resume
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/resume" className="text-sm font-medium transition-colors hover:text-primary">
                  Resume
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h1>
                <p className="mt-4 text-muted-foreground">My professional experience, education, and skills</p>
              </div>
            </div>
            <Separator className="my-8" />
            <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">Founder & CEO</h3>
                            <p className="text-muted-foreground">AI Productivity Startup</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Jan 2022 - Present</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Founded and led a startup focused on AI-powered productivity tools for remote teams</li>
                          <li>Developed machine learning models for task prioritization and time management</li>
                          <li>Built and managed a team of 10 engineers, designers, and data scientists</li>
                          <li>Raised $2M in seed funding and grew user base to 50,000+ in the first year</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">Software Development Engineer II</h3>
                            <p className="text-muted-foreground">Amazon</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Jun 2018 - Dec 2021</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            Led a team of 5 engineers in developing and maintaining large-scale distributed systems
                          </li>
                          <li>Improved system efficiency by 40% through optimized algorithms and cloud architecture</li>
                          <li>Implemented machine learning models to enhance product recommendations</li>
                          <li>Mentored junior developers and conducted technical interviews</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">Software Development Engineer</h3>
                            <p className="text-muted-foreground">Microsoft</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Jul 2015 - May 2018</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            Worked on the Bing search engine, focusing on improving search relevance and performance
                          </li>
                          <li>Developed and deployed machine learning models for query understanding</li>
                          <li>
                            Collaborated with cross-functional teams to integrate new features into the search pipeline
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">M.S. Computer Science</h3>
                            <p className="text-muted-foreground">Stanford University</p>
                          </div>
                          <p className="text-sm text-muted-foreground">2013 - 2015</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Specialized in Artificial Intelligence and Machine Learning. Thesis: "Deep Learning Approaches
                          for Natural Language Understanding in Search Engines"
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">B.Tech. Computer Science</h3>
                            <p className="text-muted-foreground">Indian Institute of Technology, Delhi</p>
                          </div>
                          <p className="text-sm text-muted-foreground">2009 - 2013</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Graduated with honors. Major in Computer Science with a minor in Mathematics.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Projects</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">E-commerce Platform</h3>
                            <p className="text-muted-foreground">Personal Project</p>
                          </div>
                          <p className="text-sm text-muted-foreground">2022</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          A full-stack e-commerce solution with payment processing and inventory management. Built with
                          Next.js, Stripe, and PostgreSQL.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">AI Content Generator</h3>
                            <p className="text-muted-foreground">Open Source Project</p>
                          </div>
                          <p className="text-sm text-muted-foreground">2023</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          A tool that uses AI to generate marketing content for businesses. Built with React, OpenAI
                          API, and Node.js.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4">Contact</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">aman.gupta@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://linkedin.com/in/amangupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        linkedin.com/in/amangupta
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://github.com/amangupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        github.com/amangupta
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Skills</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">Programming Languages</h3>
                      <p className="text-sm text-muted-foreground">Python, Java, JavaScript, C++, SQL</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Web Technologies</h3>
                      <p className="text-sm text-muted-foreground">React, Node.js, Django, RESTful APIs, GraphQL</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Machine Learning & AI</h3>
                      <p className="text-sm text-muted-foreground">
                        TensorFlow, PyTorch, Scikit-learn, NLP, Computer Vision
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Cloud & DevOps</h3>
                      <p className="text-sm text-muted-foreground">AWS, Azure, Docker, Kubernetes, CI/CD pipelines</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Tools & Practices</h3>
                      <p className="text-sm text-muted-foreground">
                        Git, Agile methodologies, Test-Driven Development, Microservices architecture
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Languages</h2>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm">English (Fluent)</p>
                    </div>
                    <div>
                      <p className="text-sm">Hindi (Native)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">Certifications</h2>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm">AWS Certified Solutions Architect - Professional</p>
                      <p className="text-xs text-muted-foreground">2023</p>
                    </div>
                    <div>
                      <p className="text-sm">Google Cloud Professional Data Engineer</p>
                      <p className="text-xs text-muted-foreground">2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Aman Gupta. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:john@example.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

