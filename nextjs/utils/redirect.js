import Router from 'next/router'

export default async (target, ctx = {}) => {
    const { req, res } = ctx;
    const isServer = Boolean(req);
    const currentRoute = (isServer) ? req.originalUrl : Router.route;

    if (currentRoute !== target) {
        if (isServer) {
            res.writeHead(303, { Location: target })
            res.end()
        } else {
            await Router.push(target)
        }
    }
}
