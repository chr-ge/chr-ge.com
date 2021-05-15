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
import type { ProjectType } from 'types'

const projects: ProjectType[] = [
  {
    id: '1',
    title: 'Hotel at Home',
    description_en: 'Rent a cottage in Quebec.',
    description_fr: 'Louez un chalet au Québec.',
    images: [
      { alt: 'Property Page', src: '/img/projects/halm-ipad.png' },
      { alt: 'Home Page', src: '/img/projects/halm-iphone.png' },
    ],
    homepage: '',
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
      { label: 'website', colorScheme: 'cyan' },
    ],
  },
  {
    id: '2',
    title: 'Kalabam',
    description_en:
      'Create multiplayer quizzes for class activities or interactive presentations.',
    description_fr:
      'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    images: [
      { src: '/img/projects/kalabam-ipad.png', alt: 'Dashboard' },
      { src: '/img/projects/kalabam-iphone.png', alt: 'Home Page' },
    ],
    homepage: 'https://kalabam.com',
    github: 'https://github.com/chr-ge/kalabam',
    technologies: [
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: ChakraUI, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
  },
  {
    id: '3',
    title: 'Why Pigeons',
    description_en:
      'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
    description_fr:
      'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    images: [
      { src: '/img/projects/pigeons-ipad.png', alt: 'Restaurant Page' },
      { src: '/img/projects/pigeons-ipad-2.png', alt: 'Restaurant Page - Modal' },
    ],
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
      { label: 'website', colorScheme: 'cyan' },
    ],
  },
]

export default projects
