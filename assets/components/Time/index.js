import React from 'react';
import moment from 'moment';

export default React.createClass({
    setTime(){

        let currentTime = moment();
        var date = currentTime.format('MMMM Do'); // November 20th
        var time = currentTime.format('H:mm:ss');    // 14:16:42

        this.setState({
            date,
            time
        });
    },
    componentWillMount(){
        this.setTime();
    },
    componentDidMount(){
        window.setInterval(() =>  {
            this.setTime();
        }, 1000);
    },
    render() {

        return(
            <div className="Moment-time" ref="timeRow">
                {this.state.date}<br/>
                {this.state.time}
            </div>
        )
    }
});