const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssVars = require('postcss-simple-vars');
const cssNested = require('postcss-nested');
const cssImport = require('postcss-import');
const mixins = require('postcss-mixins');
const hexrgba = require('postcss-hexrgba');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssNested, cssVars, hexrgba, autoprefixer]))
    .on('error', (errorInfo) => {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
