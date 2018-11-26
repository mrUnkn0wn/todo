const path = require('path');

module.exports = {
    filename: 'static/manifest.json',
    name: 'TODO',
    short_name: 'TODO',
    description: 'TODO PWA Application',
    background_color: '#ffffff',
    theme_color: '#5755d9',
    display: 'standalone',
    orientation: 'portrait',
    fingerprints: false,
    inject: false,
    start_url: '/',
    ios: {
        'apple-mobile-web-app-title': 'TODO',
        'apple-mobile-web-app-status-bar-style': '#5755d9',
    },
    icons: [
        {
            src: path.resolve('static/favicon.ico'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: '/static',
        },
    ],
    includeDirectory: true,
    publicPath: '..',
}
