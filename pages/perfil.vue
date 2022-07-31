<template>
  <v-container>
    <h1>Perfil</h1>
    <v-card flat>
      <v-card-title>
        {{ $auth.user.username }}
      </v-card-title>
      <v-card-text>
        <p>
          <b>PublicKey:</b> {{ $auth.user.wallet.publicKey }}
        </p>
        <p v-if="show">
          <b>PrivateKey:</b> {{ $auth.user.wallet.privateKey2 }}

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>mdi-eye-off</v-icon>
          </v-btn>
        </p>
        <p v-else>
          <b>PrivateKey:</b> {{ '******************************************************************' }}

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </p>
      </v-card-text>
    </v-card>
    <h1>Certificados</h1>
    <v-card flat>
      <v-card-title>
        {{ $auth.user.username }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
