require("@nomicfoundation/hardhat-toolbox");
require ("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

/** @type import(hardhat/config').HardhatUserConfig */
module. exports = {
  solidity: "0.8.18",
  networks: {
    //здесь указываем все сети, с которыми будем работать
    bnbtestnet: {
      url: "https://tiniest-maximum-lake.bsc-testnet.quiknode.pro/6f0215e711c929147eaa6ecb967f2d75ef68700f/", //RPC from my quicknode
      accounts: ["6e8165570aa8ebb3edd33cfe5b63ea22182b1162d1d44b01df1cad82aa2feb3b"],
      chainId: 97,
    },
  },

  etherscan: {
   apiKey: "KHUTEVW1QCVTSBD15IWRMT7CT3IDPCH7MX", // your Etherscan API key
  },
};