'use strict';

const config = require('config');
const supertest = require('supertest');
const sinon = require('sinon');
const initApp = require('../../server/init-app');

const loggerStub = {
  info: sinon.stub(),
  error: sinon.stub()
};

describe('the app', () => {
  let app = null;

  before(() => {
    app = initApp({ config, logger: loggerStub });
  });

  it('returns a healthy status upon request', () =>
    supertest(app)
      .get('/status')
      .expect(200, { status: 'ok' })
      .then(() => {
        sinon.assert.callCount(loggerStub.info, 2);
        sinon.assert.notCalled(loggerStub.error);
        sinon.assert.calledWith(loggerStub.info, 'Initializing server...');
        sinon.assert.calledWith(loggerStub.info, sinon.match('Status Check:'));
      }));
});
