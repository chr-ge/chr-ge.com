import { SiJavascript, SiTypescript } from 'react-icons/si'
import type { ContributionProps } from 'components/structure/OpenSource/Contribution'

export const contributions: ContributionProps[] = [
  {
    user: 'chr-ge',
    repository: 'react-column-select',
    role: {
      label: 'creator',
      color: 'green',
    },
    githubUrl: 'https://github.com/chr-ge/react-column-select',
    description: {
      en: 'React component to select options by transferring them from one column to another.',
      fr: "React component pour sélectionner des options en les transférant d'une colonne à une autre.",
    },
    topics: ['react', 'select', 'form'],
    language: {
      name: 'Typescript',
      icon: SiTypescript,
      color: '#3178C6',
    },
  },
  {
    user: 'astrofox-io',
    repository: 'astrofox',
    role: {
      label: 'contributor',
      color: 'orange',
    },
    githubUrl: 'https://github.com/astrofox-io/astrofox',
    description: {
      en: 'Astrofox is a motion graphics program that lets you turn audio into amazing videos.',
      fr: "Astrofox est un programme d'animation graphique qui vous permet de transformer l'audio en vidéos étonnantes.",
    },
    topics: ['audio', 'video', 'audio-visualizer'],
    language: {
      name: 'Javascript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
  },
]
