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
                <el-table-column prop="code" label="授权码" width="180">
                    <template #default="scope">
                        <el-tag>{{ scope.row.code }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间">
                </el-table-column>
                <el-table-column prop="expireTime" label="过期时间">
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
                        <el-select v-model="form.day" placeholder="请选择">
                            <el-option label="7天" value="7"></el-option>
                            <el-option label="14天" value="14"></el-option>
                            <el-option label="30天" value="30"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="handleCreate">
                      确认创建
                    </el-button>
                  </span>
                </template>
            </el-dialog>
        </div>

    </el-card>
</template>

<script>
import api from "@/api/index";

export default {
    name: "authorizationCodeManagement",
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                day: ''
            },
            authorizations: [
                /*{
                    name: "授权码1",
                    code: "1234567890",
                    createTime: "2021-01-01",
                    expireTime: "2021-01-01",
                },
                {
                    name: "授权码2",
                    code: "1234567890",
                    createTime: "2021-01-01",
                    expireTime: "2021-01-01",
                },
                {
                    name: "授权码3",
                    code: "1234567890",
                    createTime: "2021-01-01",
                    expireTime: "2021-01-01",
                },
                {
                    name: "授权码4",
                    code: "1234567890",
                    createTime: "2021-01-01",
                    expireTime: "2021-01-01",
                },
                {
                    name: "授权码5",
                    code: "1234567890",
                    createTime: "2021-01-01",
                    expireTime: "2021-01-01",
                }*/
            ]
        }
    },
    methods: {
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该授权码, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                /*                this.authorizations.splice(index, 1);
                                this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });*/
                console.log(row.id)
                // 删除授权码
                api.deleteAuthorizationCode(row.id).then(res => {
                    console.log(res)
                    if (res.data.code == 200) {
                        this.$message({
                            type: 'success',
                            message: res.data.msg
                        });
                        this.authorizations.splice(index, 1);
                    } else {
                        this.$message({
                            type: 'error',
                            message: res.data.msg
                        });
                    }
                }).catch(err => {
                    console.log(err)
                    this.$message({
                        type: 'error',
                        message: '异常错误'
                    });
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handleCreate() {
            console.log(this.form)
            api.addAuthorizationCode(this.$store.state.userInfo.id, this.form.name, this.form.day).then(res => {
                console.log(res)
                if (res.data.code == 200) {
                    this.$message({
                        type: 'success',
                        message: res.data.msg
                    });

                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.msg
                    });
                }
            }).catch(err => {
                console.log(err)
                this.$message({
                    type: 'error',
                    message: '异常错误'
                });
            })
            this.dialogFormVisible = false;
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

        // 获取授权码列表
        api.getAuthorizationCodeList(this.$store.state.userInfo.id).then(res => {
            console.log(res)
            if (res.data.code == 200) {
                this.authorizations = res.data.authorizationCodeList
            } else {
                this.$message({
                    type: 'error',
                    message: res.data.msg
                });
            }
        }).catch(err => {
            console.log(err)
            this.$message({
                type: 'error',
                message: '异常错误'
            });
        })
    }
}
</script>

<style scoped>

</style>