<template>
    <div id="app">

        <h1> 这是主页</h1>
        <router-link to="/home">访问Home组件</router-link>
        <router-link to="/user">访问User组件</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
