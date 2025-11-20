# NFT Collection Project

## Overview
This is an NFT smart contract built with Solidity and deployed using Hardhat on the Sepolia test network.  
The contract allows minting of multiple NFTs, each with unique metadata and IPFS image links.

## Deployment
Network: Sepolia Testnet  
Contract address: 0x067aC9380179FcBBb70045f6C195E3d178416113  
Etherscan: https://sepolia.etherscan.io/address/0x067aC9380179FcBBb70045f6C195E3d178416113

## Structure
- `contracts/` → Solidity source code  
- `scripts/` → Deployment script  

## How to Run
1. Install dependencies 
```bash 
npm install
```

2. Compile the contract
```bash
npx hardhat compile
```

3. Deploy
```bash
npx hardhat run scripts/deploy.js --network sepolia
```