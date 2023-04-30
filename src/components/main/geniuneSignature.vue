<template>
  <!--    上传区-->
    <el-card class="box-card mg-1 p-6">
        <el-text class="text-xl">上传真实签名图像</el-text>
        <el-upload
                class="my-4"
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
    </el-card>
  <!--    表格管理区-->
    <el-card class="my-4 box-card mg-1 p-6">
        <el-table :data="images" style="width: 100%" stripe>
            <el-table-column label="缩略图" width="180">
                <template #default="scope">
                    <el-avatar :src="scope.row.image" shape="square" :size="50"></el-avatar>
                </template>
            </el-table-column>
            <el-table-column label="上传时间" width="200" sortable prop="uploadTime">
                <template #default="scope">
                    <el-tag>{{ scope.row.uploadTime }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="URL" width="400">
                <template #default="scope">
                    <el-link :href="scope.row.image">{{ scope.row.image }}</el-link>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button
                            size="50"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
import {UploadFilled} from "@element-plus/icons-vue";
import api from "@/api/index";

export default {

    name: "geniuneSignature",
    components: {UploadFilled},
    data() {
        return {
            images: [
                // {
                //     image: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F.png',
                //     uploadTime: '2023-04-06 20:00:00'
                // },
                // {
                //     image: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F.png',
                //     uploadTime: '2023-04-07 21:00:00'
                // }
            ]
        }
    },
    methods: {
        uploadSuccess(response) {
            console.log('upload success: ', response[0])
            // 将上传成功的图片写入到数据库中
            api.uploadGeniuneSignature(this.$store.state.userInfo.id, response[0]).then(res => {
                if (res.data.code == 200) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    // 更新图片列表
                    api.getGeniuneSignatureList(this.$store.state.userInfo.id).then(res => {
                        console.log(res.data)
                        this.images = res.data.imageList
                    }).catch(err => {
                        this.$message({
                            message: err,
                            type: 'error'
                        })
                    })
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    })
                }
            }).catch(err => {
                this.$message({
                    message: err,
                    type: 'error'
                })
            })

        },
        handleDelete(index, row) {
            console.log('delete: ', index, row.uploadTime, ' ', row.id)
            api.deleteGeniuneSignature(row.id).then(res => {
                if (res.data.code == 200) {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.images.splice(index, 1)
                } else {
                    this.$message({
                        message: res.data.msg,
                        type: 'error'
                    })
                }
            }).catch(err => {
                this.$message({
                    message: err,
                    type: 'error'
                })
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

        //获取image列表
        api.getGeniuneSignatureList(this.$store.state.userInfo.id).then(res => {
            console.log(res.data)
            this.images = res.data.imageList
        }).catch(err => {
            this.$message({
                message: err,
                type: 'error'
            })
        })
    }
}
</script>

<style scoped>

</style>