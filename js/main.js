// 歌曲搜索接口
// https://autumnfish.cn/search
// 歌曲url获取接口
// https://autumnfish.cn/song/url
// 歌曲详情获取接口
// https://autumnfish.cn/song/detail

window.addEventListener('load', function () {
    var music = new Vue({
        el: "#music",
        data: {
            songsName: "",
            songs: [],
            songsSrc: "",
            picUrl: "",
            isPlay: false,
            hotComments:[],
            videoSrc:"",
            MVPlay:false,
        },
        methods: {
            // 搜索歌曲功能
            searchSongs: function () {
                var that = this;
                axios.get("https://autumnfish.cn/search?keywords=" + this.songsName).then(function (response) {
                    that.songs = response.data.result.songs;
                }, function (err) { })
            },
            // 音乐播放功能 and 封面获取
            songsPlay: function (id) {
                var that = this;
                axios.get("https://autumnfish.cn/song/url?id=" + id).then(function (response) {
                    that.songsSrc = response.data.data[0].url;
                }, function (err) { }),
                axios.get("https://autumnfish.cn/song/detail?ids=" + id).then(function (response) {
                    that.picUrl = response.data.songs[0].al.picUrl;
                }, function (err) { }),
                // 歌曲评论模块
                axios.get("https://autumnfish.cn/comment/hot?id="+id+"&type=0").then(function(response){
                    that.hotComments = response.data.hotComments;
                },function(err){})
            },
            // 播放暂停动画
            play: function () {
                this.isPlay = true;
            },
            pause: function () {
                this.isPlay = false;
            },
            // 获取mv地址
            searchMV:function(mvid){
                var that = this;
                axios.get("https://autumnfish.cn/mv/url?id="+mvid).then(function(response){
                    that.videoSrc = response.data.data.url;
                },function(err){})
            },
            mvPlay:function(){
                this.MVPlay = true;
                console.log(this.MVPlay);
            },
            mvPause:function(){
                this.MVPlay = false;
            }
        }
    })
})