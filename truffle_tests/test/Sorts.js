const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const RecursiveMergeSort = artifacts.require("RecursiveMergeSort");

for (let x = 0; x < 3; x++) {
  let ammout = Math.pow(10, x);

  contract("BubbleSort", accounts => {
    it("Sort:" + ammout + " x 16", async () => {
      const sort = await BubbleSort.deployed();
      // let ammoutRs = await sort.makeAndSort.call(ammout, { from: accounts[0] });
      // assert.equal(ammout,ammoutRs.toNumber(), "Bubble Not executed!");
      let result = await sort.makeAndSort(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + result.receipt.gasUsed);
    });
  });

  contract("QuickSort", accounts => {
    it("Sort:" + ammout, async () => {
      const sort = await QuickSort.deployed();
      // let ammoutRs = await sort.makeAndSort.call(ammout, { from: accounts[0] });
      // assert.equal(ammout,ammoutRs.toNumber(), "Bubble Not executed!");
      let result = await sort.makeAndSort(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + result.receipt.gasUsed);
    });
  });

  // contract("RecursiveMergeSort", accounts => {
  //   it("Sort:" + ammout, async () => {
  //     const sort = await RecursiveMergeSort.deployed();
  //     let ammoutRs = await sort.makeAndSort.call(ammout, { from: accounts[0] });
  //     assert.equal(ammout,ammoutRs.toNumber(), "Bubble Not executed!");
  //   });
  // });

}
