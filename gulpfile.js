var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var jsfiles = [
  'src/js/jquery.js',
  'src/js/bootstrap.js',
  'src/js/custom.js',
  'src/js/jquery.sticky.js',
  'src/js/wow.min.js',
  'src/js/owl.carousel.min.js',
];


gulp.task('js', function() {
  return gulp.src(jsfiles)
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('src/dist'));
});

gulp.task('css', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(concat('site.min.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('src/dist'));
});
