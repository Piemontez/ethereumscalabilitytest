pragma solidity ^0.4.2;

contract QuickSort {

	function quickSort (uint32[] memory a) internal {
		uint32 i;
		uint32[] memory s = new uint32[](a.length);
		uint32 v;
		uint32 t;
		uint32 p;
		uint32 x;
		uint32 y;
		uint32 l;
		uint32 r;


    l = 0;
    r = uint32(a.length - 1);

    i = 2;
    s[0] = l;
    s[0] = r;

    while (i > 0) {
        r = s[--i];
        l = s[--i];

        if (l < r) {
            // partition

            x = l;
            y = r - 1;

            p = l;
            v = a[p];
            a[p] = a[r];

            while (true) {
                while (
                    x <= y &&
                    a[x] < v) {
                    x++;
								}
                while (
                    x <= y &&
                    a[y] >= v) {
                    y--;
								}
                if (x > y)
                    break;
                t = a[x];
                a[x] = a[y];
                a[y] = t;
            }

            a[r] = a[x];
            a[x] = v;

            // end

            s[i++] = l;
            s[i++] = x - 1;
            s[i++] = x + 1;
            s[i++] = r;
        }
    }
	}

	function execute(uint32 amount) public returns(uint32 size) {
		uint32[] memory items = new uint32[](amount);
		uint32 k;
		for (k = 0; k < amount; k++) { items[k] = uint32(amount-k); }

    QuickSort.quickSort(items);

    return amount;
  }
}
