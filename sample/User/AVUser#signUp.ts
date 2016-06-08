/// <reference path="../../typings/index.d.ts" />
/// <reference path="../init.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-jssdk';
import * as utils from "../Common/utils";

let randomUsername= '';

describe('User', function () {

  before(function() {
    // mock data for test cases
    AV.init({
      appId:'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
      appKey:'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww'});
    randomUsername = utils.randomString(8);
  });
  // 实例方法使用 # 分隔类和方法
  it('AVUser#signUp', function (done) {
    try{
      // 示例代码-Start
      let user : AV.User = new AV.User();// 新建 AVUser 对象实例
      user.setUsername(randomUsername);// 设置用户名
      user.setPassword('cat!@#123');// 设置密码
      user.setEmail(randomUsername + '@leancloud.cn');// 设置邮箱

      user.signUp<AV.User>().then((loginedUser)=>{
        chai.assert.isNotNull(loginedUser.id);
        done();
      },(error=>{
        if(error) throw error;
      }));
      // 示例代码-End
    }
    catch(e){
      chai.assert.isNull(e);
    }
  });
});
