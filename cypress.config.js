const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://shopee.co.th/',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1280,
    viewportHeight: 800,
  },
});
