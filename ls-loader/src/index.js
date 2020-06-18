
import Loader from './loader'

const config = {
  cdns: ['https://s3plus.meituan.net', ''],
  prefix: '/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/',
  bizId: 'file:456fdf20',
  chunks: [
    {
      type: 'css',
      path: '/comment.1ff1965f.css'

    },
    {
      type: 'js',
      path: '/vendor.03b2b11d016aac5f5e78.js'
    },
    {
      type: 'js',
      path: '/comment.cf64b7cb28a2f9e850a3.js'
    }
  ]
}

new Loader(config).init()