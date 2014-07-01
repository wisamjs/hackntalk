var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
  gulp.src('styles/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('styles'))
    .pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
  	gulp.watch('styles/*.scss', ['sass']);
  	gulp.watch('views/index.ejs');
});

gulp.task('default', ['sass', 'watch']);