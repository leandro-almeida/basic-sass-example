var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('css-compiler', function(){
  return gulp.src('./source/sass/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('./dist/css'));
});

gulp.task('observer', function(){
  gulp.watch('./source/sass/**/*.scss', ['css-compiler']);
});
