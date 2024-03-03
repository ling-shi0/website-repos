<a name="Z2guP"></a>
# 一、需求描述
1. 构建一个个人网站。网站包含以下的模块内容：
| 名称 | 内容 |
| --- | --- |
| 技术模块 |  |
| 个人思考 |  |
| 整活专区<br />附属B站专区 |  |
|  |  |
| 备用区块 |  |

2. 每一个模块在左侧做菜单切换。每一个模块样式内容可以独立不同。在菜单部分的icon也可以不同。再补充上一个可以总览应用的应用中心的模块。
3. 左上角要加上小铭专属的logo，先写一个备用的图，之后详细设计一个。
4. 中间content部分加上tab栏，做成和浏览器一样的效果，可以开多个模块页。并且关闭和切换。
5. 右上角有拓展区，该区域加入网络情况、天气情况
6. 整个背景可以切换
7. 要有主题色切换的能力
8. 包含各小项目的入口
9. 各小模块的文章要有置顶的能力。

![](https://cdn.nlark.com/yuque/0/2024/jpeg/39237168/1707833226593-8d365a6d-4311-41e0-b8e0-e1851095df97.jpeg)

<a name="mtGh0"></a>
# 二、方案设计
<a name="lisxC"></a>
## 基础建设方案
<a name="ub2df"></a>
### 架构
利用微前端的架构，在全局window下方挂载配置信息。配置信息包含以下的部分：app信息，基础信息，拓展信息，菜单信息**。。。。。。（待补充）。**<br />微前端框架选择：

| 框架名称 | qiankun | micro app  | 无界 |
| --- | --- | --- | --- |
| 插件是否支持多框架开发 |  |  |  |
| 微应用架构 | 必须 webpack  |  | 都行 |
|  |  |  |  |


<a name="x9aV0"></a>
### 工具
在npm上传一个公有的工具库。包含各种公有信息字段。例如上下文symbol等工具信息或函数的存储。

<a name="rkVGw"></a>
### 技术栈
基建主应用采用react<br />其他各应用采用vue、react等。

<a name="ReEeH"></a>
### 配色
![image.png](https://cdn.nlark.com/yuque/0/2024/png/39237168/1707892685476-da135fb0-5774-498c-84de-101e26898d7c.png#averageHue=%23f8f3f2&clientId=u5313b9d7-27ee-4&from=paste&height=333&id=u53d047d5&originHeight=666&originWidth=1402&originalType=binary&ratio=2&rotation=0&showTitle=false&size=129764&status=done&style=none&taskId=u994f70b5-39e2-40bb-a234-803b98c0350&title=&width=701)

<a name="Bz84K"></a>
# 三、人日评估：
基础base workbench搭建：1d 1-8<br />分区 1d











