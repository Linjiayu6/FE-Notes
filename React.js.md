
# React.js

## [[React] 1 - 组件是什么? Virtual Dom?](https://zhuanlan.zhihu.com/p/137445614)

```
- 组件是什么?
- virtual dom?
- 简单手写virtual dom创建?
```

## [React] props vs state ?

## [[React] 2 - 生命周期](https://zhuanlan.zhihu.com/p/133788390)
```
- 生命周期?
- 哪些不可以用setState?
(我理解要硬都可以，但看你怎么用,  加个判断条件, 但考虑的肯定是性能方面，尽可能减少不必要的render。只执行一次的生命周期函数肯定是能用，但要考虑到会触发重新render。最好不要在shouldUpdateComponent, WillUpdateComponent 阶段主要是 因为会死循环的。包裹在render() 里面去更新也会。
```

## [[React] 3 - 自动绑定 (事件绑定)](https://zhuanlan.zhihu.com/p/137447253)
```
- 为什么会需要自动绑定?
- 有什么方法解决?
```


## [[React] 4 - setState / 异步还是同步?](https://zhuanlan.zhihu.com/p/133750005)
```
- 异步 还是 同步?
- 批量更新意义?
- 更新流程?
- setTimeout / 原生事件里面, 为什么是同步现象?
- 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象?  
因为是异步的更新， callback保证state处理成功后, 回调其他的处理。
```

## [React] 无关平台
```
不用关心具体运行环境, 可到处运行。 

因为React本质是个UI层的东西, 用js来封装个函数, 产物是个Vnode。 

UI层在小程序 客户端 小程序都是差不多的
```

## [[React] 5 - react / react-dom](https://zhuanlan.zhihu.com/p/133746719)
```
- import React from 'react'; ???
- import ReactDOM from 'react-dom'; ???
```

## [[React] 6 - Fiber](https://zhuanlan.zhihu.com/p/133740493)

```
- React Fiber? 解决什么问题?
- 工作流程?
```

## [[React] 7 - 组件通信](https://zhuanlan.zhihu.com/p/133809113)

```
1. 父组件传给子组件
2. 子组件传给父组件
3. 类似 Node.js  EventEmitter (注册事件, 调用事件)
4. Context方式 (Provider,  Consumer)
```

## [React] Ref
可以用于获取一个 DOM 节点或者 React 组件的引用
```javascript
// <h3 ref="vm">2. Virtual Dom</h3>
componentDidMount()
    this.refs.vm.setAttribute('class', 'vmstyle')

    console.log(this.refs.vm)
// 输出 <h3 class="vmstyle">2. Virtual Dom</h3>
```

## [React] super(props)
```js
// super(), 继承父类(React.Component)的this方法,  但无法得到从父组件传的props。

constructor() {
  super()
  // 如果不加上super 
  // 继承的子类不能使用React.Component this
}

// super(props), 使用this, 并得到从父组件传来的props
constructor(props) {
  super(props)
}
```