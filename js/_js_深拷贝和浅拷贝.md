# 深拷贝 和 浅拷贝

[TOC]


# 1. 值类型(基本类型) 和 引用类型
1. 值类型(基本类型):   copy 值
2. 引用类型:  copy 地址
```
<script>
// 基本类型
var a = 1
var b = a // 值copy
a = 2

console.log(a, b) // 2, 1
</script>
```
值相同，因为c, d 引用类型，指向同一份数据

```
<script>
var c = {
  name: 'default'
}

// 地址copy
d = c
d.name = 'disney'
console.log(c, d)
// {name: "disney"}, {name: "disney"}
</script>

```