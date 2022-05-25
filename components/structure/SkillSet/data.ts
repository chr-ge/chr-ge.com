import { IoLogoPwa } from 'react-icons/io5'
import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiExpress,
  SiGooglecloud,
  SiGraphql,
  SiHeroku,
  SiJava,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRuby,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { Javascript } from 'components/icons'
import type { SkillGroupProps } from './SkillGroup'

export const data: SkillGroupProps[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Ruby', icon: SiRuby, color: '#CC342D' },
      { name: 'Java', icon: SiJava, color: '#007396' },
    ],
  },
  {
    id: '2',
    category: 'front-end',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'React Native', icon: SiReact, color: 'gray.500' },
      { name: 'SCSS', icon: SiSass, color: '#CC6699' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Progressive Web App', icon: IoLogoPwa, color: '#5a0fc8' },
    ],
  },
  {
    id: '3',
    category: 'back-end',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'Ruby on Rails', icon: SiRuby, color: '#CC0000' },
    ],
  },
  {
    id: '4',
    category: 'cloud',
    skills: [
      { name: 'Amazon Web Services', icon: SiAmazonaws, color: '#232F3E' },
      { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
    ],
  },
  {
    id: '5',
    category: 'databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Amazon DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
]
