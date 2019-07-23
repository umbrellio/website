"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
//var jade = require('gulp-jade');
var slim = require("gulp-slim");
var cssbeautify = require("gulp-cssbeautify");
var livereload = require("gulp-livereload");

gulp.task("scss", function() {
  return gulp
    .src("scss/application.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cssbeautify({
        indent: "  ",
        autosemicolon: true
      })
    )
    .pipe(gulp.dest("distr/css/"))
    .pipe(livereload());
});
gulp.task("js", function() {
  gulp.src("distr/js/**/*.js").pipe(livereload());
});
gulp.task("slim", function() {
  gulp
    .src("slim/*.slim")
    .pipe(
      slim({
        pretty: true,
        require: "slim/include",
        options: 'include_dirs=["' + __dirname + '/slim/include"]'
      })
    )
    .pipe(gulp.dest("distr/"))
    .pipe(livereload());
});

gulp.task("watch", function() {
  livereload.listen();
  gulp.watch("scss/**/*.scss", ["scss"]);
  gulp.watch("slim/**/*.slim", ["slim"]);
});
