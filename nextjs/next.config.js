const withSass = require('@zeit/next-sass');
const NextWorkboxPlugin = require('next-workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const workboxConfig = require('./workbox.config.js');
const pwaManifest = require('./pwa-manifest.js');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    serverRuntimeConfig: {
        restUrl: 'http://localhost:8080/todo/api'
    },
    publicRuntimeConfig: {
        restUrl: '/api'
    },
    webpack: (config, { isServer, buildId, dev }) => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        if (!isServer) {
            config.plugins.push(
                new NextWorkboxPlugin({
                    buildId,
                    ...workboxConfig,
                }),
                new WebpackPwaManifest(pwaManifest)
            );
        }

        return config
    }
})
