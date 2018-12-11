pragma solidity ^0.4.24;

contract StringChange {
  string public stStore = "";

  function set(string x) public {
    stStore = x;
  }

  function execute(uint32 amount)
    public returns(uint32 size) {

    string memory newString = new string(amount);
    bytes memory byteString = bytes(newString);

    uint32 k;
    for (k = 0; k < amount; k++) {
      byteString[0] = byte(48 + (k % 9));

      StringChange.set(string(byteString));
    }

    return amount;
  }
}
