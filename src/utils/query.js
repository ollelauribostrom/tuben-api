const kv = (k, v) => v == null ? '' : `${k}=${v}`;

function getStationQuery(req, res, next) {
  if (!req.query.station) {
    return next({ status: 400 });
  }
  req.qs = `searchstring=${req.query.station}`;
  return next();
}

function getJourneyQuery(req, res, next) {
  const { from, to, time, date } = req.query;
  if (!from || !to) {
    return next({ status: 400 });
  }
  req.qs = `originId=${from}&destId=${to}&${kv('time', time)}&${kv('date', date)}`;
  return next();
}

module.exports.kv = kv;
module.exports.getStationQuery = getStationQuery;
module.exports.getJourneyQuery = getJourneyQuery;