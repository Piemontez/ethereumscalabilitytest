const Web3 = require('web3');

const TruffleConfig = require('../truffle');

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, addresses) {

//  const config = TruffleConfig.networks[network];
//
//  process.env.ACCOUNT_PASSWORD = "mcatestethereum";
//  console.log("........");
//  console.log(process.env.ACCOUNT_PASSWORD);
//  console.log("........");
//
//  if (process.env.ACCOUNT_PASSWORD) {
//    const web3 = new Web3(new Web3.providers.HttpProvider('http://' + config.host + ':' + config.port));
//    console.log('>> Unlocking account ' + config.from);
//    console.log("..............");
//    console.log(web3);
//    console.log("..............");
//    console.log(web3.personal);
//    console.log("..............");
//    console.log(web3.personal.unlockAccount);
//    web3.personal.unlockAccount(config.from, process.env.ACCOUNT_PASSWORD, 36000);
//  }

  deployer.deploy(Migrations);
};
