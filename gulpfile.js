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


// Function to call the right file and pass variables
function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, reportError)
}

// CSS Task
gulp.task('css', getTask('css-sass'));

// Javascript Task
gulp.task('js', getTask('javascript'));

// Images Task
gulp.task('img', getTask('images'));

// Fonts Task
gulp.task('fonts', getTask('fonts'));

// Clean Task
gulp.task('reset', getTask('reset'));

// Watch Task
gulp.task('watch', getTask('watch'));

// Sync Task
gulp.task('sync', getTask('sync'));

// Build & Default Task
gulp.task('build', ['css', 'js', 'img', 'fonts']);
gulp.task('default', ['build', 'watch', 'sync']);
