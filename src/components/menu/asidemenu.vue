<template>
    <el-menu
            active-text-color="#134e4a"
            background-color="#ffffff"
            default-active="0"
            text-color="#56585d"
            router="true"
    >
        <div v-for="item in menu">
            <div v-if="item.children == null">
                <el-menu-item :index="item.index" :key="item.id" class="text-teal-500">
                    <span>{{ item.title }}</span>
                </el-menu-item>
            </div>
            <div v-else>
                <el-sub-menu :index="item.index" :key="item.id">
                    <template #title>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(child, index) in item.children" :index="child.index" :key="index"
                                      class="text-teal-500">
                            <span> {{ child.title }} </span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </div>
        </div>
    </el-menu>
</template>

<script>
import axios from "axios";
import api from "@/api/index";

export default {
    name: "asidemenu",
    data() {
        return {
            menu: [
                {
                    id: 1,
                    index: '1',
                    title: 'Demo',
                    path: '/demo'
                },
                {
                    id: 2,
                    index: '2',
                    title: 'Answer a question',
                    children: [
                        {
                            index: '2-1',
                            title: 'Reading Comprehension',
                            path: '/page1'
                        },
                        {
                            index: '2-2',
                            title: 'Visual Question Answering',
                            path: '/page1'
                        }
                    ]
                },
                {
                    id: 3,
                    index: '3',
                    title: 'Annotate a sentence',
                    children: [
                        {
                            index: '3-1',
                            title: 'Named Entity Recognition',
                            path: '/page1'
                        },
                        {
                            index: '3-2',
                            title: 'Open Information Extraction',
                            path: '/page1'
                        },
                        {
                            index: '3-3',
                            title: 'Sentiment Analysis',
                            path: '/page1'
                        },
                        {
                            index: '3-4',
                            title: 'Dependency Parsing',
                            path: '/page1'
                        },
                        {
                            index: '3-5',
                            title: 'Constituency Parsing',
                            path: '/page1'
                        },
                        {
                            index: '3-6',
                            title: 'Semantic Role Labeling',
                            path: '/page1'
                        }
                    ]
                },
                {
                    id: 4,
                    index: '4',
                    title: 'Annotate a passage',
                    children: [
                        {
                            index: '4-1',
                            title: 'Coreference Resolution',
                            path: '/page1'
                        }
                    ]
                },
                {
                    id: 5,
                    index: '5',
                    title: 'Generate a passage',
                    children: [
                        {
                            index: '5-1',
                            title: 'Language Modeling',
                            path: '/page1'
                        },
                        {
                            index: '5-2',
                            title: 'Masked Language Modeling',
                            path: '/page1'
                        }
                    ]
                },
                {
                    id: 6,
                    index: '6',
                    title: 'Compare two sentences',
                    children: [
                        {
                            index: '6-1',
                            title: 'Textual Entailment',
                            path: '/page1'
                        },
                        {
                            index: '6-2',
                            title: 'Evaluate Reading Comprehension',
                            path: '/page1'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        /*        handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }*/
    },
    created() {
        const result = api.demo().then(res => {
            console.log(res.data)
        })
    }
}
</script>

<style scoped>
.el-menu-item:hover {
    background: #f0fdfa;
}
</style>