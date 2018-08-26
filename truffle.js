module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,     // Ganache software
      network_id: "*" // Match any network id
    }, 
    ganache: {
      host: "127.0.0.1",
      port: 7545,     // Ganache software
      network_id: "*", // Match any network id
      
      gas: 6000000 // Gas limit used for deploys
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x940c04c8d13b7abfd4704fe8a55794f0d5d48827", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 6000000 // Gas limit used for deploys
    }
  }
};
