import React from 'react';
import $ from 'jQuery';

export default React.createClass({
    componentDidMount: function() {
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     cache: false,
        //     success: function(data) {
        //         this.setState({data: data});
        //     }.bind(this),
        //     error: function(xhr, status, err) {
        //         console.error(this.props.url, status, err.toString());
        //     }.bind(this)
        // });
    },

    render() {
        return <h2>Weather</h2>;
    }
});
