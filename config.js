module.exports = {
  project : 'localhost/myproject',
  source  : './assets/src',
  prod    : './assets/dist',
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
