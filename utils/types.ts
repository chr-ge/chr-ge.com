import type { StaticImageData } from 'next/legacy/image'
import type { IconProps } from '@chakra-ui/react'
import type { IconType } from 'react-icons'

export type Image = {
  src: StaticImageData
  dimensions: {
    width: number
    height: number
  }
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
