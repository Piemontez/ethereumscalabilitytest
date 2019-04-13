# Ethereum Scalability Test

Este projeto, simula varios testes, de diferentes tipos de contratos inteligentes, na rede Ethereum. Seus testes resultaram na produção de artigos ciêntificos citados a baixo. Este trabalho também pode ser utilizado, como example de introdução, na crição de um contrato inteligente na rede Ethereum.

Neste projeto existem 9 tipos de contratos inteligentes, que buscam testar o desempenho e o custo de gás na rede Ethereum. Eles estão divididos em 3 categorias:  Linear Operations, Data Manipulation, Sorting Algorithms.

Linear Operations:
	SingleLoop.sol
	DualLoop.sol

Data Manipulation:
	StoreInt.sol
	StoreChar.sol
	StoreString.sol

Sorting Algorithms:
	BubbleSort.sol  
	QuickSort.sol  
	MergeSort.sol  

### Artigo:


### Pré-requisitos:
Este projeto utiliza a linguagem de programação NodeJs, e requer que a mesma estaja intalada no SO para rodar os testes.
Após a instalação do NodeJs, adicione de forma global os 2 pacotes abaixo:
```
npm install -g truffle ganache-cli
OU
yarn global add truffle ganache-cli
```
Para executar os teste, no shell, va até a pasta truffle_tests e execute os comandos abaixo,
(i) para compilar os constratos, (ii) incluir os contratos na rede ethereum e (iii) rodar os testes na rede ethereum.
```
truffle compile
truffle migrate
truffle test
```

### Observações:

Lembre-se de iniciar a conexão com a rede Ethereum antes de executar os teste. Não esqueça que a rede pública Ethereum cobra por sua utilização. 
Como alternativa a rede pública, é possivel utilizar uma rede privada ganache. Para iniciá-la utilize o comando 'ganache-cli'.


### Links uteis:

truffle creating a project
https://truffleframework.com/docs/truffle/getting-started/creating-a-project

truffle compile
https://truffleframework.com/docs/truffle/getting-started/compiling-contracts

truffle migrate
https://truffleframework.com/docs/truffle/getting-started/running-migrations
