<template>
  <div class="teamInfo">
    <div class="teamLeft">
      <div class="leftTop">
        <div class="imgYa">
          <img :src="info.imageUrl" alt class="sg">
        </div>
        <div class="info">
          <div class="baseInfo">
            <h1>
              {{$store.state.teamName}}
            </h1>
          </div>
          <div class="detailInfo">
            <ul>
              <li v-for="(site,key,index) in detailInfo[$store.state.active1]" :key="index">
                <span>{{key}}</span>
                : {{site}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="leftMid">
        <div class="sc luck">
          <span>赛程</span>
          
          <span class="span1">后10场比赛</span>
          <span class="span1">前10场比赛 |</span>
        </div>
        <div class="scCont">
          <ul>
            <li v-for="(site,index) in 10" :key="index" class='scspan'>
              <span>{{matchJl.time}}</span>
              <span>{{matchJl.lx}}</span>
              <span>{{matchJl.win}}</span>
              <span>{{matchJl.bf}}</span>
              <span @click='go(matchJl.lose)'>{{matchJl.lose}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="teamPlayer">
        <div class="playerTop luck">
          <span>{{$store.state.teamName}}队员</span>
        </div>
        <div class="locate">
          <span class="lone">位置</span>
          <span class="ltwo">号码</span>
          <span class="lthre">姓名</span>
          <span class="ltwo">出场</span>
          <span class="lfor">进球</span>
          <span class="lfor">国籍</span>
        </div>
        <div class="playCont">
          <ul>
            <li v-for="(site,index) in players" :key="index">
              <span class="lone">{{site[0]}}</span>
              <span class="ltwo">{{site[1]}}</span>
              <span class="lthre">{{site[2]}}</span>
              <span class="ltwo">{{site[3]}}</span>
              <span class="lfor">{{site[4]}}</span>
              <span class="lfor">-</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="honour">
        <div class="luck">
          <span>荣誉记录</span>
        </div>
        <div class="honourList">
          <ul>
            <li v-for="(site,index) in 5" :key="index">
              <span class="ward">中国足球超级杯</span>
              <span>2019</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    <div class="teamRight">
      <div class="jfb">
        <span>积分榜</span>
        <span  @click="$router.push('/data')">更多</span>
      </div>
      <div class="jfbCont">
        <div class="contLi">
          <span class="pm">排名</span>
          <span class="qda">球队</span>
          <span class="spf">胜/平/负</span>
          <span class="jf">积分</span>
        </div>
        <ul class="contUl">
          <li v-for="(site,index) in $store.state.jTeamYa" :key="index" class="contLia" @click='go(site.name)'>
            <span class="pm">
              {{index+1}}</span>
            <span class="qda">
                    <img :src="site.imageUrl" alt=""  class='sgy'>
              {{site.name}}</span>
            <span class="spf">{{site.winM}} / {{site.equalM}} / {{site.loseM}}</span>
            <span class="jf">{{site.score}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import ad from "./ad";
export default {
  name: "teamInfo",
  inject:['reload'],
  data() {
    return {

      info:"",
      matchJl:
{time:'11-11 15:00	',lx:'中超30 轮',win:	this.$store.state.teamName  ,	bf:'3-2'	,  lose:'上海上港'},
players:"",
      detailInfo:[{
        成立: 1899,
        国家和地区: "西班牙",
        城市: "巴塞罗那",
        主场: "诺坎普球场 (99787人)",
        电话: "+34 (902) 189 900",
        邮箱: "oab@club.fcbarcelona.com",
        地址: "Avenida de Arístides Maillo"
      },
       {
        成立: 1892,
        国家和地区: "英格兰",
        城市: "利物浦",
        主场: "安菲尔德球场 (54074人)",
        电话: "+44 (151) 263 2361",
        邮箱: "customercontact@liverpoolfc.tv",
        地址: "Anfield Road"
      },
      {
        成立: 1897,
        国家和地区: "意大利",
        城市: "都灵",
        主场: "安联球场 (45666人)",
        电话: "+39 (899) 999 897",
        邮箱: "francesco.gianello@juventus.com",
        地址: "Corso Galileo Ferraris 32"
      },
      {
        成立: 1909,
        国家和地区: "德国",
        城市: "多特蒙德",
        主场: "伊杜纳公园 (81360人) 电",
        电话: "+49 (231) 902 00",
        邮箱: "info@bvb.de",
        地址: "Rheinlanddamm 207-209"
      },
     
      
      {
        成立: 2005,
        国家和地区: "中国",
        城市: "上海",
        主场: "上海体育场",
        电话: "",
        邮箱: "",
        地址: "Dongping National Forest Park, Chongming"
      }]
      
    };
  },
  created(){
         this.$store.commit('increment');
   console.log("dishfids",this.$store.state.jTeamYa)
   if(this.$store.state.active1 == 0){
         this.$store.state.jTeamYa = this.$store.state.teamMc.xj;
        }else if(this.$store.state.active1==1){
this.$store.state.jTeamYa = this.$store.state.teamMc.yc;
        }else if(this.$store.state.active1===2){
this.$store.state.jTeamYa = this.$store.state.teamMc.yj;
        }else if(this.$store.state.active1==3){
this.$store.state.jTeamYa = this.$store.state.teamMc.dj;
        }else {
this.$store.state.jTeamYa = this.$store.state.teamMc.zc;
        }
  console.log(this.$store.state.teamName,"dwwqeqwe");
    for(var k in this.$store.state.jTeamYa){
      if( this.$store.state.jTeamYa[k].name.trim() == this.$store.state.teamName.trim()){
        this.info =  this.$store.state.jTeamYa[k]
        console.log('aaa');
      }
   
    }
  this.getPlayer();

   
  },
  methods:{
    getPlayer(){
      this.$http({
        method:'get',
        url:"https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/player"
      }).then(res=>{
        this.players = res.data.data.player;
      })
    },
    go(name){
      this.$store.state.teamName = name
      this.reload();
    
    }

  },
  components: {
    ad
  }
};
</script>
<style scoped>
.sgy{
  width:24px;
  vertical-align: middle;
}
.teamInfo {
  width: 1000px;
  overflow: hidden;
  margin: 100px auto 0;
  overflow: hidden;
}
.teamLeft {
  float: left;
  width: 620px;
  overflow: hidden;
}
.teamRight {
  float: right;
  width: 310px;
  overflow: hidden;
}
.leftTop {
  height: 222px;
  margin-bottom: 20px;
  background: #f7f7f7;
  border-top: 2px solid #ebeced;
  overflow: hidden;
}
.imgYa {
  margin-left: 30px;
  width: 130px;
  float: left;
}
.sg {
  vertical-align: middle;
  margin-top: 40px;
  width: 100%;
}
.gq {
  width: 28px;
  vertical-align: middle;
}
.info {
  height: 175px;
  margin: 26px 4px 16px 16px;
  float: left;
}
.baseInfo h1 {
  width: 400px;
  line-height: 31px;
  margin-bottom: 2px;
  font-size: 24px;
}
.detailInfo {
  width: 440px;
  overflow: hidden;
}
.detailInfo li {
  float: left;
  line-height: 30px;
  font-size: 13px;
}

.detailInfo li:nth-child(odd) {
  width: 190px;
  margin: 5px 13px 0 5px;
}
.detailInfo li:nth-child(even) {
  width: 200px;
  margin: 5px 0;
}
.detailInfo li:nth-child(7) {
  width: 100%;
}
.detailInfo span {
  color: #999999;
}
.luck {
  line-height: 40px;
  background: #f7f7f7;
  border-bottom: 1px solid #ffffff;
  padding-right: 15px;
}
.luck span:nth-child(1) {
  padding-left: 10px;
  border-left: 4px solid #16b13a;
}
.scCont {
  background: blue;
  margin-bottom: 20px;
}

.scCont li {
  line-height: 28px;
}
.scCont li:nth-child(odd) {
  background: #ffffff;
}
.scCont li:nth-child(even) {
  background: #ededed;
}
.teamPlayer {
  margin-bottom: 20px;
  overflow: hidden;
}
.honour {
  overflow: hidden;
  margin-bottom: 60px;
}
.newsList {
  margin: 40px 0 20px 0;
  background: red;
}
.span1 {
  float: right;
}
.locate {
  line-height: 24px;
  padding: 1px 1px;
  background: #ebeced;
  color: #888888;
  font-weight: 300;
  font-size: 0;
}
.locate span {
  display: inline-block;
  font-size: 12px;
}
.playCont {
  font-size: 0;
}
.playCont span {
  display: inline-block;
  font-size: 14px;
}
.lone {
  width: 113px;
  text-align: center;
}
.ltwo {
  width: 54px;
  text-align: center;
}
.lthre {
  width: 289px;
  text-align: left;
}
.lfor {
  width: 45px;
  text-align: center;
}
.playCont li {
  line-height: 37px;
}
.playCont li:nth-child(odd) {
  background: #ffffff;
}
.playCont li:nth-child(even) {
  background: #f7f7f7;
}
.honourList {
  padding: 1px 1px;
}
.honourList li {
  padding-left: 16px;
  line-height: 50px;
  background: #f7f7f7;
  color: #16b13a;
  font-size: 13px;
}
.ward {
  width: 175px;
  display: inline-block;
  text-align: left;
}
.jfb {
  height: 40px;
  background: #f7f7f7;
}
.jfb span {
  display: inline-block;
  line-height: 40px;
}
.jfb span:nth-child(1) {
  padding-left: 15px;
  border-left: 5px solid #16b13a;
}
.jfb span:nth-child(2) {
  float: right;
  margin-right: 15px;
}

.jfbCont li {
  line-height: 35px;
  font-size: 13px;
}
.jfbCont {
  overflow: hidden;
  font-size: 13px;
}
.pm {
  width: 33px;
  text-align: center;
}
.qda {
  width: 108px;
  padding-left: 37px;
}

.spf {
  width: 95px;

  padding: 1px 1px;
}
.jf {
  width: 32px;
  padding: 1px 1px;
}
.jfbCont span {
  display: block;
  float: left;
  color: #333333;
}
.contLi {
  line-height: 26px;
  background: #ebeced;
  overflow: hidden;
}
.contLia {
  overflow: hidden;
}
.contUl li:nth-child(even) {
  background: #f7f7f7;
}
.contUl li:nth-last-child(1) {
  border-bottom: 1px solid #ededed;
}
.scspan{
    line-height: 28px;
    color:#333333;
    font-size: 13px;
}
.scspan span:nth-child(1){
       display: inline-block;
   width: 98px;
    padding-left: 5px;
}
.scspan span:nth-child(2){
      width: 133px;
    text-align: left;
    padding-left: 55px;
  
    display: inline-block;
}
.scspan span:nth-child(3){
     display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
 
    width: 107px;
   
}
.scspan span:nth-child(4){
     width: 38px;
     
               display: inline-block;

}
.scspan span:nth-child(5){
      display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: right;
    width: 107px;
}
.contUl li:nth-child(1) .pm {
  color: red;
}
.contUl li:nth-child(2) .pm {
  color: #ffa800;
}
.contUl li:nth-child(3) .pm {
  color: #16b13a;
}
</style>
