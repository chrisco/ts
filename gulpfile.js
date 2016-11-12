const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
  console.log('Hello from the default task');
});

gulp.task('html', () => {
  console.log('Hello from the html task');
});

gulp.task('css', () => {
  console.log('Hello from the CSS task');
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('css');
  });
});
