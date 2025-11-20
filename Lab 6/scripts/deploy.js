const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const SimpleNFT = await hre.ethers.getContractFactory("SimpleNFT");
  const nft = await SimpleNFT.deploy(deployer.address);
  await nft.waitForDeployment();

  console.log("Contract deployed at:", await nft.getAddress());

  const walletAddress = deployer.address;

  const metadataURIs = [
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/1.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/2.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/3.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/4.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/5.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/6.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/7.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/8.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/9.json",
    "https://amaranth-voluntary-ostrich-286.mypinata.cloud/ipfs/bafybeie72dfir2yvqwc45zap3jpnvgxqdqhlqtikx3v7txpwyvsoou73du/10.json"
  ];

  console.log("Minting NFTs...");
  for (let uri of metadataURIs) {
    const tx = await nft.mintNFT(walletAddress, uri);
    await tx.wait();
    console.log("Minted NFT with URI:", uri);
  }

  console.log("All NFTs minted successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
