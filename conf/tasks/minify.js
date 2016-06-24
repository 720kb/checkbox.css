/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , paths = require('../paths.json')
    , minify = require('gulp-cssmin')
    , rename = require('gulp-rename');

gulp.task('minify', function minify() {
    return gulp.src(`${paths.dist}**/*.css`)
        .pipe(minify())
        .pipe(rename({
            'suffix': '.min'
        }))
        .pipe(gulp.dest(`${paths.dist}`));
});
}());
