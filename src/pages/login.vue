<template>
    <el-row class="bg-cyan-600 min-h-screen min-w-screen">
        <el-col :span="15" class="flex items-center justify-center">
            <div class="text-light-900">
                <div class="font-bold text-6xl my-6 text-light-0">Welcome ！</div>
                <div class="text-3xl my-6">欢迎使用 ESVP 电子签名识别与检测平台</div>
            </div>
        </el-col>

        <el-col :span="9"
                class="flex items-center justify-center bg-light-50 flex-col rounded-4xl my-10">
            <!--            标题-->
            <div class="font-bold text-5xl text-cyan-600 my-8">
                LOGIN
            </div>
            <!--            分隔线-->
            <div class="flex items-center justify-center my-2 text-gray-600 space-x-2">
                <!--                            <span class="h-[1px] w-24 bg-gray-200"></span>-->
                <!--                            <span>账号密码登录</span>-->
                <span class="h-[1px] w-[300px] bg-gray-200"></span>
            </div>
            <!--            表单-->
            <div>
                <el-form :model="form" class="space-y-6 my-8 font-serif" label-position="top">
                    <el-form-item label="账  户">
                        <el-input v-model="account.username" placeholder="请输入邮箱"/>
                    </el-form-item>
                    <el-form-item label="密  码">
                        <el-input v-model="account.password" placeholder="请输入密码"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button round type="primary" @click="onSubmit" class="bg-cyan-600 w-[300px]">登 录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>

import {reactive} from 'vue'

// do not use same name with ref
const account = reactive({
    username: '',
    password: ''
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
<script>
export default {
    name: "login"
}
</script>


<style scoped>

</style>