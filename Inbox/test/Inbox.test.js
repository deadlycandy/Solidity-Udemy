const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider()); //connects to the ethereum network.
const {interface, bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach( async () => {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts(); //can connect to multiple cryptos.

    // use an accoount to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
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
