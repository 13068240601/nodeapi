var http = require('http');
var https = require('https')
var Promise = require('bluebird')
var cheerio = require('cheerio')
var baseUrl = 'https://www.imooc.com/learn/'
var url = 'https://www.imooc.com/learn/348';
function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $('course-chapters')
	var courseData = [];
	chapters.each(function(index, el) {
		var chapter = $(this)
		var chapterTitle = chapter.find('h3').text()
		var videos = chapter.find('.video').children('li')
		var chapterData = {
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(index, el) {
			var video = $(this).find('.J-media-item')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1]
			chapterData.videos.push({
				title:videoTitle,
				id:id
			})
		})
		courseData.push(chapterData)
	})
	return courseData
}
function grtPageAsync(url){
	return new Promise(function(resolve,reject){
		console.log('正在爬取'+url)
		https.get(url,function(res){
			var html = ''
			res.on('data',function(data){
				html += data
			})
			res.on('end',function(){
				resolve(html)
				// var courseData = filterChapters(html)
				// console.log(courseData)
			})
		}).on('error',function(e){
			reject(e)
			console.log('获取课程出错');
		})
	})
}
var fetchCourseArray = [];
videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl+id))
})
Promise.all(fetchCourseArray)
	.then(function(pages){
		var coursesDate = [];
		pages.forEach(function(html) {
			
		})
	})