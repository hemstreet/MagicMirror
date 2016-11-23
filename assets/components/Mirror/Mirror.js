import React from 'react';
import Weather from '../Weather/Weather';
import Time from '../Time/Time';
// import GoogleCalendar from '../Calendar/GoogleCalendar';

import '../../index.scss';

export default React.createClass({
    render() {
        return (
            <div className="Mirror">

                <div className="Mirror-section Mirror-section--top Mirror-section--left">

                </div>

                <div className="Mirror-section Mirror-section--top Mirror-section--right">
                    <Time/>
                </div>

                <div className="Mirror-section Mirror-section--bottom Mirror-section--left">
                    {/*<GoogleCalendar/>*/}

                </div>

                <div className="Mirror-section Mirror-section--bottom Mirror-section--right">
                    <Weather/>
                </div>

            </div>
        );
    }
});