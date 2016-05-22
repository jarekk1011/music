var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload,
    del           = require('del'),
    imagemin      = require('gulp-imagemin'),
    cache         = require('gulp-cache'),
    runSequence   = require('run-sequence'),
    notify        = require('gulp-notify'),
    plumber       = require('gulp-plumber'),
    compass       = require('gulp-compass'),
    cssnano       = require('gulp-cssnano'),
    uglify        = require('gulp-uglify'),
    useref        = require('gulp-useref');
//Error Handler
var onError = function(error) {
  notify.onError({
    title:    'Sass',
    subtitle: 'Error',
    message:  '<%= error.message %>',
    sound:    'Basso'
  })(error);
  this.emit('end');
};
//Browser
gulp.task('browser', function () {
  browserSync({
    server: {
    baseDir: './app/'
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
        interlaced: true,
        progressive: true
      })))
    .pipe(gulp.dest('dist/img'))
    .pipe(reload({stream:true}));
});
gulp.task('fonts', function() {
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});
gulp.task('copy-music', function() {
  gulp.src('app/music/**/*')
    .pipe(gulp.dest('dist/music/'));
});
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
gulp.task('cssnano', function() {
    return gulp.src('dist/css/**/*')
      .pipe(cssnano({discardComments: {removeAll: true}}))
      .pipe(gulp.dest('dist/css'));
});
gulp.task('uglify-js', function() {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
//Sass Compass
gulp.task('compass', function() {
  gulp.src('app/scss/**/*.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(compass({
      config_file: 'config.rb',
      css: 'app/css',
      sass: 'app/scss'
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(reload({stream:true}));
});
//Watch
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch('app/*.html').on('change', reload);
  gulp.watch('app/js/*.js').on('change', reload);
});
gulp.task('default', function(production) {
  runSequence('clean:dist','compass','watch','browser', production);
});
gulp.task('build', function(build) {
  runSequence('clean:dist','compass','images','copy-music','useref','fonts','cssnano','uglify-js', build);
});
