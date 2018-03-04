'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1518972348976_3360';

    // add your config here
    config.middleware = [];

    config.security = {
        domainWhiteList: ['http://localhost:8080', 'http://transchina.dustark.cn']
    };


    return config;
};
