pragma solidity ^0.4.2;

contract MergeSort {

	function mergeSort (uint32[] memory array) internal pure {
	  if(array.length < 2) {
	    return;
	  }

	  uint32 step = 1;
	  uint32 startL;
		uint32 startR;

	  while(step < array.length) {
	    startL = 0;
	    startR = step;
	    while(startR + step <= array.length) {
	      MergeSort.mergeArrays(array, startL, startL + step, startR, startR + step);
	      startL = startR + step;
	      startR = startL + step;
	    }
	    if(startR < array.length) {
	      MergeSort.mergeArrays(array, startL, startL + step, startR, uint32(array.length - 1));
	    }
	    step *= 2;
	  }
	}

	function mergeArrays(uint32[] memory array, uint32 startL, uint32 stopL, uint32 startR, uint32 stopR) internal pure {
		uint32[] memory right = new uint32[](stopR - startR + 1);
		uint32[] memory left = new uint32[](stopL - startL + 1);

	  uint32 i;
		uint32 k;
		uint32 m;
		uint32 n;

	  i = 0;
	  for(k = startR; i < (right.length - 1);) {
	    right[i] = array[k];
			++i;
			++k;
	  }

		i = 0;
	  for(k = startL; i < (left.length - 1); ) {
	    left[i] = array[k];
			++i;
			++k;
	  }

	  right[right.length - 1] = (2**8)-1;
	  left[left.length - 1] = (2**8)-1;

	  m = 0;
		n = 0;
	  for(k = startL; k < stopR; ++k) {

	    if(left[m] <= right[n]) {
	      array[k] = left[m];
	      m++;
	    } else {
	      array[k] = right[n];
	      n++;
	    }
	  }
	}

	function execute(uint32 amount) public pure returns(uint32 size) {
		uint32[] memory items = new uint32[](amount);
		uint32 k;
    for (k = 0; k < amount; k++) { items[k] = uint32(amount-k); }

		MergeSort.mergeSort(items);

    return amount;
  }
}
