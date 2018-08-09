const path = require('path')

module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '**/client/**/*.{ts}',
    'components/**/*.{js,ts,vue}',
    'layouts/**/*.{js,ts,vue}',
    'pages/**/*.{js,ts,vue}',
    'store/**/*.{js,ts,vue}',
    '!**/node_modules/**'
  ]
}