require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/LiMlPhQ1F0OfEp0iCqViqxBTYTBZLC1w";
const NEXT_PUBLIC_PRIVATE_KEY = "b03faba479cc270d069d3818d17df315d6635f604ce69e1071f3ca010e40688b";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
