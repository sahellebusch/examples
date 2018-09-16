'use strict';

const express = require('express');
const initStatusRouter = require('./route/status');

const initApp = ({ config, logger }) => {
  logger.info('Initializing server...');
  const app = express();
  app.use('/status', initStatusRouter({ config, logger }));
  return app;
};

module.exports = initApp;
