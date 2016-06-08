/// <reference path="../../typings/index.d.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-jssdk';

AV.init({
  appId:'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
  appKey:'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
  masterKey:'o9sd6j9d30kukvljnhpwv5in73ljrmg95m5csl588917kp8s'});

  describe('Object', function () {
    it('#save an AVObject', function (done) {
      let todoFolder:AV.Object = new AV.Object('TodoFolder');// 新建对象
      todoFolder.set('name','工作');// 设置名称
      todoFolder.set('priority',1);// 设置优先级
      todoFolder.save<AV.Object>().then(
        (data) => {
          let savedTodoFolder : AV.Object = data;
          chai.assert.ok(savedTodoFolder,"new an AVObject with extend");
      },(error)=>{
        if(error) throw error;
      });
      done();
    });
  });
