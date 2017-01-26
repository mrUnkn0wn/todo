import React from 'react';

export default function(props) {
    return (
        <div className="task-input-container">
            <input type="text" onKeyUp={props.onKeyUp} placeholder="What needs to be done?"/>
        </div>
    );
}
