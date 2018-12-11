const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const StringSize = artifacts.require("StringSize");
const StringChange = artifacts.require("StringChange");
const IntAddOp = artifacts.require("IntAddOp");
const MetaCoin = artifacts.require("MetaCoin");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

/*
* Função generica, executa a função "execute" do contrato e calcula o tempo de execução[, tempo solicitação e execução]
*/
let date, lastDate;
async function calculateTime(contract, listSize, accounts) {
  date = new Date().getTime();

  let call = null;
  try {
    call = await contract.execute(listSize, { from: accounts[0] });
  } catch(err) {}

  lastDate = new Date().getTime();

  return {
    call: call,
    time: lastDate - date,
  }
}

/*
* Adiciona o resultado do teste
*/
let results = { ForArray: {}, ForMatrix: {}, StringSize: {}, StringChange: {}, IntAddOp: {}, BubbleSort: {}, MergeSort: {}, QuickSort: {}, };

let operations;
function addResult(label, size, time, contractCall) {
  let last = results[label][size]||{};
  let gasUsed = ((contractCall||{}).receipt||{}).gasUsed||0;

  results[label][size] = {
    listSize: size,
    time: ((last.time||0) * operations) + time / (operations+1),
    gasUsed: ((last.gasUsed||0) * operations) + gasUsed / (operations+1),
  };
}

/*
* Testes dos contratos
*/
for (let x = 1; x < 14; x++) {
  for (operations = 1; operations < 10; operations++) {
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

    contract("StringSize", accounts => {
      it("New String Size:" + listSize, async () => {

        //Instancia o contrato
        const contract = await StringSize.deployed();

        let result = await calculateTime(contract, listSize, accounts);
        addResult('StringSize', listSize, result.time, result.call);
      });
    });

    contract("StringChange", accounts => {
      it("String change operations:" + listSize, async () => {

        //Instancia o contrato
        const contract = await StringChange.deployed();

        let result = await calculateTime(contract, listSize, accounts);
        addResult('StringChange', listSize, result.time, result.call);
      });
    });

    contract("IntAddOp", accounts => {
      it("Int add operations:" + listSize, async () => {

        //Instancia o contrato
        const contract = await IntAddOp.deployed();

        let result = await calculateTime(contract, listSize, accounts);
        addResult('IntAddOp', listSize, result.time, result.call);
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
}

contract("Conclude results", accounts => {
  it("Making results:", async () => {
    let formated = [];

    Object.entries(results).forEach(([key, values]) => {
        let sizes = ['Operation Size', key];
        let times = ['Operation Time', key];
        let gused = ['Operation Gas',  key];

        Object.values(values).forEach(value => {
          sizes.push(value.listSize);
          times.push(value.time);
          gused.push(value.gasUsed);
        })

        formated.push(sizes);
        formated.push(times);
        formated.push(gused);

    });

    console.log("--------------------");
    console.log("Resultado dos testes");
    console.log("--------------------");
    console.log(results);
    console.log("--------------------");
    console.log("Resultado formatado");
    console.log("--------------------");
    console.log(formated);
    console.log("--------------------");
  });
});
