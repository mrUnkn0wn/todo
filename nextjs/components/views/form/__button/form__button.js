import React from 'react';

import styles from './form__button.scss';

export default class FormButton extends React.Component {
    render () {
        return (
            <button className={styles.form__button} type="submit">{this.props.label}</button>
        );
    }
}
