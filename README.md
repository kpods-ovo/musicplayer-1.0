# musicplayer-1.0
Vue学习的练手案例——简易的音乐播放器  

主要实现的一些功能：  
(以下功能全部是基于网易云音乐提供的API接口)  
1.通过搜索框输入歌曲名或者歌手查询到相关歌曲并渲染到页面中。  
2.歌曲和MV的播放功能。  
3.获取歌曲封面且实现封面碟片的旋转动画。  
4.获取当前播放歌曲的热门评论并渲染到页面中。  


记录一下将案例代码上传到GitHub上出现的问题：  
当我将我的项目添加并提交后，然后使用git push -u origin master进行推送，但是却出现了如下问题：  
error: src refspec master does not match any  
出现该问题后我便到网上查询相关解决方案，但是网上的答案都一致是版本库里面没有内容，可是我想我是从远程仓库克隆下来的，里面本身也有README文件，况且我也将项目内容放到了版本库中，在百思不得其解的时候，我看到了这么一条命令git push origin HEAD(HEAD指向当前工作的branch)，然后我再看了眼自己的主分支，好吧，我的主分支居然叫main，误会解除...  

其实还是自己太粗心了，下次在细枝末节处还要更加留意才行。  
