'use strict';
const SMSClient = require('./lib/smsClient');

module.exports = app => {
  SMSClient(app);
};
