import {
  SiAmazonaws,
  SiGooglecloud,
  SiGraphql,
  SiHeroku,
  SiJava,
  SiLaravel,
  SiMongodb,
  SiNetlify,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRuby,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { Express, Javascript, Vercel } from 'components/Icons'
import type { SkillType } from 'types'
import { IoLogoPwa } from 'react-icons/io5'

const skills: SkillType[] = [
  {
    category: 'Languages',
    technologies: [
      { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Ruby', icon: SiRuby, color: '#CC342D' },
      { name: 'Java', icon: SiJava, color: '#007396' },
    ],
  },
  {
    category: 'Front-End',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: SiReact, color: 'gray.500' },
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Progressive Web App', icon: IoLogoPwa, color: '#5a0fc8' },
    ],
  },
  {
    category: 'Back-End',
    technologies: [
      { name: 'Node.js', icon: SiNodeDotJs, color: '#339933' },
      { name: 'Next.js', icon: SiNextDotJs, color: '#000000' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Express', icon: Express, color: '#000000' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Ruby on Rails', icon: SiRuby, color: '#CC0000' },
    ],
  },
  {
    category: 'Cloud',
    technologies: [
      { name: 'Amazon Web Services', icon: SiAmazonaws, color: '#232F3E' },
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Vercel', icon: Vercel, color: '#000000' },
      { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
]

export default skills
