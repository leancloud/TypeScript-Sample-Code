/// <reference path="typings/index.d.ts" />
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

// category-name 可以是 Object，File 等功能模块的首字母大写
describe('category-name', function () {
  // 实例方法使用 # 分隔类和方法
  it('ClassName#instance-function-name', function (done) {
    try{
      // 示例代码-Start
      // 示例代码-End
      done();
    }
    catch(e){
      chai.assert.isNull(e);
    }
  });

  //静态方法使用 .(dot) 分隔类和方法
  it('ClassName.static-function-name', function (done) {
    try{
      // 示例代码-Start

      // 示例代码-End
      done();
    }
    catch(e){
      chai.assert.isNull(e);
    }
  });
});
