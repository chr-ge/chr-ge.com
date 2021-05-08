const siteConfig = {
  copyright: `© ${new Date().getFullYear()} George <chr-ge>`,
  seo: {
    title: 'Full-Stack Software Developer',
    titleTemplate: '%s // CHR-GE',
    description: 'Full-Stack Software Developer',
    siteUrl: 'https://chr-ge.com',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://chr-ge.com',
      title: 'CHR-GE // Full-Stack Software Developer',
      description: 'Full-Stack Software Developer',
      site_name: 'CHR-GE: Full-Stack Software Developer',
    },
    languageAlternates: [{ hrefLang: 'fr', href: 'https://chr-ge.com/fr' }],
  },
  email: 'george@chr-ge.com',
  email_link: 'mailto:george@chr-ge.com',
  github: 'https://github.com/chr-ge',
  npm: 'https://www.npmjs.com/~chr-ge',
}

export default siteConfig
