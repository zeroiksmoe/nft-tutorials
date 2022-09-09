// EXEC: node scripts/baycTrainPOLY.js
async function main(){
    const ethers = require('ethers');
    const fs = require('fs');
    const axios = require('axios');

    // Connect to provider with an API key (these are equivalent)
    const apiKey = '';
    const provider = new ethers.providers.AlchemyProvider("matic", apiKey);

    // Initiate wallet
    const signer = new ethers.Wallet('WALLET PRIVATE KEY');
    const account = signer.connect(provider);

    // Initiate contract instance
    var abiMeta = JSON.parse(fs.readFileSync('build/contracts/BAYC.json'));
    var abi = abiMeta.abi;
    const baycContractInstance = new ethers.Contract("CONTRACT ADDRESS", abi, signer);
    const baycContractInstanceWithSigner = baycContractInstance.connect(account);

    // Define fee based on current prices
    // Error: "transaction underpriced"
    // https://github.com/ethers-io/ethers.js/issues/2828
    let isProd = true;
    let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
    let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
    const { data } = await axios({
        method: 'get',
        url: isProd
        ? 'https://gasstation-mainnet.matic.network/v2'
        : 'https://gasstation-mumbai.matic.today/v2',
    })
    maxFeePerGas = ethers.utils.parseUnits(
        Math.ceil(data.fast.maxFee) + '',
        'gwei'
    )
    maxPriorityFeePerGas = ethers.utils.parseUnits(
        Math.ceil(data.fast.maxPriorityFee) + '',
        'gwei'
    )

    // Mint NFT
    // const feeData = await provider.getFeeData()
    // const options = {value: ethers.utils.parseEther("0.01"), gasPrice: feeData.gasPrice }
    // let tx = await baycContractInstanceWithSigner.mintApe(10, options);

    // Set BaseURI
    // const tx = await baycContractInstanceWithSigner.setBaseURI("", {
    //     maxFeePerGas,
    //     maxPriorityFeePerGas,
    // })

    // Read token URI
    // console.log(await baycContractInstanceWithSigner.tokenURI(1)); // Check tokenURI for a given NFT

    // Transfer Ape
    // console.log(await baycContractInstanceWithSigner.transferFrom("", "", "0", {
    //         maxFeePerGas,
    //         maxPriorityFeePerGas,
    //     })); 
}
main();