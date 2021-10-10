const main = async () => {
    //Compile contract
    // hre : Hardhat Runtime Environments
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    // HH creates local eth network but just for this contract. After the script is done running, the network
    // will be torn down. It spins a new network again and again. It is easier for debugging.
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address);

    //Call the function
    let txn = await nftContract.makeAnEpicNFT();
    //Wait for it to be mined
    await txn.wait();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();