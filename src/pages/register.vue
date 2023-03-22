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

<script setup>

import {reactive} from 'vue'
import {ChatLineSquare, Lock, Message} from '@element-plus/icons-vue'

// do not use same name with ref
const account = reactive({
    email: '',
    password: '',
    repassword: '',
    code: ''
})

const onSubmit = () => {
    console.log('submit!')
}
const sendCode = () => {
    console.log('send code!')
}
</script>
<script>
export default {
    name: "login"
}
</script>


<style scoped>

</style>