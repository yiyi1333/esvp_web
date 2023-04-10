<template>
    <el-row class="bg-cyan-600 min-h-screen min-w-screen">
        <el-col :span="12">
            <el-card shadow="always" class="bg-sky-50 flex items-center justify-center">
                <img src="../assets/safe.svg" class="image"/>
                <div style="padding: 14px" class="items-center justify-center">
                    <span class="font-bold text-xl">验证中心</span>
                </div>
            </el-card>
        </el-col>
        <el-col shadow="always" :span="12" class="items-center justify-center">
            <el-card shadow="hover" class="bg-sky-50 flex items-center justify-center">
                <img src="../assets/self.svg" class="image"/>
                <div style="padding: 14px" class="items-center justify-center">
                    <span class="font-bold text-xl">个人中心</span>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped>

.el-card {
    border-radius: 10px;
    margin: 20%;
    padding: 10%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}


/*让span标签中的文字居中*/
.el-card span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    margin: 6%;
}


</style>