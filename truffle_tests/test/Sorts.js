const ForArray = artifacts.require("ForArray");
const ForMatrix = artifacts.require("ForMatrix");

const StringSize = artifacts.require("StringSize");
const StringChange = artifacts.require("StringChange");
const IntAddOp = artifacts.require("IntAddOp");
const MetaCoin = artifacts.require("MetaCoin");

const BubbleSort = artifacts.require("BubbleSort");
const QuickSort = artifacts.require("QuickSort");
const MergeSort = artifacts.require("MergeSort");

console.log("--------------------");
console.log("Iniciando testes");
console.log("--------------------");


let results = { };
let operations;
// let contracts = [ForArray, ForMatrix, StringSize, StringChange, IntAddOp, MetaCoin, BubbleSort, MergeSort, QuickSort];
// let contracts = [ForArray, ForMatrix];
// let contracts = [StringSize, StringChange, IntAddOp]; //MetaCoin
//let contracts = [BubbleSort, MergeSort, QuickSort];
let contracts = [MetaCoin];

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
* Adiciona o resultado do teste no objeto results
*/
function addResult(label, size, time, contractCall) {
  if (results[label] === undefined) {
    results[label] = {}
  }

  let last = results[label][size]||{};
  let gasUsed = ((contractCall||{}).receipt||{}).gasUsed||0;

  results[label][size] = {
    listSize: size,
    time: (((last.time||0) * operations) + time) / (operations+1),
    gasUsed: (((last.gasUsed||0) * operations) + gasUsed) / (operations+1),
  };
}

/*
* Realiza a beteria de testes para cada contrato
*/
contracts.forEach(contractClass => {
  let name = contractClass.contractName || contractClass.contract_name;

  for (let x = 1; x < 13; x++) {
    let listSize = Math.pow(2, x);
    for (operations = 0; operations < 5; operations++) {

      contract(name, accounts => {
        it("Size:" + listSize, async () => {

          //Instancia o contrato
          const contract = await contractClass.deployed();

          let result = await calculateTime(contract, listSize, accounts);
          addResult(name, listSize, result.time, result.call);
        });
      });
    }
  }
});

/*
* Formata o resultado e exibe
*/
contract("Conclude results", accounts => {
  it("Making results:", async () => {
    let formated = [];

    Object.entries(results).forEach(([key, values]) => {
        let sizes = ['Operation Size', key];
        let times = ['Operation Time', key];
        let gused = ['Operation Gas',  key];

        Object.values(values).forEach(value => {
          sizes.push(value.listSize);
          times.push(parseFloat(parseFloat(value.time).toFixed(2)));
          gused.push(parseInt(value.gasUsed));
        });

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
