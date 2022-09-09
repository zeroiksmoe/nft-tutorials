const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = process.env.MNEMONIC;
const providerKey = "";

module.exports = {
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
  },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
  matic: {
    provider: () => new HDWalletProvider(mnemonic, `https://polygon-rpc.com/`),
    network_id: "137",
    confirmations: 2,
    timeoutBlocks: 200,
    skipDryRun: true,
    gasPrice: 470000000000,
  },
  kovan: {
    provider: () => new HDWalletProvider({
      mnemonic,
      providerOrUrl:
        '',
      chainId: 42,
    }),
    network_id: 42,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  },
  rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, ``),
    network_id: 4,       // Ropsten's id
    gas: 5500000,        // Ropsten has a lower block limit than mainnet
    confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  },
},
  compilers: {
     solc: { 
       version: '0.7' // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};
