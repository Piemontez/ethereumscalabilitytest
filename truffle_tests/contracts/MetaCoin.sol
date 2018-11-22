pragma solidity ^0.4.2;

contract MetaCoin {
    mapping (address => uint) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function MetaCoin() {
        balances[tx.origin] = 10000;
    }

    function sendCoin(address receiver, uint amount) returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalanceInEth(address addr) returns(uint){
	return getBalance(addr) * 2;
        //return ConvertLib.convert(getBalance(addr),2);
    }

    function getBalance(address addr) returns(uint) {
        return balances[addr];
    }
}

/*
var account_one = "0x1234..."; // an address
var account_two = "0xabcd..."; // another address

MetaCoin.deployed().then(function(instance) { return instance.getBalance.call(account_one, {from: account_one}); })

MetaCoin.deployed().then(function(instance) { return instance.sendCoin(account_two, 10, {from: account_one}); }).then(function(result) { console.log("Transaction successful!") });
*/
