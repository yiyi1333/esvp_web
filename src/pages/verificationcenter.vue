<template>
    <div class="min-w-full min-h-full">
        <el-card class="m-6 p-6 box-card">
            <el-text class="text-xl">上传需要验证的签名图像</el-text>
            <el-upload
                    class="my-4"
                    :show-file-list="false"
                    drag
                    action="http://127.0.0.1:8080/esvp/oss/uploads"
                    method="post"
                    multiple
                    :on-success="uploadSuccess"
            >
                <el-icon class="el-icon--upload">
                    <upload-filled/>
                </el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
            <el-form class="pt-3">
                <el-form-item label="图片链接">
                    <el-input disabled="disabled" v-model="image"></el-input>
                </el-form-item>
                <el-form-item label="授权码">
                    <el-input v-model="code" placeholder="请输入授权码"></el-input>
                </el-form-item>
                <el-button round type="primary" @click="verificationHandle" class="bg-cyan-600 w-[80px]"
                           :loading="button.loading" :disabled="button.loading">{{ button.context }}
                </el-button>
            </el-form>
        </el-card>
        <!--        验证结果展示区-->
        <div class="flex -mt-6" style="width: 100%; justify-content: space-around" v-show="resultShow">
            <el-card class="m-6 p-12 box-card flex-col ">
                <div>
                    <el-image style="width: 8rem"
                              src="https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/sig.svg"/>
                </div>
                <el-text>签名目标识别置信度</el-text>
                <br>
                <p class="text-center">{{ result.recognitionRate }} %</p>
            </el-card>
            <el-card class="m-6 p-12 box-card flex">
                <div>
                    <el-image style="width: 8rem"
                              src="https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/identity.svg"/>
                </div>
                <el-text>本人签名检测置信度</el-text>
                <br>
                <p class="text-center">{{ result.realRate }} %</p>
            </el-card>
            <el-card class="m-6 p-12 box-card flex flex-grow">
                <!--                <div>-->
                <!--                    <el-image style="width: 6rem"-->
                <!--                              src="https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/report.svg"/>-->
                <!--                </div>-->
                <p class="text-2xl">检测报告</p>
                <br>
                <p class="italic text-base font-light text-gray-500">{{ result.resultContext }}</p>
                <el-button round type="primary" @click="applyManualVerification"
                           class="bg-cyan-600 w-[160px] mt-14 border-2 border-cyan-700 shadow-gray-500 shadow-lg">
                    申请人工复核
                </el-button>
            </el-card>
        </div>

    </div>
</template>

<script>
import {UploadFilled} from "@element-plus/icons-vue";
import api from "@/api/index";

export default {
    name: "Verificationcenter",
    components: {UploadFilled},
    data() {
        return {
            image: '',
            code: '',
            button: {
                loading: false,
                context: '验证'
            },
            result: '',
            resultShow: false
        }
    },
    methods: {
        uploadSuccess(response) {
            console.log(response)
            this.image = response[0]
            this.$message({
                message: '上传成功',
                type: 'success'
            })
        },
        verificationHandle() {
            console.log('验证' + 'url: ' + this.image + '\n' + 'code: ' + this.code)
            // 让按钮失效, 并将文字修改为验证中
            this.button.loading = true
            this.button.context = '验证中'
            api.verification(this.image, this.code).then(res => {
                // this.result = res.data
                console.log(res.data)
                if (res.data.code == 200) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.result = res.data
                    // result.recognitionRate保留四位小数，并转化为百分数
                    this.result.recognitionRate = (this.result.recognitionRate * 100).toFixed(4)
                    this.result.realRate = (this.result.realRate * 100).toFixed(4)
                    this.resultShow = true
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    })
                    this.result = res.data
                    // result.recognitionRate保留四位小数，并转化为百分数
                    this.result.recognitionRate = (this.result.recognitionRate * 100).toFixed(4)
                    this.result.realRate = (this.result.realRate * 100).toFixed(4)
                    this.resultShow = true
                }
                this.button.loading = false
                this.button.context = '验证'
            })
        }
    },
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

</style>