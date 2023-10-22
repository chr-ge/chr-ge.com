import { Global } from '@emotion/react'

export const Fonts: React.FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Hanson';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/hanson-bold.ttf') format('truetype');
      }
    `}
  />
)
