const express = require('express');
const axios = require('axios');
const { getStationQuery, getJourneyQuery } = require('./utils/query');
const { stationUrl, journeyUrl, stationApiKey, journeyApiKey, port } = require('./config');

const app = express();

app.get('/', (req, res, next) => {
  return res.json({ status: 'Proxy server is running' });
});

app.get('/station', getStationQuery, async (req, res, next) => {
  const { data } = await axios.get(`${stationUrl}?key=${stationApiKey}&${req.qs}`);
  return res.json(data)
});

app.get('/journey', getJourneyQuery, async (req, res, next) => {
  const { data } = await axios.get(`${journeyUrl}?key=${journeyApiKey}&${req.qs}`);
  return res.json(data);
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(err);
  }
  return res.sendStatus(err.status || 500);
});

app.listen(port, () => console.log(`Proxy server running at: ${port}`));