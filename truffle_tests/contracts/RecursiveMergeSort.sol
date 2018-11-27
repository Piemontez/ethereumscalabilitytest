pragma solidity ^0.4.2;

contract RecursiveMergeSort {

	function mergeSort (uint8[] arr) returns(uint8[] ordened)  {
	  if (arr.length == 1)
	    return arr;

	  uint8 middle = uint8(arr.length) / 2;
	  uint8[] memory left;// = arr.slice(0, middle);
	  uint8[] memory right;// = arr.slice(middle);

	  return RecursiveMergeSort.merge(
	    RecursiveMergeSort.mergeSort(left),
	    RecursiveMergeSort.mergeSort(right)
	  );
	}


	function merge (uint8[] left, uint8[] right) returns(uint8[] size) {
	  uint8[] memory result = new uint8[](left.length+right.length);
		uint8 nextpos = 0;
	  uint8 indexLeft = 0;
	  uint8 indexRight = 0;

	  while (indexLeft < left.length && indexRight < right.length) {
	    if (left[indexLeft] < right[indexRight]) {
	      result[nextpos] = left[indexLeft];
	      indexLeft++;
	    } else {
	      result[nextpos] = right[indexRight];
	      indexRight++;
	    }
			nextpos++;
	  }
		result[nextpos++] = left[indexLeft];
		result[nextpos] = right[indexRight];

	  return result;
	}

	function makeAndSort(uint amount) public returns(uint size) {
		uint8[] memory items = new uint8[](16);
		uint k;
		for (k = 0; k < 16; k++) { items[k] = uint8(16-k); }

    for (k = 0; k < amount; k++) {
			RecursiveMergeSort.mergeSort(items);
    }
    return amount;
  }
}
