<template>
    <el-menu
            active-text-color="#14b8a6"
            text-color="#56585d"
            :default-active="1"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
    >
        <el-menu-item :span="4" index="0">LOGO AND TITLE</el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="1">Model Center</el-menu-item>
        <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
// export default {
//     name: "navbar",
//     methods: {
//         handleSelect(key, keyPath) {
//             console.log(key, keyPath);
//         }
//     }
// }
</script>

<style scoped>
.el-menu-item:hover {
    background: #f0fdfa;
}
</style>