var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var saveLicense = require('uglify-save-license');

gulp.task('default', function() {

  gulp.src('src/*.js')
      .pipe(uglify({ preserveComments: saveLicense}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
});
