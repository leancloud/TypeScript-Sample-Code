/// <reference path="../../typings/index.d.ts" />
/// <reference path="../init.ts" />
import * as chai from 'chai';
import * as AV from 'leancloud-jssdk';

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
let todoObjectId: string = '';
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Object', function () {

  // 测试用例所需要的前置条件都需要在启动的时候调用。
  // 在 before 函数里面执行一些欲置脚本
  // 例如初始化 LeanCloud SDK
  before(function () {
    // runs before all tests in this block
    let todo: AV.Object = new AV.Object('Todo');// 新建对象
    todo.set('location', '二楼大会议室');
    return todo.save<AV.Object>().then(todo => {
      todoObjectId = todo.id;
    }, error => {
    });
  });
  // 实例方法使用 # 分隔类和方法
  it('AVObject#update', function (done) {
    try {
      // 示例代码-Start
      // 第一个参数是 className，第二个参数是 objectId
      let todo: AV.Object = AV.Object.createWithoutData('Todo', '5745557f71cfe40068c6abe0');
      // 修改属性
      todo.set('content', '每周工程师会议，本周改为周三下午3点半。');
      // 保存到云端
      todo.save<AV.Object>().then(todo => {
        chai.assert.isNotNull(todo.id);
        done();
      }, error => {
        if(error) throw  error;
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
  });
});
