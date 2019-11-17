require("dotenv").config();

const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");

const nextConfig = {};

module.exports = withPlugins([withCSS({})], nextConfig);
