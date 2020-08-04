# 账号模块

基于`uView UI`框架开发的`uni-app`账号模块，跨平台，可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

## 使用方式

### 创建公用模块
1. 在`cloudfunctions`目录下创建`common`目录
2. 在`common`目录右键创建公用模块目录`uni-id`，会自动创建入口`index.js`文件和`package.json`，不要修改此`package.json`的`name`字段
3. 在`uni-id`右键上传公用模块

### 引入公用模块
1. 在要引入公用模块的云函数目录`account`执行`npm init -y`生成`package.json`文件
2. 在`account`目录执行`npm install ../common/uni-id`引入`uni-id`模块
3. 在云函数中调用，示例代码：

```js
'use strict';

const uniId = require('uni-id')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ' + event)

	// 操作
	let action = event.action
	// 参数
	let params = event.params || {}
	// 令牌
	let token = event.uniIdToken
	
	// 返回
	let res = {}

	switch (action) {
		case 'register':
			res = await uniId.registerByUser(params);
			break;
		case 'login':
			res = await uniId.loginByPwd(params);
			break;
		case 'logout':
			res = await uniId.logout(token);
			break;
		default:
			res = {
				code: 403,
				msg: '非法访问'
			}
			break;
	}

	// 返回数据给客户端
	return res
};

```

## 内容

> 注册
>
> > 通过邮箱注册
> 
> > 通过手机号注册

> 登录
>
> > 账号密码登录
> 
> > 短信验证码登录

> 找回密码
>
> > 通过邮箱找回密码
> 
> > 通过手机号找回密码

> 账号与安全
> 
> > 账号绑定
> 
> > > 手机号
> 
> > > 邮箱
> 
> > > 微信账号
> 
> > > 微博账号
> 
> > > QQ 账号
> 
> > > 淘宝账号
> 
> > > 支付宝账号
> 
> > 登录密码
> 
> > 用户名
> 
> > 密保问题
> 
> > 账号申诉
> 
> > 账号注销

