// --------
// CSS Task
// --------


// Import the paths configuration
var paths = require('../config');

// Compile Sass, autoprefixer, css optimizer, and sourcemaps
module.exports = function (gulp, plugins, reportError) {
  return function () {
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
  };
};
