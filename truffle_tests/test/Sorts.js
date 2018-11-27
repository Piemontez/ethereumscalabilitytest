const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

let results = [];

for (let x = 1; x < 2; x++) {
  let ammout = Math.pow(2, x);

  contract("ForArray", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await ForArray.deployed();

      let result = await contract.execute(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + (result.receipt||{}).gasUsed||0);
      console.log(result);
    });
  });

  contract("ForMatrix", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await ForMatrix.deployed();

      let result = await contract.execute(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + (result.receipt||{}).gasUsed||0);
    });
  });

  contract("BubbleSort", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await BubbleSort.deployed();

      let result = await contract.makeAndSort(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + (result.receipt||{}).gasUsed||0);
    });
  });

  contract("QuickSort", accounts => {
    it("Sort:" + ammout, async () => {
      const sort = await QuickSort.deployed();
      let result = await sort.makeAndSort(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + (result.receipt||{}).gasUsed||0);
    });
  });

  contract("MergeSort", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await MergeSort.deployed();

      let result = await contract.makeAndSort(ammout, { from: accounts[0] });
      console.log("Gás utilizado:" + (result.receipt||{}).gasUsed||0);
    });
  });
}

contract("Conclude results", accounts => {
  it("Making results:", async () => {

  });
});
