<template>
  <div class="playerInfo">
    <div class="playerLeft">
      <div class="detail">
        <div class="detailInfo">
          <div class="name">{{$store.state.playerName}}</div>
          <ul>
            <li>
              <span>年龄：</span>30岁
            </li>
            <li>
              <span>生日：</span>1989-03-11
            </li>
            <li>
              <span>号码：</span>11号
            </li>
            <li>
              <span>国家/地区：</span>中国
            </li>
            <li>
              <span>身高：</span>185CM
            </li>
            <li>
              <span>体重：</span>71KG
            </li>
            <li>
              <span>惯用脚：</span>
            </li>
          </ul>
        </div>
        <div class="imgLogo">
          <img :src="jhw" alt>
        </div>
      </div>
      <div class="matchNum">
        <div class="head">
          <span>比赛数据</span>
          <span class="headSpan">总计</span>
          <span class="headSpan">联赛</span>
          <span class="headSpan">杯赛</span>|
          <span class="headSpan">国家队</span>
        </div>
        <div class="cont">
          <ul>
            <li>赛季</li>
            <li>俱乐部</li>
            <li>上场</li>
            <li>首发</li>
            <li>进球</li>
            <li>助攻</li>
            <li>黄牌</li>
            <li>红牌</li>
            <li>替补</li>
          </ul>
          <div class="recordYa">暂无比赛记录</div>
        </div>
      </div>
      <div class="ry">
        <div class="head">
          <span>荣誉记录</span>
        </div>
        <ul class="headUl">
          <li>
            <span>以色列足球超级联赛 x 4</span> 2014/2015, 2013/2014, 2012/2013, 2009/2010
          </li>
          <li>
            <span>以色列杯 x 3</span> 2014/2015, 2010/2011, 2009/2010
          </li>
          <li>
            <span>以色列超级联赛图图杯 x 1</span> 2014/2015
          </li>
        </ul>
      </div>
      <div class="zh">
        <div class="head">
          <span>转会</span>
        </div>
        <ul class="headUl">
          <li>
            <span>2016-07-01</span>
            <span>
              特拉维夫马卡比
              ->
              广州富力
            </span>
            <span>转会 （6.3M EUR）</span>
          </li>
          <li>
            <span>2013-01-23</span>

            <span>
              巴勒莫
              -> 特拉维夫马卡比
            </span>
            <span>转会 （250.0K EUR）</span>
          </li>
          <li>
            <span>2011-07-01</span>
            <span>
              特拉维夫工人
              -> 巴勒莫
            </span>
            <span>转会 （1.7M EUR）</span>
          </li>
        </ul>
      </div>
      <div class="sb">
        <div class="head">
          <span>伤病</span>
        </div>
        <div class="sbUl">暂无伤病记录</div>
      </div>
    </div>
    <div class="playerRight">
      <div class="nl">
        <h2>综合能力</h2>
        <div class="znl">
          <div class="speed">速度</div>
          <div class="oneJn">
            <div>力量</div>
            <div>射门</div>
          </div>
          <div class="nma">暂无数据</div>
          <div class="oneJn">
            <div>防守</div>
            <div>传球</div>
          </div>

          <div class="pd">盘带</div>
        </div>
      </div>
      <div class="any">
        <div class="head">
          <span>{{$store.state.playerTeam}} 队员</span>
        </div>

        <div class="bigQf">
          <div class="qf">
            <span>前锋</span>
            <span>进球 国籍</span>
          </div>
          <div class="qfUl">
            <ul>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bigQf">
          <div class="qf">
            <span>中场</span>
            <span>进球 国籍</span>
          </div>
          <div class="qfUl">
             <ul>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bigQf">
          <div class="qf">
            <span>后卫</span>
            <span>进球 国籍</span>
          </div>
          <div class="qfUl">
             <ul>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bigQf">
          <div class="qf">
            <span>门将</span>
            <span>进球 国籍</span>
          </div>
          <div class="qfUl">
             <ul>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
              <li>
                <span>ssdsad</span>
                <span>12 123</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jhw from "../../static/img/jhw.jpg";
export default {
  name: "playerInfo",
  data() {
    return {
      jhw
    };
  }
};
</script>
<style scoped>
.playerInfo {
  width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
}
.playerLeft {
  width: 620px;
  float: left;
  overflow: hidden;
  font-size: 13px;
}
.playerRight {
  width: 310px;
  float: right;
  overflow: hidden;
}
.playerLeft > div,
.playerRight > div {
  margin-bottom: 20px;
}
.detail {
  position: relative;
  height: 222px;
  background: #f7f7f7;
  border-top: 2px solid #ebeced;
}
.detailInfo {
  display: inline-block;

  width: 400px;
  margin: 42px 25px;
}
.name {
  display: inline-block;
  font-weight: 500;
  font-size: 24px;
  vertical-align: middle;
}
.detailInfo ul {
  margin-top: 10px;
  display: block;
  width: 400px;
  /* background: #68c; */
  overflow: hidden;
}
.detail ul li {
  float: left;
  width: 132px;
  line-height: 27px;
}
.detail ul li span {
  color: #999999;
}
.detail span {
  margin-bottom: 20px;
  height: 50px;
}
.imgLogo {
  display: inline-block;
  vertical-align: top;
  margin-top: 30px;
  overflow: hidden;
}
.matchNum {
  height: 376px;
  background: #f7f7f7;
}
.head {
  line-height: 50px;
  background: #f7f7f7;
}
.head span:nth-child(1) {
  display: inline-block;
  padding-left: 15px;
  border-left: 2px solid #16b13a;
  margin-right: 50px;
  font-size: 16px;
}
.headSpan {
  display: inline-block;
  height: 25px;
  padding: 0 10px;
  margin: 12px 10px;
  color: #333333;
  font-size: 13px;
  line-height: 25px;
  text-align: center;
  border-radius: 1px;
}
.cont ul li {
  float: left;
  height: 24px;
  background: #ebeced;
  color: #888888;
  vertical-align: middle;
  font-size: 12px;
  line-height: 24px;
  font-weight: 300;
  width: 65px;
  text-align: center;
}
.cont ul li:nth-child(2) {
  width: 100px;
}
.recordYa {
  text-align: center;
  padding-top: 40px;
  color: #888888;
}
.ry {
  overflow: hidden;
  background: #f7f7f7;
}
.headUl {
  padding-left: 20px;
}
.headUl li {
  line-height: 50px;
}
.headUl span {
  display: inline-block;
}
.headUl span:nth-child(1) {
  float: left;
  color: #888888;
}
.headUl span:nth-child(2) {
  margin-left: 100px;
}
.headUl span:nth-child(3) {
  float: right;
  color: #888888;
}
.ry li span {
  display: inline-block;
  width: 200px;
  color: #16b13a;
  margin-right: 30px;
}
.zh {
  height: 193px;
  background: #f7f7f7;
}
.sb {
  height: 92px;
  background: #f7f7f7;
}
.nl {
  overflow: hidden;
  background: #f7f7f7;
}
.nl h2 {
  text-align: center;
  padding-top: 30px;
  font-weight: 700;
}
.znl {
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
}
.any {
  overflow: hidden;
}
.sbUl {
  border-top: 1px solid white;
  line-height: 40px;
  text-align: center;
  padding: 0 20px;
  color: #888888;
}
.qf {
  padding: 0 15px;
  overflow: hidden;
  line-height: 26px;
  font-size: 12px;
  color: #888888;
  background: #ebeced;
}
.qf span:nth-child(1) {
  float: left;
}
.qf span:nth-child(2) {
  float: right;
}
.qfUl{
  overflow: hidden;
}
.qfUl li{
  padding-right:15px;
  line-height: 50px;
  overflow: hidden;
  text-indent: 15px;
}
.qfUl li span:nth-child(1) {
  float: left;
}
.qfUl li span:nth-child(2) {
  float: right;
}
.znl div {
  line-height: 40px;
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.znl .nma {
  color: #888888;
  margin-top: 20px;
}
.oneJn {
  width: 310px;
  height: 40px;
  margin-top: 30px;
}
.oneJn div {
  background: #888888;
}
.oneJn div:nth-child(1) {
  width: 100px;
  float: left;
  margin-left: 20px;
}
.oneJn div:nth-child(2) {
  width: 100px;
  float: right;
  margin-right: 20px;
}
.pd {
  margin: 0 auto;
  width: 100px;
  background: #888888;
  margin-top: 30px;
  margin-bottom: 30px;
}
.speed {
  width: 100px;
  margin: 0 auto;
  background: #888888;
}
</style>
