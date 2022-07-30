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
  <!-- <section class="container">
    <div class="col-md-6 offset-md-3 mt-3">
      <form
        autocomplete="off"
        @submit.stop.prevent="handleSubmit"
      >
        <div class="form-group">
          <div
            v-b-tooltip.hover
            title="Needed for certification (Optional)"
          >
            <label for="email">Document Number CC/DNI</label>
            <AlertCircleOutline :size="20" />
          </div>
          <b-form-input
            id="usercc"
            v-model="usercc"
            :autofocus="true"
            type="number"
            placeholder="000000"
          />
        </div>
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
          <label for="password">Expedition date CC</label>
          <b-form-input
            id="password"
            v-model="password"
            :autofocus="true"
            label="Expedition date"
            class="form-control"
            placeholder="24/12/1970"
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
          Already have an account?
          <router-link
            :to="{ name: 'signin' }"
            tag="a"
          >
            Login Here
          </router-link>
        </p>
      </form>
    </div>
  </section> -->
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
export default {
  layout: 'landing',
  data() {
    return {
      email: '',
      password: '',
      username: '',
      usercc: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await this.$axios.post(
          apiUrl + '/auth/local/register',
          {
            userCC: this.usercc,
            username: this.email,
            email: this.email,
            password: this.password.toString()
          }
        )
        if (response.data.user && response.data.jwt) {
          this.setUser(JSON.stringify(response.data.user))
          this.setJwt(JSON.stringify(response.data.jwt))
          this.$router.push('/signin')
          alert(`user ${response.data.user.email} registered successfully!`)
        }
      } catch (err) {
        this.loading = false
        alert(err.message + ' User already registered' || 'An error occurred.')
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser',
      setJwt: 'auth/setJwt'
    })
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
