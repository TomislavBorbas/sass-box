var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

// Styles task
gulp.task('styles', function() {
    gulp.src('main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

// Connect task
gulp.task('connect', function() {
    connect.server({
        root: './guideline.html',
        livereload: true
    });
});

// Watch task
gulp.task('watch', function() {
    gulp.watch('./**/*.scss',['styles']);
});

// Default task
gulp.task('default', ['connect', 'watch']);