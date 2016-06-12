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
let administratorRole: AV.Role;
let moderatorRole: AV.Role;
let administratorName = utils.randomString(8);
let moderatorName = utils.randomString(8);
let randomUsername = '';
let currentUser: AV.User;
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Role#addRole', function () {

    // 测试用例所需要的前置条件都需要在启动的时候调用。
    // 在 before 函数里面执行一些欲置脚本
    // 例如初始化 LeanCloud SDK
    before(function () {
        // runs before all tests in this block
        /*
        AV.init({
          appId:'{put-test-appId-here}}',
          appKey:'{put-test-appKey-here}'});
        */

        // AV.init({
        //     appId: 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap',
        //     appKey: 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww',
        //     region: 'cn'
        // });

        randomUsername = utils.randomString(8);
        currentUser = new AV.User();// 新建 AVUser 对象实例
        currentUser.setUsername(randomUsername);// 设置用户名
        currentUser.setPassword('cat!@#123');// 设置密码
        return currentUser.signUp();
    });
    // 实例方法使用 # 分隔类和方法
    it('AVRole#addRole', function (done) {
        try {
            // 示例代码-Start
            // 建立版主和论坛管理员之间的从属关系
            administratorRole = new AV.Role(administratorName);//新建管理员角色
            administratorRole.save<AV.Role>().then(administratorRole => {
                moderatorRole = new AV.Role(moderatorName);//新建版主角色
                // 将 Administrator 作为 moderatorRole 子角色
                moderatorRole.getRoles().add(administratorRole);
                moderatorRole.save<AV.Role>().then(role => {
                    chai.assert.isNotNull(role.id);
                    done();
                }, error => {
                    if (error) throw 'error on add role.';
                });
            }, error => {

            });
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
        moderatorRole.destroy();
    });
});
