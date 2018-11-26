module.export = {
    clientClaim: true,
    skipWaiting: true,
    runtimeCaching: [
        {
            urlPattern: '/index',
            handler: 'networkFirst',
            options: {
              cacheName: 'html-cache'
            }
        },
        {
            urlPattern: '/login',
            handler: 'cacheFirst',
            options: {
                cacheName: 'html-cache'
            }
        },
        {
            urlPattern: /^\/api\/*/,
            handler: 'staleWhileRevalidate',
            options: {
                cacheName: 'api-cache',
                cacheableResponse: {
                    statuses: [200, 500]
                }
            }
        },
        {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'image-cache',
                cacheableResponse: {
                    statuses: [0, 200]
                }
            }
        }
    ]
};
