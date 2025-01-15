// cypress.config.mjs
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // Add event listeners if needed
        },
        baseUrl: 'http://localhost:3000', // Adjust this to your app's URL
        specPattern: 'test/e2e/cypress/**/*.cy.js', // Custom test path
        screenshotsFolder: 'reports/cypress/screenshots', // Custom screenshot folder
        videosFolder: 'reports/cypress/videos', // Custom video folder
        supportFile: false, // Disable support files if not used
    },
});
