import sirv from 'sirv';
import polka from 'polka';
import  redirect from'@polka/redirect';
import compression from 'compression';
import { createProxyMiddleware } from 'http-proxy-middleware';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const proxy = {
	'/api': {
			target: 'http://localhost:8080/todo/api',
			pathRewrite: {'^/api': '/'},
			changeOrigin: true
	}
}

const server = polka();

Object.keys(proxy).forEach(function (context) {
	server.use(createProxyMiddleware(context, proxy[context]));
});

function redirectToRoot (req, res) {
	redirect(res, './');
}

server.get('/:segment', redirectToRoot)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
