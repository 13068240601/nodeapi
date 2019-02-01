var http = require('http');
var https = require('https')
var url = 'http://api.zhuishushenqi.com/cats/lv2/statistics';
http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		console.log(html)
	})
}).on('error',function(){
	console.log('获取数据出错');
})