module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
    // "<rootDir>/src/**/__tests__/**/*.[jt]s?(x)",
    // "<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)",
    // '**/?(*.)(spec).js?(x)',
    // '**/?(*.)(test).js?(x)',
    // "**\\__tests__\\**\\*.+(ts|tsx|js)",
    // "**\\?(*.)+(spec|test).+(ts|tsx|js)",
    // '**/__tests__/*.+(ts|tsx|js)',
    // "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
    // "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}