var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    del     = require('del'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    runSequence = require('run-sequence'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util');

//Error Handler
var onError = function(error) {
  notify.onError({
    title:    "Sass",
    subtitle: "Error",
    message:  "<%= error.message %>",
    sound:    "Basso"
  })(error);
  this.emit('end');
};
//Browser
gulp.task('browser', function () {
  browserSync({
    server: {
    baseDir: './app/.'
    }
  });
});
//Clean dist/
gulp.task('clean:dist', function() {
  return del.sync('dist');
});
//Build
gulp.task('images', function(){
  gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
        interlaced: true
      })))
    .pipe(gulp.dest('dist/img'))
    .pipe(reload({stream:true}));
});

gulp.task('js-file', function() {
  gulp.src('app/js/**/*')
    .pipe(gulp.dest("dist/js"))
    .pipe(reload({stream:true}));
});
gulp.task('fonts', function() {
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(reload({stream:true}));
});
gulp.task('copy-html', function() {
  gulp.src("app/*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(reload({stream:true}));
});
gulp.task('styles', function() {
  gulp.src('app/scss/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({stream:true}));
});

gulp.task('copy-css', function() {
  gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css/'))
    .pipe(reload({stream:true}));
});
//Watch
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['styles']);
  gulp.watch("app/*.html").on('change', reload);
  gulp.watch("app/js/*.js").on('change', reload);
});
gulp.task('default', function(production) {
  runSequence('clean:dist','watch','browser', production);
});
gulp.task('build', function(build) {
  runSequence('clean:dist', 'images', 'styles','copy-html','copy-css','js-file','fonts', build);
});
