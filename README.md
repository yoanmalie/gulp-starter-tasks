# What is it ?

This is my basic Gulp starter for all projects. You can easily modify tasks, add or delete. There are many tasks:
  - css, compile Sass to css;
  - fonts, just moving files here;
  - img, compression;
  - js, concatenate and minify;
  - reset, delete the dist folder;
  - sync, synchronization with BrowserSync,
  - watch, look files have changed.

##### And there are a cool error handler!

# How to run ?
First, clone this repository, and run npm...
```shell
git clone https://github.com/yoanm/gulp-starter-tasks.git
npm install
```
Take a pause, go to swimming pool during this time. :swimmer:

Maybe, you can set progress bar to false and save time, see: [Progress bar noticeably slows down npm install](https://github.com/npm/npm/issues/11283).

##### Try...
You can run above tasks or build the apps (css, js, img, fonts):
```shell
gulp build
```
build, watch and sync:
```shell
gulp default // or just gulp
```

# Structure
```
.
└── assets
    └── src
        ├── css
        │   ├── abstracts
        │   │   └── _variables.scss
        │   ├── base
        │   │   └── _base.scss
        │   └── main.scss
        ├── fonts
        ├── img
        └── js
            └── global.js
```

# Troubleshooting
Sometimes, you need to clean your npm cache, try:
```shell
npm cache clean
```