const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.16'
    }
  },
  networks: {
    inf_Ebay_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/abdulsagheer/Downloads/Untitled.env', 'utf-8'), "https://goerli.infura.io/v3/a4581e8331494e06869205553225d1a6")
    }
  }
};
