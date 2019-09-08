//  Require Gulp into file and define the variable
var gulp = require('gulp');

//  Run the example task, if installed correctly and "gulp talktome" is ran, "Hello From Zestcode" should be printed in the logs
gulp.task('talktome', function() {
console.log('Hello From Zestcode');
});
'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
     
gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
  
gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', ['sass']);
});
  
gulp.task('browser-sync', function () {
    var files = [
    './*.html',
    './css/*.css',
    './img/*.{png,jpg,gif}',
    './js/*.js'
    ];

    browserSync.init(files, {
    server: {
        baseDir: "./"
    }
    });

});
  
  // Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});
  