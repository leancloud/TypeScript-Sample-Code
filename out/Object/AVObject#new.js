"use strict";
/// <reference path="../../typings/index.d.ts" />
var chai = require('chai');
var AV = require('leancloud-jssdk');
AV.init({
    appId: 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
    appKey: 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
    masterKey: 'o9sd6j9d30kukvljnhpwv5in73ljrmg95m5csl588917kp8s' });
describe('Object', function () {
    it('#new an AVObject with extend', function (done) {
        try {
            // 示例代码-Start
            var Todo = AV.Object.extend('Todo');
            // 示例代码-End
            chai.assert.ok(Todo, "new an AVObject with extend");
            done();
        }
        catch (e) {
            chai.assert.isNull(e);
        }
    });
    it('#new an AVObject with constructor', function (done) {
        try {
            // 示例代码-Start
            var todo = new AV.Object('Todo');
            // 示例代码-End
            chai.assert.ok(todo, "new an AVObject with extend");
            done();
        }
        catch (e) {
            chai.assert.isNull(e);
        }
    });
});
