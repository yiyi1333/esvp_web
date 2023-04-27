<template>
    <el-card class="box-card mg-1 ">
        <!--        头像-->
        <div class="flex flex-row">
            <el-avatar :size="70" :src="account.head"></el-avatar>
            <p class="ml-4 text-xl align-middle antialiased username">zhengzhanyi@outlook.com</p>
        </div>
        <!--        个人信息-->
        <div class="flex flex-row">
            <el-form :model="form" class="space-y-6 my-8 font-serif " label-position="top">
                <el-form-item label="用户ID">
                    <el-input v-model="account.id" disabled="true"/>
                </el-form-item>
                <el-form-item label="邮 箱">
                    <el-input v-model="account.email" disabled="true"/>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="account.phone" placeholder="请输入手机号"/>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input v-model="account.idcard" disabled="true" placeholder="请输入身份证号"/>
                </el-form-item>
                <el-form-item label="真实姓名">
                    <el-input v-model="account.realname" disabled="true" placeholder="请输入真实姓名"/>
                </el-form-item>
                <div class="flex space-x-20">
                    <el-form-item label="生日">
                        <el-date-picker
                                v-model="account.birthday"
                                type="date"
                                placeholder="选择日期"
                                size="default"
                        />
                    </el-form-item>
                    <el-form-item label="性别">
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
                </div>
                <el-form-item>
                    <el-button round type="primary" @click="saveHandle" class="bg-cyan-600 w-[80px]">保 存
                    </el-button>
                    <el-button round type="primary" @click="cancelHandle" class="border-gray-400 bg-gray-300 w-[80px]">取
                        消
                    </el-button>
                </el-form-item>

                <!--                <el-form-item>-->
                <!--                    <el-button round type="primary" @click="onSubmit" class="bg-cyan-600 w-[300px]">登 录-->
                <!--                    </el-button>-->
                <!--                </el-form-item>-->
            </el-form>
        </div>
    </el-card>
</template>

<script>
import api from '@/api'

export default {
    name: "home",
    data() {
        return {
            // 页面启动时从store中读取数据
            account: {}
        }
    },
    methods: {
        // 保存按钮
        saveHandle() {
            console.log('保存按钮' + this.account.phone)
            // 保存到store中
            const userInfo = JSON.parse(JSON.stringify(this.$store.state.userInfo))
            this.$store.commit('setUserInfo', userInfo)
            // 保存到数据库中
            api.saveInfo(this.account).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    })
                }
            })
        },
        // 取消按钮
        cancelHandle() {
            console.log('取消按钮' + this.$store.state.userInfo.phone)
            // 从store中读取数据
            this.account = JSON.parse(JSON.stringify(this.$store.state.userInfo))
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


        console.log('store中的数据:' + this.$store.state.userInfo.phone)
        this.account = JSON.parse(JSON.stringify(this.$store.state.userInfo))
        if (this.account.sex == 1) {
            this.account.sex = 'true'
        } else {
            this.account.sex = 'false'
        }

    }
}
</script>

<style scoped>
/*让p垂直方向居中*/
.username {
    line-height: 60px;
}

.el-form {
    width: 100%;
}

</style>