/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , paths = require('../paths.json')
    , minify = require('gulp-minify-css')
    , rename = require('gulp-rename');

gulp.task('minify', function minify() {
    gulp.src(`${paths.dist}/*.css`)
        .pipe(minify({'keepBreaks': true}))
        .pipe(rename({
            'suffix': '.min'
        }))
        .pipe(gulp.dest(`${paths.dist}`));
});
}());
