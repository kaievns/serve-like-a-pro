const { app, expect } = require('./helper');

describe('the app', () => {
  it('serves regular files', function * () {
    const response = yield app.get('/');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('oh, hi! this is the index\n');
  });

  it('serves the favicon.ico', function * () {
    const response = yield app.get('/favicon.ico');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('image/x-icon');
  });
});
