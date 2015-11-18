// ---------
// Sync Task
// ---------


// Import the paths configuration
var paths = require('../config');

// Watch files for changes and reload
module.exports = function (gulp, plugins, reportError) {
  return function () {
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
  };
};
