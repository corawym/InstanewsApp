// Requiring packages
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    prettyError = require('gulp-prettyerror');
     

// Gulp Tasks Below

// Gulp Scripts Task
gulp.task('scripts', ['lint'], function() {
   gulp.src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js')) // Where do we put the result?
});

// Gulp sass function
gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
    .pipe(prettyError())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});

//Reload browser
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //End of browser sync init

    gulp.watch(['./build/js/*.js','./index.html','./build/css/*.css']).on('change', browserSync.reload);
});

// Gulp watch function
gulp.task('watch', function() {
   gulp.watch('./js/*.js', ['scripts']);
   gulp.watch('./sass/*.scss', ['sass']);
});

//Gulp lint function
gulp.task('lint', function() {
  return gulp.src(['./js/*.js']) 
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

//Gulp Default Text
gulp.task('default', ['watch','browser-sync']);