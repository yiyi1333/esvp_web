<template>
    <el-container class="home-container">
        <!--           头部-->
        <el-header>
            <div class="nav shadow-xl">
                <el-menu
                        active-text-color="#39706b"
                        text-color="#56585d"
                        :default-active="1"
                        mode="horizontal"
                        :ellipsis="false"
                >
                    <el-menu-item :span="4" index="0">E S V P</el-menu-item>
                    <div class="flex-grow"/>
                    <el-menu-item @click="logout">Log out</el-menu-item>
                    <!--                <el-sub-menu index="2">-->
                    <!--                    <template #title>Workspace</template>-->
                    <!--                    <el-menu-item index="2-1">item one</el-menu-item>-->
                    <!--                    <el-menu-item index="2-2">item two</el-menu-item>-->
                    <!--                    <el-menu-item index="2-3">item three</el-menu-item>-->
                    <!--                    <el-sub-menu index="2-4">-->
                    <!--                        <template #title>item four</template>-->
                    <!--                        <el-menu-item index="2-4-1">item one</el-menu-item>-->
                    <!--                        <el-menu-item index="2-4-2">item two</el-menu-item>-->
                    <!--                        <el-menu-item index="2-4-3">item three</el-menu-item>-->
                    <!--                    </el-sub-menu>-->
                    <!--                </el-sub-menu>-->
                </el-menu>
            </div>

        </el-header>
        <el-container>
            <!--            侧边栏-->
            <el-aside>
                <el-menu
                        active-text-color="#134e4a"
                        background-color="#ffffff"
                        default-active="0"
                        text-color="#56585d"
                        router="true"
                >
                    <div v-for="item in menu">
                        <div v-if="item.children == null">
                            <el-menu-item :index="item.path" :key="item.id" class="text-teal-500">
                                <span>{{ item.title }}</span>
                            </el-menu-item>
                        </div>
                        <div v-else>
                            <el-sub-menu :index="item.path" :key="item.id">
                                <template #title>
                                    <span>{{ item.title }}</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item v-for="(child, index) in item.children" :index="child.path"
                                                  :key="index"
                                                  class="text-teal-500">
                                        <span> {{ child.title }} </span>
                                    </el-menu-item>
                                </el-menu-item-group>
                            </el-sub-menu>
                        </div>
                    </div>
                </el-menu>
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

import asidemenu from "@/components/menu/asidemenu.vue";

export default {
    name: "Personcenter",
    data() {
        return {
            menu: [
                {
                    id: 1,
                    index: '1',
                    title: '主 页',
                    path: '/home'
                },
                {
                    id: 2,
                    index: '2',
                    title: '签名信息',
                    children: [
                        {
                            index: '2-1',
                            title: '真实签名',
                            path: '/geniuneSignature'
                        },
                        {
                            index: '2-2',
                            title: '伪造签名',
                            path: '/forgedSignature'
                        }
                    ]
                },
                {
                    id: 3,
                    index: '3',
                    title: '授权码管理',
                    path: '/authorizationCodeManagement'
                },
                {
                    id: 4,
                    index: '4',
                    title: '验证校验中心',
                    path: '/manualVerification'
                }
            ]
        }
    },
    methods: {
        logout() {
            this.$store.commit('removeUserInfo')
            this.$router.push('/')
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
.home-container {
    height: 100%;
}

.el-container {
    width: 100%;
    max-width: none;
}

.el-header {
    padding: 0;
}

.nav {
    margin: 0;
}

.el-aside {
    padding: 20px;
    padding-top: 40px;
}

.el-main {
    padding: 20px;
}

.el-menu-item:hover {
    background: #f0fdfa;
}

/*.el-menu-item:active {*/
/*    color: #39706b;*/
/*}*/
</style>