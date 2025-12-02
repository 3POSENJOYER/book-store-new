module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  testMatch: [
    "**/products.service.spec.ts"   // запускаємо лише один тест
  ],

  moduleFileExtensions: ['ts', 'js', 'json'],

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
