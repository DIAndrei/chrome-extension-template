/* eslint-disable */
const { src, task, dest, series } = require('gulp');
const del = require('del');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
/* eslint-enable */

const DIR = {
  src: 'src',
  build: 'build',
};

function cleanup() {
  return del([DIR.build, `${DIR.build}.zip`]);
}

function mini() {
  return src(`${DIR.src}/*.html`)
    .pipe(useref())
    .pipe(
      gulpIf(
        '*.html',
        htmlmin({
          collapseWhitespace: true,
          removeComments: true,
        })
      )
    )
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(dest(DIR.build));
}

function img() {
  return src(`${DIR.src}/img/**/*.+(png|jpg|gif|svg)`)
    .pipe(imagemin())
    .pipe(dest(`${DIR.build}/img`));
}

function manifest() {
  return src('manifest.json').pipe(dest('build/'));
}

function fonts() {
  return src(`${DIR.src}/fonts/**/*`).pipe(dest(`${DIR.build}/fonts`));
}

task('build', series(cleanup, mini, img, fonts, manifest));
