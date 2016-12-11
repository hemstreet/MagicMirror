import React from 'react';
var config = require('json-loader!../../../config/config.json');
import './Travel.scss';

export default React.createClass({
    componentWillMount() {

        this.options = config.travel;

        this.updateData();
    },
    componentDidMount() {
        this.startPolling();
    },
    getTravelUrl() {
        return `https://www.google.com/maps/embed/v1/directions?key=${this.options.key}&origin=${this.options.origin}&destination=${this.options.work}`;
    },
    setTravelUrl(origin, destination) {
        this.options.origin = origin;
        this.options.destination = destination;
    },

    /**
     * Setup options, object literal w/ width and height as params
     * @param dimensions
     */
    setDimensions(dimensions) {
      this.options.dimensions = dimensions;
    },
    updateData() {

        let dimensions = this.options.dimensions;
            // We have to empty out url for it to refresh the dom
        this.setState({
            url: '',
            dimensions
        });

        this.setState({
            url: this.getTravelUrl(),
            dimensions
        });
    },
    startPolling() {
        // Every minute reset url to get latest travel time
        let interval = 1000 * 60;

        this.interval = setInterval(() => {
            this.updateData();
        }, interval);
    },
    render() {

        return(
            <div className="Travel">
                <iframe className="Travel-iframe" id="Travel-iframe" src={this.state.url} width={this.state.dimensions.width} height={this.state.dimensions.height}></iframe>
            </div>
        )
    },
    componentWillUnmount() {
        clearInterval(this.interval);
    }
});