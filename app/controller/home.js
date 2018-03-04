'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async chcp() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://train.qunar.com/dict/open/s2s.do', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async seatDetail() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://train.qunar.com/dict/open/seatDetail.do', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async stationSuggest() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://train.qunar.com/dict/open/stationSuggest.do', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async suggest() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://www.qunar.com/suggest/livesearch2.jsp', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async calendar() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://lp.flight.qunar.com/api/lp_calendar', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async flightdetail() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://flight.qunar.com/touch/api/domestic/wbdflightdetail', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async flightlist() {
        const ctx = this.ctx;
        const result = await ctx.curl('http://flight.qunar.com/touch/api/domestic/wbdflightlist', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async nearby() {
        const ctx = this.ctx;
        const result = await ctx.curl('https://lp.flight.qunar.com/api/dom/recommend/nearby_route', {data: ctx.query});
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
}

module.exports = HomeController;
