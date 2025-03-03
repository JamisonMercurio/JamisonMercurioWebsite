import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Jamison Mercurio
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
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
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/resume"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
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
                    Hi, I'm Jamison Mercurio
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Founder & Software Engineer
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Building AI Therapy for OCD at{" "}
                  <a
                    href="https://TheMangoHealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Mango Health
                  </a>
                  . Princeton University graduate with past software engineering
                  experience at Meta, and Capital One.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="mailto:JamisonMercurio@gmail.com">
                      Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume">View Resume</Link>
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://github.com/JamisonMercurio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </a>
                  <a
                    href="https://linkedin.com/in/jamison-mercurio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                  <a href="mailto:JamisonMercurio@gmail.com">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-full border-8 border-background bg-blue-100 shadow-xl">
                  <Image
                    src="/headshot.jpeg"
                    width={600}
                    height={600}
                    alt="Jamison Mercurio"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Jamison Mercurio. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/JamisonMercurio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/jamison-mercurio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:JamisonMercurio@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
