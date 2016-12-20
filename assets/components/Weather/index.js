/**
 * Main functionality from http://joanmira.com/tutorial-build-a-weather-app-with-react/
 */

import React from 'react';
var classNames = require('classnames');
import Api from './WeatherRequest';

import './Weather.scss';

var query = ''; // Expects something like this ?city=London,Paris,Berlin,Madrid
var cities = ['Littleton']; // Transform query string cities into an array
var citiesWeather = []; // API cache
var currentCity = 0; // Index of current city displayed

export default React.createClass({
    getInitialState() {
        return {
            weather: '',
            temp: 0,
            humidity: 0,
            wind: 0
        }
    },

    componentWillMount() {
        // Get the query string data
        query = location.search.split('=')[1];

        // Figure out if we need to display more than one city's weather
        if (query !== undefined) {
            cities = query.split(','); // Get an array of city names

            // Set the interval to load new cities
            if (cities.length > 1) {
                setInterval(() => {
                    currentCity++;
                    if (currentCity === cities.length) {
                        currentCity = 0;
                    }
                    this.fetchData(); // Reload the city every 5 seconds
                }, 5000);
            }
        }
        else {
            cities[0] = 'Littleton'; // Set Littleton as the default city
        }

        // Create a timer to clear the cache after 5 minutes, so we can get updated data from the API
        setInterval(() => {
            citiesWeather = []; // Empty the cache
        }, (1000*60*5));

        this.fetchData();
    },

    fetchData() {

        // Get the data from the cache if possible
        if (citiesWeather[currentCity]) {
            this.updateData();
        }
        else {
            // Request new data to the API
            Api.get(cities[currentCity])
                .then((data) => {
                    citiesWeather[currentCity] = data;
                    this.updateData();
                });
        }
    },

    updateData() {
        // Update the data for the UI
        let tempInKelvin = citiesWeather[currentCity].main.temp;
        this.setState({
            weather: citiesWeather[currentCity].weather[0].id,
            // temp: Math.round(citiesWeather[currentCity].main.temp - 273.15), // Kelvin to Celcius
            temp: Math.round(1.8 * (tempInKelvin - 273) + 32), // Kelvin to Fahrenheit
            humidity: Math.round(citiesWeather[currentCity].main.humidity),
            wind: Math.round(citiesWeather[currentCity].wind.speed)
        });
    },

    render() {
        // Build class names with dynamic data
        var weatherClass = classNames('wi wi-owm-' + this.state.weather);

        // Render the DOM elements
        return <div className="Weather">
            <h1 className="Weather-city">{cities[currentCity]}</h1>
            <div className="Weather-icon">
                <i className={weatherClass}></i>
            </div>
            <section className="Weather-details">
                <div className="Weather-temp">
                    <span className="Weather-temp-number">{this.state.temp}</span>
                    <span className="wi wi-degrees"></span>
                </div>
                <div className="Weather-wind">
                    <i className="wi wi-small-craft-advisory">{this.state.wind}
                        <span className="vel">Km/h</span>
                    </i>
                </div>
            </section>
        </div>;
    }
});
