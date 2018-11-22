const MyStringStore = artifacts.require("MyStringStore");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  deployer.deploy(MetaCoin);
};
