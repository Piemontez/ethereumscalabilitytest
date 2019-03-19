pragma solidity ^0.4.2;

contract MetaCoin {
  mapping (address => uint) balances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);

  function MetaCoin() {
    balances[tx.origin] = 10000;
  }

  function sendCoin(address receiver, uint amount) returns(bool sufficient) {
    if (balances[msg.sender] < amount)
      return false;

    balances[msg.sender] -= amount;
    balances[receiver] += amount;

    Transfer(msg.sender, receiver, amount);
    return true;
  }

  function getBalanceInEth(address addr) returns(uint) {
    return getBalance(addr) * 2;
  }

  function getBalance(address addr) returns(uint) {
    return balances[addr];
  }

  function execute(uint32 amount) public pure returns(uint32 size) {
    uint32 k;
    for (k = 0; k < amount; k++) {
      sendCoin("0xf1036746cc1d65dd7cbe9157ef8f7534bf9ec3f0", 10);
    }

    return amount;
  }
}
