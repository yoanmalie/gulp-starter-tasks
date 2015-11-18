// ----------
// Reset Task
// ----------


// Import the paths configuration
var paths = require('../config');

// Reset source & production folders
module.exports = function (gulp, plugins, reportError) {
  return function () {
    // Reset prod
    plugins.del([paths.prod]);

    // Reset source but not the /vendor subfolder
    plugins.del([
                paths.source + '/**',
                '!' + paths.source,
                '!' + paths.source + paths.vendor + '/**'
                ]);
  };
};
