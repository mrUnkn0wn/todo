import React from 'react';
import Head from 'next/head';
import styles from './header.scss';

export default function(props) {
    return (
        <div className={styles.header}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="TODO App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#E7ECEF" />
                <title>TODO</title>
                <link rel="manifest" href="/_next/static/manifest.json" />
                <link rel="icon" href="/static/favicon.ico" />
            </Head>
            <div className={styles.header__main}>
                <div className={styles.header__title}>todos</div>
                { props.authenticated &&
                    <div className={styles.header__logout} onClick={props.logout}></div>
                }
            </div>
        </div>
    );
}
