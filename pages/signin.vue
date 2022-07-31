<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center">
          ¡Ingresa!
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
                Entrar
              </v-btn>

              <p class="text-center mt-3">
                ¿Aún no tienes cuenta?
                <nuxt-link
                  to="signup"
                >
                  Regístrate
                </nuxt-link>
              </p>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <section class="container">
      <div class="col-md-6 offset-md-3 mt-3">
        <form autocomplete="off" @submit.stop.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <b-form-input
              id="email"
              v-model="email"
              :autofocus="true"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password / CC Exp Date</label>
            <b-form-input
              id="password"
              v-model="password"
              :autofocus="true"
              label="password"
              type="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            :disabled="loading"
            type="submit"
            class="btn btn-primary btn-block mt-3"
          >
            Submit
          </button>
          <p class="text-center mt-3">
            Not account yet?
            <router-link :to="{ name: 'signup' }" tag="a">
              Register Here
            </router-link>
          </p>
        </form>
      </div>
    </section> -->
  </v-container>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      try {
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
              // icon: 'question',
              // showCancelButton: true,
              // cancelButtonText: 'No'
            })
        }
      }
      this.loading = false
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
