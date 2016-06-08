"use strict";
var chai = require('chai');
var AV = require('leancloud-jssdk');
AV.init({
    appId: 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
    appKey: 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
    masterKey: 'o9sd6j9d30kukvljnhpwv5in73ljrmg95m5csl588917kp8s' });
describe('Object', function () {
    it('#save an AVObject', function (done) {
        var todoFolder = new AV.Object('TodoFolder');
        todoFolder.set('name', '工作');
        todoFolder.set('priority', 1);
        todoFolder.save().then(function (data) {
            var savedTodoFolder = data;
            chai.assert.ok(savedTodoFolder, "new an AVObject with extend");
        }, function (error) {
            if (error)
                throw error;
        });
        done();
    });
});
