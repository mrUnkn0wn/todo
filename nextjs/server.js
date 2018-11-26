const { join } = require('path');
const http2 = require('spdy');
const express = require('express');
const next = require('next');
const fs = require('fs')

const proxy = {
  '/api': {
      target: 'http://localhost:8080/todo/api',
      pathRewrite: {'^/api': '/'},
      changeOrigin: true
  }
}

const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.',
  dev
})

const handle = app.getRequestHandler();
const port = 3000;

let server;
app.prepare()
.then((a, b, c, d) => {
    server = express()

    // Set up the proxy.
    const proxyMiddleware = require('http-proxy-middleware');

    Object.keys(proxy).forEach(function (context) {
        server.use(proxyMiddleware(context, proxy[context]));
    });

    server.get('*', (req, res) => {
        if (req.url.includes('/sw')) {
            const filePath = join(__dirname, 'static', 'workbox', 'sw.js');
            app.serveStatic(req, res, filePath);
        } else if (req.url.startsWith('static/workbox/')) {
            app.serveStatic(req, res, join(__dirname, req.url));
        } else {
            // if (req.url === '/login' || req.url === '/index') {
            //     pushScriptFile(res, '/pages/_app.js', app.renderOpts.buildId);
            //     pushScriptFile(res, '/pages/_error.js', app.renderOpts.buildId);
            // }

            handle(req, res, req.url);
        }
    });

    let options = {
        key: fs.readFileSync('./server.key'),
        cert: fs.readFileSync('./server.crt')
    }

    http2.createServer(options, server).listen(port, err => {
        if (err) {
          throw err
        }
        console.log(`> Ready on port ${port} [${env}]`)
    });
})
.catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
});

//app.renderOpts.buildId -
// /_next/static/e1qlYB_C~KIiNYb5fv3dK/pages/_app.js
// /_next/static/e1qlYB_C~KIiNYb5fv3dK/pages/_error.js
// /_next/static/e1qlYB_C~KIiNYb5fv3dK/pages/login.js
function pushScriptFile (res, filename, buildId) {
    const url = `/_next/static/${buildId}${filename}`;
    const stream = res.push(url, {
        request: { accept: '*/*' },
        response: { 'content-type': 'application/javascript' }
    });

    stream.on('error', function() {});
    stream.end(fs.readFileSync(join(__dirname, '.next/static/', buildId, filename), 'utf8'));
}
