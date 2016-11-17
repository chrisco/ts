const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssVars = require('postcss-simple-vars');
const cssNested = require('postcss-nested');
const cssImport = require('postcss-import');

gulp.task('default', () => {
  console.log('Hello from the default task');
});

gulp.task('html', () => {
  console.log('Hello from the html task');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssNested, cssVars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});
