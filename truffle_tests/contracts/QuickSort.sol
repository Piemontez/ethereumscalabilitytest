pragma solidity ^0.4.2;

contract QuickSort {

	function partition(uint8[] items, uint8 left, uint8 right) returns(uint8 leftResult) {
	    uint8 pivot  = items[(right + left) / 2];
	    uint8 i      = left;
	    uint8 j      = right;
			uint8 temp;

	    while (i <= j) {

	        while (items[i] < pivot) {
	            i++;
	        }

	        while (items[j] > pivot) {
	            j--;
	        }

	        if (i <= j) {
							temp = items[i];
							items[i] = items[j];
							items[j] = temp;

	            i++;
	            j--;
	        }
	    }

	    return i;
	}

	function quickSort (uint8[] items, uint8 left, uint8 right) returns(uint8[] ordened)  {
	  uint8 index;

	  if (items.length > 1) {
			index = QuickSort.partition(items, left, right);

			if (left < index - 1) {
		    QuickSort.quickSort(items, left, index - 1);
			}

			if (index < right) {
		    QuickSort.quickSort(items, index, right);
			}

	  }

	  return items;
	}

	function makeAndSort(uint amount) public returns(uint size) {
		uint8[] memory items = new uint8[](16);
		uint k;
		for (k = 0; k < 16; k++) { items[k] = uint8(16-k); }


    for (k = 0; k < amount; k++) {
      QuickSort.quickSort(items, 0, uint8(items.length) - 1);
    }

    return amount;
  }
}
