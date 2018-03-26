const env = require('dotenv');

env.load();

module.exports = {
  port: process.env.PORT || 5000,
  stationUrl: 'http://api.sl.se/api2/typeahead.json',
  journeyUrl: 'http://api.sl.se/api2/TravelplannerV3/trip.json',
  stationApiKey: process.env.STATION_API_KEY,
  journeyApiKey: process.env.JOURNEY_API_KEY,
}