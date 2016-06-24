/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , paths = require('../paths.json');

  gulp.task('copy', function copySrc() {

    return gulp.src([`${paths.scss}*`])
    .pipe(gulp.dest(`${paths.dist}/scss`));
  });
}());
