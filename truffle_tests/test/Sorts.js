const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

let results = {
  ForArray: [],
  ForMatrix: [],
  BubbleSort: [],
  MergeSort: [],
  QuickSort: [],
};

for (let x = 1; x < 8; x++) {
  let ammout = Math.pow(2, x);

  contract("ForArray", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await ForArray.deployed();

      let result = await contract.execute(ammout, { from: accounts[0] });

      results.ForArray.push({
        listSize: ammout,
        gasUsed: (result.receipt||{}).gasUsed||0
      });
    });
  });

  contract("ForMatrix", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await ForMatrix.deployed();

      let result = await contract.execute(ammout, { from: accounts[0] });

      results.ForMatrix.push({
        listSize: ammout,
        gasUsed: (result.receipt||{}).gasUsed||0
      });

    });
  });

  contract("BubbleSort", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await BubbleSort.deployed();

      let result = await contract.makeAndSort(ammout, { from: accounts[0] });

      results.BubbleSort.push({
        listSize: ammout,
        gasUsed: (result.receipt||{}).gasUsed||0
      });

    });
  });

  contract("QuickSort", accounts => {
    it("Sort:" + ammout, async () => {
      const sort = await QuickSort.deployed();
      let result = await sort.makeAndSort(ammout, { from: accounts[0] });

      results.QuickSort.push({
        listSize: ammout,
        gasUsed: (result.receipt||{}).gasUsed||0
      });

    });
  });

  contract("MergeSort", accounts => {
    it("Sort:" + ammout, async () => {
      const contract = await MergeSort.deployed();

      let result = await contract.makeAndSort(ammout, { from: accounts[0] });

      results.MergeSort.push({
        listSize: ammout,
        gasUsed: (result.receipt||{}).gasUsed||0
      });

    });
  });
}

contract("Conclude results", accounts => {
  it("Making results:", async () => {
    console.log("--------------------");
    console.log("Resultado dos testes");
    console.log("--------------------");
    console.log(results)
    console.log("--------------------");
  });
});
