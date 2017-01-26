import React from 'react';

export default function(props) {
    return (
        <header>
            <div className="header-main">
                <div className="header-title">todos</div>
            </div>
            { props.authenticated &&
                <div className="header-logout" onClick={props.logout}></div>
            }
        </header>
    );
}


