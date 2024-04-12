module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['src/*/test/jest.*.ts'],
  collectCoverageFrom: [
      "src/*/test/*.ts",
      "!src/app/*/test/features/step_definitions/*.{ts}",
      "!test/*/"
  ]
};