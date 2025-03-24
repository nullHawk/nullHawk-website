"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Project data
const projects = [
  {
    id: 1,
    title: "Music Generation using LSTM",
    description: "A Python-based DL application that generates music using an LSTM-based RNN model trained on music data",
    category: "NLP",
    technologies: ["PyTorch", "RNN", "LSTM", "Hugging Face"],
    link: "https://github.com/HawksLab/music-generation",
  },
  {
    id: 2,
    title: "potterGPT",
    description: "Building GPT from scratch on Harry Potter Curated Dataset",
    category: "NLP",
    technologies: ["PyTorch", "GPT", "Hugging Face"],
    link: "https://github.com/HawksLab/potterGPT",
  },
  {
    id: 3,
    title: "simple-transformer",
    description: "Implementation of Transformer model in PyTorch",
    category: "python-package",
    technologies: ["PyTorch", "Transformers", "Python", "PyPI"],
    link: "https://pypi.org/project/simple-transformer/",
  },
  {
    id: 4,
    title: "k-means",
    description: "Implementation of K-means algorithm from scratch with adaptive distance metrics",
    category: "python-package",
    technologies: ["Python", "PyPi"],
    link: "pypi.org/project/simple-kmeans/",
  },
  {
    id: 6,
    title: "AnonyThreads",
    description: "Anonymous Confession website made in django",
    category: "Full-Stack",
    technologies: ["Python", "Django"],
    link: "https://github.com/nullHawk/anonythreads",
  },
  {
    id: 5,
    title: "Post-it",
    description: "PostIt is a fully-featured social media web application, built with the MERN stack.",
    category: "Full-Stack",
    technologies: ["Javascript", "MongoDB", "Express", "React", "Node"],
    link: "https://github.com/nullHawk/post-it",
  },
  {
    id: 7,
    title: "aBoook Converter",
    description: "Convertors ebook to audiobook free and offline",
    category: "Desktop App",
    technologies: ["Python", "PyQT", "Hugging Face"],
    link: "https://github.com/HawksLab/ebook-to-audiobook-convertor",
  },
  {
    id: 8,
    title: "Imagit",
    description: "Image editing software made in JavaFX",
    category: "Desktop App",
    technologies: ["Java", "JavaFX"],
    link: "https://github.com/nullHawk/Imagit",
  },
  {
    id: 9,
    title: "NullHawk's Play",
    description: "Music Player made in pyqt5 which fetches music from youtube",
    category: "Desktop App",
    technologies: ["Python", "PyQt"],
    link: "https://github.com/nullHawk/NullHawk-s-Play",
  },
]

// Get unique categories
const categories = ["All", ...new Set(projects.map((project) => project.category))]

// Number of projects per page
const PROJECTS_PER_PAGE = 3

export default function ProjectGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)

  // Get current projects
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
            className="font-mono text-xs h-7 px-2 sm:h-9 sm:px-3 sm:text-sm"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden transition-all hover:shadow-md border-2">
            <CardHeader className="pb-2 px-3 pt-3 sm:px-4 sm:pt-4">
              <div className="flex items-start justify-between">
                <CardTitle className="font-mono text-base sm:text-lg">{project.title}</CardTitle>
                <Badge variant="outline" className="font-mono text-[10px] sm:text-xs">
                  {project.category}
                </Badge>
              </div>
              <CardDescription className="text-xs sm:text-sm">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="px-3 sm:px-4">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-3 pb-3 sm:px-4 sm:pb-4">
              <Button variant="ghost" size="sm" asChild className="ml-auto font-mono text-xs sm:text-sm h-7 sm:h-8">
                <Link href={project.link}>
                  View Project <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-8 font-mono">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-1 text-xs h-8 px-2 sm:h-9 sm:px-3 sm:text-sm"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Prev
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => paginate(i + 1)}
              className="w-6 h-6 sm:w-8 sm:h-8 p-0 text-xs sm:text-sm"
            >
              {i + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 text-xs h-8 px-2 sm:h-9 sm:px-3 sm:text-sm"
        >
          Next <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>

      <div className="text-center text-xs text-muted-foreground font-mono mt-2">
        Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
        {filteredProjects.length} projects
      </div>
    </div>
  )
}

