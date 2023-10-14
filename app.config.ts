export default defineAppConfig({
  docus: {
    title: 'Instagram Developer Options',
    description: 'Instagram developer options documentations.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: '',
      github: 'mamiiblt',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      instagram: 'mamiiblt'
    },

    github: {
      dir: '.starters/default/content',
      branch: 'maces',
      repo: 'ig_dev_mode_experiments',
      owner: 'mamiiblt',
      edit: false
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: true,
      title: 'Instagram Developer Options'
    },

    footer: {
      credits: {
        icon: '',
        text: 'Writed by mamiiblt.',
        href: 'https://instagram.com/mamiiblt'
      },

      fluid: true
    }
  }
})