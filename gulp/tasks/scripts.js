const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');

gulp.task('scripts', ['modernizr'], (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
