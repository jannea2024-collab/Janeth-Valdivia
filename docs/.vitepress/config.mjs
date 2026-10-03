import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Janeth-Valdivia/',
  lang: 'es-MX',
  title: 'Wiki Janeth Valdivia',
  description:
    'Enciclopedia pública del rastro documentado de Janeth Valdivia Pérez: investigación, comunidad y field-building de AI Safety en México.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap'
      }
    ]
  ],
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: 'Janeth Valdivia',
    nav: [
      { text: 'Portada', link: '/' },
      { text: 'Artículo', link: '/articulo' }
    ],
    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Portada', link: '/' },
          { text: 'Artículo', link: '/articulo' }
        ]
      }
    ],
    outline: { label: 'En esta página', level: [2, 3] },
    search: { provider: 'local', options: { translations: { button: { buttonText: 'Buscar' } } } },
    lastUpdated: { text: 'Actualizado' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/janeth-valdivia-b90087111' }
    ],
    footer: {
      message: 'Solo fuentes públicas. Los homónimos están excluidos de forma explícita.',
      copyright: 'Wiki documental · compilada el 2 de octubre de 2026'
    }
  }
})
