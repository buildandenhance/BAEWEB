
  'use strict';

  var gulp    = require('gulp'),

      connect = require('gulp-connect'),
      copy    = require('gulp-copy'),
      cssnano = require('gulp-cssnano'),
      del     = require('del'),
      notify  = require('gulp-notify'),
      rename  = require('gulp-rename'),
      sass    = require('gulp-ruby-sass'),
      svgmin = require('gulp-svgmin'),
      watch   = require('gulp-watch');

  gulp.task('clean', function() {
    return del(['dist']);
  });

  gulp.task('html', function() {
    return gulp.src('src/html/**/*')
      .pipe(gulp.dest('dist'))
      .pipe(notify({ message: 'HTML task complete' }))
      .pipe(connect.reload());
  });

  gulp.task('assets', function() {
    return gulp.src('src/assets/**/*')
      .pipe(gulp.dest('dist'))
      .pipe(notify({ message: 'Assets task complete' }))
      .pipe(connect.reload());
  });


  gulp.task('images', ['assets'], function () {
    return gulp.src('dist/images/*.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('dist/images'))
      .pipe(notify({ message: 'SVG images optimised task complete' }))
      .pipe(connect.reload());
  });

  gulp.task('styles', function() {
    return sass('src/stylesheets/main.scss')
      .pipe(rename({ basename: "styles" }))
      .pipe(gulp.dest('dist/css/'))
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/css'))
      .pipe(notify({ message: 'Styles task complete' }))
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch(['src/html/**/*.html'], ['html']);
    gulp.watch(['src/assets/**/*'], ['assets']);
    gulp.watch(['src/stylesheets/**/*.scss'], ['styles']);
  });

  gulp.task('connect', function() {
    connect.server({
      root: 'dist',
      livereload: true
    });
  });


  gulp.task('default', ['clean'], function() {
    gulp.start('html', 'assets', 'images', 'styles');
  });

  gulp.task('dev', ['default'], function() {
    gulp.start('connect', 'watch');
  });
