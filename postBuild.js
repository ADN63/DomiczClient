const path = require("path");
const fs = require("fs")
const fileToRemoce = path.resolve(__dirname, "dist/static/js/bundle.js.LICENSE.txt");

fs.rmSync(fileToRemoce, { force: true })