import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
} from 'react-icons/si'
import type { ProjectProps } from 'components/structure/SelectedProjects/Project'

export const projects: ProjectProps[] = [
  {
    id: '1',
    title: 'Kalabam',
    description: {
      en: 'Create multiplayer quizzes for class activities or interactive presentations.',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    images: [
      { src: '/img/projects/kalabam-ipad.png', alt: 'Dashboard' },
      { src: '/img/projects/kalabam-iphone.png', alt: 'Home Page' },
    ],
    homepage: 'https://kalabam.com/?ref=chr-ge.com',
    github: 'https://github.com/chr-ge/kalabam',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
  },
  {
    id: '2',
    title: 'Why Pigeons',
    description: {
      en: 'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
      fr: 'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    },
    images: [
      { src: '/img/projects/pigeons-ipad.png', alt: 'Restaurant Page' },
      {
        src: '/img/projects/pigeons-ipad-2.png',
        alt: 'Restaurant Page - Modal',
      },
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
