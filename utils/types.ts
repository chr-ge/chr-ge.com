import type { SkillProps } from 'components/structure/SkillSet/Skill'

export type Image = {
  src: string
  alt: string
}

export type Tag = {
  label: string
  colorScheme: string
}

export type SkillType = {
  category: string
  technologies: SkillProps[]
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
