pragma solidity ^0.4.2;

contract BubbleSort {

	function mergeSort (arr) {
	  if (arr.length === 1) {
	    // return once we hit an array with a single item
	    return arr
	  }

	  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
	  const left = arr.slice(0, middle) // items on the left side
	  const right = arr.slice(middle) // items on the right side

	  return merge(
	    mergeSort(left),
	    mergeSort(right)
	  )
	}


	function merge (left, right) {
	  let result = []
	  let indexLeft = 0
	  let indexRight = 0

	  while (indexLeft < left.length && indexRight < right.length) {
	    if (left[indexLeft] < right[indexRight]) {
	      result.push(left[indexLeft])
	      indexLeft++
	    } else {
	      result.push(right[indexRight])
	      indexRight++
	    }
	  }

	  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
	}

    function makeAndSort(uint amount) returns(uint size) {
	uint8[16] memory items = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
	uint length;
	uint k;
	uint i;
	uint j;
	uint8 tmp;

	//items = [10,9,8,7,6,5,4,3,2,1];
    	length = items.length;

    	for (k = 0; k < amount; k++) { 
    	for (i = 0; i < length; i++) { 
		for (j = 0; j < (length - i - 1); j++) { 

		    	if(items[j] > items[j+1]) {

		        	tmp = items[j]; 
		        	items[j] = items[j+1];
		        	items[j+1] = tmp;
		    	}
		}        
    	}
	}

	console.log("Buuble Sort End", tx.receipt.gasUsed);
        return amount;
    }
}

/*
var account_one = "0x5d1238f281a8eef8476d972f743f4e8baabb2e0d"; // an address
BubbleSort.deployed().then(function(instance) { return instance.makeAndSort.call(10, {from: account_one}); });

*/
