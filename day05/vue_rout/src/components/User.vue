<template>
    <div>
        user组件
        <h3>用户列表页</h3>
        <table border="2"  v-if="show">
            <tr>
                <td>ID</td>
                <td>name</td>
                <td>bir</td>
                <td>personal_info</td>
                <td>operate</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.bir }}</td>
                <td>{{ user.info }}</td>
<!--         ${user.index}       -->
<!--                <td><a href="javascript:;" @click="del_user(user.id)">删除</a> | <router-link :to="`/detail/${user.id}`">查看</router-link></td>-->
                <td><a href="javascript:;" @click="del_user(user.id)">删除</a> | <router-link :to="`/detail/${user.id}`">查看</router-link></td>
            </tr>
        </table>
        <hr>
        username: <input type="text" v-model="username"><br>
        bir: <input type="text" v-model="bir"><br>
        personal_info: <input type="text" v-model="info"><br>
        <button @click="add_user()">添加用户</button>
    </div>
</template>

<script>
export default {
    name: "User",
    data(){
        return{
            users: [
                {"id":1, username: "康康", bir: "1999-10-06", info: "我是谁？我在哪?"},
                {"id":2, username: "ning", bir: "1999-10-07", info: "我是谁？我在哪"},
                {"id":3, username: "alice", bir: "1999-10-08", info: "我是谁？我在哪"},
            ],
            username: "",
            bir: "",
            info: "",
            show: true,
        }
    },
    methods:{
        del_user(id){
            for(let i = 0; i < this.users.length; i++ ){
                if (this.users[i].id == id){
                    this.users.splice(this.users.indexOf(this.users[i]),1)
                }
            }
            // this.users.splice(id, 1);
            if(this.users.length === 0){
                this.show = false;
            }
        },
        add_user(){
            if(this.username&&this.bir&&this.info){
                let a = 0
                for (let i = 0; i< this.users.length; i++){
                    // console.log(this.users[i].id)
                    let b = 0
                    a = this.users[i].id >b ?  this.users[i].id : b
                }
                // console.log(a);
                // console.log("可以添加！！！")
                let add_u = {id:a+1,username:this.username,bir:this.bir, info:this.info};
                this.users.push(add_u);
                this.show = true;
            }
            this.username = "";
            this.bir = "";
            this.info = "";
        },
    },
}
</script>

<style scoped>

</style>
