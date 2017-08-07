import React from 'react';

export default function(props) {
    return (
        <div className="header">
            <div className="header__main">
                <div className="header__title">todos</div>
                { props.authenticated &&
                    <div className="header__logout" onClick={props.logout}></div>
                }
            </div>
        </div>
    );
}
