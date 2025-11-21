require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);

  const wallet2 = new ethers.Wallet(process.env.PRIVATE_KEY_2, provider);

  const finkiAddress = process.env.FINKI_ADDRESS;

  const routerAddress = "0x284f11109359a7e1306c3e447ef14d38400063ff";
  const routerAbi = [
    "function swapExactETHForTokens(uint amountOutMin,address[] calldata path,address to,uint deadline) payable returns (uint[] memory amounts)",
    "function WETH() external pure returns (address)"
  ];

  const router = new ethers.Contract(routerAddress, routerAbi, wallet2);

  const WETH_ADDRESS = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";

  const ethAmount = ethers.parseEther("0.005"); 

  const path = [WETH_ADDRESS, finkiAddress];

  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; 

  const tx = await router.swapExactETHForTokens(
    0, 
    path,
    wallet2.address,
    deadline,
    { value: ethAmount }
  );

  const receipt = await tx.wait();
  console.log("Liquidity added! Tx hash:", receipt?.transactionHash || tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
