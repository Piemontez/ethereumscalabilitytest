const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const StringSize = artifacts.require("StringSize");
const StringChange = artifacts.require("StringChange");
const IntAddOp = artifacts.require("IntAddOp");
const MetaCoin = artifacts.require("MetaCoin");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

module.exports = function(deployer) {
  deployer.deploy(ForArray);
  deployer.deploy(ForMatrix);

  deployer.deploy(StringSize);
  deployer.deploy(StringChange);
  deployer.deploy(IntAddOp);

  deployer.deploy(BubbleSort);
  deployer.deploy(QuickSort);
  deployer.deploy(MergeSort);
};
