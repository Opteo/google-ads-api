// eslint-disable-next-line
module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // stream-json 3 and stream-chain 4 ship ES modules only, which Jest's
    // CommonJS runtime cannot load, so compile them to CommonJS for tests.
    "/node_modules/(stream-json|stream-chain)/.+\\.js$": [
      "ts-jest",
      { tsconfig: { allowJs: true } },
    ],
  },
  transformIgnorePatterns: ["/node_modules/(?!(stream-json|stream-chain)/)"],
  testEnvironment: "node",
  clearMocks: true,
  //collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "jest.config.js"],
  resetMocks: true,
  moduleNameMapper: { "^(\\.{1,2}/.*)\\.js$": "$1" },
  testMatch: [
    // "build/.*?(?=.spec).*?.js",
    // "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec).ts?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  verbose: true,
  testTimeout: 20000,
};
