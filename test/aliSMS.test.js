'use strict';

const mock = require('egg-mock');

describe('test/aliSMS.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aliSMS-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, aliSMS')
      .expect(200);
  });
});
