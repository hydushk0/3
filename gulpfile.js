var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var lr = require('gulp-livereload');

gulp.task('webserver', function() {
	gulp.src('.//release')
		.pipe(webserver({
			port: 12345,
			livereload:true
		}));
});
gulp.task('jader', function(){
	gulp.src('.//worked//jade//index.jade')
		.pipe(jade())
		.pipe(concat('index.html'))
		.pipe(gulp.dest('.//release'))
		.pipe(lr());
});

gulp.task('styl', function(){
	gulp.src('.//worked//styl//index.styl')
		.pipe(stylus())
		.pipe(concat('1.css'))
		.pipe(gulp.dest('.//release'))
		.pipe(lr());
});

gulp.task('js', function(){
	gulp.src('.//worked//js//*.js')
		.pipe(gulp.dest('.//release'))
		.pipe(lr());
});


gulp.task('watch', function(){
	gulp.watch('.//worked//jade//*.jade',['jader']);
	gulp.watch('.//worked//styl//*.styl',['styl']);
	gulp.watch('.//worked//js//*.js', ['js']);
});

gulp.task('default', ['webserver', 'watch','jader', 'styl', 'js']);