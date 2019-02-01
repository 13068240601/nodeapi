var http = require('http');
var https = require('https')
var express=require("express");
var router=express.Router();
var app=new express();
var apiUrl = 'http://api.zhuishushenqi.com'
var linkUrl = 'http://chapterup.zhuishushenqi.com'
var tuijian = 'https://novel.juhe.im'
function getStatistics(url,res,api){
	http.get(url+ api,function(result){
		var html = ''
		result.on('data',function(data){
			html += data
		})
		result.on('end',function(){
			res.send(html)
		})
	})
}
function getHttps(url,res,api){
	https.get(url + api,function(result){
		var html = ''
		result.on('data',function(data){
			html += data
		})
		result.on('end',function(){
			res.send(html)
		})
	})
}
function getAuthor(url, res, api){
	http.get(url + '/book/fuzzy-search?query=' + api, function (result) {
		var html = ''
		var books = {'books':[]}
		var author = api
		result.on('data', function (data) {
			html += data
		})
		result.on('end', function () {
			var obj = JSON.parse(html)
			for(let i=0;i<obj.books.length;i++){
				console.log(obj.books[i].author,author)
				if (obj.books[i].author == decodeURI(author)){
					books.books.push(obj.books[i])
				}
			}
			res.send(books)
		})
	})
}
//获取所有分类
router.get('/xiaoshuo/cats/lv2/statistics',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取排行榜类型
router.get('/xiaoshuo/ranking/gender',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取排行榜小说
router.get('/xiaoshuo/ranking/details',(req,res)=>{
	var id = req.url.split('=')[1]
	getStatistics(apiUrl,res,'/ranking/' + id)
})
//获取分类下小类别
router.get('/xiaoshuo/cats/lv2',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//根据分类获取小说列表
router.get('/xiaoshuo/book/by-categories',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取小说信息
router.get('/xiaoshuo/book/details',(req,res)=>{
	var bookid = req.url.split('=')[1]
	getStatistics(apiUrl,res,'/book/' + bookid)
})
//获取书评（短评）
router.get('/xiaoshuo/post/by-book',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
// 获取书评
router.get('/xiaoshuo/post/review/by-book',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取书单
router.get('/xiaoshuo/book-list',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取书单详情
router.get('/xiaoshuo/book-list/details',(req,res)=>{
	var id = req.url.split('=')[1]
	getStatistics(apiUrl,res,'/book-list/'+id)
})
//获取小说正版源
router.get('/xiaoshuo/btoc',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取小说正版源于盗版源(混合)
router.get('/xiaoshuo/atoc',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//获取小说章节(根据小说id)
router.get('/xiaoshuo/mix-atoc/chapter',(req,res)=>{
	var bookid = req.url.split('=')[1]
	getStatistics(apiUrl,res,'/mix-atoc/' + bookid + '?view=chapters')
})
// 获取小说章节(根据小说源id)
// 参数 id
router.get('/xiaoshuo/atoc/chapters',(req,res)=>{
	var id = req.url.split("=")[1]
	getStatistics(apiUrl,res,'/atoc/' + id + '?view=chapters')
})
router.get('/xiaoshuo/btoc/chapters',(req,res)=>{
	var id = req.url.split("=")[1]
	getStatistics(apiUrl,res,'/btoc/' + id + '?view=chapters')
})

//获取小说章节内容
router.get('/xiaoshuo/chapter/details',(req,res)=>{
	var link = req.url.split('=')[1]
	getStatistics(linkUrl,res,'/chapter/' + link + '?cv=1481275033588')
})
//搜索自动补充（搜索相关推荐）
router.get('/xiaoshuo/book/auto-complete',(req,res)=>{
	var query = req.url.split('=')[1]
	// var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,'/book/auto-complete?query=' + query)
})
//获取作者名下书籍
router.get('/xiaoshuo/author-books',(req,res)=>{
	var author = req.url.split('=')[1]
	var str = author
	getAuthor(apiUrl,res,str)
})
//模糊搜索
router.get('/xiaoshuo/book/fuzzy-search',(req,res)=>{
	var str = req.url.replace("/xiaoshuo","");
	getStatistics(apiUrl,res,str)
})
//书籍推荐
router.get('/xiaoshuo/recommend',(req,res)=>{
	var id = req.url.split('=')[1]
	getHttps(tuijian,res,'/recommend/'+id)
	
})
app.use(router)

app.listen(8889,'127.0.0.1',()=>{
	console.log('server is running')
})


// var server = http.createServer(function(req,res){
// 	console.log(req.search)
// 	if(req.url.indexOf('/statistics')){
// 		getStatistics(res,statistics)
// 	}
// }).listen(8889)