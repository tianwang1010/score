<template>
    <div class="newsList">
          <div class="newsHead">
           <span>{{$store.state.teamName}}的相关新闻</span>
          </div>
             <ul>
                  <li></li>
              </ul>
      </div>
</template>
<script>
export default {
    name:'newsList',
    data(){
        return{
        teamName:'',
        }

    }
}
</script>
<style scoped>
.newsList{
    width:100%;
    overflow: hidden;
    margin-top:40px;
    margin-bottom:20px;
}
.newsHead{
    line-height: 21px;
}
</style>
