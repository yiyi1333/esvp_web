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
      <div class="font-bold text-3xl text-cyan-600 my-8">
        AUTHENTICATION
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
          <el-form-item label="真实姓名">
            <el-input v-model="account.realname" :prefix-icon="User" placeholder="请输入真实姓名"/>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input :prefix-icon="Postcard" v-model="account.idcard"
                      placeholder="请输入身份证号"/>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input :prefix-icon="Iphone" v-model="account.phone"
                      placeholder="请输入手机号码"/>
          </el-form-item>
          <el-form-item label="性  别">
            <el-radio-group v-model="account.sex" class="ml-4">
              <el-radio label="true" size="large">
                <el-icon>
                  <Male/>
                </el-icon>
                男
              </el-radio>
              <el-radio label="false" size="large">
                <el-icon>
                  <Female/>
                </el-icon>
                女
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生年月">
            <el-date-picker
                v-model="account.birthday"
                type="date"
                placeholder="选择日期"
                size="default"
            />
          </el-form-item>
          <el-form-item>
            <el-button round type="primary" @click="onSubmit" class="bg-cyan-600 w-[300px]">提 交
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {reactive} from 'vue'
import {ChatLineSquare, Female, Iphone, Lock, Male, Message, Postcard, User} from '@element-plus/icons-vue'
import api from '@/api'

export default {
  name: 'Authentication',
  computed: {
    Postcard() {
      return Postcard
    },
    User() {
      return User
    },
    Iphone() {
      return Iphone
    },
    Message() {
      return Message
    }
  },
  components: {
    Female,
    Male,
    ChatLineSquare,
    Lock,
    Message
  },
  data() {
    return {
      account: {
        realname: '',
        idcard: '',
        phone: '',
        birthday: '',
        sex: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.account)
      console.log('store: ' + JSON.stringify(this.$store.state))
      console.log('store: ' + JSON.stringify(this.$store.state.userInfo))
      console.log('store: ' + JSON.stringify(this.$store.state.userInfo.id))
      api.authentication(JSON.stringify(this.$store.state.userInfo.id), this.account.realname, this.account.idcard, this.account.phone, this.account.sex, this.account.birthday).then(res => {
        console.log(res)
        if (res.data.code == 200) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.$router.push('/')
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    }
  },
  // 页面启动时从store中读取数据
  created() {
    // 存储store中的数据
    // 页面刷新监视器
    window.addEventListener('beforeunload', () => {
      console.log('页面刷新')
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
  }
}
</script>

<style scoped>
.el-date-editor {
  width: 100%;
}
</style>