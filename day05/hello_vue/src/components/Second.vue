<template>

    <div>
        组件二--创建者: <h3>{{ username }}</h3>
        数字: <h3 @click="change">{{ number }}</h3>
    </div>

</template>

<script>
export default {
    name: "second",
    data() {
        return{
            username: "康康！！！",
            number: 52
        }
    },
    methods: {
        change(){
            this.number ++;
        },
    },
}
</script>

<style scoped>

</style>
