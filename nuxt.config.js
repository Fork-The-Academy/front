import colors from 'vuetify/es5/util/colors'

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'FTA | Fork The Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DVS project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  /*
   ** Expose env variables
   */
  env: {
    API_URL: process.env.API_URL
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/vuetify', { iconfont: 'mdi' }]
  ],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['@/assets/variables.scss'],
    theme: {
      options: { customProperties: true },
      dark: false,
      light: true,
      themes: {
        light: {
          primary: '#1e1ea8',
          secondary: '#37F58D',
          tertiary: {
            base: '#45454d',
            lighten1: '#eeeeee',
            darken1: '#1d1d20',
            darken2: '#f9fff9'
          },
          accent: {
            base: '#2b2b2b',
            darken1: '#3d3d3d'
          },
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        dark: {
          primary: '#1e1ea8',
          secondary: '#37F58D',
          tertiary: {
            base: '#9B7EF4',
            lighten1: '#757575',
            darken1: '#1e1ea8',
            darken2: '#3D3D3D'
          },
          accent: {
            base: '#E0E0E0',
            darken1: '#f2f2f2'
          },
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}
