import React from 'react';
import styles from './main-layout.scss';

import Header from '../containers/header-container';
import Footer from './footer/footer';

export default function(props){
    return (
        <div id="body">
            <Header/>
            <div className={styles.main}>{ props.children }</div>
            <Footer/>
        </div>
    );
}
