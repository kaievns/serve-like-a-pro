const { app, expect } = require('./helper');

describe('the app', () => {
  it('serves regular files', function * () {
    const response = yield app.get('/');

    expect(response.status).to.eql(200);
    console.log(response);
  });
});
