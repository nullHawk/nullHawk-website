import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Terminal, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import ProjectGrid from "@/components/project-grid"
import TypewriterEffect from "@/components/typewriter-effect"
import RetroGrid from "@/components/retro-grid"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <RetroGrid />
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight">
            SURYANSH_SHAKYA
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <Link href="/skills" className="text-sm font-medium hover:underline">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
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
                  <Link href="#about" className="text-sm font-medium hover:underline">
                    About
                  </Link>
                  <Link href="#experience" className="text-sm font-medium hover:underline">
                    Experience
                  </Link>
                  <Link href="#projects" className="text-sm font-medium hover:underline">
                    Projects
                  </Link>
                  <Link href="/skills" className="text-sm font-medium hover:underline">
                    Skills
                  </Link>
                  <Link href="#contact" className="text-sm font-medium hover:underline">
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 px-4 py-8 md:py-12 lg:py-24 relative">
          <div className="flex flex-col items-start gap-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-mono">BITS Pilani Sophomore</div>
            <div className="relative">
              <h1 className="font-mono text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <TypewriterEffect text="Suryansh Shakya" />
              </h1>
            </div>
            <div className="h-8 font-mono text-lg sm:text-xl text-muted-foreground">
              <TypewriterEffect text="AI Engineer" delay={2000} />
            </div>
            <p className="max-w-[700px] text-muted-foreground text-sm md:text-base lg:text-xl">
              Building intelligent systems that learn and adapt. Focused on deep learning, automatic speech recognition, and natural
              language processing.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button asChild className="font-mono text-sm">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="font-mono text-sm">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5" />
                <h2 className="font-mono text-2xl font-bold tracking-tighter sm:text-3xl">About Me</h2>
              </div>
              <div className="relative mb-6 mt-2 md:hidden">
                <div className="w-32 h-32 border-2 border-primary p-1 rotate-3 mx-auto">
                  <Image
                    src="/dp.jpg?height=120&width=120"
                    alt="Suryansh Shakya"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-muted-foreground">
                I'm Suryansh Shakya, a sophomore at BITS Pilani, passionate about machine learning and artificial
                intelligence. My journey in tech began in 3rd grade with language called BASIC.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm focusing on deep learning architectures, ASR and NLP. I enjoy tackling complex problems and building solutions that have real-world
                impact.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding or playing with LLMs, you can find me photographing landscapes, playing football, or watching Anime ;)
              </p>
              <div className="mt-4">
                <Button variant="outline" asChild className="font-mono">
                  <Link href="/skills">
                    View All Skills <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="hidden md:block relative mb-8">
                <div className="w-48 h-48 border-2 border-primary p-1 rotate-3 mx-auto">
                  <Image
                    src="/dp.jpg?height=180&width=180"
                    alt="Suryansh Shakya"
                    width={180}
                    height={180}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 font-mono text-xs bg-muted px-2 py-1 border">
                  AI_ENGINEER.jpg
                </div>
              </div>
              <div className="rounded-lg border p-4 font-mono">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-muted-foreground ml-2">terminal</div>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-green-500">suru@nullhawk:~$</span> cat education.txt
                  </p>
                  <p>BITS Pilani</p>
                  <p className="text-muted-foreground">B.S. Computer Science, 2023-2027</p>
                  <p>
                    <span className="text-green-500">suruh@nullhawk:~$</span> ls -la skills/
                  </p>
                  <p>total 3</p>
                  <p>drwxr-xr-x languages/ (Python, Java, JavaScript, Ruby)</p>
                  <p>drwxr-xr-x frameworks/ (PyTorch, FastAPI, Django, PyQT, React)</p>
                  <p>drwxr-xr-x tools/ (Git, Github, Docker, Hugging Face)</p>
                  <p>
                    <span className="text-green-500">suru@nullhawk:~$</span> <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="container px-4 py-8 md:py-12 lg:py-24 border-t">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px w-4 sm:w-8 bg-primary"></div>
              <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl">
                Professional Experience
              </h2>
              <div className="h-px w-4 sm:w-8 bg-primary"></div>
            </div>
            <p className="max-w-[700px] text-muted-foreground text-sm md:text-base">
              My professional journey in AI and software development.
            </p>

            <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-12">
              {/* Experience Item 1 */}
              <div className="relative pl-6 sm:pl-8 border-l-2">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-1">OCT 2024 - PRESENT</div>
                <h3 className="font-mono text-lg sm:text-xl font-bold">Co-Founder</h3>
                <div className="text-muted-foreground text-sm mb-2">Hawks Lab</div>
                <div className="rounded-lg border-2 p-3 sm:p-4 bg-muted/20 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-destructive"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-muted-foreground ml-2">experience.log</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      Building AI Agents and Products that can solve real world problems.
                    </li>
                  </ul>
                </div>
              </div>
              {/* Experience Item 1 */}
              <div className="relative pl-6 sm:pl-8 border-l-2">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-1">DEC 2024 - FEB 2025</div>
                <h3 className="font-mono text-lg sm:text-xl font-bold">Software Engeering Intern</h3>
                <div className="text-muted-foreground text-sm mb-2">InterviewBit</div>
                <div className="rounded-lg border-2 p-3 sm:p-4 bg-muted/20 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-destructive"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-muted-foreground ml-2">experience.log</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      Worked on sails mimic platform: Gamified platform to train BDAs using AI Persona
                    </li>
                    <li>Built a custom Rule Engine to accommodate rapidly changing requirements, significantly reducing manual effort and saving man-hours</li>
                    <li>added monthly goal feature</li>
                    <li>Integrating the platform to CRM</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-6 sm:pl-8 border-l-2">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-1">AUG 2024 - OCT 2024</div>
                <h3 className="font-mono text-lg sm:text-xl font-bold">AI/ML Intern for BharatGPT</h3>
                <div className="text-muted-foreground text-sm mb-2">IIT Bombay</div>
                <div className="rounded-lg border-2 p-3 sm:p-4 bg-muted/20 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-destructive"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-muted-foreground ml-2">experience.log</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Worked together with IITB and IITM to build BharatGPT (now known as BharatGen)</li>
                    <li>Built ASR Pipeline and Data-creation Pipeline for Datasagar (India centric Dataset).</li>
                    <li>Automated the detection and resolution of timestamp issues in annotated data.</li>
                    <li>Conducted in-depth analysis of WER and CER for various ASR models, including Data2Vec2, Wav2Vec, and Indic Whisper</li>
                    <li>Enhanced transcription pipelines by adding support for multiple languages like Tamil and handling large-scale datasets.</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-6 sm:pl-8 border-l-2">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-1">NOV 2023 - FEB 2024</div>
                <h3 className="font-mono text-lg sm:text-xl font-bold">Software Engineering Intern</h3>
                <div className="text-muted-foreground text-sm mb-2">Bhashini</div>
                <div className="rounded-lg border-2 p-3 sm:p-4 bg-muted/20 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-destructive"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-muted-foreground ml-2">experience.log</div>
                  </div>
                  <ul className="space-y-2 list-disc pl-4">
                    Part of the team developing various Bhashini SDK products:
                    <li>Chrome extension: Translates websites into preferred languages.</li>
                    <li>Web server: Changes website languages based on user choice.</li>
                    <li>npm package: Integrates Bhashini functionality into projects.</li>
                    <p>
                      Showcased at the Global Partnership on Artificial Intelligence(GPAI), receiving positive feedback from users and Prime Minister.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted/50 py-12 md:py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-px w-4 sm:w-8 bg-primary"></div>
                <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl">Projects</h2>
                <div className="h-px w-4 sm:w-8 bg-primary"></div>
              </div>
              <p className="max-w-[700px] text-muted-foreground text-sm md:text-base">
                A collection of my machine learning projects, categorized by domain and technology.
              </p>
            </div>
            <ProjectGrid />
          </div>
        </section>
        <section id="contact" className="container px-4 py-8 md:py-12 lg:py-24">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="h-px w-4 sm:w-8 bg-primary"></div>
                <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl">Get in Touch</h2>
                <div className="h-px w-4 sm:w-8 bg-primary"></div>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                I'm always open to new opportunities, collaborations, or just a chat about machine learning and AI.
              </p>
              <div className="flex flex-col gap-2 font-mono text-xs sm:text-sm">
                <a
                  href="mailto:surushakya@proton.me"
                  className="flex items-center gap-2 font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  surushakya@proton.me
                </a>
                <a
                  href="https://github.com/nullHawk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium hover:underline"
                >
                  <Github className="h-4 w-4" />
                  github.com/nullHawk
                </a>
                <a
                  href="https://www.linkedin.com/in/suryansh-shakya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/suryansh-shakya
                </a>
              </div>
            </div>
            <div className="rounded-lg border p-4 sm:p-6 relative mt-4 md:mt-0">
              <div className="absolute -top-3 left-4 bg-background px-2 text-xs font-mono">MESSAGE.form</div>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-medium font-mono">
                    Name
                  </label>
                  <input
                    id="name"
                    className="rounded-md border bg-background px-3 py-2 text-xs sm:text-sm font-mono"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-medium font-mono">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="rounded-md border bg-background px-3 py-2 text-xs sm:text-sm font-mono"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[100px] sm:min-h-[120px] rounded-md border bg-background px-3 py-2 text-xs sm:text-sm font-mono"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="font-mono text-xs sm:text-sm">
                  Send Message
                </Button>
              </form>
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
            <a href="https://github.com/nullHawk" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/suryansh-shakya/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:surushakya@proton.me">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

