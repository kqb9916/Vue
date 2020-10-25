<!-- 组件的template  内部只能有一个 -->
<template>
        <!--  template 只能有一个根标签  -->
    <div>
        第一个根组件
        --successful
        <hr>
        <span>嗯哼？？</span>
        <hr>
        <h3>first中的h3</h3>
    </div>
</template>

<!-- 编写js代码的地方  当前对象是组件对象 -->
<script>
// 将组导出
export default {
    name: "First"
}
</script>

<!-- 当前组件的样式  scoped; 脚手架提供的属性 只在当前组件生效 -->
<style scoped>

    div {
        color: aqua;
    }
    span {
        color: bisque;
    }
</style>
