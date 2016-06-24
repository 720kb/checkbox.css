/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , runSequence = require('run-sequence').use(gulp);


  gulp.task('build', function(callback) {
    runSequence('clean','sass','minify','copy');
  });
}());
