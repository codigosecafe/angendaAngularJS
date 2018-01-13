var gulp  = require('gulp');
var sass  = require('gulp-ruby-sass');
var watch = require('gulp-watch');

gulp.task('sass', () =>
    sass('src/assets/sass/**/*.sass')
        .on('error', sass.logError)
        .pipe(gulp.dest('src/assets/css/'))
);

gulp.task('watch',['sass'], function() {
    // content
});


gulp.task('default', function(){
	console.log('teste');
});