var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('public/styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/styles/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
  	gulp.watch('public/styles/main.scss', ['sass']);
  	gulp.watch('public/views/*.html');
});

gulp.task('default', ['sass', 'watch']);