import React from 'react';
import App, { Container } from 'next/app';
import OfflineSupport from '../components/offline-support';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Store from '../store';
import * as authApi from '../api/auth-api.js';

const makeStore = () => {
    return Store;
};

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render () {
        const { Component, pageProps, store } = this.props;

        return (
          <Container>
            <OfflineSupport />
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        )
    }
}

export default withRedux(makeStore)(MyApp);
