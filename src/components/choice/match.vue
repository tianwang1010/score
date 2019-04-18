<template>
  <div class="match">
    <div class="left">
      <ul>
        <li
          v-for="(site,index) in match"
          :key="index"
          :class="index==active?'active':''"
          @click="changexb(index)"
        >{{site}}</li>
      </ul>
    </div>
    <div class="right">
      <div class="rightTop">
        <h2>比赛列表</h2>
      </div>
      <div class="rightBot">
        <div class="cont" v-if='Object.keys(list).length==0'>
          近期没有更多比赛
        </div>
        <div class="cont" v-else>
          <ul class="borderUrl" v-for='(site,key,index) in list' :key='index'>
            <li class='head'>{{key}}</li>
            <li v-for="(count,index) in site" :key="index" class="matchLi">
              <ul class="jtinfo" @click.prevent='goMatch(count)'>
              
                <li>{{count.time}}</li>
                <li>{{count.lx}}</li>
                <li @click.stop='go(count.team1)'>
                  {{count.team1}}
                </li>
                <li class="mark">
                 vs
                </li>
                <li @click.stop=go(count.team2)>
                  {{count.team2}}
                </li>
    
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
  name: "match",
  data() {
    return {
      active: 0,
      matchList:'',
      list:"",
      match: ["西甲", "英超", "意甲", "德甲", "中超"]
    };
  },
  created(){
         this.$store.commit('increment');
    this.getMatchList();
  },
  methods:{
    getMatchList(){
      this.$http({
        method:'get',
        url:"https://www.easy-mock.com/mock/5c94b8ef6ae9b20872ade3b5/football/lssc"
      }).then(res=>{
        console.log(res.data.data)
        this.matchList = res.data.data;
        this.list = this.matchList.xj;
        console.log(this.list,"dwewewe");
      })
    },
    goMatch(count){
      this.$store.state.firstShow = count.team1;
       this.$store.state.nextShow = count.team2;
          this.$store.state.matchLx = count.lx
      this.$router.push({name:'matchZb'});
    },
      go(name){
      this.$store.state.active1 = this.active;
      this.$store.state.teamName = name,
      this.$router.push({name:'teamInfo'})
      },
      changexb(index){
        this.active=index;
        if(index == 0){
          this.list = this.matchList.xj;
        }else if(index==1){
this.list = this.matchList.yc;
        }else if(index===2){
this.list = this.matchList.yj;
        }else if(index==3){
this.list = this.matchList.dj;
        }else {
this.list = this.matchList.zc;
 
        }
      }
  }
};
</script>
<style scoped>
.match {
  width: 1000px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 100px;
}
.left {
  width: 180px;
  overflow: hidden;
  float: left;
}
.left li {
  padding-left: 10px;
  line-height: 48px;
  color: #666;
}
.left .active {
  background: #eaf7f4;
  color: #16b13a;
  transition: none;
  border-left: 5px solid #16b13a;
}
.right {
  width: 776px;
  overflow: hidden;
  float: right;
}
h2 {
  line-height: 30px;
  font-size: 18px;
  color: #16b13a;
  text-indent: 15px;
}
.rightBot {
  margin-top: 18px;
}
.head {
  line-height: 40px;
  background: #ececec;
  text-indent: 15px;
  font-weight: 700;
  font-size: 14px;
}
.cont {
  overflow: hidden;
}
.cont ul {
  overflow: hidden;
}
.jtinfo li {
  float: left;
  line-height: 41px;
}
.mark {
  font-size: 16px;
}
.matchLi:hover {
  background: #f1f1f1;
}
.jtinfo li:nth-child(1) {
  width: 84px;
  text-align: left;
  text-indent: 15px;
}
.jtinfo li:nth-child(2) {
  width: 103px;
  text-align: left;
  text-indent: 15px;
}
.jtinfo li:nth-child(3) {
  width: 152px;
  text-align: left;
  text-indent: 15px;
}
.jtinfo li:nth-child(4) {
  width: 31.5px;
  text-align: left;
  text-indent: 15px;
}
.jtinfo li:nth-child(4) {
  width: 63px;
  text-align: left;
  text-indent: 15px;
}
.jtinfo li:nth-child(5) {
  width: 152px;
  text-align: right;
  text-indent: 15px;
}
.jtinfo li:nth-child(6) {
  width: 220px;
  text-align: center;
  text-indent: 25px;
}
.matchLi {
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  font-size: 12px;
  color: #333333;
  font-weight: 400;
}
.winImg {
  width: 24px;
  height: 24px;
  margin-bottom: -8px;
}
</style>
