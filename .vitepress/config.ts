import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'uvic linux',
  description: 'the homepage for the university of victoria\'s linux club',
	// TODO add opengraph metadata
	// TODO change all metadata
  head: [
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://uviclinux.ca/logo.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
		// TODO add own tracking script
    // [
    //   'script',
    //   {
    //     src: '',
    //     'data-site': '',
    //     'data-spa': '',
    //     defer: ''
    //   }
    // ]
  ]
})
