<template>
    <div>
        <h2>留言板</h2>
        <input type="text" v-model="msg">
        <input type="button" value="发表留言" @click="add_note">

        <ul>
            <li v-for="(note, index) in notebook" :key="index">
                <span>{{ note }}</span> <a href="javascript:;" @click="del_note(index)">删除</a>
            </li>
        </ul>
        <hr>
        <span>留言的总数量: {{ notebook.length }}条</span>
        <input type="button" value="删除所有留言" @click="del_all" v-if="show">

    </div>
</template>

<script>
import index from "../router";

export default {
    name: "Home",
    data(){
        return{
            // 判断localStoreage是否有值 有则显示， 没有则设置成空数组
            notebook: localStorage.msgs ? JSON.parse(localStorage.msgs): [],
            msg: "",
            show: true,

        }
    },
    methods:{
        add_note(){
            let msg = this.msg;
            if(msg){
                this.notebook.unshift(this.msg);
                // 将用户发表的留言存到localStorage， 存储前将数据进行序列化
                localStorage.msgs = JSON.stringify(this.notebook);
                this.msg = "";
            }
            if (this.notebook.length > 0){
                this.show = true;
            }
        },
        del_note(index){
            this.notebook.splice(index,1);
            localStorage.msgs = JSON.stringify(this.notebook);
            if(this.notebook.length > 0){
                // console.log(this.show);
                this.show = true;
            }
            if(this.notebook.length <= 0){
                this.show = false;
            }
        },
        del_all(){
            this.notebook = [];
            localStorage.msgs = JSON.stringify(this.notebook);
            this.show = false;
        },
    },
}
</script>

<style scoped>

</style>
