# FinkiCoin Hardhat Project

This project demonstrates the creation, deployment, and trading of a custom ERC20 token (`FinkiCoin`) using Hardhat, OpenZeppelin, and Uniswap V2 on the **Sepolia testnet**.

---

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Deployment](#deployment)
- [Adding Liquidity](#adding-liquidity)
- [Swapping Tokens](#swapping-tokens)
- [Environment Variables](#environment-variables)
- [References](#references)

---

## Overview
This project covers:
1. Creating a custom ERC20 token (`FinkiCoin`) using OpenZeppelin.
2. Deploying the token to Sepolia testnet with Hardhat.
3. Creating a Uniswap V2 liquidity pool for FinkiCoin/ETH.
4. Swapping ETH for FinkiCoin using a second account.

---

## Prerequisites
- Node.js (LTS recommended, >=22.10.0)
- npm
- MetaMask extension
- Infura account (for Sepolia RPC)
- Etherscan account (optional, for verification)

---

## Installation

Clone this repo:

```bash
git clone https://github.com/achy13/BVIK.git
cd "Lab 5"
npm install
npm install --save-dev hardhat@hh2
npx hardhat init
npm install @openzeppelin/contracts
npm install dotenv
```

---

## Deployment

1. Compile the contracts:

```bash
npx hardhat compile
```

2. Deploy FinkiCoin to Sepolia:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## Adding Liquidity

Use the script:

```bash
npx hardhat run scripts/addLiquidity.js --network sepolia
```

---

## Swapping Tokens

Use the second account and run:
```bash
npx hardhat run scripts/swap.js --network sepolia
```

---

## Enviroment variables (.env)

INFURA_URL=<your-infura-sepolia-url>
MNEMONIC=<your-mnemonic-12-words>
ETHERSCAN_API_KEY=<your-etherscan-api-key>
FINKI_ADDRESS=<deployed-finki-coin-address>
PRIVATE_KEY_1=<first-metamask-private-key>
PRIVATE_KEY_2=<second-metamask-private-key>

---

## References

Hardhat Docs: https://hardhat.org/docs/getting-started

OpenZeppelin Contracts: https://docs.openzeppelin.com/contracts

Uniswap V2 Docs: https://app.uniswap.org/

Sepolia Testnet Etherscan: https://sepolia.etherscan.io/

