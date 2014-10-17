var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var karma = require('karma').server;
var jshint = require('gulp-jshint');

var paths = {
  scripts: './www/app/**/*.js',
  tests: './spec/**/*Spec.js',
  sass: ['./scss/**/*.scss']
};

var vendor = [
  'bower_components/firebase/firebase.js',
  'bower_components/angularfire/dist/angularfire.js',
  'bower_components/angular-filter/dist/angular-filter.js',
  'bower_components/firebase-simple-login/firebase-simple-login.js'
];

var testLibs = [
  'bower_components/angular/angular.js',
  'bower_components/angular-animate/angular-animate.js',
  'bower_components/angular-cookies/angular-cookies.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'bower_components/sinon/index.js',
  'bower_components/angular-sanitize/angular-sanitize.min.js',
  'bower_components/angular-touch/angular-touch.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/ionic/js/ionic.js',
  'bower_components/ionic/js/ionic-angular.min.js',
];

gulp.task('lint', function() {
  gulp.src([paths.scripts, paths.tests])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concatVendorLibs', function(){
  gulp.src(vendor)
    .pipe(concat('vendor.js', {newLine: '\n\n\n'}))
    .pipe(gulp.dest('www/lib'));
});

gulp.task('concatTestLibs', function(){
  gulp.src(testLibs)
    .pipe(concat('testLibs.js', {newLine: '\n\n\n'}))
    .pipe(gulp.dest('spec/'));
});

gulp.task('copyIonic', function(done){
  gulp.src('bower_components/ionic/**/*')
    .pipe(gulp.dest('www/lib/ionic'))
    .on('end', done);
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch([paths.scripts, paths.tests], ['lint', 'test']);
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});


gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
