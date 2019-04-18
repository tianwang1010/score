<template>
    <div class="app">
        <div class="appOne">
            <img :src="bgBanner" alt="">
            <div class="down" @click='goDown()'>
                <i class='el-icon-download'></i>
                立即下载
            </div>
        </div>
        <div class="appTwo">
               <p>根据你的设备选择</p>
               <div class="appTd">
               <div>
                   iphone
               </div>
               <div>
                   ipad
               </div>
               <div>
                   Android
               </div>
               <div>
                   WindowsPhone
               </div>
               <div>
                   扫二维码下载
               </div>
               </div>
        </div>
        <div class="appThree">
            <h2>热门实时咨询 深度战术复盘</h2>
            <p>
每天数百篇快准全的足球新闻，超过20篇专业、深度的足球专栏和分析文章看个痛快</p>
            <img :src="down1" alt="">
        </div>
        <div class="appThree">
            <h2>   看比分 看直播 随时随地</h2>
         
            <p>每场比赛的比分、集锦、赛后新闻第一时间任你掌握，重要赛事直播让你绝不错过</p>

            <img :src="down2" alt="">
        </div>
        <div class="appThree">
            <h2>发帖 聊天 HIGH个够</h2>
            <p>足球狗，足球侠，足球宝贝，足球妹！全国爱球小伙伴一起陪你随心畅聊</p>
              <img :src="down3" alt="">
        </div>
        <div class="appThree">
            <h2>积分榜 球员数据 尽在掌间</h2>
<p>全球各大足球赛事的积分榜、射手榜、助攻榜、赛程榜、球员数据一手掌握</p>

                <img :src="down4" alt="">
        </div>
        <div class="appThree">
            <h2>扫二维码立即下载</h2>
            <p>懂球帝 ALL FOR FOOTBALL</p>
            <img :src="codeDown" alt="">
        </div>
    </div>
</template>
<script>
import bgBanner from "../../../static/img/bg_banner_new.jpg"
import down1 from "../../../static/img/down_1.jpg"
import down2 from "../../../static/img/down_2.jpg"
import down3 from "../../../static/img/down_3.jpg"
import down4 from "../../../static/img/down_4.jpg"
import codeDown from "../../../static/img/code_down.jpg"
export default {
    data(){
        return{
            bgBanner,
            down1,
            down2,
            down3,
            down4,
            codeDown,
        }
    },
    methods:{
        goDown(){
        document.body.scrollTop = document.documentElement.scrollTop = 480;
        }
    }
}
</script>
<style scoped>
.app{
    width:100%;
}
.appOne{
    overflow: hidden;
    background: red;
    position: relative;
}
.appTwo{
      padding-top:40px;
    height: 256px;
    background: #f1f1f1;
    text-align: center;
    font-size: 20px;
}
.appThree{
    padding-top:40px;
    text-align: center;
}
.app div:nth-child(odd){
    background: white;
}
.app div:nth-child(even){
    background: #ededed;
}
h2{
    font-size: 30px;
}
p{
    line-height: 60px;
}
.appTd{
    width:860px;
    margin:0 auto;
    overflow: hidden;
}
.app .appTd div{
    width:162px;
    line-height: 126px;
    margin:0 5px;
    float: left;
    background: white;
}
.appTd div:hover{
    background:#16b13a;
    color:white;
}
.app .appOne .down{
    width:227px;
    line-height: 50px;
    font-weight: 600;
    text-align: center;
    border:2px solid white;
    background: rgba(255, 255, 255, 0);
    border-radius: 5px;
    color:white;
    position: absolute;
    top:65%;
    left:24.5%;
}
.down i {
    font-size: 20px;
}
</style>
