# egg-aliSMS

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliSMS.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliSMS
[travis-image]: https://img.shields.io/travis/eggjs/egg-aliSMS.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-aliSMS
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-aliSMS.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-aliSMS?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-aliSMS.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-aliSMS
[snyk-image]: https://snyk.io/test/npm/egg-aliSMS/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aliSMS
[download-image]: https://img.shields.io/npm/dm/egg-aliSMS.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aliSMS

<!--
Description here.
-->

## Install

```bash
$ npm i egg-aliyun-sms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.aliSMS = {
  enable: true,
  package: 'egg-aliyun-sms',
};
```

## Configuration

```js
// {app_root}/config/config.default.js

exports.aliSMS = {
  client:{
    accessKeyId: 'yourAccessKeyId',
    secretAccessKey: 'yourAccessKeySecret',
    checkMobile: null, //check it work when this plugin init;
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

see [aliyun.com](https://dysms.console.aliyun.com/dysms.htm#/develop/api) to get you accessKeyId and secretAccessKey

## How to use
```js
//you can use ctx and app

/**
 * send
 * */
this.ctx.aliSMS.sendSMS({
      PhoneNumbers: '1500000000',
      SignName: '云通信产品',
      TemplateCode: 'SMS_000000',
      TemplateParam: '{"code":"12345"}'
    }).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.error(err)
    });
/**
 * query
 * */
this.ctx.aliSMS.queryDetail({
    PhoneNumber: '1500000000',
    SendDate: '20170731',
    PageSize: '10',
    CurrentPage: "1"
}).then(function (res) {
    let {Code, SmsSendDetailDTOs}=res
    if (Code === 'OK') {
        console.log(SmsSendDetailDTOs)
    }
}, function (err) {
    console.log(err)
})
```

More use [here](https://help.aliyun.com/document_detail/57458.html?spm=5176.doc57459.6.569.8OxxXv).





## Example

<!-- example here -->





## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)







