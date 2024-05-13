var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var rollup = require('rollup');
var terser = require('@rollup/plugin-terser');

const jsFiles = ['bundle-swiper.js'];

gulp.task('scripts', async function () {
  const buildPromises = jsFiles.map(file =>
    rollup.rollup({
      input: `scripts/${file}`,
    })
  );

  Promise.all(buildPromises).then(bundles => {
    bundles.forEach((bundle, index) => {
      bundle.write({
        file: `assets/q-${jsFiles[index]}`,
        format: 'iife',
        plugins: [terser()],
      });
    });
  });
});

gulp.task('scss', function () {
  return gulp
    .src('./styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(
      rename(path => {
        path.basename = 'q-' + path.basename;
        path.extname = '.css';
      })
    )
    .pipe(gulp.dest('./assets/'));
});

gulp.task('default', function () {
  gulp.watch(['./styles/**/*.scss'], gulp.series('scss'));
  gulp.watch(['./scripts/**/*.js'], gulp.series('scripts'));
});
