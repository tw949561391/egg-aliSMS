'use strict';
const SMSClient = require('./lib/smsClient');

module.exports = agent => {
  const useAgent = agent.config.aliSMS.agent;
  if (useAgent) SMSClient(agent);
};
