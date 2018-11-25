const MyStringStore = artifacts.require("MyStringStore");
const MetaCoin = artifacts.require("MetaCoin");
const BubbleSort = artifacts.require("BubbleSort");

module.exports = function(deployer) {
  deployer.deploy(MetaCoin);
  deployer.deploy(MyStringStore);
  deployer.deploy(BubbleSort);
};
