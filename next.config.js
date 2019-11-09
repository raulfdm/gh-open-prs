require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
};

module.exports = withPlugins([withCSS({})], nextConfig);
