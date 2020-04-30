

[[security] CSRF](https://zhuanlan.zhihu.com/p/136468310)

```
CSRF 是什么?  流程是什么?
怎么攻击的?
通过什么方法避免被攻击?
```

- 案例 youtube CSRF 漏洞
添加当前视频为Favorites
利用漏洞，提高视频的流行度

```html
<img src="http://youtube.com/watch_ajax?action_add_favorite_playlist=1&video_
id=[VIDEO ID]&playlist_id=&add_to_favorite=1&show=1&button=AddvideoasFavorite"/>
```

get 太容易被拿来做 csrf 攻击