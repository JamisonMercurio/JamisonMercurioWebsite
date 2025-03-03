import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              John Smith
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/resume"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm Aman Gupta
                  </h1>
                  <p className="text-xl text-muted-foreground">Software Engineer & Entrepreneur</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Passionate about building innovative products and leading high-performance teams. Experienced in
                  full-stack development, machine learning, and cloud technologies.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="mailto:john@example.com">
                      Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume">View Resume</Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a href="mailto:john@example.com">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background bg-blue-100 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    width={600}
                    height={600}
                    alt="John Smith"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a seasoned software engineer and entrepreneur with over 8 years of experience in the tech
                  industry. My journey has taken me from building scalable systems at Amazon to founding and leading my
                  own startup. I'm passionate about leveraging technology to solve real-world problems and create
                  impactful products.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Full-Stack Development</h3>
                        <p className="text-sm text-muted-foreground">
                          Building scalable and efficient web applications
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Node.js</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">Java</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Machine Learning</h3>
                        <p className="text-sm text-muted-foreground">
                          Developing AI-powered solutions for complex problems
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        <Badge variant="secondary">TensorFlow</Badge>
                        <Badge variant="secondary">PyTorch</Badge>
                        <Badge variant="secondary">NLP</Badge>
                        <Badge variant="secondary">Computer Vision</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Cloud & DevOps</h3>
                        <p className="text-sm text-muted-foreground">
                          Architecting and deploying scalable cloud solutions
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center">
                        <Badge variant="secondary">AWS</Badge>
                        <Badge variant="secondary">Docker</Badge>
                        <Badge variant="secondary">Kubernetes</Badge>
                        <Badge variant="secondary">CI/CD</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Startup Founder"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Startup Founder</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Founded and led a startup focused on AI-powered productivity tools for remote teams.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge>React</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>Machine Learning</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Amazon"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Amazon - SDE II</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Developed and maintained large-scale distributed systems for Amazon's e-commerce platform.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge>Java</Badge>
                      <Badge>AWS</Badge>
                      <Badge>Microservices</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      width={600}
                      height={400}
                      alt="Microsoft"
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold">Microsoft - SDE</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Worked on the Bing search engine, improving search relevance and performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge>C#</Badge>
                      <Badge>Azure</Badge>
                      <Badge>Machine Learning</Badge>
                    </div>
                  </CardContent>
                </Card>
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

