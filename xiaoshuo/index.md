<!-- 获取所有分类 -->
<!-- 参数 null -->
https://api.zhangcc.top/xiaoshuo/cats/lv2/statistics

<!-- 获取排行榜类型
参数 null -->
https://api.zhangcc.top/xiaoshuo/ranking/gender

<!-- 获取排行榜小说
参数 排行榜id(从排行榜类型获取) -->
https://api.zhangcc.top/xiaoshuo/ranking/details?id=54d43437d47d13ff21cad58b

<!-- 获取分类下小类别
参数 null -->
https://api.zhangcc.top/xiaoshuo/cats/lv2

<!-- 根据分类获取小说列表
gender: 男生:mael 女生:female 出版:press
type: 热门:hot 新书:new 好评:reputation 完结: over 包月: monthly
major: 大类别 从接口1获取
minor: 小类别 从接口4获取 (非必填)
start: 分页开始页
limit: 分页条数 -->
https://api.zhangcc.top/xiaoshuo/book/by-categories?gender=male&type=hot&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=20

<!-- 获取小说信息
参数	booId具体小说的ID -->
https://api.zhangcc.top/xiaoshuo/book/details?id=548d9c17eb0337ee6df738f5

<!-- 获取短评
book: {bookId},
sort: (lastUpdated|newest|mostlike) //排序方式
start,
limit -->
https://api.zhangcc.top/xiaoshuo/post/by-book?book=5816b415b06d1d32157790b1&sort=updated&type=normal&start=0&limit=5

<!-- 获取书评
book: {bookId},
sort: (updated|created|comment-count),
start,
limit -->
https://api.zhangcc.top/xiaoshuo/post/review/by-book?book=51060c88bb1c67cf28000035&sort=updated&start=0&limit=5

<!-- 获取书单
query string: {
  sort: (collectorCount|created),
  duration: (last-seven-days|all),
  gender: (male|female),
  tag: (有点多),
  start
}
说明:
本周最热的query是: sort=collectorCount&duration=last-seven-days&start=0
最新发布是: sort=created&duration=all
最多收藏是: sort=collectorCount&duration=all -->
https://api.zhangcc.top/xiaoshuo/book-list?sort=created&duration=all

<!-- 获取书单详情
id 书单id -->
https://api.zhangcc.top/xiaoshuo/book-list/details?id=5c175e7e3670e900017bff61

<!-- 获取正版书源
view: 暂时只知道summary这个参数 book: 对应的bookId -->
https://api.zhangcc.top/xiaoshuo/btoc?view=summary&book=548d9c17eb0337ee6df738f5

<!-- 获取盗版书源
view: 暂时只知道summary这个参数 book: 对应的bookId -->
https://api.zhangcc.top/xiaoshuo/atoc?view=summary&book=548d9c17eb0337ee6df738f5

<!-- 获取小说盗版章节(根据小说源id)
参数 id -->
https://api.zhangcc.top/xiaoshuo/atoc?view=summary&book=548d9c17eb0337ee6df738f5

<!-- 获取小说正版章节(根据小说源id)
参数 id -->
https://api.zhangcc.top/xiaoshuo/atoc?view=summary&book=548d9c17eb0337ee6df738f5
<!-- 获取小说章节(根据小说id)
参数	bookId:对应小说id view:暂时只知道chapters -->
https://api.zhangcc.top/xiaoshuo/mix-atoc/chapter?id=50bff3ec209793513100001c

<!-- 获取小说章节内容
参数	link: 章节地址 -->
https://api.zhangcc.top/xiaoshuo/chapter/details?link=http://www.sanjiangge.com/book/49/49354/19917017.html

<!-- 搜索自动补充（搜索相关推荐）
query 搜素关键词 -->
https://api.zhangcc.top/xiaoshuo/book/auto-complete?query=%E6%96%97%E7%BD%97

<!-- 获取作者名下书籍 -->
<!-- 参数 author 作者名 -->
http://127.0.0.1:8889/xiaoshuo/author-books?author=%E5%94%90%E5%AE%B6%E4%B8%89%E5%B0%91

<!-- 模糊搜索
参数	query:查询值 -->
https://api.zhangcc.top/xiaoshuo/book/fuzzy-search?query=%E6%96%97%E7%BD%97

<!-- 搜索热词 -->
http://api.zhuishushenqi.com/book/search-hotwords

//书籍推荐
https://api.zhangcc.top/xiaoshuo/recommend/5816b415b06d1d32157790b1

<!-- 热门推荐 -->
http://api.zhuishushenqi.com/book/hot-word