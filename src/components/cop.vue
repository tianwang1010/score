<template>
  <div class="newShow">
    <div class="newLeft">
      <div class="leftTop">
        <div class="dqp">
          <span>懂球帝首页 ></span>
          <span>懂球号文章</span>
        </div>
        <h2>懂球帝广告投放</h2>
        <div class="leftTopBot">
          <span>雷克巴</span>
          <span class="tn">2016-07-12 17:30:55</span>
        </div>
      </div>
      <div class="leftBot">
          <p>      懂球帝是目前全国规模及影响力标杆性的足球媒体和社区，我们致力于为品牌商提供丰富多样的广告形式，将品牌直接触达到中国广泛的足球迷。</p>
 
<p>懂球帝用户具有高净值（人均月收入超过8000元）、男性用户居多等特点，集中在全国一二线城市。</p>

<p class='copW'>合作请邮件：</p>
<p>brand@dongqiudi.com</p>


<p class='copW'>品牌案例（持续更新）：</p>

<img src="../../static/img/hb.jpg" alt="" class='copImg'>
        <p class="p1">
         严禁商业机构或公司转载，违者必究；球迷转载请注明来源“懂球帝”
        </p>

        <span class="share">分享到:</span>
        <a href="###" class="a1">微博</a>
        <a href="###" class="a1">朋友圈</a>
        <a href="###" class="a1">QQ空间</a>
        <a href="###" class="a1">贴吧</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cop",
  created(){
      this.$store.commit('increment');
  }
};
</script>
<style scoped>
.newShow {
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  overflow: hidden;
}
.newLeft {
  float: left;
  width: 640px;
  overflow: hidden;
}
.leftTop span {
  font-size: 12px;
}
h2 {
  margin-top: 30px;
}
.leftTopBot {
  margin-top: 30px;
}
.tn {
  color: #999;
}
.leftTop {
  border-bottom: 1px solid #e6eaed;
  padding-bottom: 30px;
}
.leftBot {
  padding-top: 20px;
}
.imgT {
  display: block;
  margin: 10px auto;
  max-width: 96%;
}
.leftBot p {
  padding: 10px 0;
 
  font-size: 16px;
  line-height: 1.7;
}
.leftBot .p1 {
     text-indent: 0;
  font-size: 12px;
  color: #999;
}
.p1 span {
  color: #666;
}
.share {
  margin-top: 20px;
  font-size: 14px;
}
.a1 {
  font-size: 12px;
  display: inline-block;
  margin-left: 10px;
  width: 24px;
  height: 24px;
  background: red;
  vertical-align: middle;
}
.newRight {
  float: right;
  width: 300px;
  overflow: hidden;
}
.copImg{
    width:614px;
    margin-bottom: 50px;
}
.copW{
    font-weight: bold;
}
</style>
