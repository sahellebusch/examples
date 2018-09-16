'use strict';

const config = require('config');
const initApp = require('./server/init-app');
const logger = require('./lib/logger');

const port = config.port || 3000;
let server = initApp({ config, logger }).listen(port, () => {
  let { address, port } = server.address();
  logger.info(`Server listening at ${address}:${port}`);
});

const shutdown = signal => () => {
  logger.info(`${signal} received, shutting down the server.`);
  server.close();
};

// listen for TERM signal .e.g. kill
process.on('SIGTERM', shutdown('SIGTERM'));

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', shutdown('SIGINT'));
