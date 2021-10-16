const siteConfig = {
  isProd: process.env.NODE_ENV === 'production',
  cloudflareToken: process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN || '',
  copyright: `© ${new Date().getFullYear()} George <chr-ge>`,
  seo: {
    title: 'Full-Stack Software Developer',
    titleTemplate: '%s // CHR-GE',
    description: 'George Christeas // Full-Stack Software Developer',
    siteUrl: 'https://chr-ge.com',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://chr-ge.com',
      title: 'CHR-GE // Full-Stack Software Developer',
      description: 'George Christeas // Full-Stack Software Developer',
      site_name: 'CHR-GE // Full-Stack Software Developer',
    },
    twitter: {
      cardType: 'summary',
    },
    languageAlternates: [{ hrefLang: 'fr', href: 'https://chr-ge.com/fr' }],
    additionalMetaTags: [
      { property: 'msapplication-TileColor', content: '#ffc40d' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#ffffff' },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#ffc40d',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'george@chr-ge.com',
  email_link: 'mailto:george@chr-ge.com',
  github: 'https://github.com/chr-ge',
  npm: 'https://www.npmjs.com/~chr-ge',
  linkedin: 'https://www.linkedin.com/in/chr-ge/',
}

export default siteConfig
