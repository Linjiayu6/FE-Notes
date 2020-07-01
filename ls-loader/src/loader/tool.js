
const head = document.head || document.getElementsByTagName('head')[0]

function baseXMLHttpRequest (options, callback) {
  const xhr = new window.XMLHttpRequest()
  xhr.withCredentials = false
  xhr.open(options.method, options.url, true)
  xhr.onreadystatechange = function () {
    // load end
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        xhr.onreadystatechange = null
        callback(null, xhr.responseText)
      } else {
        // ajax load failed
        const error = { msg: `Thunder load error for url ${options.url}` }
        callback(error)
      }
    }
  }
  xhr.send(options.body)
}

function _request (_options, callback) {
  const options = {
    method: 'GET',
    data: null,
    url: '',
    body: undefined
  }
  if (typeof _options === 'string') {
    options.url = _options
  } else {
    assign(options, _options)
  }
  // set default method
  if (!options.method) options.method = requestDefault.method

  // force set uppercase
  options.method = options.method.toUpperCase()

  // format data to stringify body
  if (options.data) {
    options.body = JSON.stringify(options.data)
  }

  return baseXMLHttpRequest(options, callback)
}

function request (options, cb = () => {}) {
  return new Promise((resolve, reject) => {
    _request(options, (err, content) => {
      if (err) {
        cb(err, null)
        reject(err)
      } else {
        cb(null, content)
        resolve(content)
      }
    })
  })
}

// 有内容的返回 插入至模板里
function execContentToHTML (type, attrs, content) {
  let el = null
  if (type === 'js') {
    el = document.createElement('script')
    el.type = 'text/javascript'
    el.charset = 'utf-8'
    el.text = content
  }

  if (type === 'css') {
    el = document.createElement('link')
    el.type = 'text/css'
    el.charset = 'utf-8'
    el.textContent = content
  }

  attrs.forEach(({ key, val }) => el.setAttribute(key, val))
  head.appendChild(el)
  return el
}

// 将外链资源 插入至模板里
function execTagToHTML (type, attrs, url, cb = () => {}) {
  let el = null
  if (type === 'js') {
    el = document.createElement('script')
    el.type = 'text/javascript'
    el.charset = 'utf-8'
    el.async = true
    el.timeout = 120000
    el.src = url
  }

  if (type === 'css') {
    el = document.createElement('link')
    el.rel = 'stylesheet'
    el.charset = 'utf-8'
    el.timeout = 120000
    el.href = url
  }

  attrs.forEach(({ key, val }) => el.setAttribute(key, val))

  // ONLOAD 成功回调
  el.onload = function () {
    cb('onload_success')
  }

  // TODO: ONERROR 失败 回调重试
  el.onerror = function () {
    cb('onload_error')
  }

  head.appendChild(el)
  return el
}

const supportLS = (function (storage) {
  if (!storage) return false
  try {
    const key = '__LS_SUPPORT_TEST_KEY__'
    storage.setItem(key, key)
    storage.removeItem(key, key)
    return true
  } catch (e) {
    return false
  }
})(window.localStorage)

const supportPromise = (
  function (global) {
    if (!global) return false
    try {
      var NativePromise = global['Promise']
      var nativePromiseSupported =
      NativePromise &&
      // Some of these methods are missing from
      // Firefox/Chrome experimental implementations
      'resolve' in NativePromise &&
      'reject' in NativePromise &&
      'all' in NativePromise &&
      'race' in NativePromise &&
      // Older version of the spec had a resolver object
      // as the arg rather than a function
      (function () {
        var resolve
        // eslint-disable-next-line
        new NativePromise(function (r) { resolve = r })
        return typeof resolve === 'function'
      })()
      return nativePromiseSupported
    } catch (error) {
      return false
    }
  }
)(window)

export default {
  request,
  execContentToHTML,
  execTagToHTML,
  supportLS,
  supportPromise
}