// Karma configuration
// Generated on Mon Oct 13 2014 22:12:30 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../spec/testLibs.js',
      'lib/traceur-runtime/traceur-runtime.js',
      'lib/vendor.js',
      'app/app.js',
      'app/templates.js',
      'app/profile.js',

      'app/data/objectives.js',
      'app/data/user-objectives.js',
      'app/users.js',
      'app/user.js',
      'app/authentication.js',
      'app/signin.js',

      'app/objectives/objective.compiled.js',
      'app/objectives/user-objectives.js',
      'app/objectives/edit-objectives.js',
      'app/objectives/objective-details.js',
      'app/**/*.html',
      'app/common/cards/card-section.js',
      'app/common/cards/card-header.js',
      'app/common/tasks/tasklist.js',
      'app/common/tasks/task-item.js',
      'app/common/tasks/task.compiled.js',
      '../spec/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
