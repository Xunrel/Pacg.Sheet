var gulp = require('gulp');
var durandal = require('gulp-durandal');

gulp.task('html', function () {
	return gulp.src('*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
	return gulp.src('app/*')
		.pipe(gulp.dest('dist/app'));
});

gulp.task('jquery', function () {
	return gulp.src('bower_components/jquery/jquery.min.js')
		.pipe(gulp.dest('bower_components/jquery/dist'));
});

gulp.task('durandal', ['jquery'], function () {
	return durandal()
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['html', 'js', 'durandal'], function () {
	
});