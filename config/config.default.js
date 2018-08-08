'use strict';

/**
 * egg-aliSMS default config
 * @member Config#aliSMS
 * @property {String} SOME_KEY - some description
 */
exports.aliSMS = {
    agent: false,
    client: {
        accessKeyId: 'yourAccessKeyId',
        secretAccessKey: 'yourAccessKeySecret',
        checkMobile: null,
    },
};
