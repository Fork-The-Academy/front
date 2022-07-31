import Web3 from '@/services/web3.js'

export default ({ app, env }, inject) => {
  const web3Service = new Web3(env)
  inject('celo', web3Service)
}
