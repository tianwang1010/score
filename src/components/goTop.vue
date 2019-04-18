<template>
  <div class="goTop">
    <div class="goTopTop">
      <i class="el-icon-share"></i>
      <div class="code">
        <img :src="erCode" alt class="erCode">
        <div class="load">下载懂球帝客户端！</div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="goTopBot" @click="goTop()">
      <i class="el-icon-arrow-up"></i>
    </div>
  </div>
</template>
<script>
import erCode from "../../static/img/mmqrcode1552060718375.png";
export default {
  name: "goTop",
  data() {
    return {
      erCode,
      show: false
    };
  },
  methods: {
    goTop() {
      this.$store.commit('increment');
    
  }
  }
};
</script>
<style scoped>
.clear {
  clear: both;
}
.code {
  position: absolute;
  right: 50px;
  top: -70px;
  display: none;
}
.erCode {
  width: 100px;
  margin-right: 10px;
}
.load {
  font-size: 10px;
    color:#666;
}
.goTop {
  width: 180px;
  height: 120px;
  position: fixed;
  right: 0;
  bottom: 20px;
}
.goTopTop,
.goTopBot {
  width: 31px;
  float: right;
  line-height: 31px;
  background: #16b13a;
  text-align: center;
  color: white;
}
.goTopBot {
  margin-top: 5px;
}
i {
  font-size: 25px;
}
.goTopTop:hover .code {
  display: block;
}
</style>
