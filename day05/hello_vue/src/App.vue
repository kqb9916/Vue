<template>
    <div id="app">
        <First></First>
        <h3>帅！！！！！</h3>
        <Second></Second>

    </div>
</template>

<script>

import First from "./components/First";
import Second from "./components/Second";

export default {
    name: 'App',
    // 将组件注册的根组件
    components: {
        First: First,
        Second: Second,
    }
}
</script>

<style>

</style>
