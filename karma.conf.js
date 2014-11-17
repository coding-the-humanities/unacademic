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
      'app/**/*.html',
      'app/templates.js',

      'app/app.js',

      'app/authentication/authentication.js',
      'app/authentication/services/authentication.js',
      'app/authentication/controllers/signin.js',

      'app/users/users.js',
      'app/users/models/users.js',
      'app/users/models/user.js',
      'app/users/controllers/users.js',
      'app/users/controllers/profile.js',


      'app/objectives/objectives.js',
      'app/objectives/models/objective.compiled.js',
      'app/objectives/models/user-objectives.js',
      'app/objectives/models/objectives.js',
      'app/objectives/controllers/user-objectives.js',
      'app/objectives/controllers/edit-user-objectives.js',
      'app/objectives/controllers/add-objective.js',
      'app/objectives/controllers/objective-details.js',

      'app/news/news.js',

      'app/cards/cards.js',
      'app/cards/card-section.js',
      'app/cards/card-header.js',

      'app/tasks/tasks.js',
      'app/tasks/task-list.js',
      'app/tasks/task-item.js',
      'app/tasks/task.compiled.js',

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
