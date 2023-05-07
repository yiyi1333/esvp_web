<template>

    <el-card class="m-6 p-6 box-card">
        <el-tabs color="#14b8a6" v-model="selectedTab" @tab-click="handleClick">
            <el-tab-pane label="待审核" name="waitingReview">
                <el-table :data="waitingReviewList" style="width: 100%" stripe>
                    <el-table-column label="ID" width="60">
                        <template #default="scope">
                            <el-tag>{{ scope.row.userId }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="缩略图" width="100">
                        <template #default="scope">
                            <el-image :src="scope.row.imageUrl" shape="square" :size="50"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" sortable prop="uploadTime" width="180">
                        <template #default="scope">
                            <el-tag>{{ scope.row.createTime }}</el-tag>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="URL" width="240">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-link :href="scope.row.imageUrl">{{ scope.row.image }}</el-link>-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                    <el-table-column label="AI验证结论" width="400">
                        <template #default="scope">
                            <p>{{ scope.row.resultContext }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="审核操作" width="500">
                        <template #default="scope">
                            <el-button type="default" @click="handleReview(scope.$index, scope.row)">
                                预览
                            </el-button>
                            <el-button
                                    type="primary"
                                    @click="handleAcceptGeniune(scope.$index, scope.row)">
                                正样本
                            </el-button>
                            <el-button
                                    type="primary"
                                    @click="handleAcceptForgery(scope.$index, scope.row)">
                                负样本
                            </el-button>
                            <el-button

                                    type="danger"
                                    @click="handleReject(scope.$index, scope.row)"
                            >拒绝
                            </el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已接受的正样本" name="acceptedGeniune">
                <el-table :data="acceptGeniuneList" style="width: 100%" stripe>
                    <el-table-column label="ID" width="60">
                        <template #default="scope">
                            <el-tag>{{ scope.row.userId }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="缩略图" width="100">
                        <template #default="scope">
                            <el-image :src="scope.row.imageUrl" shape="square" :size="50"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" sortable prop="uploadTime" width="180">
                        <template #default="scope">
                            <el-tag>{{ scope.row.createTime }}</el-tag>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="URL" width="240">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-link :href="scope.row.imageUrl">{{ scope.row.image }}</el-link>-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                    <el-table-column label="AI验证结论" width="400">
                        <template #default="scope">
                            <p>{{ scope.row.resultContext }}</p>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="审核操作" width="500">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptGeniune(scope.$index, scope.row)">-->
                    <!--                                正样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptForgery(scope.$index, scope.row)">-->
                    <!--                                负样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->

                    <!--                                    type="danger"-->
                    <!--                                    @click="handleReject(scope.$index, scope.row)"-->
                    <!--                            >拒绝-->
                    <!--                            </el-button-->
                    <!--                            >-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已接受的负样本" name="acceptedForgery">
                <el-table :data="acceptForgeryList" style="width: 100%" stripe>
                    <el-table-column label="ID" width="60">
                        <template #default="scope">
                            <el-tag>{{ scope.row.userId }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="缩略图" width="100">
                        <template #default="scope">
                            <el-image :src="scope.row.imageUrl" shape="square" :size="50"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" sortable prop="uploadTime" width="180">
                        <template #default="scope">
                            <el-tag>{{ scope.row.createTime }}</el-tag>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="URL" width="240">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-link :href="scope.row.imageUrl">{{ scope.row.image }}</el-link>-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                    <el-table-column label="AI验证结论" width="400">
                        <template #default="scope">
                            <p>{{ scope.row.resultContext }}</p>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="审核操作" width="500">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptGeniune(scope.$index, scope.row)">-->
                    <!--                                正样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptForgery(scope.$index, scope.row)">-->
                    <!--                                负样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->

                    <!--                                    type="danger"-->
                    <!--                                    @click="handleReject(scope.$index, scope.row)"-->
                    <!--                            >拒绝-->
                    <!--                            </el-button-->
                    <!--                            >-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="已拒绝" name="rejected">
                <el-table :data="rejectList" style="width: 100%" stripe>
                    <el-table-column label="ID" width="60">
                        <template #default="scope">
                            <el-tag>{{ scope.row.userId }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="缩略图" width="100">
                        <template #default="scope">
                            <el-image :src="scope.row.imageUrl" shape="square" :size="50"></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column label="申请时间" sortable prop="uploadTime" width="180">
                        <template #default="scope">
                            <el-tag>{{ scope.row.createTime }}</el-tag>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="URL" width="240">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-link :href="scope.row.imageUrl">{{ scope.row.image }}</el-link>-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                    <el-table-column label="AI验证结论" width="400">
                        <template #default="scope">
                            <p>{{ scope.row.resultContext }}</p>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column label="审核操作" width="500">-->
                    <!--                        <template #default="scope">-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptGeniune(scope.$index, scope.row)">-->
                    <!--                                正样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->
                    <!--                                    type="primary"-->
                    <!--                                    @click="handleAcceptForgery(scope.$index, scope.row)">-->
                    <!--                                负样本-->
                    <!--                            </el-button>-->
                    <!--                            <el-button-->

                    <!--                                    type="danger"-->
                    <!--                                    @click="handleReject(scope.$index, scope.row)"-->
                    <!--                            >拒绝-->
                    <!--                            </el-button-->
                    <!--                            >-->
                    <!--                        </template>-->
                    <!--                    </el-table-column>-->
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
import api from "@/api/index";

export default {
    name: 'manualVerification',
    data() {
        return {
            selectedTab: 'waitingReview',
            manualVerificationList: [],
            waitingReviewList: [],
            acceptGeniuneList: [],
            acceptForgeryList: [],
            rejectList: []
        }
    },
    methods: {
        handleAcceptGeniune(index, row) {
            console.log(index, row)
            this.acceptGeniuneList.push(row)
            this.waitingReviewList.splice(index, 1)
        },
        handleAcceptForgery(index, row) {
            console.log(index, row)
            this.acceptForgeryList.push(row)
            this.waitingReviewList.splice(index, 1)
        },
        handleReject(index, row) {
            console.log(index, row)
            this.rejectList.push(row)
            this.waitingReviewList.splice(index, 1)
        },
        handleReview() {
            console.log(index, row)
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

        api.manualVerificationList(this.$store.state.userInfo.id).then(res => {
            console.log(res.data)
            if (res.data.code == 200) {
                this.manualVerificationList = res.data.manualVerificationList
                for (let i = 0; i < this.manualVerificationList.length; i++) {
                    if (this.manualVerificationList[i].status == '待审核') {
                        this.waitingReviewList.push(this.manualVerificationList[i])
                    } else if (this.manualVerificationList[i].status == '正样本') {
                        this.acceptGeniuneList.push(this.manualVerificationList[i])
                    } else if (this.manualVerificationList[i].result == '负样本') {
                        this.acceptForgeryList.push(this.manualVerificationList[i])
                    } else if (this.manualVerificationList[i].result == '已拒绝') {
                        this.rejectList.push(this.manualVerificationList[i])
                    }
                }
            }
        })
    }
}
</script>

<style scoped>

</style>