const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
  cucumber,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  return config;
}

module.exports = defineConfig({
  projectId: "9atjb4",
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterConfig.json",
  },

  e2e: {
    baseUrl: "https://duckduckgo.com",
    specPattern: "**/*.feature",
    excludeSpecPattern: ["*.js"],
    setupNodeEvents,
  },
  requestTimeout: 10000,
});
