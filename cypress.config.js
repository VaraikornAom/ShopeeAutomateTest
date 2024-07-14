const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "644goa",
  e2e: {
    baseUrl: 'https://shopee.co.th/',
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
    },
    viewportHeight: 1280,
    viewportHeight: 800,
  },
});
