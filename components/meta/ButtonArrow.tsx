import { chakra, type StyleProps } from '@chakra-ui/react'

export const ButtonArrow: React.FC<StyleProps> = (props) => (
  <chakra.svg
    width='36'
    height='4'
    viewBox='0 0 144 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M143.707 8.70711C144.098 8.31658 144.098 7.68342 143.707 7.29289L137.343 0.928932C136.953 0.538408 136.319 0.538408 135.929 0.928932C135.538 1.31946 135.538 1.95262 135.929 2.34315L141.586 8L135.929 13.6569C135.538 14.0474 135.538 14.6805 135.929 15.0711C136.319 15.4616 136.953 15.4616 137.343 15.0711L143.707 8.70711ZM0 9H143V7H0V9Z'
      fill='#F1B237'
    />
  </chakra.svg>
)
