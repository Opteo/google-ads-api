// eslint-disable-next-line
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  //collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "jest.config.js"],
  resetMocks: true,
  testMatch: [
    // "build/.*?(?=.spec).*?.js",
    // "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec).ts?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  verbose: true,
  testTimeout: 20000,
};
