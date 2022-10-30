require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/MFX6DZXPTv5BQPJF7aQeU7WRivYL9A2u",
      accounts: [`0x${"b03faba479cc270d069d3818d17df315d6635f604ce69e1071f3ca010e40688b"}`],
    },
  },
};
