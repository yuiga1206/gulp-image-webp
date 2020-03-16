const gulp = require('gulp');
const webp = require('gulp-webp');
 
gulp.task('default', () =>
    gulp.src('dev_img/**/*.{png,jpg,gif}')
        .pipe(webp({quality: 100, method: 6}))
        .pipe(gulp.dest('img/'))
);