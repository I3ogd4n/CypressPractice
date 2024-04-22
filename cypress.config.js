const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    STANDARD_USERNAME: 'standard_user',
    STANDARD_USERNAME_PASSWORD: 'secret_sauce'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
