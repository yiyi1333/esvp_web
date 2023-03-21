<template>
    <div>
        <el-result class="page404" icon="warning" title="404" sub-title="Please follow the instructions">
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
            </template>
        </el-result>
    </div>
</template>

<script>
export default {
    name: "404"
}
</script>

<style scoped>
/*将组件居中*/
/*.el-result {*/
/*  margin: 0 auto;*/
/*  !*  黑色背景*!*/
/*  background-color: #000;*/
/*}*/
</style>