/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , gulpSass = require('gulp-sass')
    , sourcemaps = require('gulp-sourcemaps');

  gulp.task('sass', function sassify() {
    return gulp.src(`${paths.lib}scss/!(mixins).scss`)
    .pipe(sourcemaps.init())
    .pipe(gulpSass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist));
  });
}());
