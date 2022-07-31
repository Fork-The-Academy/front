import Web3 from 'web3'

// const ContractKit = require('@celo/contractkit')

export default class Web3Service {
  constructor(env) {
    this.provider = undefined
  }

  async connect() {
    if (window.ethereum) {
      this.provider = await new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com/'))
    }
  }

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

    return parseInt(balance)
  }
}
