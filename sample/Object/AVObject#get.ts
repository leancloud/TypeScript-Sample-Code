/// <reference path="../../typings/index.d.ts" />

import * as chai from 'chai';
import * as AV from 'leancloud-storage';

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
let testObjectId: string = '';
// category-name 可以是 Object，File 等功能模块的首字母大写
describe('Object', function () {
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
    let todo: AV.Object = new AV.Object('Todo');// 新建对象
    todo.set('title', '工程师周会');// 设置地点
    todo.set('priority', 1);// 设置优先级
    todo.set('location', '二楼会议室');// 设置地点
    return todo.save<AV.Object>().then(todo=>{
      testObjectId = todo.id;
    },error=>{

    });
  });
  // 实例方法使用 # 分隔类和方法
  it('AVObject#get', function (done) {
    try {
      // 示例代码-Start
      let query: AV.Query = new AV.Query('Todo');
      query.get<AV.Object>(testObjectId).then((todo) => {
        let priority: number = todo.get('priority');
        let location: string = todo.get('location');// 可以指定读取的类型
        let title = todo.get('title');// 也可以不指定读取的类型

        // 获取三个特殊属性
        let objectId: string = todo.id;
        var updatedAt: Date = todo.updatedAt;
        var createdAt: Date = todo.createdAt;

        chai.assert.isNotNull(objectId);

      }, (error) => {
        if (error) throw error;
      });
      // 示例代码-End
      done();
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
