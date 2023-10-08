import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
import HypzzImage from 'public/img/projects/hypzz.png'
import KalabamImage from 'public/img/projects/kalabam.png'
import WhyPigeonsImage from 'public/img/projects/why-pigeons-full.png'
import type { Project } from 'utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Hypzz',
    description: {
      en: 'Connecting influencers and brands to collaborate on product advertisements and more.',
      fr: 'Nous connectons des influenceurs et des marques pour collaborer sur des publicités de produits et plus encore.',
    },
    image: { src: HypzzImage },
    homepage: 'https://hypzz.chr-ge.com/?ref=chr-ge.com',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Kalabam',
    description: {
      en: 'Create multiplayer quizzes for class activities or interactive presentations.',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    image: { src: KalabamImage },
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
    isShowcased: true,
  },
  {
    id: '3',
    title: 'Why Pigeons',
    description: {
      en: 'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
      fr: 'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    },
    image: { src: WhyPigeonsImage },
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
    isShowcased: false,
  },
]
