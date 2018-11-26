import React from 'react';

export default class OfflineSupport extends React.PureComponent {
    componentDidMount () {
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('/sw.js');
        }
    }

    render () {
        return null;
    }
}
