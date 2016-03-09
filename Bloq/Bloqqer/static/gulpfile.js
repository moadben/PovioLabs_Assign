var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function(){
	return gulp.src('/home/moad/internetstuff/PovioLabs_Assign/Bloq/static/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('/home/moad/internetstuff/PovioLabs_Assign/Bloq/static/build/css/'))
});

gulp.task('uglify', function(){
	return gulp.src('/home/moad/internetstuff/PovioLabs_Assign/Bloq/static/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('/home/moad/internetstuff/PovioLabs_Assign/Bloq/static/build/js/'))
});


gulp.task('minify', ['minify-css', 'uglify']);