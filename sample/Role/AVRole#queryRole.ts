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
let roleObjectId = '';
let testRole: AV.Role;
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Role', function () {

    // 测试用例所需要的前置条件都需要在启动的时候调用。
    // 在 before 函数里面执行一些欲置脚本
    // 例如初始化 LeanCloud SDK
    before(function () {

        AV.init({
            appId: 'WI5a89CtPIOrWpvIwzNfOg9R-MdYXbMMI',
            appKey: 'RUoMOSD8RNlpd0MIIiSDi7BU',
            region: 'us'
        });
        // runs before all tests in this block
        let randomRolename = utils.randomString(8);
        testRole = new AV.Role(randomRolename);
        return testRole.save<AV.Object>().then<string>(testRole => {
            roleObjectId = testRole.id;
            console.log(roleObjectId);
            return roleObjectId;
        }, error => {
            return null;
        });
    });
    // 实例方法使用 # 分隔类和方法
    it('AVRole#queryRole', function (done) {
        try {
            // 示例代码-Start
            // 构建 AV.Role 的查询
            let roleQuery = new AV.Query(AV.Role);
            roleQuery.get<AV.Role>(roleObjectId).then(role => {
                console.log(role.id);
                let relation = role.getUsers();// 获取关系
                let query = relation.query();// 获取查询
                query.find<AV.User[]>().then(users => {
                    // users 就是拥有被查询角色的所有用户
                    chai.assert.equal(users.length, 0);
                    done();
                }, error => {
                    if (error) {
                        console.log(error);
                        throw error;
                    }
                });
            }, error => {
                if (error) throw 'error on get role';
            });
            // 示例代码-End
        }
        catch (e) {
            chai.assert.isNull(e);
            done();
        }
    });
    // 在 after 里面可以执行一些清理脚本，清理本次执行所产生的脏数据
    after(function () {
        // runs after all tests in this block
        testRole.destroy();
    });
});
