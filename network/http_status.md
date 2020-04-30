
# HTTP CODE

## 2**
```
200 ok

204 no Content
```

## 3**

```
302  重定向 response headers.location 有重定向的地址
```

[302 example]( https://openpay.meituan.com/whitelist?wechat_uri=http%3A%2F%2F3034-suwmq-sl-canting.sjst.test.meituan.com%2Fdiancan%2Fweb%2Fflash-pay-result%3FtradeNo%3D-q7TlQp4dd%26poiId%3D600005068%26outOrderId%3D92bda7a4398243ad99be29e59154dbce%26transactionId%3Dundefined%26payStatus%3Dok&bizId=31015)

## 4**

```
400 Bad Request
一般是由于 request header 过大（一般是 header 中的 cookie 过大）一般是128k

403 Forbidden
eg: IP黑名单, 无权限, 连接的用户过多，过后再试...

404 Not found 

499 Client Closed Request
eg: API服务端返回超时, client端没等到返回就关闭了, timeout 时间设置长些。 这个在浏览器中频繁刷新页面就会产生。
客户端未等到服务器响应返回前就主动关闭了客户端连接; 业务客户端需要根据实际后端服务器的处理时间修改客户端超时时间。
```

## 5**

```
500: Internal Server Error
服务没正常处理请求, 代码问题等等

502: Bad Gateway
由于服务器压力过大，不能及时处理client的请求导致服务器响应超时而抛出的错误。

503: Service Unavailable
当前服务不可用, 服务器无法使用。

504: Gateway Timeout
```

```
500: [代码] 内部服务错误导致。

502: [非代码] 服务发版重启时，流量切换间隙出现的访问不可用。

503: 无法处理。服务器过载。

504: [非代码] 超时。已连接响应超时, 或者 连接超时。
```