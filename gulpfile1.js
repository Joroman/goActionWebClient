/* File: gulpfile.js */

// grab our gulp packages
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    gutil   = require('gulp-util');
var concat  = require('gulp-concat');  
var rename  = require('gulp-rename');  
var uglify  = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var pump    = require('pump');
var clean   = require('gulp-clean');
var del     = require('del');



// create a default task and just log a message
gulp.task('default', ['clean'],function(){
      gulp.start('watch','compress','minify','copyfiles');
});


// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

//cheek the errors javascript 
// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//concatenate
gulp.task('concat',function(){
    return gulp.src(['app/scripts/app.js','app/scripts/controllers.js','app/scripts/services.js'])
        .pipe(concat('aplication.js'))
        .pipe(gulp.dest("dist/scripts"))
});

//compress js
gulp.task('compress',['concat'],function (cb) {
  pump([
        gulp.src('dist/scripts/aplication.js'),
        rename('aplicationmin.js'),
        uglify(),
        gulp.dest("dist/scripts")
    ],
    cb
  );
});

//concat html files
/**
gulp.task('htmlconcat',function(){
    gulp.src('app/views/*.html')
        .pipe(concat('views.html'))
        .pipe(gulp.dest('dist/views'));
});
**/

//minify html compress
gulp.task('minify', function() {
  return gulp.src('app/views/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['jshint'],function() {
  gulp.watch('app/scripts/*.js', ['jshint']);
});


gulp.task('copyfiles',function(){
    gulp.src('app/index.html').pipe(gulp.dest('dist/'));
    gulp.src('app/styles/styles.css').pipe(gulp.dest('dist/styles'));
});