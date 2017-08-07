import React from 'react';

import Header from '../containers/header-container';
import Footer from './footer/footer';

export default function(props){
    return (
        <div id="body">
            <Header/>
            <div className="main">{ props.children }</div>
            <Footer/>
        </div>
    );
}
