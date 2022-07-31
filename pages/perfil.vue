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
        Total: {{balance}}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import Web3 from 'web3'

export default {
  data() {
    return {
      show: false,
      provider: undefined,
      balance: 0
    }
  },
  mounted() {
    this.getBalance('0xce15c48d837732acefc90190dc6e122fa0796aac', this.$auth.user.wallet.publicKey)
  },
  methods: {
    async getBalance(tokenAddress, publicKey) {
      this.provider = await new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com/'))

      const minABI = [
        // balanceOf
        {
          constant: true,
          inputs: [{ name: '_owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: 'balance', type: 'uint256' }],
          type: 'function'
        },
        // decimals
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: '', type: 'uint8' }],
          type: 'function'
        }
      ]

      const contract = new this.provider.eth.Contract(minABI, tokenAddress)

      console.log('Contract: ', contract)

      const balance = await contract.methods.balanceOf(publicKey).call()

      console.log('Balance: ', balance)

      this.balance = balance

      return parseInt(balance)
    }
  }
}
</script>
