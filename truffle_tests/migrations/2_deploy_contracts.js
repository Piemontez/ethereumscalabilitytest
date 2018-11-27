const StringStore = artifacts.require("StringStore");
const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

module.exports = function(deployer) {
  deployer.deploy(StringStore);
  deployer.deploy(ForArray);
  deployer.deploy(ForMatrix);

  deployer.deploy(BubbleSort);
  deployer.deploy(QuickSort);
  deployer.deploy(MergeSort);
};
