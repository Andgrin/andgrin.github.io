var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var merge = require('merge-stream');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {

   var sassStream = gulp.src('src/css/*.sass')
      .pipe(sass())
      .pipe(concat('scss-files.css'))
	;

	var cssStream = gulp.src('src/css/*.css')
      .pipe(concat('css-files.css'))
	;

	var mergedStream = merge( sassStream, cssStream)
      .pipe(concat('styles.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('depl/css'));

	return mergedStream;
});

// gulp.task('js', function(){
//    return gulp.src('client/javascript/*.js')
//       .pipe(sourcemaps.init())
//       .pipe(concat('app.min.js'))
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest('build/js'))
// });

gulp.task('default', [ 'styles' ]);