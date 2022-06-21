const isGitHubPages = false;
const path = require("path"); //https://nodejs.dev/learn/the-nodejs-path-module --> reminder require('path')
const folderName = path.basename(process.cwd()) + "/"; //https://www.geeksforgeeks.org/node-js-process-cwd-method/ --> reminder process.cwd()
const mode = process.env.NODE_ENV === "production" ? "production" : "development"; //https://riptutorial.com/node-js/example/10101/setting-node-env--production- --> reminder process.env.NODE_ENV
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

module.exports = {
    root: "src",
    base,
    mode,
    publicDir: "../public",
    build: {
        outDir: "../dist",
        assetsDir: "./"
    }
};