pragma solidity ^0.4.24;

contract StoreInt {
  uint256 public total = 0;

  function add(uint256 val) public {
    total += val;
  }

  function execute(uint32 amount) public returns(uint32 size) {

    uint32 k;
    for (k = 0; k < amount; k++) {
      IntAddOp.add(1);
    }

    return amount;
  }
}
