const { ethers } = require("ethers"); 
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
  
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_1, provider);

  const finkiAddress = process.env.FINKI_ADDRESS;
  if (!finkiAddress) throw new Error("FINKI_ADDRESS is not defined in .env!");

  const routerAddress = "0x284f11109359a7e1306c3e447ef14d38400063ff";
  const routerAbi = [
    "function addLiquidityETH(address token,uint amountTokenDesired,uint amountTokenMin,uint amountETHMin,address to,uint deadline) payable returns (uint amountToken,uint amountETH,uint liquidity)"
  ];

  const router = new ethers.Contract(routerAddress, routerAbi, wallet);

  const tokenAbi = [
    "function approve(address spender, uint amount) public returns (bool)"
  ];
  const token = new ethers.Contract(finkiAddress, tokenAbi, wallet);

  const tokenAmount = ethers.parseUnits("1000", 18); 
  const ethAmount = ethers.parseEther("0.01");       

  const approveTx = await token.approve(routerAddress, tokenAmount);
  await approveTx.wait();

  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; 
  const tx = await router.addLiquidityETH(
    finkiAddress,
    tokenAmount,
    0,
    0,
    wallet.address,
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
