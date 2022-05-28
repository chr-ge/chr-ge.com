import type { IconProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export type Image = {
  src: string
  alt: string
}

export type Tag = {
  label: string
  colorScheme: string
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

export type Skill = {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color: string
}
