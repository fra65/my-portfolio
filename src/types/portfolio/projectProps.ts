export interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  featured: boolean
  demoUrl?: string    // link al sito/demo
  githubUrl?: string  // link al repository
}
