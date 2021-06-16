import { FC } from 'react'
import { Global } from '@emotion/react'

const Fonts: FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Gilroy-ExtraBold.otf') format('opentype');
      }
    `}
  />
)
export default Fonts
