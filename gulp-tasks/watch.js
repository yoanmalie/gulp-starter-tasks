// ----------
// Watch Task
// ----------


// Import the paths configuration
var paths = require('../config');

// Watch files
module.exports = function (gulp, plugins, reportError) {
  return function () {
    gulp.watch(paths.source + paths.css.src + '/**/*.*', ['css']);
    gulp.watch(paths.source + paths.js.src + '/**/*.*', ['js']);
  };
};
