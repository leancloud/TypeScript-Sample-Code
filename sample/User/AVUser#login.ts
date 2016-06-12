/// <reference path="../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as utils from "../Common/utils";

// 测试用例所需要的前置条件都需要在启动的时候调用，例如
/*
AV.init({
  appId:'{put-test-appId-here}}',
  appKey:'{put-test-appKey-here}'});
*/

// 或者有一些需要提前写入的测试数据，例如用户修改密码等操作，需要的前置条件是用户已经存在
// 因此，也需要在脚本加载的时候就执行

// 还可以定义一些占位符变量，例如测试用例要用到的 objectId 等重要数据
/*
let targetObjectId = '';
let file = ...
*/
let tom: AV.User;
let randomTomUserName = '';
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('User', function () {

  // 测试用例所需要的前置条件都需要在启动的时候调用。
  // 在 before 函数里面执行一些欲置脚本
  // 例如初始化 LeanCloud SDK
  before(function () {
    // runs before all tests in this block
    // 实例方法使用 # 分隔类和方法

    // AV.init({
    //   appId: 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
    //   appKey: 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
    //   region: 'cn'
    // });
      tom = new AV.User();// 新建 AVUser 对象实例
      randomTomUserName = utils.randomString(8);
      tom.setUsername(randomTomUserName);// 设置用户名
      tom.setPassword('cat!@#123');// 设置密码
      return tom.signUp();
  });
  it('AVUser#login', function (done) {
    try {
      // 示例代码-Start
      AV.User.logIn<AV.User>(randomTomUserName, 'cat!@#123').then((loginedUser) => {
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
    tom.destroy();
  });
});
