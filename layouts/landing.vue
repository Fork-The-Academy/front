<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <nuxt-link to="/">
        <img
          src="/2576276.svg"
          alt=""
          style="height: 50px"
        >
      </nuxt-link>
      <v-spacer />
      <v-btn
        v-if="!$auth.loggedIn"
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
        v-if="!$auth.loggedIn"
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

      <v-menu
        v-else
        v-model="showMenu"
        bottom
        left
        rounded
        offset-y
        max-width="250"
      >
        <template #activator="{ on }">
          <v-list-item
            style="max-width: 250px"
            class="header-profile"
            v-on="on"
          >
            <v-list-item-avatar>
              <v-img
                src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci84MzY3MTA4MDNlMDBjZDUzMWQwNjk2N2QzOTViMjQwZD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.7EfKqqE60Hdq9KMMNZeIKKZMd_YhQvKIRDWEvTjZDC4"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                style="justify-content: space-between; align-items: center"
                class="d-flex"
              >
                <span style="font-weight: 500;">{{ shortHash($auth.user.wallet.publicKey) }}
                </span>
                <v-icon
                  color="primary"
                  transition="fab-transition"
                >
                  {{ showMenu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-card
          class="shadow_cards"
          style="border-radius: 4px !important"
        >
          <v-list dense>
            <v-list-item-group color="primary">
              <!-- Perfil inversionista o usuario -->
              <template>
                <v-list-item
                  link
                  nuxt
                  class="text-left"
                  to="/cursos"
                >
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-book-open-blank-variant
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Cursos</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  link
                  nuxt
                  class="text-left"
                  to="/perfil"
                >
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-account-circle
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Perfil</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <!-- logout -->
                <v-list-item
                  link
                  class="text-left"
                  @click="logout"
                >
                  <v-list-item-icon color="primary">
                    <v-icon color="primary">
                      mdi-logout
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Salir</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      showMenu: false,
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
  },
  methods: {
    logout() {
      this.$swal
        .fire({
          title: '¿Está seguro de cerrar sesión?',
          confirmButtonText: 'Sí',
          // icon: 'question',
          showCancelButton: true,
          cancelButtonText: 'No'
        })
        .then((willValidate) => {
          if (willValidate.value) {
            this.$auth.logout()
          }
        })
    },
    shortHash(value) {
      const init = value.slice(0, 5)
      const final = value.slice(-4)
      return init + '...' + final
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
