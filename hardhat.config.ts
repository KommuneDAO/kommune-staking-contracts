import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import { ethers } from "hardhat";

require("dotenv").config();

const { RPC_API_KEY, PRIV_KEY, ETHERSCAN_API_KEY } = process.env;

// @ts-ignore
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    baobab: {
      chainId: 1001,
      url: "https://public-en-kairos.node.kaia.io",
      accounts: [PRIV_KEY],
      gasPrice: 50000000000,
      gasLimit: 3000000,
    },
    cypress: {
      chainId: 8217,
      url: "https://public-en.node.kaia.io",
      // url: "https://klaytn-en.kommunedao.xyz:8651",
      accounts: [PRIV_KEY],
    },
  },
};

export default config;
