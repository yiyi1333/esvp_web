<template>
    <el-card class="box-card mg-1 p-6">
        <div>
            <el-text class="text-xl text-dark-900 font-bold">验证授权码</el-text>
        </div>

        <div class="mt-2 mb-2">
            <el-text class="">您所生成的验证授权码显示在下方，请不要随意将授权码发送给任何人。</el-text>
        </div>

        <div>
            <el-table :data="authorizations" style="width: 100%">
                <el-table-column prop="name" label="标签" width="180">
                </el-table-column>
                <el-table-column prop="key" label="授权码" width="180">
                    <template #default="scope">
                        <el-tag>{{ scope.row.key }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="createDate" label="创建时间">
                </el-table-column>
                <el-table-column prop="lastDate" label="过期时间">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
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

            <div>
                <el-button type="primary" class="mt-4" @click="dialogFormVisible = true">+ 创建授权码</el-button>
            </div>
            <el-dialog v-model="dialogFormVisible" title="创建授权码">
                <el-form :model="form">
                    <el-form-item label="授权码标签">
                        <el-input v-model="form.name" autocomplete="off"/>
                    </el-form-item>
                    <el-form-item label="授权码有效期">
                        <el-select v-model="form.validityTime" placeholder="请选择">
                            <el-option label="7天" value="7"></el-option>
                            <el-option label="14天" value="14"></el-option>
                            <el-option label="30天" value="30"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">
                      确认创建
                    </el-button>
                  </span>
                </template>
            </el-dialog>
        </div>

    </el-card>
</template>

<script>
export default {
    name: "authorizationCodeManagement",
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                validityTime: '',
            },
            authorizations: [
                {
                    name: "授权码1",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码2",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码3",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码4",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码5",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码6",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码7",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                },
                {
                    name: "授权码8",
                    key: "1234567890",
                    createDate: "2021-01-01",
                    lastDate: "2021-01-01",
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>