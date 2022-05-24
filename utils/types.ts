import { IconProps } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type Image = {
  src: string
  alt: string
}

export type TechnologyType = {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color?: string
}

type Tag = {
  label: string
  colorScheme: string
}

export type ProjectType = {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  images: Image[]
  homepage?: string
  github?: string
  technologies: TechnologyType[]
  tags: Tag[]
}

export type SkillType = {
  category: string
  technologies: TechnologyType[]
}

export type RoleType = {
  label: 'creator' | 'contributor'
  color: string
}

export type Bookmark = {
  _id: string
  title: string
  link: string
  cover: string
  tags: string[]
}
