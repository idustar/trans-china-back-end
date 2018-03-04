'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/chcp', controller.home.chcp);
    router.get('/sd', controller.home.seatDetail);
    router.get('/ss', controller.home.stationSuggest);
    router.get('/s', controller.home.suggest);
    router.get('/ca', controller.home.calendar);
    router.get('/fd', controller.home.flightdetail);
    router.get('/fl', controller.home.flightlist);
    router.get('/nearby', controller.home.nearby);


};
