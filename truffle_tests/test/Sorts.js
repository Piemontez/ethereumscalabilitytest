const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const StringStore = artifacts.require("StringStore");
const Sum = artifacts.require("Sum");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

/*
* Função generica, executa a função "execute" do contrato e calcula o tempo de execução[, tempo solicitação e execução]
*/
let date, lastDate;
async function calculateTime(contract, listSize, accounts) {
  date = new Date().getTime();

  let call = await contract.execute(listSize, { from: accounts[0] });

  lastDate = new Date().getTime();

  return {
    call: call,
    time: lastDate - date,
  }
}

/*
* Adiciona o resultado do teste
*/
let results = { ForArray: [], ForMatrix: [], StringStore:[], Sum:[], BubbleSort: [], MergeSort: [], QuickSort: [], };

function addResult(label, size, time, contractCall) {
  results[label].push({
    listSize: size,
    time: time,
    gasUsed: (contractCall.receipt||{}).gasUsed||0
  });
}

/*
* Testes dos contratos
*/
for (let x = 1; x < 2; x++) {
  let listSize = Math.pow(2, x);

  contract("ForArray", accounts => {
    it("For Size:" + listSize, async () => {

      //Instancia o contrato
      const contract = await ForArray.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('ForArray', listSize, result.time, result.call);
    });
  });

  contract("ForMatrix", accounts => {
    it("Double For Size:" + listSize, async () => {

      //Instancia o contrato
      const contract = await ForMatrix.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('ForMatrix', listSize, result.time, result.call);
    });
  });

  contract("StringStore", accounts => {
    it("New String Size:" + listSize, async () => {

      //Instancia o contrato
      const contract = await StringStore.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('StringStore', listSize, result.time, result.call);
    });
  });

  contract("Sum", accounts => {
    it("Sum operations:" + listSize, async () => {

      //Instancia o contrato
      const contract = await Sum.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('Sum', listSize, result.time, result.call);
    });
  });

  contract("BubbleSort", accounts => {
    it("Sort:" + listSize, async () => {

      //Instancia o contrato
      const contract = await BubbleSort.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('BubbleSort', listSize, result.time, result.call);
    });
  });

  contract("QuickSort", accounts => {
    it("Sort:" + listSize, async () => {

      //Instancia o contrato
      const contract = await QuickSort.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('QuickSort', listSize, result.time, result.call);
    });
  });

  contract("MergeSort", accounts => {
    it("Sort:" + listSize, async () => {

      //Instancia o contrato
      const contract = await MergeSort.deployed();

      let result = await calculateTime(contract, listSize, accounts);
      addResult('MergeSort', listSize, result.time, result.call);
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
