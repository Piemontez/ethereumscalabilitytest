pragma solidity ^0.4.24;

contract StringStore {
  string public stringStore = "";

  function set(string x) public {
    stringStore = x;
  }

  function execute(uint32 amount) public returns(uint32 size) {
    string memory newString = new string(amount);
    bytes memory byteString = bytes(newString);

    uint32 k;
    for (k = 0; k < amount; k++) {
      byteString[k] = byte(48 + (k % 9));
    }

    StringStore.set(string(byteString));

    return amount;
  }
}
