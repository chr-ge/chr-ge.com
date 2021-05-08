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
  description_en: string
  description_fr: string
  images: Image[]
  homepage?: string
  github?: string
  technologies: TechnologyType[]
  tags: Tag[]
}
