const { Web3 } = require('web3');
const ganache = require('ganache');
const assert = require('assert');
const web3 = new Web3(ganache.provider());

const compileFactory = requrie('../ethereum/build/CampaignFactory.json');
const compiledCampaign = requre('../etereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compileFactory.interface))
        .deploy({data: compileFactory.bytecode})
        .send({from: accounts[0], gas: '1000000'});
});