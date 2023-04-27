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
            <!--                    <template #tip>-->
            <!--                        <div class="el-upload__tip">-->
            <!--                            jpg/png files with a size less than 500kb-->
            <!--                        </div>-->
            <!--                    </template>-->
        </el-upload>
    </el-card>
  <!--    表格管理区-->
    <el-card class="my-4 box-card mg-1 p-6">
        <el-table :data="images" style="width: 100%" stripe>
            <el-table-column label="缩略图" width="180">
                <template #default="scope">
                    <el-avatar :src="scope.row.url" shape="square" :size="50"></el-avatar>
                </template>
            </el-table-column>
            <el-table-column label="上传时间" width="200" sortable prop="uploadTime">
                <template #default="scope">
                    <el-tag>{{ scope.row.uploadTime }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="URL" width="400">
                <template #default="scope">
                    <el-link :href="scope.row.url">{{ scope.row.url }}</el-link>
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

export default {
    name: "geniuneSignature",
    components: {UploadFilled},
    data() {
        return {
            images: [
                {
                    url: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F.png',
                    uploadTime: '2023-04-06 20:00:00'
                },
                {
                    url: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/%E7%94%A8%E6%88%B7%E5%A4%B4%E5%83%8F.png',
                    uploadTime: '2023-04-07 21:00:00'
                }
            ]
        }
    },
    methods: {
        uploadSuccess(response) {
            console.log('upload success: ', response)
        },
        handleDelete(index, row) {
            console.log('delete: ', index, row.uploadTime)
        }
    }
}
</script>

<style scoped>

</style>