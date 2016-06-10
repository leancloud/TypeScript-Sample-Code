/// <reference path="../../typings/index.d.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-storage';
import * as utils from "../Common/utils";

// 或者有一些需要提前写入的测试数据，例如用户修改密码等操作，需要的前置条件是用户已经存在
// 因此，也需要在脚本加载的时候就执行

// 还可以定义一些占位符变量，例如测试用例要用到的 objectId 等重要数据
/*
let targetObjectId = '';
let file = ...
*/
let administratorRole: AV.Role;
let randomRolename = '';
let currentUser: AV.User;
let randomUsername = '';
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Role', function () {

  // 测试用例所需要的前置条件都需要在启动的时候调用。
  // 在 before 函数里面执行一些欲置脚本
  // 例如初始化 LeanCloud SDK
  before(function () {
    // runs before all tests in this block
    randomRolename = utils.randomString(8);
    randomUsername = utils.randomString(8);
    currentUser = new AV.User();// 新建 AVUser 对象实例
    currentUser.setUsername(randomUsername);// 设置用户名
    currentUser.setPassword('cat!@#123');// 设置密码
    return currentUser.signUp();
  });
  // 实例方法使用 # 分隔类和方法
  it('AVRole#save', function (done) {
    try {
      // 示例代码-Start
      // 新建一个角色，并把为当前用户赋予该角色
      let roleAcl = new AV.ACL();
      roleAcl.setPublicReadAccess(true);
      roleAcl.setPublicWriteAccess(false);

      // 当前用户是该角色的创建者，因此具备对该角色的写权限
      roleAcl.setWriteAccess(AV.User.current(), true);

      administratorRole = new AV.Role(randomRolename, roleAcl);//新建角色
      administratorRole.save<AV.Role>().then((role) => {
        // 创建成功
        chai.assert.isNotNull(role.id);
        done();
      }, error => {
        if (error) throw error;
      });//保存
      // 示例代码-End
    }
    catch (e) {
      chai.assert.isNull(e);
    }
  });
  // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
  after(function () {
    // runs after all tests in this block
    administratorRole.destroy();
    currentUser.destroy();
  });
});
