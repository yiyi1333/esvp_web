<template>

  
</template>

<script>
export default {
    name: 'manualVerification',
    data() {
        return {}
    },
    methods: {},
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

</style>