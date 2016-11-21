import React from 'react';
import Weather from '../Weather/Weather';
import Time from '../Time/Time';

import '../../index.scss';

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Mirror</h1>
                <Time/>
                <Weather/>
            </div>
        );
    }
});