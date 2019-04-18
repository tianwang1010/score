<template>
  <div class="foot">
    <div class="footMain">
      <dl>
        <dt>懂球帝 | All Football App</dt>

        <dd>关于懂球帝</dd>
        <dd>加入我们</dd>
        <dd>客户端下载</dd>
        <dd>侵权投诉</dd>
        <dd>广告投放</dd>
        <dd>联系方式：010-82333001</dd>
      </dl>
      <dl>
        <dt>关注</dt>

        <dd>官方微博</dd>
        <dd>小游戏</dd>
      </dl>
      <dl>
        <dt>友情链接</dt>

        <dd>ALL FOOTBALL</dd>
        <dd>快递查询</dd>
        <dd>信虫地带</dd>
        <dd>企鹅直播</dd>
      </dl>
      <dl>

        <dd>京ICP证 150469号</dd>
        <dd>京ICP备 14042073号-3</dd>
        <dd>京公网安备 11010802020789号</dd>
        <dd>营业执照</dd>
        <dd>食品经营许可证</dd>
        <dd>违法和不良信息举报</dd>
        <dd>举报邮箱：jubao@dongqiudi.com</dd>
        <dd>举报电话：010-82333001</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot"
};
</script>
<style scoped>
.foot {
  width: 100%;
  background: #323232;
  padding: 50px 0 35px 0;
  overflow: hidden;
  margin-top: 100px;
}
.footMain {
  width: 1000px;
  height: 240px;
  margin: 0 auto;
}
.footMain dl{
    float: left;
}
dl:nth-child(1){
    width:300px;
}
dl:nth-child(2){
    width:200px;
}
dl:nth-child(3){
    width:198px;
}
dl:nth-child(4){
    width:200px;
}
dt{
    line-height: 35px;;
    color:white;
    font-size: 14px;
    padding:0 0 5px 0;
}
dd{
    line-height: 30px;
    color:#898a89;
    font-size:12px;
}
dd:hover{
    color:green;
}
</style>
