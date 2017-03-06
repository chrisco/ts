const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('previewDist', ['build'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app',
    },
  });
});

gulp.task('deleteDistFolder', () => {
  return del('./dist');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/scripts/**',
    '!./app/assets/styles/**',
    '!./app/temp',
    '!./app/temp/**'
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], () => {
  return gulp
    .src([
      './app/assets/images/**/*',
      '!./app/assets/images/icons',
      '!./app/assets/images/icons/**/*'
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder', 'scripts', 'styles'], () => {
  return gulp
    .src('./app/index.html')
    .pipe(
      usemin({
        css: [
          function () {
            return rev();
          },
          function () {
            return cssnano();
          }
        ],
        js: [
          function () {
            return rev();
          },
          function () {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);
