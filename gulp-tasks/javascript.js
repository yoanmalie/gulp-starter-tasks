// ---------------
// Javascript Task
// ---------------


// Import the paths configuration
var paths = require('../config');

// Concatenation 
module.exports = function (gulp, plugins, reportError) {
  return function () {
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
  };
};
