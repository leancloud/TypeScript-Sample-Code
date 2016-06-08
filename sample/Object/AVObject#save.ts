/// <reference path="../../typings/index.d.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-jssdk';

AV.init({
  appId:'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
  appKey:'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww'});
  describe('Object', function () {
    it('AVObject#save', function (done) {
      let todoFolder:AV.Object = new AV.Object('TodoFolder');// 新建对象
      todoFolder.set('name','工作');// 设置名称
      todoFolder.set('priority',1);// 设置优先级
      todoFolder.save<AV.Object>().then(
        (data) => {
          let savedTodoFolder : AV.Object = data;
          chai.assert.ok(savedTodoFolder,"new an AVObject with extend");
          done();
      },(error)=>{
        if(error) throw error;
      });
    });

    it('AVQuery.doCloudQuery', function (done) {
      // 执行 CQL 语句实现新增一个 TodoFolder 对象
      AV.Query.doCloudQuery<any>('insert into TodoFolder(name, priority) values("工作", 2)').then(
        (data) => {
          let savedTodo : AV.Object = data.results[0];
          chai.assert.isNotNull(savedTodo.id);
          done();
        },
        (error) => {
        if(error) throw error;
          done();
        }
      );
    });
  });
