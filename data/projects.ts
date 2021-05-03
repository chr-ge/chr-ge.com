import {
  SiNextDotJs,
  SiTypescript,
  SiGraphql,
  SiSass,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
} from 'react-icons/si'
import { ChakraUI } from 'components/Icons'
import type { Project } from 'types'

const projects: Project[] = [
  {
    id: '1',
    title: 'Hotel at Home',
    description: 'Reserve a chalet in Quebec.',
    images: [
      { alt: 'Property Page', src: '/img/projects/halm-ipad.png' },
      { alt: 'Home Page', src: '/img/projects/halm-iphone.png' },
    ],
    homepage: 'https://halm.vercel.app',
    github: '',
    technologies: [
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
    ],
    tags: [
      { label: 'front-end', colorScheme: 'blue' },
      { label: 'e-commerce', colorScheme: 'purple' },
    ],
  },
  {
    id: '2',
    title: 'Kalabam',
    description:
      'Create multiplayer quizzes for class activities or interactive presentations.',
    images: [
      { src: '/img/projects/kalabam-ipad.png', alt: 'Dashboard' },
      { src: '/img/projects/kalabam-iphone.png', alt: 'Home Page' },
    ],
    homepage: 'https://kalabam.com',
    technologies: [
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: ChakraUI, color: '#319795' },
      // { name: 'Amazon Web Services', icon: SiAmazonaws, color: '#232F3E' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
    ],
  },
  {
    id: '3',
    title: 'Why Pigeons',
    description: 'Quick food delivery right to your door.',
    images: [{ src: '/img/projects/pigeons-ipad.png', alt: 'Restaurant Page' }],
    github: 'https://github.com/chr-ge/why-pigeons',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
    ],
  },
]

export default projects
