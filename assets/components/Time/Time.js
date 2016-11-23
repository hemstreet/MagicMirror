import React from 'react';
import moment from 'moment';

export default React.createClass({
    setTime: function(){

        let currentTime = moment()
        var date = currentTime.format('MMMM Do'); // November 20th
        var time = moment().format('H:mm:ss');    // 14:16:42

        this.setState({
            date,
            time
        });
    },
    componentWillMount: function(){
        this.setTime();
    },
    componentDidMount: function(){
        window.setInterval(() =>  {
            this.setTime();
        }, 1000);
    },
    render: function() {

        return(
            <div className="Moment-time" ref="timeRow">
                {this.state.date}<br/>
                {this.state.time}
            </div>
        )
    }
});