const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider()); //connects to the ethereum network.

beforeEach( () => {
    //get a list of all accounts
    web3.eth.getAccounts().then(fectechedAccounts =>{
        console.log(fectechedAccounts);
    }); //can connect to multiple cryptos.

    // use an accoount to deploy a contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {

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
