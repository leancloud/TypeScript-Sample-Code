# LeanCloud TypeScript SDK 文档示例代码

## 文档地址
[JavaScript & TypeScript 数据存储开发指南](https://leancloud.cn/docs/leanstorage_guide-js.html)


## 功能
当开发者阅读文档的代码片段，想要阅读更多关于执行代码片段使用的前置条件时，可以阅读本项目里面一一对应的代码片段的测试用例，这样可以方便开发者使用接口的时候有一个最佳实践的参考。


## 贡献代码
从文档中找到对应代码片段的 Test Case 的源代码，修改，然后发出 PR，主分支(master)会有 travis CI 的脚本自动运行单元测试，只有测试全都通过才可以被合并到主分支，而文档对应的地方也应该即使修改。

## 代码示例
代码示例请参考根目录下的：[code-example](code-example.ts)

```ts
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

```

## FAQ
Q：SDK 更新会对当前项目产生影响么？
A：会，目前 JS SDK 每一次有新的 PR 被 merge 进主分支，都会发送一个 PR 到当前项目，这个 PR 只会更新 `package.json` 里面的 JS SDK 的版本，这样也会触发 travis CI 进行自动化检测，一旦 `npm test` 结果没有通过，会及时通知文档维护人员进行查看，需要手动的去比对文档中的代码，这样可以避免过期方法或者接口更名对用户造成的困扰。