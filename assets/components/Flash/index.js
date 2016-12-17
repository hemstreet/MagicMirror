import React from 'react';
var mediator = require('mediator');
var config = require('json-loader!../../../config/config.json');

export default React.createClass({
    componentWillMount() {
        this.messages = ''; //{};

        this.setState({
            messages: this.messages
        })
    },
    componentDidMount() {
        this.setupListeners();
    },
    setupListeners() {
        mediator.on(config.events.displayFlash, this.displayFlash);
    },
    displayFlash(message) {
        this.message[message] = message;

        // set timeout for message
        this.setState({
            message
        })
    },
    render() {
        return(
            <div className="Flash">
                Flash
                {this.state.messages}
            </div>
        )
    }
});