<template>
  <v-app dark>
    <v-navigation-drawer
      id="drawer"
      fixed
      dark
      app
      style="max-height: calc(100% - 16px); margin: 8px; border-radius: 20px"
    >
      <v-list>
        <v-list-item
          to="/"
        >
          <v-list-item-content>
            ForkTheAcademy
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-html="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          icon: 'mdi-book-open-blank-variant',
          title: 'Cursos',
          to: '/courses'
        },
        {
          icon: 'mdi-account-circle',
          title: 'Perfil',
          to: '/perfil'
        }
      ]
    }
  }
}
</script>

<style>
a:hover {
  text-decoration: none !important;
}

#drawer {
  background: rgb(35,22,251);
  background: linear-gradient(148deg, rgba(35,22,251,1) 0%, rgba(30,30,168,1) 35%, rgba(26,55,180,1) 67%, rgba(0,212,255,1) 100%) !important;
}

.primary-button {
  background: linear-gradient(148deg, rgba(35,22,251,1) 0%, rgba(30,30,168,1) 35%, rgba(26,55,180,1) 67%, rgba(0,212,255,1) 100%) !important;
}
</style>
