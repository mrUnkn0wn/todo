import React from 'react';

export default class FormButton extends React.Component {
    render () {
        return (
            <button className="form__button" type="submit">{this.props.label}</button>
        );
    }
}
