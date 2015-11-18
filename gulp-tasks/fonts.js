// ----------
// Fonts Task
// ----------


// Import the paths configuration
var paths = require('../config');

// Copy and paste files
module.exports = function (gulp, plugins, reportError) {
  return function () {
    gulp.src(paths.source + paths.fonts.src + '/**/*.*')
    .pipe(gulp.dest(paths.prod + paths.fonts.dest));
  };
};
