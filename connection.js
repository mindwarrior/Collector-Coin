var Web3 = require('web3')
var web3 = new Web3('http://localhost:8545')
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_status",
				"type": "uint256"
			}
		],
		"name": "generateCarList",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vin",
				"type": "string"
			},
			{
				"name": "_year",
				"type": "uint256"
			},
			{
				"name": "_make",
				"type": "string"
			},
			{
				"name": "_model",
				"type": "string"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "newCar",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vin",
				"type": "string"
			}
		],
		"name": "getPendingCar",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_source",
				"type": "string"
			}
		],
		"name": "stringToBytes32",
		"outputs": [
			{
				"name": "result",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_vin",
				"type": "string"
			},
			{
				"name": "_restorationCost",
				"type": "uint256"
			},
			{
				"name": "_estFutureValue",
				"type": "uint256"
			}
		],
		"name": "approveCar",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
//var account = new web3.eth.accounts.create()
//console.log(web3.eth.getBalance(account))

var address = '0xc36bfcd20f261e77d1db222f43ffe4bb5b58eb9e'
var account = '0x12af28bc2804ae9f3a174309521da2eeb09e99e2'
var contract = new web3.eth.Contract(abi,address)
//console.log(contract.methods)
contract.methods.newCar('hijk',1997,'honda','brio',1000).send({from: account, gas:3000000},(err,transactionHash) => {console.log(transactionHash)})
contract.methods.getPendingCar('hijk').call({from: account, gas:3000000},(err,result) => {console.log(result)})
