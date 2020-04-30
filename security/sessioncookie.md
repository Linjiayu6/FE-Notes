
>[Cookie 和 Session 关系和区别](https://juejin.im/post/5aa783b76fb9a028d663d70a)

```

Session 保存在server端, Cookie是client端。so, session 更安全。

Http 无状态,  让服务器知道你是谁? 

你是谁写入至cookie, 每次请求传到server端验证

Cookie 保存用户信息一种机制。

Session存在server端，但是sessionId 保存在Cookie中 (这个id值会发送给客户端)。
- 一个cookie
- 一个sessionId / token

1 - 没有登录
- cookie 中无token
- 登录成功后,   server保存token,  client 种 cookie, http-only
- 跳转会callback url?token=${token}$ query携带token信息
- token 再换 用户信息
- 成功后, token种在cookie中, 保持登录会话。

2 - 已登录
- 从cookie中取 token信息，token需要去server端验证，验证成功后，返回用户信息，返回使用。

```