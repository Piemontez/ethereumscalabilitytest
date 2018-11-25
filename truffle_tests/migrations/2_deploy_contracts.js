//const MyStringStore = artifacts.require("MyStringStore");
//const MetaCoin = artifacts.require("MetaCoin");
const BubbleSort = artifacts.require("BubbleSort");
const MergeSort = artifacts.require("MergeSort");

module.exports = function(deployer) {
  deployer.deploy(BubbleSort);
  deployer.deploy(MergeSort);
};
