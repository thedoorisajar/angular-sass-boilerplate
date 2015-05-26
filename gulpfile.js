'use strict';

var gulp = require('gulp'),
    del = require('del'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    karma = require('gulp-karma');

var testFiles = [
    '../public/js/all.js',
    'unit/spec/*.js'
];

gulp.task('clean:js', function (cb) {
  del(['public/js/all.js'], cb);
});

gulp.task('clean:css', function (cb) {
  del(['public/css/main.css'], cb);
});

gulp.task('lint:js', function () {
    return gulp.src(['public/js/**/*.js','!public/js/all.js'])
    .pipe(jshint()) // '.jshintrc'
    .pipe(jshint.reporter('default'));
});

gulp.task('lint:scss', function () {
    return gulp.src(['public/sass/**/*.js','!public/sass/bootstrap/*.scss','!public/sass/fontawesome/*.scss'])
    .pipe(scsslint());
});

gulp.task('js', ['clean:js','lint:js'], function() {
  	return gulp.src([
        'public/js/lib/angular/angular.js',
        'public/js/lib/**/*.js',
        'public/js/modules/**/*.module.js',
        'public/js/modules/**/*.controller.js',
        'public/js/app.js',
        'public/js/**/*.js',
        '!public/js/lib/modernizr/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(livereload());
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(uglify())
    //.pipe(gulp.dest('public/js/dist'));
});

gulp.task('css', ['clean:css','lint:scss'], function() {
  	return gulp.src(['public/sass/main.scss','public/sass/bootstrap.scss','public/sass/fontawesome/font-awesome.scss'])
	.pipe(sass({ style: 'expanded'}))
    .pipe(autoprefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(minifycss())
    //.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/sass/**/*.scss', ['css']);
    gulp.watch(['gulpfile.js','public/js/**/*.js'], ['js']);
    //gulp.watch('public/img/**/*', ['img']);
    gulp.src(testFiles).pipe(karma({
        configFile: 'test/karma.conf.js',
        action: 'watch'
    }));
});

gulp.task('default', ['js', 'css']);


