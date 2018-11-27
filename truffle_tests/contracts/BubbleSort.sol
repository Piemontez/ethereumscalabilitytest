pragma solidity ^0.4.2;

contract BubbleSort {

  function bubbleSort (uint32[] memory items) internal pure returns(uint32[] ordened)  {
    uint length;
    uint i;
    uint j;
    uint32 tmp;

    length = items.length;

    for (i = 0; i < length; i++) {
      for (j = 0; j < (length - i - 1); j++) {

          if(items[j] > items[j+1]) {

              tmp = items[j];
              items[j] = items[j+1];
              items[j+1] = tmp;
          }
      }
    }

    return items;
  }

  function makeAndSort(uint32 amount) public pure returns(uint32 size) {
    uint32[] memory items = new uint32[](amount);
    uint32 k;
    for (k = 0; k < amount; k++) { items[k] = uint32(amount-k); }

    BubbleSort.bubbleSort(items);

    return amount;
  }
}
