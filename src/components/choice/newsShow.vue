<template>
  <div class="newShow">
    <div class="newLeft">
      <div class="leftTop">
        <div class="dqp">
          <span @click='goIndex(1)'>懂球帝首页 ></span>
          <span @click='goIndex(2)'>懂球号文章</span>
        </div>
        <h2 v-if='title&&title!=""'>{{title}}</h2>
        <div class="leftTopBot">
          <span>{{infoYa.posterScreenName}}</span>
          <span class="tn">{{infoYa.publishDateStr}}</span>
        </div>
      </div>
      <div class="leftBot">
        <p>{{infoYa.content}}</p>
        <div v-for="(img,index) in infoYa.imageUrls" :key="index">
          <img :src="img" alt class="imgT">
        </div>
        <p class="p1">以上仅代表作者观点，并非懂球帝官方观点</p>
        <p class="p1">
          自媒体如有侵权，请联系
          <span>懂球帝</span>
        </p>

        <span class="share">分享到:</span>
        <a href="###" class="a1">微博</a>
        <a href="###" class="a1">朋友圈</a>
        <a href="###" class="a1">QQ空间</a>
        <a href="###" class="a1">贴吧</a>
      </div>
    </div>
    <div class="newRight">
      <div class="rightHead">
        <span class="relatB">相关标签</span>
        <ul>
          <li v-for='(site,index) in bqY' :key='index'>
      
            <div class="rightName">
              <p @click='goInfo(site)'>{{site}}</p>
            </div>
          </li>
         
        </ul>
      </div> 
       <div class="rightHead head2">
        <span class="relatB">相关新闻</span>
        <ul>
          <li class="li1" @click='go(site.id)' v-for='(site,index) in this.bqs' :key='index'>
            <p class="pTitle">{{site.title}}</p>

            <span class="tn">{{site.publishDateStr}}</span>
          </li>
        
        </ul>
      </div>
</div> 
  </div>
</template>
<script>

export default {
  name: "newShow",
    inject:['reload'],
  data() {
    return {
      infoYa: "",
      title:"",
      bqs:[],
      bqY:[],
    };
  },

  created() {
      for(var k in this.$store.state.matchInfo){
        if(this.$store.state.matchInfo[k].id == this.$route.query.idYa ){
          this.infoYa = this.$store.state.matchInfo[k]
        }
      }

      console.log( this.$store.state.jTeamYa ,'hahahahh')
       this.title = this.infoYa.title
       console.log(this.infoYa,"当前新闻")
       this.getRandom()
         this.goReate()
     
  },
 
  methods: {
   getRandom(){
     this.bqs = []
     let new1 = Math.floor(Math.random()*9+1)
     let new2 = Math.floor(Math.random()*9+1)
     if(new1!=new2 && new1!=this.$route.query.indexYa){
       this.bqs.push(this.$store.state.matchInfo[new1])
       this.bqs.push(this.$store.state.matchInfo[new2])
     }else{
       this.getRandom()
     }
      console.log(this.bqs);
   },
   goReate(){
     let one = Math.floor(Math.random()*14+1)
       let two = Math.floor(Math.random()*14+1)
         let thre = Math.floor(Math.random()*14+1)
           let four = Math.floor(Math.random()*14+1)
          if(one!=two && two!=thre && thre!=four){
           for(var k in this.$store.state.jTeamYa){
             console.log(k);
             if(k==one || k==two || k==thre || k==four){
              this.bqY.push(this.$store.state.jTeamYa[k].name)
             }
        
        
          }
          }

     
   },
   goInfo(site){
       this.$store.state.teamName = site;
      this.$router.push({name:'teamInfo'})
   },
	 goIndex(site){
		if(site==1){
			this.$router.push('/')
		}else{
			console.log('已经在了，你还想咋样！')
		}
	 },
   go(id){   
     console.log(id,"当前新闻id")
     for(var k in this.$store.state.matchInfo){
       if(id == this.$store.state.matchInfo[k].id){
         this.infoYa = this.$store.state.matchInfo[k]
       }
     }
    this.title = this.infoYa.title
      this.getRandom()
     console.log(this.infoYa,"当前新闻")
   }
  

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
.dqp span:hover{
	color:#16b13a;
	cursor: pointer;
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
  text-indent: 2em;
  font-size: 16px;
  line-height: 1.7;
}
.leftBot .p1 {
  font-size: 12px;
  color: #999;
}
.p1 span {
  color: #666;
}
.share {
  margin-top: 20px;
  margin-left: 15px;
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
.rightHead ul {
  border-top: 1px solid #16b13a;
}
.rightHead img {
  width: 36px;
  vertical-align: middle;
  float: left;
}
.relatB {
  display: inline-block;
  padding: 0 15px;
  color: white;
  background: #16b13a;
  border-bottom: 1px solid #16b13a;
  line-height: 28px;
}
.rightHead li {
  overflow: hidden;
  line-height: 40px;
  padding: 10px 0;
  border-bottom: 1px solid #e6eaed;
  text-indent: 10px;
}
.rightName {
  float: left;
}
.rightHead p {
  font-size: 14px;
  line-height: 20px;
}
.p2 {
  color: #999;
}
.head2 {
  margin-top: 50px;
}
.pTitle{
    font-size: 14px;
}
.head2 .li1 {
    cursor: pointer;
  font-size: 14px;
  text-align: left;
}
</style>
