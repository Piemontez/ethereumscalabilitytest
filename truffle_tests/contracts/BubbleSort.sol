pragma solidity ^0.4.2;

contract BubbleSort {

  function bubbleSort (uint8[] memory items) returns(uint8[] ordened)  {
    uint length;
    uint i;
    uint j;
    uint8 tmp;

    //items = [10,9,8,7,6,5,4,3,2,1];
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

  function makeAndSort(uint amount) public returns(uint size) {
    uint8[] memory items = new uint8[](16);
    uint k;
    for (k = 0; k < 16; k++) { items[k] = uint8(16-k); }

    for (k = 0; k < amount; k++) {
      BubbleSort.bubbleSort(items);
    }

    return amount;
  }
}
