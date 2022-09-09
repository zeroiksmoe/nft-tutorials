// EXEC: truffle exec scripts/bayTrainETH.js
module.exports = async function(callback) {

    // Import packages
    const fs = require('fs');
    var Web3 = require('web3');

    // Initiate local ethereum blockchain provider and deployed BAYC contract
    var web3 = new Web3(Web3.givenProvider || 'ws://localhost:7545');
    let accounts = await web3.eth.getAccounts();
    var abiMeta = JSON.parse(fs.readFileSync('build/contracts/BAYC.json'));
    var abi = abiMeta.abi;
    let bayc = new web3.eth.Contract(abi, 'CONTRACT ADDRESS');

    // Set the baseURI for the BAYC contract
    const transactionObject_1 = {
        from: accounts[0],
        gasPrice: '210000',
        gas: 1000000
        // value: 8000000000000
    };
    await bayc.methods.setBaseURI("").send(transactionObject_1);
    // await bayc.methods.tokenURI(1).call(); // Check tokenURI for a given NFT

    // Create BAYC NFT mint
    const transactionObject_2 = {
        from: accounts[0],
        gasPrice: '210000',
        gas: 1000000,
        value: 8000000000000
    };
    await bayc.methods.mintApe(1).send(transactionObject_2);

    callback();
}