/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , gulpSass = require('gulp-sass');

  gulp.task('sass', function sassify() {
    return gulp.src(`${paths.lib}scss/!(mixins).scss`)
    .pipe(gulpSass())
    .pipe(gulp.dest(paths.dist));
  });
}());
