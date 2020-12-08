const fs = require('fs');
const path = require('path');

export const getFileContent = (file: string) => fs.readFileSync(
  path.resolve(__dirname, file),
  "utf-8",
);
