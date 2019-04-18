<template>
  <div class="login">
    <div class="cont">
      <div class="warn1"  v-show="flag">
        <div class="warn">
          <h3>警告</h3>
          <p class="errMsg">{{errMsg}}</p>
          <div class="confirm" @click="flag=!flag">确定</div>
        </div>
      </div>
      <div class="head">
        <h2>密码登录</h2>
      </div>
      <input type="text" placeholder="请输入账号" class="oneInput1" v-model="username">
      <br>
      <input type="password" placeholder="请输入密码" class="oneInput1" v-model="password">
      <br>
      <input type="text" placeholder="验证码" class="oneInput" v-model="codeNum">
      <span class="code">
        <img :src="baseUrl" alt>
      </span>
      <div class="seeNo" @click="getCode()">
        <p>看不清</p>
        <p>换一张</p>
      </div>
      <br>
      <p>温馨提示：未注册过的账户，登录时将直接注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <input type="submit" value="提交" class="btn" @click="login()">
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      flag: false,
      baseUrl: "",
      errMsg: "",
      username: "",
      password: "",
      codeNum: "",
      info:"",
    };
  },
  created() {
    this.getCode();
      this.$store.commit('increment');
  },
  methods: {
    getCode() {
      this.$http({
        method: "post",
        url: "https://elm.cangdu.org/v1/captchas",
        withCredentials: true
      }).then(res => {
        console.log(res);
        this.baseUrl = res.data.code;
      });
    },
    login() {
      this.$http({
        method: "post",
        url: "https://elm.cangdu.org/v2/login",
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNum
        },
        withCredentials: true
      }).then(res => {
        console.log(res.data.status == 0);
        if (res.data.status == 0) {
          this.errMsg = res.data.message;
              this.flag = true;
        } else {
          this.errMsg = "登录成功 ";
          this.info = res.data
          this.$store.state.info = res.data

          this.$router.push({name:"index"})
          console.log(this.$store.state.info)
        }
    
      });
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 600px;
  margin-top: 100px;
}
.head {
  padding-top: 25px;
  color: white;
  margin-bottom: 25px;
}
.cont {
  padding-bottom: 50px;
  padding-left: 100px;
  width: 350px;
  overflow: hidden;
  margin: 0 auto;
  background: #333333;
  border: 1px solid #333333;
}
.oneInput {
  width: 119px;
  text-indent: 20px;
  margin-bottom: 30px;
  height: 30px;
}
.code {
  display: inline-block;
  background: white;
  vertical-align: middle;
}
.btn {
  margin-top: 25px;
  width: 200px;
  line-height: 36px;
  background: #16b13a;
  color: white;
  font-size: 16px;
}
p {
  font-size: 10px;
  color: #16b13a;
  line-height: 20px;
}
.oneInput1 {
  width: 250px;
  text-indent: 20px;
  margin-bottom: 30px;
  height: 30px;
}
.newCode {
  margin-left: 40px;
  font-size: 14px;
  color: red;
  cursor: pointer;
}
.seeNo {
  display: inline-block;
  vertical-align: middle;
}
.seeNo p {
  color: red;
}
.warn1{
    width:450px;
    height: 400px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left:455.5px;

}
.warn {
  width: 250px;
    overflow: hidden;
  margin: 0 auto;
  background: white;
  margin-top:100px;

}
h3 {
  text-align: center;
  line-height: 36px;
  background: #16b13a;
  color: white;
}
.confirm {
  line-height: 36px;
  background: #16b13a;
  text-align: center;
  color: white;
  margin-top:50px;
  
}
.errMsg {
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  color: red;
}

</style>
