export default {
    testMatch: [
        "**/test/**/*.test.[jt]s?(x)", // Matches all test files in "tests" directory
        "**/spec/**/*.spec.[jt]s?(x)"  // Matches all spec files in "spec" directory
    ],
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/e2e/"],
};
