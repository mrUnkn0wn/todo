import React from 'react';
import styles from './footer.scss';

export default function(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__version}>v.0.0.1</div>
        </div>
    );
}
