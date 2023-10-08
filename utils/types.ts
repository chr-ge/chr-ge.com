import type { StaticImageData } from 'next/legacy/image'
import type { IconProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export type Image = {
  src: StaticImageData
}

export type Tag = {
  label: string
  colorScheme: string
}

export type RoleType = {
  label: 'creator' | 'contributor'
  color: string
}

export type Skill = {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color: string
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
