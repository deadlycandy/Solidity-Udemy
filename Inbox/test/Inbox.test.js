const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider()); //connects to the ethereum network.
const {interface, bytecode} = require('../compile');

let accounts;
let inbox; // represenets contract living on the blockchain

beforeEach( async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts(); //can connect to multiple cryptos.

    // use an accoount to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //Tells web3 about methods Inbox has
        .deploy({data: bytecode, arguments: ['Hi there!']}) // Tells web3 to deploy a new copy of the contract.
        .send({from: accounts[0], gas: '1000000'}); //Tells web3 to send out a transaction to create this contract.
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address); //checking if it is a defined value
    });
    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi there!');
    });
    it('can change the message', async () =>{
        await inbox.methods.setMessage('bye').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});

/* Mocha Test
class Car{
    park(){
        return "stopped";
    }

    drive(){
        return "vroom";
    }
}

let car;

beforeEach(() => { // used for common intialize code
    car = new Car();
});

describe('Car',() => { // no link between the string and class name
    it('Park function',() =>{
        assert.equal(car.park(), 'stopped');
    });

    it('Drive function', () =>{
        assert.equal(car.drive(), 'vroom');
    });
});
*/
