<template>
    <el-container class="home-container">
        <!--           头部-->
        <el-header>
            <navbar class="shadow-xl"/>
        </el-header>
        <el-container>
            <!--            侧边栏-->
            <el-aside>
                <asidemenu/>
            </el-aside>
            <!--            主体-->
            <el-main>
                <!--                <modelpage/>-->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import navbar from "@/components/navbar/navbar.vue";
import asidemenu from "@/components/menu/asidemenu.vue";
import modelpage from "@/components/main/modelpage.vue";

export default {
    name: "AppLayout",
    components: {
        navbar,
        asidemenu,
        modelpage
    }
}
</script>

<style scoped>
.home-container {
    height: 100%;
}

.el-container {
    width: 100%;
    max-width: none;
}

.navbar {
    margin: 0;
}

.el-header {
    padding: 0;
}

.el-aside {
    padding: 20px;
    padding-top: 40px;
}

.el-main {
    padding: 20px;
}
</style>