
class EventEmitter {
  constructor () {
    this.queueObj = {}
  }

  on (key, fn) {
    if (typeof key !== 'string' && typeof fn !== 'function') {
      return
    }

    if (key in this.queueObj) {
      this.queueObj[key].push(fn)
    } else {
      this.queueObj[key] = [fn]
    }
  }

  emit (key, ...args) {
    if (key in this.queueObj) {
      this.queueObj[key].forEach((fn) => {
        if (args.length > 0) {
          fn.apply(this, args)
        } else {
          fn.call(this)
        }
      })
    } else {
      console.error('没有该key值')
    }
  }

  removeAll (key) {
    if (key in this.queueObj) {
      delete this.queueObj[key]
    }
  }

  get (key) {
    if (key in this.queueObj) {
      console.log(this.queueObj[key])
    } else {
      console.error('error get失败')
    }
  }
}

const event = new EventEmitter()
event.on('key', function (x) { console.log('x', x) })
event.on('key', function (y) { console.log('y', y) })
event.on('key', function (z) { console.log('z', z) })

event.emit('key', [1, 2, 3])
event.get('key')