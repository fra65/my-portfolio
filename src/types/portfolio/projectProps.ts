export interface ProjectProps {
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  purchasable: boolean
  demoUrl?: string    // link al sito/demo
  githubUrl?: string  // link al repository
  storeUrl?: string
}
