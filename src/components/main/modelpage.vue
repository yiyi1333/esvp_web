<template>
    <h1>姓名: {{ name }}</h1>
    <h1>年龄: {{ age }}</h1>
    <button @click="add">年龄+1</button>
</template>

<script>
export default {
    name: "modelpage",
    data() {
        return {
            name: "张三",
            age: 18
        }
    },
    methods: {
        add() {
            this.age++;
        }
    }
}

</script>

<style scoped>

</style>