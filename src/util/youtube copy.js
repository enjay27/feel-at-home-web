//YOUTUBE DATA API v3. Search
//help for params : https://developers.google.com/youtube/v3/docs/search/list#--
var arr = [];
var request = require("request");
var optionParams = {
  q: "sad+lonely+gloomy music",
  part: "snippet",
  key: "AIzaSyCZ4fo41DfflV-WKzv5y3Zq6kLGgNqglzM",
  type: "video",
  maxResults: 10,
  regionCode: "KR",
  videoDuration: "short",
};

//한글을 검색어로 전달하기 위해선 url encoding 필요!
optionParams.q = encodeURI(optionParams.q);

var url = "https://www.googleapis.com/youtube/v3/search?";
for (var option in optionParams) {
  url += option + "=" + optionParams[option] + "&";
}

//url의마지막에 붙어있는 & 정리
url = url.substr(0, url.length - 1);

request(url, function (err, res, body) {
  //console.log(body);

  //json형식을 서버로 부터 받음
  var data = JSON.parse(body).items;
  for (var content in data) {
    //youtube downloader에 videoId 넘기면 됨.
    console.log(data[content].snippet.title + " : " + data[content].id.videoId);
    arr[content] = data[content].id.videoId;
  }
});

const test = { arr, optionParams };

export default test;
