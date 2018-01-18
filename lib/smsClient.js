'use strict';
const SMSClient = require('@alicloud/sms-sdk');

module.exports = app => {
  app.addSingleton('aliSMS', createSMS);
};

function createSMS(config, app) {
  const logger = app.coreLogger;
  logger.info('[egg-aliyun-sms] instance begin init');
  const accessKeyId = config.accessKeyId;
  const secretAccessKey = config.secretAccessKey;
  const checkMobile = config.checkMobile;
  const sms = new SMSClient({
    accessKeyId,
    secretAccessKey,
  });
  app.beforeStart(async function demo() {
    try {
      const res = await sms.queryDetail({
        PhoneNumber: checkMobile,
        SendDate: '20170731',
        PageSize: '10',
        CurrentPage: '1',
      });
      logger.info(`[egg-aliyun-sms] instance[ status OK,  send count to ${checkMobile}: ${res.TotalCount}`);
    } catch (e) {
      logger.error(`[egg-aliyun-sms] instance[ status ERROR, because ${e.message}`);
    }
  });
  return sms;
}
