exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://tw.hotels.com/',
      show: true,
      browser: 'chromium',
      restart: 'keep',
      keepBrowserState: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.zh-TW.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  // It doesn't need to use now.
  // tests: './*_test.js',
  name: 'owlnest-bdd',
  translation: 'zh-TW'
}