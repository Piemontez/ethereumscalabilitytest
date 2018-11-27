//const MyStringStore = artifacts.require("MyStringStore");
//const MetaCoin = artifacts.require("MetaCoin");
const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const RecursiveMergeSort = artifacts.require("RecursiveMergeSort");

module.exports = function(deployer) {
  deployer.deploy(BubbleSort);
  deployer.deploy(RecursiveMergeSort);
};
