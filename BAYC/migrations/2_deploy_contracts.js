const BAYC = artifacts.require("BAYC");


module.exports = function(deployer) {
  deployer.deploy(BAYC, 'BAYC', 'BAYC', 100000);
};