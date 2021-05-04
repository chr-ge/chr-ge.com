import { Global } from '@emotion/react'

const Fonts = () => (
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