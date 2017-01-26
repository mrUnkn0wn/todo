'use strict';

const config = {

  browserPort: 3000,
  UIPort: 3001,

  restUrl:'http://localhost:8084',

  scripts: {
    src: './src/js/**/*.js',
    dest: './build/js/',
    test: './tests/**/*.js',
    gulp: './gulp/**/*.js'
  },

  images: {
    src: './src/img/**/*.{jpeg,jpg,png,gif}',
    dest: './build/img/'
  },

  styles: {
    src: './src/styles/**/*.scss',
    dest: './build/css/'
  },

  sourceDir: './src/',

  buildDir: './build/',

  testFiles: './tests/**/*.{js,jsx}',

  assetExtensions: [
    'js',
    'css',
    'map',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ]

};

export default config;
