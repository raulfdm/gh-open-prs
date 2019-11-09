require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  env: {
    GITHUB_TOKEN: "@github_token"
  }
};

module.exports = withPlugins([withCSS({})], nextConfig);
