<template>
  <div class="loginContainer">
    <div class="login_inner">
      <a href="javascript;:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">短信登录 </a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">密码登录 </a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <div class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification" :disabled="!rightPhone"
                      :class="{rightPhone:rightPhone}" @click.prevent="getCode">
                {{ computeTime > 0 ? `已发送${computeTime}s` : '获取验证码' }}
              </button>
            </div>
            <div class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="captcha">
            </div>

            <span class="login_hint">
                温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
            </span>

          </div>
          <div :class="{on:!loginWay}">
            <div>
              <div class="login_message">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="name">
              </div>
              <div class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码" v-model="pwd" v-if="showPwd">
                <input type="pwd" maxlength="8" placeholder="密码" v-model="pwd" v-else>
                <div class="switch_button " :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle " :class="{right:showPwd}"></div>
                  <span class="switch_text">{{ showPwd ? 'abc' : '...' }}</span>
                </div>
              </div>
              <div class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="./images/captcha.svg"
                     @click.prevent="getCaptcha" ref="captcha">
              </div>
            </div>


          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'
import {MessageBox, Toast} from 'mint-ui'

export default {
  data() {
    return {
      showPwd: false,
      loginWay: false,
      computeTime: 0,
      phone: '',
      pwd: '',
      captcha: '',
      alertText: '',
      alertShow: false,
      name:''

    }
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {

    async getCode() {

      if (!this.computeTime) {
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      const result = await reqSendCode(this.phone);
      if (result.code === 1) {
        MessageBox.alert(result.msg, '提示')
        if (this.computeTime) {

          this.computeTime = 0;
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }
      }


    },
    getCaptcha() {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    },
    async login() {
      let result
      if (this.loginWay) {
        const {rightPhone, phone, code} = this
        if (!rightPhone) {
          MessageBox('手机号不正确', '')
          return
        }
        if (!/^\d{6}$/.test(code)) {
          MessageBox('验证必须是6位数字', '')
          return
        }
        result = await reqSmsLogin(phone, code)
      } else {
        const {name, pwd, captcha} = this
        if (!name) {
          MessageBox('用户名必须指定', '')
          return
        }else if(!pwd){
          MessageBox('密码必须指定', '')
          return
        }else if(!captcha){
          MessageBox('验证码必须指定', '')
          return
        }
        result = await reqPwdLogin({name, pwd, captcha})

        if(this.computeTime){
          this.computeTime===0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }
        if (result.code===0){
          const user=result.data
          this.$store.dispatch('recordUser',user)

          this.$router.replace('/profile')
        }else{
          this.getCaptcha()
          MessageBox(result.msg, '')

        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.loginContainer
  width 100%
  height: 100%
  background-color #fff

  .login_inner
    width 80%
    margin 0 auto
    padding-top 60px

    .go_back
      position absolute
      top 10px
      left 20px
      width 30px
      height: 30px

      .iconfont
        font-size 20px
        color black

    .login_header
      .login_logo
        font-size 40px
        color #02a774
        font-weight bold
        text-align center

      .login_header_title
        padding-top 40px
        text-align center

        > a
          color #333
          font-size 14px
          padding-bottom 4px

          &:first-child
            margin-right 40px

          &.on
            color #02a774
            border-bottom 2px solid #02a774
            font-weight 700

    .login_content
      > form
        > div
          display none

          &.on
            display block

          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            font 400 14px
            outline 0

            &:focus
              border 1px solid red

          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff

            .get_verification
              position absolute
              background transparent
              top 50%
              transform translateY(-50%)
              border 0
              color #ccc
              right 10px
              font-size 14px

              &.right_phone
                color black

          .login_verification
            height 48px
            margin-top 16px
            font-size 14px
            background #fff
            position relative

            .switch_button
              position absolute
              right 10px
              top 50%
              font-size 12px
              color #fff
              padding 0 6px
              width 30px
              height: 16px
              line-height 16px
              border-radius 8px
              border 1px solid #ddd
              transform translateY(-50%)
              transition background-color 0.3s, border-color 0.3s

              &.off
                background #fff

                .switch_text
                  float right
                  color #ddd

              &.on
                background #02a774

              .switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, .1)
                transition transform 0.3s

                &.right
                  transform translateX(30px)


          .login_hint
            display block
            margin-top 20px
            color #999
            font-size 14px
            line-height 20px

            > a
              color #02a774

        .login_submit
          display block
          width 100%
          height 42px
          background #02a774
          color #fff
          margin-top 30px
          text-align center
          font-size 16px
          border 0
          border-radius 4px

      .about_us
        font-size 12px
        margin-top 20px
        display block
        text-align center
        color #999


</style>
