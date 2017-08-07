import React from 'react';

export default class FormInput extends React.Component {
    render () {
        return (
            <div className="form__input">
                <input type={this.props.type} name={this.props.name} ref="input" placeholder={this.props.label}/>
                <label>{this.props.label}</label>
            </div>
        );
    }
}
