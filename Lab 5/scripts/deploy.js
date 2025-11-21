const hre = require("hardhat");

async function main() {
  const FinkiCoin = await hre.ethers.getContractFactory("FinkiCoin");
  const finkiCoin = await FinkiCoin.deploy();

  await finkiCoin.waitForDeployment(); 

  console.log("FinkiCoin deployed at:", await finkiCoin.getAddress()); 
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
