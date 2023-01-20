<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>Vue 页</p>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  setup() {
    const getData = () => {
      var api="https://jsonplaceholder.typicode.com/users";
      //2.使用axios 进行get请求
      axios.get(api).then((res)=>{
        //请求成功的回调函数
        console.log(res)
      }).catch((err)=>{
        //请求失败的回调函数
        console.log(err)
      })
    };

    getData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
