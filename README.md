# What is it ?

This is my basic Gulp starter for all projects. You can easily modify tasks, add or delete. There are many tasks divided into multiple files:
  - CSS, compile Sass to css;
  - Fonts, just moving files here, add your features;
  - Images, compression;
  - Javascript, concatenate and minify;
  - Reset, burn, burn all with fire;
  - sync, reload the page on save,
  - watch, look if files have changed (and do a task).

 ##### And there are a cool error handling!
 
:warning: Be careful with the reset tasks! What it does : reset the /assets folder.

# How to run ?
First, clone this repository, and run npm...
```shell
git clone https://github.com/yoanm/gulp-starter-tasks.git
npm install
```
Take a pause, go to swimming pool during this time. :swimmer:

 ##### Try...
Open the index.html file (to see the differences) and launch this Gulp css task:
```shell
gulp css
```
Reload the index.html and...

![Magic gif !](https://raw.github.com/yoanm/gulp-starter-tasks/master/assets/src/img/magic.gif)