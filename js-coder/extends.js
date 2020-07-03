
// 1. 继承构造器里的内容 直接执行Class就行
// 2. 继承原型的方法, 原型链的创建
function Parent (surname, home) {
  this.surname = surname
  this.home = home
}

Parent.prototype = {
  construtor: Parent,
  getParent: function () { console.log(this.surname + this.home) }
}

function Child (surname, home, givename) {
  Parent.call(this, surname, home) // 继承构造器呢绒
  this.givename = givename 
}

// 原型链继承方式 Child.prototype = { _proto_: { Parent.prototype } }
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
Child.prototype.getChild = function () {
  console.log(this)
}

const child = new Child('林', '中国', '😃')
child.getChild()
child.getParent()

console.log(child instanceof Child)
console.log(child instanceof Parent)