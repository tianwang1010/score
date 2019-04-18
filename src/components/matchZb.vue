<template>
  <div class="matchZb">
    <div class="matchLeft">
      <div class="matchTop" :style="bg">
        <div class="topCont">
          <div class="team1">
            <img :src="$store.state.firstImg" alt>
            <p>{{$store.state.firstShow}}</p>
          </div>
          <div class="stat1">
            <span>
              {{$store.state.time}}
              {{$store.state.matchLx}}
            </span>
            <br>
            <span class="vs">VS</span>
          </div>
          <div class="team1">
            <img :src="$store.state.nextImg" alt>

            <p>{{$store.state.nextShow}}</p>
          </div>
        </div>
      </div>
      <div class="xh">
        直播信号：
        <span>暂无信号源</span>
      </div>
      <div class="matchMid">
        <div class="matchList">
          <ul>
            <li v-for="(site,index) in cont" :key="index">
              <span :class="active==index?'active':''" @click="change(index)">{{site}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="matchBot">
        <div class="sq" v-if="active==0">暂无比赛信息</div>
        <div class="zr" v-if="active==1">暂无阵容信息</div>
        <div class="fx" v-if="active==2">
          <div class="botHead">
            <span>对赛战绩</span>
          </div>
          <ul class="botUl">
            <li class="botUlLi">
              <span>日期</span>
              <span>赛事</span>
              <span>主队</span>
              <span>比分</span>
              <span>客队</span>
            </li>
            <li class="botUlLi" v-for='(count,index) in 8' :key='index'>
              <span>2016.05.30</span>
              <span>友谊赛</span>
              <span @click='goTeam($store.state.firstShow)'>{{$store.state.firstShow}}</span>
              <span>0 - 2</span>
              <span @click="goTeam($store.state.nextShow)">{{$store.state.nextShow}}</span>
            </li>
         </ul>
          <div class="botHead">
            <span>近期战绩</span>
          </div>
          <ul class="botUl">
            <li class="botUlLi">
              <span>日期</span>
              <span>赛事</span>
              <span>主队</span>
              <span>比分</span>
              <span>客队</span>
            </li>
            <li class="botUlLi" v-for='(count,index) in 8' :key='index'>
              <span>2016.05.30</span>
              <span>友谊赛</span>
              <span @click="goTeam($store.state.firstShow)">{{$store.state.firstShow}}</span>
              <span>0 - 2</span>
              <span @click="goTeam($store.state.nextShow)">{{$store.state.nextShow}}</span>
            </li>
           
          </ul>
        </div>
        <div class="jj" v-if="active==3">暂无集锦信息</div>
        <div class="pl" v-if="active==4">暂无赔率信息</div>
      </div>
    </div>
    <div class="matchRight">
      <div class="rightHead">
        <span>近期比赛</span>
      </div>
      <div class="rightCont">
        <ul>
          <li v-for="(site,index) in recentMatch" :key="index" @click="goMatchInfo(site)">
            <div class="team">
              <div class="img">
                <img :src="site.imageUrl" alt class="recentImg" >
                <div>{{site.team1}}</div>
              </div>
            </div>
            <div class="stat">
              <div class="time">{{site.lx}}</div>
              <div class="time">{{site.time}}</div>
            </div>

            <div class="team">
              <img :src="site.imageUrl1" alt class="recentImg">
              <div>{{site.team2}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import infoBack from "../../static/img/info_back.png";
export default {
  name: "matchZb",
  data() {
    return {
      infoBack,
      bg:{
          height: "160px",
            background: "url(../../static/img/info_back.png) no-repeat",
            backgroundSize:" 630px 160px"
      },
      active: 0,
      recentMatch: "",
      cont: ["赛况", "阵容", "分析", "集锦", "赔率"]
    };
  },
  created() {
    this.getMatch();
  },
  methods: {
    goTeam(name){
      this.$store.state.teamName = name;
      this.$store.state.active1 = 2;
      this.$router.push({name:"teamInfo"})
      
    },
    goMatchInfo(site) {
      this.getMatch();
      this.$store.state.time = site.time;
      this.$store.state.firstImg = site.imageUrl;
      this.$store.state.nextImg = site.imageUrl1;
      this.$store.state.firstShow = site.team1;
      this.$store.state.nextShow = site.team2;
      this.$store.state.matchLx = site.lx;
      this.$router.push({ name: "matchZb" });
    },
    getMatch() {
      this.$http({
        method: "get",
        url:
          "https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/recentMatch"
      }).then(res => {
        console.log(res.data.data);
        this.recentMatch = res.data.data.recentMatch;
        console.log(this.$store.state.firstShow);
        for (var k in this.recentMatch) {
          if (this.recentMatch[k].team1 == this.$store.state.firstShow) {
            console.log(k);
            this.recentMatch.splice(k, 1);
          }
        }
        console.log(this.recentMatch);
      });
    },
    change(index) {
      this.active = index;
    }
  }
};
</script>
<style scoped>
.matchZb {
  width: 1000px;
  overflow: hidden;
  margin: 100px auto 0;
}
.matchLeft {
  width: 630px;
  overflow: hidden;
  float: left;
}
.matchTop {
  overflow: hidden;
  padding-top: 15px;
}
.statTop {
  height: 50%;
}
.topCont {
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
  font-size: 0;
}
.topCont div {
  display: inline-block;
  vertical-align: bottom;
}
.stat1 {
  width: 30%;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  color: white;
}
.stat1 span:nth-child(1) {
  font-size: 14px;
  line-height: 30px;
}
.vs {
  font-size: 35px;
}
.team1 {
  text-align: center;
  font-size: 20px;
  color: white;
  width: 150px;
}
.team1 img {
  width: 80px;
  margin-bottom: 10px;
}

.matchMid {
  overflow: hidden;
}
.active {
  color: #16b13a;
  border-bottom: 2px solid #16b13a;
}
.xh {
  line-height: 44px;
  padding-left: 18px;
  background: #f7f7f7;
  margin-bottom: 20px;
  font-size: 14px;
}
.xh span {
  color: #888888;
}
.matchList li {
  float: left;
  width: 20%;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #88888888;
  font-size: 18px;
}
.matchList li:last-child {
  border: 0;
}
.matchList span {
  width: 60%;
  margin: 0 auto;
  display: inline-block;
}
.matchBot {
  overflow: hidden;
  margin-top: -10px;
}
.botHead {
  width:100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f7f7f7;
}
.botHead span {
  display: inline-block;
  line-height: 25px;
  padding-left: 15px;
  border-left: 2px solid #16b13a;
}
.botUl {
  overflow: hidden;
  margin-bottom: 20px;
}
.botUl li {
  padding: 10px 0;
  line-height: 28px;
}
.botUl li:nth-child(odd) {
  background: #888888;
 
}
.botUl li:nth-child(even) {
  background: white;

}
.fx .botUl .botUlLi {
  font-size: 0;
}
.botUlLi span {
  display: inline-block;
  text-align: center;
  font-size: 16px;
}
.botUlLi span:nth-child(1) {
  width: 170px;
}
.botUlLi span:nth-child(2) {
  width: 130px;
}
.botUlLi span:nth-child(3) {
  width: 117.5px;
}
.botUlLi span:nth-child(4) {
  width: 95px;
}
.botUlLi span:nth-child(5) {
  width: 117.5px;
}
.matchRight {
  width: 310px;
  float: right;
  overflow: hidden;
}

.matchMid {
  background: #f7f7f7;
  line-height: 30px;
  margin-top: 1px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  padding-top: 6px;
  padding-bottom: 6px;
}
.rightHead {
  border-bottom: 1px solid #16b13a;
  box-sizing: border-box;
}
.rightHead span {
  padding: 0 15px;
  line-height: 28px;
  display: inline-block;
  background: #16b13a;
  font-size: 14px;
  color: white;
}
.rightCont li {
  overflow: hidden;
  border-color: #e3e3e3;
  border-bottom-style: solid;
  border-width: 1px;
  padding-top: 12px;
  padding-bottom: 15px;
}
.team {
  width: 100px;
  text-align: center;
  font-size: 14px;
  display: inline-block;
}
.stat {
  height: 34px;
  width: 80px;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
}
.time {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
}
.recentImg {
  width: 50px;
  margin-bottom: 10px;
}
</style>
