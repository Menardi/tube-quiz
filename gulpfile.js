const gulp = require('gulp');
const runSequence = require('run-sequence');
const babel = require('gulp-babel');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gls = require('gulp-live-server');
const plumber = require('gulp-plumber');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');

gulp.task('js', () => {
  rollup({input: 'src/js/app.js', format: 'es'})
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('www/js'))
});

gulp.task('css', () => {
  gulp.src('./src/css/app.css')
    .pipe(plumber())
    .pipe(postcss([
      postcssImport(),
      postcssPresetEnv({
        features: {
          'nesting-rules': true
        }
      })
    ]))
    .pipe(gulp.dest('www/css'))
});

gulp.task('static', () => {
  gulp.src('src/index.html')
    .pipe(gulp.dest('www'));

  gulp.src('src/img/**/*')
    .pipe(gulp.dest('www/img'));
})

gulp.task('serve', ['default'], () => {
  const server = gls.static('www', '8000');
  server.start();

  gulp.watch('src/**/*.css', ['css']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch(['src/**/*.html', 'src/img/**/*'], ['static']);

  gulp.watch('www/**/*', file => server.notify(file));
});

gulp.task('clean', () => {
  return gulp.src('www', {read: false})
    .pipe(clean())
});

gulp.task('minify', () => {
  gulp.src('www/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('www'));

  gulp.src('www/**/*.css')
    .pipe(plumber())
    .pipe(cleanCss())
    .pipe(gulp.dest('www'));
})

gulp.task('default', ['static', 'js', 'css']);

gulp.task('release', () => {
  runSequence('clean', ['static', 'js', 'css'], 'minify');
});
