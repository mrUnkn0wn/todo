import React from 'react';
import redirect from '../utils/redirect.js';
import * as authApi from '../api/auth-api.js';

export default class BasePage extends React.Component {
    static async getInitialProps (context) {
        let headers;

        if (context.req) {
            headers = {
                cookie: context.req.headers.cookie
            }
        }

        await authApi.auth(headers);

        if (context.store.getState().authState.authenticated) {
            redirect('/index', context);
        } else {
            redirect('/login', context);
        }
    }
}
