// -----------
// Images Task
// -----------


// Import the paths configuration
var paths = require('../config');

// Optimization
module.exports = function (gulp, plugins, reportError) {
  return function () {
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
  };
};
