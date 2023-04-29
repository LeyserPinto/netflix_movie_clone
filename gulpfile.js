const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
/**
 * Build Styles Gulp
 * @returns gulp
 */
function buildStyles() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({
        outputStyle:'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
};

function buildScripts() {
    return gulp.src('./src/script/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/script/'))
}

exports.default = gulp.parallel(buildStyles, buildScripts);
exports.watch   = function () {
    return gulp.watch('./src/styles/*.scss', buildStyles)
}