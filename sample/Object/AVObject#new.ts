/// <reference path="../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-jssdk';

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
      let todo = new AV.Object('Todo');
      // 示例代码-End
      chai.assert.ok(todo, "new an AVObject with extend");
      done();
    }
    catch (e) {
      chai.assert.isNull(e);
    }
  });
});
