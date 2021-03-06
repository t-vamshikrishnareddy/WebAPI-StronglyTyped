module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // For travis
      'node_modules/es6-shim/es6-shim.js',
      'node_modules/reflect-metadata/Reflect.js',
      // paths loaded by Karma
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
      {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      // paths loaded via module imports
      {pattern: 'temp/**/*.js', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      { pattern: 'temp/**/*.js.map', included: false, watched: false },
      'app/my-tests.spec.js'
    ],

    preprocessors: {'temp/**/*.js': ['sourcemap']},

      // Karma plugins loaded
    plugins: [
        'karma-jasmine',
		'karma-requirejs',
       // 'karma-coverage',
        'karma-chrome-launcher'
    ],

      // Coverage reporter generates the coverage
 //   reporters: ['progress', 'dots', 'coverage'],
    port: 3000,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};