<template>
  <el-row class="bg-cyan-600 min-h-screen min-w-screen">
    <el-col :span="15" class="flex items-center justify-center">
      <div class="text-light-900">
        <div class="font-bold text-6xl my-6 text-light-50">Welcome ！</div>
        <div class="text-3xl my-6">欢迎使用 ESVP 电子签名识别与检测平台</div>
      </div>
    </el-col>

    <el-col :span="9"
            class="flex items-center justify-center bg-light-50 flex-col rounded-4xl my-10">
      <!--            标题-->
      <div class="font-bold text-5xl text-cyan-600 my-8">
        REGISTER
      </div>
      <!--            分隔线-->
      <div class="flex items-center justify-center my-2 text-gray-600 space-x-2">
        <!--                            <span class="h-[1px] w-24 bg-gray-200"></span>-->
        <!--                            <span>账号密码登录</span>-->
        <span class="h-[1px] w-[300px] bg-gray-200"></span>
      </div>
      <!--            表单-->
      <div>
        <el-form :model="form" class="my-4 font-serif" label-position="top">
          <el-form-item label="邮  箱">
            <el-input v-model="account.email" :prefix-icon="Message" placeholder="请输入邮箱"/>
          </el-form-item>
          <el-form-item label="密  码">
            <el-input type="password" :prefix-icon="Lock" v-model="account.password"
                      placeholder="请输入密码"/>
          </el-form-item>
          <el-form-item label="重复密码">
            <el-input type="password" :prefix-icon="Lock" v-model="account.repassword"
                      placeholder="请再次输入密码"/>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="account.code" :prefix-icon="ChatLineSquare" placeholder="请输入验证码"
                      class="w-[200px]"/>
            <el-button type="info" @click="sendCode" class="bg-slate-600 text-light-50">发送验证码
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button round type="primary" @click="onSubmit" class="bg-cyan-600 w-[300px]">注 册
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>

import {ChatLineSquare, Lock, Message} from '@element-plus/icons-vue'
import api from '@/api'

export default {
  name: 'Register',
  components: {
    ChatLineSquare,
    Lock,
    Message
  },
  data() {
    return {
      account: {
        email: '',
        password: '',
        repassword: '',
        code: ''
      }
    }
  },
  methods: {
    checkEmail(email) {
      const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      return reg.test(email)
    },
    onSubmit() {
      // 校验邮箱格式
      if (!this.account.email) {
        this.$message({
          message: '邮箱不能为空',
          type: 'error'
        })
        return
      }
      if (!this.checkEmail(this.account.email)) {
        this.$message({
          message: '邮箱格式不正确',
          type: 'error'
        })
        return
      }
      // 校验密码
      if (!this.account.password) {
        this.$message({
          message: '密码不能为空',
          type: 'error'
        })
        return
      }
      if (!this.account.repassword) {
        this.$message({
          message: '请再次输入密码',
          type: 'error'
        })
        return
      }
      if (this.account.password.length < 8) {
        this.$message({
          message: '密码长度不能小于8位',
          type: 'error'
        })
        return
      }
      if (this.account.password !== this.account.repassword) {
        this.$message({
          message: '两次密码不一致',
          type: 'error'
        })
        return
      }
      // 发送注册请求
      api.register(this.account.email, this.account.password, this.account.code).then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.$store.commit('setUserInfo', res.data.user)
          console.log(this.$store.state.userInfo)
          this.$router.push('/authentication')
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })

    },
    sendCode() {
      //校验邮箱格式
      if (!this.account.email) {
        this.$message({
          message: '邮箱不能为空',
          type: 'error'
        })
        return
      }
      if (!this.checkEmail(this.account.email)) {
        this.$message({
          message: '邮箱格式不正确',
          type: 'error'
        })
        return
      }
      api.getRegisterVerificationCode(this.account.email).then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          this.$message({
            message: '验证码发送成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '验证码发送失败',
            type: 'error'
          })
        }
      })
    }
  }
}

</script>


<style scoped>

</style>