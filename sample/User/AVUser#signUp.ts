/// <reference path="../../typings/index.d.ts" />
/// <reference path="../init.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as utils from "../Common/utils";

let randomUsername = '';
let user:AV.User;
describe('User', function () {

  before(function () {
    // mock data for test cases
    randomUsername = utils.randomString(8);
  });
  // 实例方法使用 # 分隔类和方法
  it('AVUser#signUp', function (done) {
    try {
      // 示例代码-Start
      user = new AV.User();// 新建 AVUser 对象实例
      user.setUsername(randomUsername);// 设置用户名
      user.setPassword('cat!@#123');// 设置密码
      user.setEmail(randomUsername + '@leancloud.cn');// 设置邮箱

      user.signUp<AV.User>().then((loginedUser) => {
        chai.assert.isNotNull(loginedUser.id);
        done();
      }, (error => {
        if (error) throw error;
      }));
      // 示例代码-End
    }
    catch (e) {
      chai.assert.isNull(e);
    }
  });

  // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
  after(function () {
    // runs after all tests in this block
    user.destroy();
  });
});
