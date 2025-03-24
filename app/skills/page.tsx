import Link from "next/link"
import {
  ArrowLeft,
  Code,
  Database,
  LineChart,
  Cpu,
  Server,
  Layers,
  Braces,
  Github,
  Linkedin,
  Mail,
  Menu,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RetroGrid from "@/components/retro-grid"

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <RetroGrid />
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight">
            SURYANSH_SHAKYA
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link href="/#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/#experience" className="text-sm font-medium hover:underline">
              Experience
            </Link>
            <Link href="/#projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <Link href="/skills" className="text-sm font-medium hover:underline">
              Skills
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="font-mono text-lg font-bold tracking-tight">
                  SURYANSH_SHAKYA
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/#about" className="text-sm font-medium hover:underline">
                    About
                  </Link>
                  <Link href="/#experience" className="text-sm font-medium hover:underline">
                    Experience
                  </Link>
                  <Link href="/#projects" className="text-sm font-medium hover:underline">
                    Projects
                  </Link>
                  <Link href="/skills" className="text-sm font-medium hover:underline">
                    Skills
                  </Link>
                  <Link href="/#contact" className="text-sm font-medium hover:underline">
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="container px-4 py-8 md:py-12 lg:py-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild className="font-mono">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <h1 className="font-mono text-2xl sm:text-3xl font-bold tracking-tighter">Skills Matrix</h1>
              </div>
              <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base">
                A comprehensive overview of my technical skills in various domains of machine learning and software
                development.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 mt-6 sm:mt-8">
              {/* Programming Languages */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Braces className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Programming Languages</CardTitle>
                  </div>
                  <CardDescription>Languages I use for development and data science</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Python
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Java
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Javascript
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Ruby
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> C
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> BASIC
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> bash
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> SQL
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ML Frameworks */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Frameworks</CardTitle>
                  </div>
                  <CardDescription>Frameworks and libraries I use for development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> PyTorch
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Langchain
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> FastAPI
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Django
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> PyQT
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Springboot
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> React
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Express
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Ruby on Rails
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Science Tools */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Data Science Tools</CardTitle>
                  </div>
                  <CardDescription>Tools and libraries for data analysis and visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Pandas
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> NumPy
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Matplotlib
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Seaborn
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Plotly
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Jupyter
                    </li><li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Scikit Learn
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cloud & DevOps */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Tools</CardTitle>
                  </div>
                  {/* <CardDescription>Cloud platforms, DevOps and other tools</CardDescription> */}
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> AWS
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Docker
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Git
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> CI/CD
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> GitHub Actions
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Hugging Face
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Linux
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Specialized ML Skills */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Specialized ML Skills</CardTitle>
                  </div>
                  <CardDescription>Specialized areas in machine learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Natural Language Processing
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Time Series Analysis
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Computer Vision
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> Automatic Speech Recognition
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <CardTitle className="font-mono text-lg sm:text-xl">Databases</CardTitle>
                  </div>
                  <CardDescription>Database systems and query languages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-sm">
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> PostgreSQL
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> MongoDB
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> SQLite
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="text-primary">▹</span> MySQL
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Suryansh Shakya. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/suryanshshakya" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/suryanshshakya" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:suryansh.shakya@example.com">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

