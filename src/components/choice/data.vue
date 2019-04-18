<template>
  <div class="data">
    <div class="dataLeft">
      <ul>
        <li
          v-for="(site,index) in match"
          :key="index"
          :class="index==active?'active':''"
          @click="change(index)"
        >{{site}}</li>
      </ul>
    </div>
    <div class="dataRight">
      <div class="rightTop">
        <a
          v-for="(site,index) in bb"
          :key="index"
          :class="index==active1?'active1':''"
          @click="goChange(index)"
        >{{site}}</a>
      </div>
      <div class="rightBot" v-show="active1==0">
        <div class="rightBotT">
            <p class='botSpan'>{{bb[active1]}}</p></div>
        <div class="rightBotB">
          <div class="botHead">
            <ul class="botHeadUl">
              <li class="pm">排名</li>
              <li class="team">球队</li>
              <li class="so">场次</li>
              <li class="tn">胜</li>
              <li class="tn">平</li>
              <li class="tn">负</li>
              <li class="so">进球</li>
              <li class="so">失球</li>
              <li class="js">净胜球</li>
              <li class="jf">积分</li>
            </ul>
          </div>
          <div class="botCont">
            <ul>
              <li v-for="(count,index) in teamMc" :key="index" class="botLi">
                <ul class="contLi">
                  <li class="pm">{{index+1}}</li>
                  <li class="team" @click='go(count.name)'>
                    <img :src="count.imageUrl" alt="bs.png" title="bs.png" class='sg'/>
                {{count.name}}
               
               
                  </li>
                  <li class="so">{{count.winM+count.equalM+count.loseM}}</li>
                  <li class="tn">{{count.winM}}</li>
                  <li class="tn">{{count.equalM}}</li>
                  <li class="tn">{{count.loseM}}</li>
                  <li class="so">{{count.WinB}}</li>
                  <li class="so">{{count.loseB}}</li>
                  <li class="js">{{count.winB-count.loseB}}</li>
                  <li class="jf">{{count.score}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rightBot" v-show="active1==1">
        <div class="rightBotT">
          <ul>
            <li class="mp">排名</li>
            <li class="player">球员</li>
            <li class="ballTeam">球队</li>
            <li class="ballNum">进球数</li>
          </ul>
        </div>
        <div class="rightBotB">
            <ul>
                <li v-for='(player,index) in  this.jq.xjjq
' :key='index'>
                    <ul class='jqLi'>
                          <li class="mp">{{player.pm}}</li>
                   <li class="player" @click='goPlayInfo(player)'>

                {{player.player}}</li>
            <li class="ballTeam" @click='go(player.team)'>
        
                {{player.team}}</li>
            <li class="ballNum">{{player.ball}}</li>
                    </ul>
                </li>
            </ul>
        </div>
      </div>
      <div class="rightBot" v-show="active1==2"> <div class="rightBotT">
          <ul>
            <li class="mp">排名</li>
            <li class="player">球员</li>
            <li class="ballTeam">球队</li>
            <li class="ballNum">助攻数</li>
          </ul>
        </div>
        <div class="rightBotB">
            <ul>
                <li v-for='(player,index) in this.jq.xjzg' :key='index'>
                    <ul class='jqLi'>
                          <li class="mp">{{player.pm}}</li>
<li class="player" @click='goPlayInfo(player)'>
               {{player.player}}</li>
            <li class="ballTeam" @click='go(player.team)'>
                    
                {{player.team}}</li>
            <li class="ballNum">{{player.ball}}</li>
                    </ul>
                </li>
            </ul>
        </div></div>
      <div class="rightBot" v-show="active1==3"><div class="rightBotT">
          <ul>
            <li class="last" @click='changeLs(0)'>
                上一轮
                </li>
            <li class="now" >第{{ls}}轮</li>
            <li class="next"  @click='changeLs(1)'>下一轮 ></li>
           
          </ul>
        </div>
        <div class="rightBotB">
                <ul>
                    <li v-for='(newM,index) in jq.xjsc' :key='index' class='newM' @click.prevent='goMatch(newM)'>
                        <ul class='fl'>
                            <li class='nTime'>{{newM.time}}</li>
                            <li class='nLeftT' @click.stop='go(newM.team1)'>
                                {{newM.team1}}</li>
                            <li>:</li>
                              <li class='nRightF'  @click.stop='go(newM.team2)'>
                
                                  {{newM.team2}}</li>
                        </ul>
                    </li>
                </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "dataYa",
  data() {
    return {
      ls:3,
      jq:"",
      jqAll:"",
      active: 0,
      active1: 0,

      teamMc:'',
       match: ["西甲", "英超", "意甲", "德甲", "中超"],
      bb: [" 积分榜", " 射手榜", "助攻榜", "赛程表"],
    };
  },
  created(){
         this.$store.commit('increment');
    this.logo = this.bs;
        this.teamMc = this.$store.state.teamMc.xj;
        console.log(this.teamMc,'adadaa')
        this.getPm();
  },
  methods: {
    goMatch(newM){
this.$store.state.firstShow = newM.team1;
       this.$store.state.nextShow = newM.team2;
          this.$store.state.matchLx = newM.lx
      this.$router.push({name:'matchZb'});
    },
    getPm(){
      this.$http({
        method:"get",
        url:"https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/playerNum"
      }).then(res=>{
        this.jqAll = res.data.data;
        this.$store.state.jqAll = this.jqAll;
        this.jq = this.jqAll.xj;
        console.log(this.jq,"123312321");


      })
    },
    goPlayInfo(playerYa){
    
      console.log(playerYa);
      this.$store.state.playerName = playerYa.player;
      this.$store.state.playerTeam = playerYa.team
      this.$router.push({name:"playerInfo"});
    
    },
    go(name){
        this.$store.state.active1 = this.active;
      this.$store.state.teamName = name,
      this.$router.push({name:'teamInfo'})
    },
    change(index) {
    this.active = index;
          if(this.active==4){
                this.jq = this.jqAll.zc;
         this.teamMc = this.$store.state.teamMc.zc;
      }
      if(this.active==1){
          this.jq = this.jqAll.yc;
            this.teamMc = this.$store.state.teamMc.yc;
      }
      if(this.active==2){
            this.jq = this.jqAll.yj;
          this.teamMc = this.$store.state.teamMc.yj;
      }
       if(this.active==3){
             this.jq = this.jqAll.dj;
          this.teamMc = this.$store.state.teamMc.dj;
      }
       if(this.active==0){
    this.teamMc = this.$store.state.teamMc.xj;
     this.jq = this.jqAll.xj;
       }

    },
    goChange(index) {
      this.active1 = index;
    },
    changeLs(index){
        console.log(index);
        if(index==0 && this.ls>1){
            console.log(123);
            this.ls-=1;
        }else if(index==1 && this.ls<=3){
            this.ls+=1;
        }
    }
  }
};
</script>
<style scoped>
.data {
  width: 1000px;
  overflow: hidden;
  margin: 100px auto 0;
}
.dataLeft {
  width: 195px;
  float: left;
  overflow: hidden;
}
.dataLeft li {
  line-height: 48px;
  padding-left: 10px;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  border-left: 5px solid white;
}
.dataRight {
  float: right;
  width: 780px;
  overflow: hidden;
}
.rightTop {
  line-height: 32px;
  font-size: 14px;
  text-align: center;

}
a{
      color:#666;
}
.rightTop a {
  margin: 0 30px;
}
.rightBot {
  margin-top: 20px;
}
.dataLeft .active {
  box-sizing: border-box;
  border-left-color: #16b13a;
  color: #16b13a;
}
.rightTop .active1 {
  padding-bottom: 5px;
  border-bottom: 2px solid #16b13a;
  color: #16b13a;
}
.rightBotT {
  line-height: 40px;
  padding: 1px 1px 1px 1px;
  background: #e0f4f0;
  color: #000;
}
.botHeadUl li {
  float: left;
  line-height: 40px;
  padding: 1px 1px;
  background: #16b13a;
  font-weight: 700;
  font-size: 14px;
  color: white;
}
.contLi li {
  float: left;
  line-height: 40px;
  padding: 1px 1px;
  font-size: 12px;
  color: #666;
}
.pm {
  width: 70px;
  text-align: center;
}
.team {
  width: 200px;
  text-indent: 50px;
}
.so {
  width: 70px;
  text-align: center;
}
.tn {
  width: 36px;
  text-align: center;
}
.js {
  width: 100px;
  text-align: center;
}
.jf {
  width: 70px;
  text-align: center;
}
.botLi {
  width: 100%;
  overflow: hidden;
}
.contLi {
  overflow: hidden;
}
.contLi li {
  float: left;
}
.sg {
  width: 24px;
  vertical-align: middle;
  margin-right: 5px;
}
.botLi:nth-child(2) {
  background: #ddd;
}
.botLi:nth-child(1) {
  background: #ddd;
}
.botLi:nth-child(3) {
  background: #ddd;
}
.botLi:nth-last-child(1) {
  background: #ddd;
}
.botLi:nth-last-child(2) {
  background: #ddd;
   border-bottom: 1px solid white;
}
.rightBotB {
    overflow: hidden;
  border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.botLi {
  border-bottom: 1px solid #ddd;
}
.rightBotT {
  overflow: hidden;
}
.rightBotT li {
  float: left;
  color:white;
      background: #16b13a;
}
.mp {
  width: 143px;
  text-align: center;

}
.player {
  width: 201.5px;
  text-indent: 50px;
}
.ballTeam {
  width: 201px;
  text-indent: 50px;
}
.ballNum {
  width: 232.5px;
  text-align: center;
}
.jqLi li{
float: left;
line-height: 41px;
border-bottom: 1px solid #ddd;
font-size: 12px;
}
.botSpan{
   text-align: center;
}
.last{
    width:234px;
    text-indent: 50px;
}
.now{
    width:312px;
    text-align: center;
}
.next{
    width:182px;
    text-align: right;
     padding-right:50px;
}
.newM{
    width:100%;
    overflow: hidden;
    line-height: 40px;
    border-bottom:1px solid #ddd;
}
.fl li{
    float: left;
    font-size: 12px;
    color:#666;
}
.nTime{
        padding-left: 40px;
    width: 240px;
    text-align: left;
}
.nLeftT{
    width:253px;
      text-align: left;
}
.nRightF{
    width:193px;
    text-align: right;
    padding-right: 45px;
}

</style>
