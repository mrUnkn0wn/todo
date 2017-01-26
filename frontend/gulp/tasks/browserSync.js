'use strict';

import url         from 'url';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import config      from '../config';
import proxy       from 'http-proxy-middleware'

gulp.task('browserSync', function() {

  browserSync.init({
    proxy: config.restUrl,
    serveStatic: [{
      dir:config.buildDir,
      route:'/app'
    }],
    port: config.browserPort,
    ui: {
      port: config.UIPort
    },
    ghostMode: {
      links: false
    }
  });

});
