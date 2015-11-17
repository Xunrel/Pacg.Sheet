var gulp = require('gulp');
var durandal = require('gulp-durandal');
var replace = require('gulp-replace');

gulp.task('bowerFiles', function () {
	gulp.src('bower_components/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('dist/app/libs'));
	gulp.src('bower_components/knockout/dist/knockout.js')
		.pipe(gulp.dest('dist/app/libs'));
	gulp.src('bower_components/requirejs/require.js')
		.pipe(gulp.dest('dist/app/libs'));
	return gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
		.pipe(gulp.dest('dist/app/libs'));
});

gulp.task('css', ['bowerFiles'], function () {
	return gulp.src('bower_components/bootstrap/dist/css/*.css')
		.pipe(gulp.dest('dist/css'));
});

gulp.task('html', ['bowerFiles'], function () {
	return gulp.src('*.html')
		.pipe(replace('bower_components/bootstrap/dist/css', 'css'))
		.pipe(replace('bower_components/requirejs', 'app/libs'))
		.pipe(gulp.dest('dist'));
});

gulp.task('js', ['bowerFiles'], function () {
	gulp.src('app/*')
		.pipe(replace('../bower_components/jquery/dist', 'libs'))
		.pipe(replace('../bower_components/bootstrap/dist/js', 'libs'))
		.pipe(replace('../bower_components/knockout', 'libs'))
		.pipe(gulp.dest('dist/app'));
	return gulp.src('app/classes/*.js')
		.pipe(gulp.dest('dist/app/classes'));
});

gulp.task('durandal', function () {
	// return durandal()
	// 	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['css', 'html', 'js', 'durandal'], function () {
	
});