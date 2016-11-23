import config from '../../../config/config'
import React from 'react';
var gcal = require('google-calendar');

export default React.createClass({
    componentWillMount() {
        this.google_calendar = new gcal.GoogleCalendar(config.calendar.google);
    },
    componentDidMount() {
        window.setInterval(() =>  {
            this.fetchCalendarEvents();
        }, 1000 * 60 * 15);
    },
    fetchCalendarEvents() {
        this.google_calendar.calendarList.list(function(err, calendarList) {
            this.google_calendar.events.list(calendarId, function(err, calendarList) {
                this.setState({
                    calendarList
                });
            });
        });
    },

    render() {
        return (
            <div className="MirrorCalendarList">
                {this.state.calendarList}
            </div>
        );
    }
});