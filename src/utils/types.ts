import type { StaticImageData } from 'next/image'
import type { IconProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export interface Image {
  src: StaticImageData
}

export interface Tag {
  label: string
  colorScheme: string
}

export interface RoleType {
  label: 'creator' | 'contributor'
  color: string
}

export interface Skill {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color: string
}

export interface SkillGroup {
  id: string
  category: string
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  image: Image
  homepage?: string
  github?: string
  technologies: Skill[]
  tags: Tag[]
  isShowcased: boolean
}
