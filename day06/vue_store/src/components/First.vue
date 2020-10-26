<template>
    <div>
        第一个组件
        <button @click="add">加</button>
    </div>
</template>

<script>
export default {
    name: "First",
    methods:{
        add(){
            this.$store.commit("add_num")
        },
    },
}
</script>

<style scoped>

</style>
