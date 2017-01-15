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

  it('handles the 404 cases', function * () {
    const response = yield app.get('/non/existing/page');

    expect(response.status).to.eql(404);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('not found\n');
  });

  it('sends empty 404 responses for non-html requests', function * () {
    const response = yield app.get('/non/existing.js');

    expect(response.status).to.eql(404);
    expect(response.headers['content-type']).not.to.eql('text/javascript; charset=UTF-8');
    expect(response.text).to.eql('');
  });

  it('recognizes pages without `.html` extension', function * () {
    const response = yield app.get('/some/page');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('some page\n');
  });

  it('recognizes pages without `.html` and with a slash', function * () {
    const response = yield app.get('/some/page/');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('some page\n');
  });

  it('recognizes index pages too', function * () {
    const response = yield app.get('/some/index-page');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('some index page\n');
  });

  it('recognizes index pages with ending slashes too', function * () {
    const response = yield app.get('/some/index-page/');

    expect(response.status).to.eql(200);
    expect(response.headers['content-type']).to.eql('text/html; charset=UTF-8');
    expect(response.text).to.eql('some index page\n');
  });
});
