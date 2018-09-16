'use strict';

const { Router } = require('express');

const initStatusRouter = ({ config, logger }) => {
  const status = Router();

  status.get('/', (req, res) => {
    logger.info(`Status Check: ${new Date().toISOString()}`);
    res.send({ status: 'ok' });
  });

  return status;
};

module.exports = initStatusRouter;
