/*global require*/
(function gulpTask() {
  'use strict';


  const gulp = require('gulp')
    , paths = require('../paths.json')
    , minify = require('gulp-cssmin')
    , rename = require('gulp-rename');

    gulp.task('minify', function onMinifyCss() {

        return gulp.src(`${paths.dist}**/*.css`)
          .pipe(minify())
          .pipe(rename(function renameThem(path) {
            console.log(path);
            path.basename += ".min";
          }))
          .pipe(gulp.dest(`${paths.dist}`));
      });
}());
