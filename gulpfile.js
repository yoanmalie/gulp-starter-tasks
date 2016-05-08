// --------------
// Paths config
// --------------

var appDir = './';
var paths = {
  project : 'myproject.dev',
  source  : appDir + '/assets/src',
  prod    : appDir + '/assets/dist',
  vendor  : '/vendor',

  vendors: {
    jquery : '/jquery/dist/jquery.min.js'
  },
  css: {
    src        : '/css',
    entry      : '/main',
    extensions : ['scss'],
    dest       : '/css',
    name       : 'styles',
    suffix     : '.min'
  },
  js: {
    src        : '/js',
    extensions : 'js',
    dest       : '/js',
    name       : 'app',
    suffix     : '.min'
  },
  img: {
    src        : '/img',
    extensions : ['png','jpg','jpeg','gif','svg'],
    dest       : '/img'
  },
  fonts: {
    src  : '/fonts',
    dest : '/fonts'
  }
};



// --------------
// Files required
// --------------


var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins         = gulpLoadPlugins({
                        pattern: ['gulp-*', 'gulp.*', 'del', 'browser-sync']
                      });



// -------------
// Error handler
// -------------


// Thanks to brendanfalkowski - https://github.com/mikaelbr/gulp-notify/issues/81
var reportError = function (error) {
  var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

  plugins.notify({
    title: 'Task Failed [' + error.plugin + ']',
    message: lineNumber + 'See console.',
    sound: 'Sosumi' // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
  }).write(error);

  plugins.util.beep();

  // Inspect the error object
  //console.log(error);

  // Easy error reporting
  //console.log(error.toString());

  // Pretty error reporting
  var report = '';
  var chalk = plugins.util.colors.white.bgRed;

  report += chalk('TASK:') + ' [' + error.plugin + ']\n';
  report += chalk('PROB:') + ' ' + error.message + '\n';
  if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
  if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
  console.error(report);

  this.emit('end');
}



// -----------------
// Tasks declaration
// -----------------


// CSS Task
gulp.task('css', function() {
    gulp.src(paths.source + paths.css.src + paths.css.entry + '.' + paths.css.extensions)
    .pipe(plugins.plumber({
      errorHandler: reportError
    }))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .on('error', reportError)
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      basename : paths.css.name,
      suffix: paths.css.suffix
    }))
    .pipe(plugins.sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.prod + paths.css.dest));
});


// Javascript Task
gulp.task('js', function() {
    gulp.src([
      paths.source + paths.vendor + paths.vendors.jquery,
      paths.source + paths.js.src + '/**/*.js'
    ])
    .pipe(plugins.plumber({
      errorHandler: reportError
    }))
    .pipe(plugins.concat(paths.js.name + paths.js.suffix + '.js'))
    .pipe(plugins.uglify())
    .on('error', reportError)
    .pipe(gulp.dest(paths.prod + paths.js.dest));
});


// Images Task
gulp.task('img', function() {
    gulp.src(paths.source + paths.img.src + '/**/*.{' + paths.img.extensions + '}')
    .pipe(plugins.plumber({
      errorHandler: reportError
    }))
    .pipe(plugins.imagemin({
      svgoPlugins: [{
        removeViewBox: false
      }, {
        cleanupIDs: false
      }]
    }))
    .on('error', reportError)
    .pipe(gulp.dest(paths.prod + paths.img.dest));
});


// Fonts Task
gulp.task('fonts', function() {
    gulp.src(paths.source + paths.fonts.src + '/**/*.*')
    .pipe(gulp.dest(paths.prod + paths.fonts.dest));
});


// Clean Task
gulp.task('reset', function() {
    // Reset prod
    plugins.del([paths.prod]);

    // Reset source but not the /vendor subfolder
    plugins.del([
    	paths.source + '/**',
        '!' + paths.source,
        '!' + paths.source + paths.vendor + '/**'
    ]);
});


// Watch Task
gulp.task('watch', function() {
    gulp.watch(paths.source + paths.css.src + '/**/*.*', ['css']);
    gulp.watch(paths.source + paths.js.src + '/**/*.*', ['js']);
});


// Sync Task
gulp.task('sync', function() {
    var files = [
      './**/*.html',
      './**/*.php',
      paths.prod + paths.css.src + '/**/*',
      paths.prod + paths.js.src + '/**/*'
    ];
    plugins.browserSync.init(files, {
      proxy: paths.project,
      notify: false
    });
});



// -----------------
// Tasks runner
// -----------------


// Build & Default Task
gulp.task('build', ['css', 'js', 'img', 'fonts']);
gulp.task('default', ['build', 'watch', 'sync']);
