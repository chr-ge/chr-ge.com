import { Global } from '@emotion/react'

export const Fonts: React.FC = () => (
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
