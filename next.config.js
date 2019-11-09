require("dotenv").config();
// next.config.js
module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
};
