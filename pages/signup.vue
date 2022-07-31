<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center">
          ¡Regístrate!
        </h1>
      </v-col>
      <v-col cols="12">
        <v-card
          style="max-width: 600px"
          class="ma-auto"
        >
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                autofocus
                type="email"
                label="Email"
                required
              />
              <v-text-field
                v-model="password"
                :autofocus="true"
                label="Contraseña"
                type="password"
                required
              />
              <v-btn
                block
                :disabled="loading"
                dark
                color="primary"
                @click="handleSubmit()"
              >
                Registrarme
              </v-btn>

              <p class="text-center mt-3">
                ¿Ya tienes cuenta?
                <nuxt-link
                  to="signin"
                >
                  Ingresa
                </nuxt-link>
              </p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      email: '',
      password: '',
      username: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.$axios.setToken(false)
        await this.$axios.post('auth/local/register', {
          username: this.email,
          email: this.email,
          password: this.password
        })
        await this.$auth.loginWith('local', {
          data: { identifier: this.email, password: this.password }
        })
      } catch (e) {
        console.log('Error', e.response)
        if (e.response) {
          this.$swal
            .fire({
              title: e.response.data.message[0].messages[0].message,
              confirmButtonText: 'Ok'
            })
        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  height: 100% !important;
  display: flex;
  align-items: center;
}
h1 {
  font-size: 50px;
  color: #fff;
}
</style>
