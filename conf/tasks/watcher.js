/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , colors = require('colors')
    , watch = require('gulp-watch');

  gulp.task('start', function onWatch() {
    gulp.watch(`${paths.lib}scss/*`, ['build']).on('change', function changed(e) {
      console.log(`Building new dist: \n`.bold.green + `└─ file was modified: ${e.path}`.yellow);
    });
  });
}());
