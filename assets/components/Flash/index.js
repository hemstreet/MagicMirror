import React from 'react';
import mediator from 'mediator';
var config = require('json-loader!../../../config/config.json');

export default React.createClass({
    componentWillMount() {
        this.setState({
            message: null
        })
    },
    componentDidMount() {
        this.setupListeners();
    },
    setupListeners() {
        // mediator.on(config.events.displayFlash, this.displayFlash);
    },
    displayFlash(message) {
        this.setState({
            message
        })
    },
    render() {
        return(
            <div className="Flash">
                Flash
                {this.state.message}
            </div>
        )
    }
});