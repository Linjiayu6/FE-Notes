
# JS 基础

## [[JS基础] 1 - 内存空间](https://zhuanlan.zhihu.com/p/139985924)
```
- 基本类型, 引用类型
- 变量对象 和 堆内存
```

## [[JS基础] 2 - 执行上下文](https://zhuanlan.zhihu.com/p/139993414)
```
- JS执行环境: 全局, 函数环境, eval
- 执行栈: 全局在最底下, 函数执行才入栈, 遇到return立刻出栈
```
- [[JS基础] 2.1 - 函数声明 变量声明](https://zhuanlan.zhihu.com/p/138814882)

- [[JS基础] 2.2 - 类型及类型判断](https://zhuanlan.zhihu.com/p/138763630)


## [[JS基础] 3 - 变量对象 Variable Object](https://zhuanlan.zhihu.com/p/140008633)
```
- 函数的执行上下文 Execution Context, 分为两个阶段 创建 和 执行
- 创建阶段 VO: 变量声明，函数声明提升
- 执行阶段 AO (入栈执行)
```

## [[JS基础] 4 - 作用域与作用域链 scope / scope chain](https://zhuanlan.zhihu.com/p/140033593)
```
- EC创建阶段: VO, 作用域链, this
- EC执行阶段: AO赋值, 其他code .....
```

## [[JS基础] 5 - 闭包 Closure](https://zhuanlan.zhihu.com/p/140392658)
```
1. 函数执行的地方: Function Call Stack 函数调用栈
2. 在Function Call Stack 函数调用栈里面，存放着可执行上下文EC
3. 执行上下文EC, 告诉函数你周遭的环境是什么样的。
   生命周期有两个:
   - 创建: 又可以简单的理解为 你写代码的环境。主要负责VO, scopechain, this 的声明。
        声明包含函数提升声明 和 变量声明
        变量给它分配个内存空间, 函数或对象类型的是key分配个内存空间，对象类型放到堆内存中。

   - 执行: 负责AO参数赋值, 其他代码执行。

4. 可执行环境分为: 全局环境 和 函数环境。可以简单理解为作用域
   而作用域链是在你写代码阶段已确定的作用域环境。

5. 当EC在执行阶段，会push进函数调用栈，此时当前函数里参数的获取 是按照作用域链创建的来的。
6. 闭包: 我个人理解是作用域链的应用。上级函数保存当前函数执行的内容。
```

## [[JS基础] 6 - 执行机制, 同步异步, 事件循环, 宏任务, 微任务](https://zhuanlan.zhihu.com/p/137802406)

```
# 事件循环 Event Loop
本质是: 
1. 作为单线程js对于异步事件的处理机制 

2. 或者可以说是 只有一个主线程js的处理逻辑

3. 如何保证主线程, 有序并高效 或非阻塞 的处理呢? => 事件循环机制 Event Loop

4. 异步任务也是有优先级的，分为 宏任务 MacroTask, 微任务 MicroTask
```

## [[JS基础] 7 - this, call/apply/bind/箭头函数](https://zhuanlan.zhihu.com/p/140490589)
```
1. 在执行上下文 EC 的创建阶段this已经被创建出来了

2. 独立函数运行，this指向函数内部, 但因为非严格模式下，this 会指向window
   对象调用的函数，this指向对象

3. this绑定
   - call, apply
   - bind
   - 利用闭包和apply你自己实现个 bind方法
   - 手动绑定 例如const that = this
```

## [[JS基础] 8 - 从 Chrome 看 闭包 / this / 作用域链](https://zhuanlan.zhihu.com/p/140799288)
```
闭包的产生条件:

函数a 里 写着函数b。
b执行的时候, 用到了a_EC.VO  a的执行下上文的变量对象。
(要用到人家a里的才产生, 知道window下的不算)
```

## [[JS基础] 9 - 函数式编程 Functional Programming](https://zhuanlan.zhihu.com/p/140830175)
```
没有完成 TODO
```

## [[JS基础] 10 - 构造函数 原型 原型链 继承 new](https://zhuanlan.zhihu.com/p/140853201)

```
创建对象
- 工厂模式? 问题是重复分配内存给相同的函数或方法，寻求共享模式。
- 构造函数? 对象私有化
- prototype: 方法共享方式 (其实也是利用引用类型)。
  __proto__: 指针, 某个对象要使用共享方法, 用指针指向该引用类型即可。
  prototype chain: 继承 想共享方法都连在一起。

- 继承? 原理是什么? prototype chain
- new都干了啥? 创建对象，私有内容赋值(this的绑定)，指针__proto__指向共享的公共内容
```

## [[JS基础] 11 - Promise](https://zhuanlan.zhihu.com/p/141139467)

## [[JS基础] 12 - 深拷贝 VS 浅拷贝](https://zhuanlan.zhihu.com/p/135220580)

```
1. 值类型 基本类型 or 引用类型?
2. 遍历对象的三个方法及不同? (for - in , Object.keys() ,  Object.getOwnPropertyNames())
3. 浅拷贝?
4. 浅拷贝 + 迭代? code? 问题? 解决?
5. 深拷贝? 
   三种 (JSON, 浅拷贝+循环, 浅拷贝+循环+校验)
6. 会遇到什么问题? 怎么解决?
```
