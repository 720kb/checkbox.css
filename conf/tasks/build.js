/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , runSequence = require('run-sequence');


  gulp.task('build', function(callback) {
    runSequence('clean','sass','minify','copy');
  });
}());
