const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,  // Largura da tela
    viewportHeight: 768,
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});