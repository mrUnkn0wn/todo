import React from 'react';

export default function(props) {
    return (
        <div className="task-input">
            <input className="task-input__input" type="text" onKeyUp={props.onKeyUp} placeholder="What needs to be done?"/>
        </div>
    );
}
