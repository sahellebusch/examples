'use strict';

const logLevels = {
  info: 'INFO',
  error: 'ERROR'
};

const log = (level, message, detail = null) => {
  detail
    ? console.log(`${level}: ${message} - ${detail}`)
    : console.log(`${level}: ${message}`);
};

module.exports = {
  info: (message, detail) => log(logLevels.info, message, detail),
  error: (message, detail) => log(logLevels.error, message, detail)
};
