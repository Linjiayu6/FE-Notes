
import Loader from './loader/main.js'

// 这个项目的所有资源信息
const stateJSON = {
  "version": 3,
  "resources": [
    {
      "name": "vendor",
      "type": "js",
      "filename": "js/vendor.954edc1c1c95294bad2a.js",
      "checksum": 1062775765
    },
    {
      "name": "comment",
      "type": "css",
      "filename": "css/comment.473140a1.css",
      "checksum": 192696293
    },
    {
      "name": "comment",
      "type": "js",
      "filename": "js/comment.5e2e7fe044eaa0a87110.js",
      "checksum": 329335313
    },
    {
      "name": "comment-alipay",
      "type": "css",
      "filename": "css/comment-alipay.f40a36b6.css",
      "checksum": 1581003380
    },
    {
      "name": "comment-alipay",
      "type": "js",
      "filename": "js/comment-alipay.5e2e7fe044eaa0a87110.js",
      "checksum": 636473785
    },
    {
      "name": "comment-lite",
      "type": "css",
      "filename": "css/comment-lite.f1fd6831.css",
      "checksum": 3600311279
    },
    {
      "name": "comment-lite",
      "type": "js",
      "filename": "js/comment-lite.5e2e7fe044eaa0a87110.js",
      "checksum": 3488139135
    },
    {
      "name": "comment-mf",
      "type": "css",
      "filename": "css/comment-mf.e07f2dcf.css",
      "checksum": 2171304044
    },
    {
      "name": "comment-mf",
      "type": "js",
      "filename": "js/comment-mf.5e2e7fe044eaa0a87110.js",
      "checksum": 4223196828
    },
    {
      "name": "commentForPoi",
      "type": "css",
      "filename": "css/commentForPoi.2f50bc61.css",
      "checksum": 4128648535
    },
    {
      "name": "commentForPoi",
      "type": "js",
      "filename": "js/commentForPoi.5e2e7fe044eaa0a87110.js",
      "checksum": 628403766
    },
    {
      "name": "dpOwl",
      "type": "js",
      "hash": "8b199",
      "attrs": {
        "crossorigin": "anonymous"
      },
      "link": "//www.dpfile.com/app/owl/static/owl_1.8.14.js",
      "cacheAge": 5184000,
      "runScript": "\n  Owl.start({\n    project: 'com.sankuai.zc.fe.qrcomment',\n    pageUrl: 'https://qrmarket.meituan.com/era/comment',\n    page: {\n      sample: 1,\n      fstPerfAnalysis: true,\n      logSlowView: true\n    },\n    resource: {\n      sampleApi: 1\n    },\n    metric: { sample: 1, combo: true }\n  })\n  try {\n    if (window.Owl) {\n      var windowMetric = new window.Owl.MetricManager(window.Owl.cfgManager);\n      let from = 'unknown';\n      let netType = 'unknown';\n      let orderType = 'unknown';\n      if (__SSR__ && __SSR__.data && __SSR__.data.global) {\n        from = __SSR__.data.global.from || 'unknown';\n        netType = __SSR__.data.global.netType || 'unknown';\n        orderType = __SSR__.data.global.orderType || 'unknown';\n      }\n      windowMetric.setTags({ from, netType, orderType });\n      windowMetric.setMetric('/era/marketing/initpv', 1);\n      windowMetric.report();\n    }\n  } catch (error) { console.log(error); }\n"
    }
  ],
  "compilation": {
    "hash": "5e2e7fe044eaa0a87110",
    "fullHash": "5e2e7fe044eaa0a8711063ac4aa357f5"
  },
  "project": "com_sankuai_zc_fe_qrcomment",
  "cacheAge": 0,
  "StarkOptions": {
    "projectName": "456fdf20"
  },
  "outputOptions": {
    "publicPath": "//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:456fdf20/",
    "crossOriginLoading": false,
    "chunkLoadTimeout": 120000,
    "fallbackCDN": "https://jarvas-static.meituan.net/file/456fdf20?filePath=",
    "checksum": true,
    "library": "com.sankuai.fe.vue",
    "hotUpdateFunction": "webpackHotUpdatecom_sankuai_fe_vue",
    "jsonpFunction": "webpackJsonpcom_sankuai_fe_vue",
    "thunder": {
      "filename": "thunder-tiny-3.0.43-alpha.js",
      "attrs": {},
      "checksum": 2620576322
    }
  },
  "asyncHooks": [
    {
      "name": "chunk_load_tool",
      "hash": 750477849
    }
  ]
}

// 当前页面所需要的资源队列
const data = {
  css: ["comment"],
  js: ["dpOwl", "manifest", "vendor", "comment"]
}

const resources = [
  {
    "name": "comment",
    "type": "css",
    "filename": "css/comment.1ff1965f.css",
    "checksum": 192696293
  },
  // {
  //   "name": "dpOwl",
  //   "type": "js",
  //   "hash": "8b199",
  //   "attrs": {
  //     "crossorigin": "anonymous"
  //   },
  //   "link": "//www.dpfile.com/app/owl/static/owl_1.8.14.js",
  //   "cacheAge": 5184000,
  //   "runScript": "\n  Owl.start({\n    project: 'com.sankuai.zc.fe.qrcomment',\n    pageUrl: 'https://qrmarket.meituan.com/era/comment',\n    page: {\n      sample: 1,\n      fstPerfAnalysis: true,\n      logSlowView: true\n    },\n    resource: {\n      sampleApi: 1\n    },\n    metric: { sample: 1, combo: true }\n  })\n  try {\n    if (window.Owl) {\n      var windowMetric = new window.Owl.MetricManager(window.Owl.cfgManager);\n      let from = 'unknown';\n      let netType = 'unknown';\n      let orderType = 'unknown';\n      if (__SSR__ && __SSR__.data && __SSR__.data.global) {\n        from = __SSR__.data.global.from || 'unknown';\n        netType = __SSR__.data.global.netType || 'unknown';\n        orderType = __SSR__.data.global.orderType || 'unknown';\n      }\n      windowMetric.setTags({ from, netType, orderType });\n      windowMetric.setMetric('/era/marketing/initpv', 1);\n      windowMetric.report();\n    }\n  } catch (error) { console.log(error); }\n"
  // },
  {
    "name": "vendor",
    "type": "js",
    "filename": "js/vendor.03b2b11d016aac5f5e78.js",
    "checksum": 1062775765
  },
  {
    "name": "comment",
    "type": "js",
    "filename": "js/comment.cf64b7cb28a2f9e850a3.js",
    "checksum": 329335313
  }
]

// 当前页面的配置信息
const config = {
  version: stateJSON.version,
  "projectName": "456fdf20",
  resources: resources,
  // publicPath: '//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:456fdf20/',
  publicPath: '',
  fallbackCDN: 'https://jarva-static.meituan.net/file/456fdf20?filePath=',
  fallbackCDN2: '//sully.meituan.com/file/456fdf20?filePath=', // 兼容: 在原有基础上, 增加第三个回滚域名
}

// export default Loader
new Loader(config).start()
