import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function ResumePage() {
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
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
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
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Resume
                </h1>
                <p className="mt-4 text-muted-foreground">
                  My professional experience, education, and skills
                </p>
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
                            <h3 className="text-xl font-bold">
                              CEO & Co-Founder
                            </h3>
                            <p className="text-muted-foreground">
                              Mango Health (Y-Combinator: W24 Batch)
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Nov 2022 - Present
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            Scaled a mental health platform enabling 1,400+
                            individuals to start therapy with human therapists
                            or AI-powered assistants, focusing on OCD treatment
                          </li>
                          <li>
                            Designed and built the MVP and early app iterations
                            on Next.js, PostgreSQL, and Heroku, integrating
                            custom LLM assistants for backend data management
                            and user interactions
                          </li>
                          <li>
                            Raised $1.2M in seed funding and led product
                            development from concept to deployment
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Software Engineer, Meta
                            </h3>
                            <p className="text-muted-foreground">
                              Facebook App, News Tab (Native Templates/PHP)
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sept 2020 - Nov 2022
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            <strong>"See Less Negative News" Control</strong> -
                            Led PM, design, cross-functional approval; empowers
                            users to remove polarizing feed content. Currently
                            activated by 3M+ people in the United States.
                          </li>
                          <li>
                            Led development of 10+ front-end projects, including
                            creator branding (profile sheet, news context,
                            verified checkmarks), a news summary unit, user
                            controls, and integrity projects (stopping malicious
                            actors/bots)
                          </li>
                          <li>
                            Mentored 3 new grad hires and 2 industry hires,
                            onboarding them to Meta and our team. Also
                            participated in the interview process 15+ times as a
                            loop guide, recruiting partner, and through
                            successful sell calls.
                          </li>
                        </ul>

                        <p className="text-muted-foreground mt-4">
                          Messenger App, Video Chat (iOS Objective-C)
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
                          <li>
                            Technical POC for VC new entry-point - Led
                            execution, experiment setup, metric reports,
                            iteration, launch.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Software Engineering Intern, Capital One
                            </h3>
                            <p className="text-muted-foreground"></p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            June - August 2019
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>
                            Designed and built a full-stack network automation
                            application from scratch for Capital One's proxy
                            servers
                          </li>
                          <li>
                            Saved approx. 200 hrs of work per year, utilizing
                            NodeJS, Python, PostgreSQL, and Docker
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
                            <h3 className="text-xl font-bold">
                              Princeton University
                            </h3>
                            <p className="text-muted-foreground">
                              Computer Science Major, Entrepreneurship Minor
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Graduation June 2020
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Cumulative GPA: 3.588
                          <br />
                          Coursework: PHP, Java, C, Python, Swift, AngularJS,
                          ReactJS, GitHub, PostgreSQL, HTML/CSS, Verilog.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              University of Edinburgh, Scotland
                            </h3>
                            <p className="text-muted-foreground">
                              Visiting Student
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            January - May 2019
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Courses: Computer Security, Reasoning & Agents
                          (Haskell), British Politics: The Beginning of the End?
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              East Aurora High School
                            </h3>
                            <p className="text-muted-foreground">
                              Valedictorian, Buffalo, NY
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Graduation 2016
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Third Place, 2015 National Gannon Programming
                          Competition: "Reverse Resistor Calculator"
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
                            <h3 className="text-xl font-bold">
                              Tech Policy Research - Princeton Center for
                              Information Technology Policy
                            </h3>
                            <p className="text-muted-foreground"></p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sept 2019 - May 2020
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          <a
                            href="https://www.regulations.gov/document/FDA-2017-D-6569-0112"
                            className="text-blue-500 hover:underline"
                          >
                            AI In Healthcare
                          </a>{" "}
                          - Whitepaper for FDA detailing benefits + drawbacks of
                          ML in decision-support software.
                        </p>
                        <p className="text-sm mt-2">
                          <a
                            href="/Mercurio_FacialRecognitionInPublicSafety.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            Facial Recognition in Public Safety
                          </a>{" "}
                          - Recommendations to NY legislators and police chiefs
                          on FR tech.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Nutritional Monitoring Web Application - TigerEats
                              Inc.
                            </h3>
                            <p className="text-muted-foreground"></p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            August 2018 - Feb 2019
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Built a web app using ReactJS, MongoDB, Flask, and
                          Heroku that allows coaches to view a student's meal
                          intake, make recommendations, set goals, and view
                          dietary analytics with an intuitive, touch user
                          interface.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Extracurriculars & Activities
                  </h2>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Member of The Princeton Trustee Committee on
                              Honorary Degrees
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sept 2018 - June 2020
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          One of two students selected to rep. the undergraduate
                          body during the consideration of potential recipients.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Board Founder and Organizer, Cross Country Crusade
                              5K
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            2014-2021
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          • Founded a nonprofit organization where I regularly
                          communicate with gov't officials, local and national
                          sponsors, and lead a team of volunteers on race day.
                          Have raised over $18,000 for a local cancer charity,
                          <a
                            href="https://www.campgooddays.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {" "}
                            Camp Good Days & Special Times
                          </a>
                          .
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">
                              Eagle Scout, Boy Scouts of America
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            2012 - 2016
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Built "Digital Information Kiosk" for my hometown.
                          Also elected Senior Patrol Leader - led troop.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold">Interests</h3>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          Breakdancing, scuba diving, skiing, electric guitar,
                          Smash Ultimate, poker, soccer, and comedy-writing.
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
                      <span className="text-sm">JamisonMercurio@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://Mercurio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        https://Mercurio.com/
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://github.com/JamisonMercurio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                      >
                        github.com/JamisonMercurio
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Skills</h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-sm font-medium">
                        Programming Languages
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        PHP, Java, C, Python, Swift
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Web Technologies</h3>
                      <p className="text-sm text-muted-foreground">
                        AngularJS, ReactJS, HTML/CSS, Next.js
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Tools & Platforms</h3>
                      <p className="text-sm text-muted-foreground">
                        GitHub, PostgreSQL, Heroku, MongoDB, Flask
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Other</h3>
                      <p className="text-sm text-muted-foreground">
                        Verilog, Hardware Design
                      </p>
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
            © 2024 Jamison Mercurio. All rights reserved.
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
              href="https://linkedin.com"
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
