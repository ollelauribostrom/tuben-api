const { kv, getStationQuery, getJourneyQuery } = require('../src/utils/query');

describe('{unit} query.js - kv', () => {
  test('returns key value pair if value is defined', () => {
   expect(kv('key', 'value')).toEqual('key=value');
  });
  test('returns empty string if value is undefined', () => {
    expect(kv('key', undefined)).toEqual('');
  });
  test('returns key value pair if value is 0', () => {
    expect(kv('key', 0)).toEqual('key=0');
  });
});

describe('{unit} query.js - getStationQuery', () => {
  test('calls next with error if query does not contain station', () => {
    const req = { query : {}};
    const nextSpy = jest.fn();
    getStationQuery(req, {}, nextSpy);
    expect(nextSpy.mock.calls[0][0]).toEqual({ status: 400 });
  });
  test('builds query string', () => {
    const req = { query: { station: 'test' }};
    const nextSpy = jest.fn();
    getStationQuery(req, {}, nextSpy);
    expect(req.qs).toBe('searchstring=test');
    expect(nextSpy.mock.calls.length).toBe(1);
  });
});