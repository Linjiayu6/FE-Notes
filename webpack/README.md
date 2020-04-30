[toc]

# 1. Loader 和 Plugin 什么区别

[webpack 中 loader 和 plugin 的区别是什么](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308#issuecomment-612290027)

```python
#Loader: (针对代码) 
- 翻译人员
- 能把源文件经过转化后输出新的结果

css-loader, vue-loader,  less-loader
转换器, 将A语言转义成B语言, eg: A.less => A.css

#  Plugin: (针对工程)
更复杂任务, 针对webpack在运行生命周期中，进行监听事件，做一些任务。
例如: css代码合并压缩。

```

```
Loader: 
Loader 主要用来在 webpack 的编译流程中，即 webpack 触发 make 事件，开始从 Entry 读取代码的时候，webpack 会根据我们的配置和文件类型用相应的 Loader 对文件进行处理。Loader 由于是链式执行的，从第一个 Loader 开始，获取源文件的内容，处理之后返回给下一个 Loader，一直到处理完毕，然后由 webpack 把所有 Loader 共同处理的结果输出。因此开发一个 Loader 只需要关心其输入输出。

Plugin: 
Plugin 的实现原理主要是利用了 webpack 的事件流机制，在插件的 apply 方法里面通过注册相应的事件，通过 webpack 触发该事件来介入到流程中。这里用 Html-webpack-plugin 源码作为插件的一个编写实例来介绍，其在每一个操作节点都触发一个事件，更好地让其他插件进行扩展，我们也可以参考该方式提高自己插件的灵活性。
```


# 2. Tree shaking

一颗树，用力摇一摇，枯萎的叶子会掉落下来。剩下的叶子都是存活的 = 代码里用不到的给摇下来。

代码的优化:  通过 Tree shaking 删除掉 引用了，但没有被使用的模块。

```js
/* square 函数被删除掉*/

//App.js
import { cube } from './utils.js';
cube(2);

//utils.js
export function square(x) {
  console.log('square');
  return x * x;
}

export function cube(x) {
  console.log('cube');
  return x * x * x;
}
```

# 3. 代码拆分方法

1. CommonsChunkPlugin 提取公共依赖模块提取 (防止模块打包的重复)  分离业务和第三方常用库 
2. 按需加载(动态加载):  路由 () => import(组件)  匹配到某路径再加载该资源
3. 手动引入 entry 人工区分


# 4. 提高 webpack 构建速度

CommonsChunkPlugin用来提取第三方库，往往这些第三方库都是长久不更新的，除非你手动更新办吧。每次打包都会重新再构建。

DLLPlugin: 已经分开第三方依赖代码不会再重复打包，只会打包该项目的自身代码。

```
这里补了一点dll和commonsChunk概念上的区别: 
commonsChunk之所以慢和大，是因为每次run的时候，都会去做一次打包

而实际上我们不会一直去更新我们引用的依赖库
所以dll的做法就等于是，事先先打包好依赖库，然后只对每次都修改的js做打包。
```
DllReferencePlugin ???

