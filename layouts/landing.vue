<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <nuxt-link to="/">
        Fork The Academy
      </nuxt-link>
      <v-spacer />
      <v-btn
        link
        rounded
        nuxt
        dark
        color="primary"
        to="signin"
        class="primary-button"
      >
        <v-icon>mdi-account-circle</v-icon>
        Ingresar
      </v-btn>
      <v-btn
        link
        rounded
        nuxt
        dark
        color="primary"
        to="signup"
        class="ml-2 primary-button"
      >
        <v-icon>mdi-user</v-icon>
        Registrarme
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.v-main {
  background: rgb(138, 132, 241);
  background: linear-gradient(
    148deg,
    rgba(138, 132, 241, 1) 0%,
    rgba(30, 30, 168, 1) 35%,
    rgba(26, 55, 180, 1) 67%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>
