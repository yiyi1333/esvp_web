<template>
    <el-menu
            active-text-color="#134e4a"
            background-color="#ffffff"
            default-active="0"
            text-color="#56585d"
    >
        <div v-for="item in menu">
            <div v-if="item.children == null">
                <el-menu-item :index="item.index" class="text-teal-500">
                    <span>{{ item.title }}</span>
                </el-menu-item>
            </div>
            <div v-else>
                <el-sub-menu :index="item.index">
                    <template #title>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="child in item.children" :index="child.index" class="text-teal-500">
                            {{ child.title }}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </div>
        </div>
    </el-menu>
</template>

<script>
import axios from "axios";


export default {
    name: "asidemenu",
    data() {
        return {
            menu: [
                {
                    index: '1',
                    title: 'Demo'
                },
                {
                    index: '2',
                    title: 'Answer a question',
                    children: [
                        {
                            index: '2-1',
                            title: 'Reading Comprehension'
                        },
                        {
                            index: '2-2',
                            title: 'Visual Question Answering'
                        }
                    ]
                },
                {
                    index: '3',
                    title: 'Annotate a sentence',
                    children: [
                        {
                            index: '3-1',
                            title: 'Named Entity Recognition'
                        },
                        {
                            index: '3-2',
                            title: 'Open Information Extraction'
                        },
                        {
                            index: '3-3',
                            title: 'Sentiment Analysis'
                        },
                        {
                            index: '3-4',
                            title: 'Dependency Parsing'
                        },
                        {
                            index: '3-5',
                            title: 'Constituency Parsing'
                        },
                        {
                            index: '3-6',
                            title: 'Semantic Role Labeling'
                        }
                    ]
                },
                {
                    index: '4',
                    title: 'Annotate a passage',
                    children: [
                        {
                            index: '4-1',
                            title: 'Coreference Resolution'
                        }
                    ]
                },
                {
                    index: '5',
                    title: 'Generate a passage',
                    children: [
                        {
                            index: '5-1',
                            title: 'Language Modeling'
                        },
                        {
                            index: '5-2',
                            title: 'Masked Language Modeling'
                        }
                    ]
                },
                {
                    index: '6',
                    title: 'Compare two sentences',
                    children: [
                        {
                            index: '6-1',
                            title: 'Textual Entailment'
                        },
                        {
                            index: '6-2',
                            title: 'Evaluate Reading Comprehension'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created() {
        axios.get('/api/vgg/demo').then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>
.el-menu-item:hover {
    background: #f0fdfa;
}
</style>