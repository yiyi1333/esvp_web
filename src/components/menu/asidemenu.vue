<template>
    <el-menu
            active-text-color="#134e4a"
            background-color="#ffffff"
            default-active="0"
            text-color="#56585d"
            @open="handleOpen"
            @close="handleClose"
    >
        <el-menu-item index="1" class="text-teal-500">
            <span>Demo</span>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <span>Answer a question</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1" class="text-teal-500">Reading Comprehension</el-menu-item>
                <el-menu-item index="2-2" class="text-teal-500">Visual Question Answering</el-menu-item>
            </el-menu-item-group>
            <!--            <el-menu-item-group title="Group Two">-->
            <!--                <el-menu-item index="1-3"></el-menu-item>-->
            <!--            </el-menu-item-group>-->
            <!--            <el-sub-menu index="1-4">-->
            <!--                <template #title>item four</template>-->
            <!--                <el-menu-item index="1-4-1">item one</el-menu-item>-->
            <!--            </el-sub-menu>-->
        </el-sub-menu>
        <el-sub-menu index="3">
            <!--            <el-icon>-->
            <!--                <icon-menu/>-->
            <!--            </el-icon>-->
            <template #title>
                <span>Annotate a sentence</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="3-1" class="text-teal-500">Named Entity Recognition</el-menu-item>
                <el-menu-item index="3-2" class="text-teal-500">Open Information Extraction</el-menu-item>
                <el-menu-item index="3-3" class="text-teal-500">Sentiment Analysis</el-menu-item>
                <el-menu-item index="3-4" class="text-teal-500">Dependency Parsing</el-menu-item>
                <el-menu-item index="3-5" class="text-teal-500">Constituency Parsing</el-menu-item>
                <el-menu-item index="3-6" class="text-teal-500">Semantic Role Labeling</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
            <!--            <el-icon>-->
            <!--                <icon-menu/>-->
            <!--            </el-icon>-->
            <template #title>
                <span>Annotate a passage</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="4-1" class="text-teal-500">Coreference Resolution</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
            <!--            <el-icon>-->
            <!--                <icon-menu/>-->
            <!--            </el-icon>-->
            <template #title>
                <span>Generate a passage</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="5-1" class="text-teal-500">Language Modeling</el-menu-item>
                <el-menu-item index="5-2" class="text-teal-500">Masked Language Modeling</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="6">
            <template #title>
                <span>Compare two sentences</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="6-1" class="text-teal-500">Textual Entailment</el-menu-item>
                <el-menu-item index="6-2" class="text-teal-500">Evaluate Reading Comprehension</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <!--        <el-menu-item index="3" disabled>-->
        <!--            &lt;!&ndash;            <el-icon>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <document/>&ndash;&gt;-->
        <!--            &lt;!&ndash;            </el-icon>&ndash;&gt;-->
        <!--            <span>Navigator Three</span>-->
        <!--        </el-menu-item>-->
        <!--        <el-menu-item index="4" disabled>-->
        <!--            &lt;!&ndash;            <el-icon>&ndash;&gt;-->
        <!--            &lt;!&ndash;                <setting/>&ndash;&gt;-->
        <!--            &lt;!&ndash;            </el-icon>&ndash;&gt;-->
        <!--            <span>Navigator Four</span>-->
        <!--        </el-menu-item>-->
    </el-menu>
</template>

<script>
export default {
    name: "asidemenu",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
.el-menu-item:hover {
    background: #f0fdfa;
}
</style>