import React from 'react';

import Header from '../containers/header-container';
import Footer from './footer';

export default function(props){
    return (
        <div id="body">
            <Header/>
            <main>{ props.children }</main>
            <Footer/>
        </div>
    );
}
