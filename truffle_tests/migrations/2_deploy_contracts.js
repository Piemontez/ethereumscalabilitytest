const SingleLoop = artifacts.require("SingleLoop");
const DualLoop = artifacts.require("DualLoop");

const StoreChar = artifacts.require("StoreChar");
const StoreString = artifacts.require("StoreString");
const StoreInt = artifacts.require("StoreInt");
const MetaCoin = artifacts.require("MetaCoin");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

module.exports = function(deployer) {
  deployer.deploy(SingleLoop);
  deployer.deploy(DualLoop);

  deployer.deploy(StoreChar);
  deployer.deploy(StoreString);
  deployer.deploy(StoreInt);

  deployer.deploy(BubbleSort);
  deployer.deploy(QuickSort);
  deployer.deploy(MergeSort);
  
  deployer.deploy(MetaCoin);
};
