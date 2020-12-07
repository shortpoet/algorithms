const fs = require('fs');
const path = require('path');

const getFileContent = (file: string) => fs.readFileSync(
  path.resolve(__dirname, file),
  "utf-8",
).split('\n');

module.exports = {getFileContent}