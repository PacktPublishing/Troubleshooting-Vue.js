<template>
  <div id="app" class="starter-template">

    <Header/>
    <img src="./assets/logo.png" width="100">

    <p><span>Christian Hur</span></p>

    <router-view></router-view>
    <hr>
    Route: {{$route}}<br>
    Path: {{$route.path}}<br>
    Query: {{$route.query}}
    <hr>
    Current Route: {{$router.currentRoute}}<br>
    <button v-on:click="$router.back()">Back</button> 
    <button v-on:click="$router.forward()">Forward</button> 
    <button v-on:click="$router.go(2)">Go</button> 
    <button v-on:click="$router.push('Login')">Push (Login)</button> 
    <button v-on:click="$router.replace('Google')">Replace (Google)</button> 

    
    <Footer inline-template>
      <p>Copyright 2018</p>
    </Footer>

  </div>
</template>


<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Vue from 'vue'

import UsersAbout from '@/components/users/UsersAbout'
import MySchool from '@/components/users/UsersAbout'

Vue.component('my-component', { template: "#my-ytemplate"})

// var temp = `<div>
//         <h1>This page is about {{users.name}}</h1>
//     </div>`;

// Vue.component("About", {
//     name:"About",
//     template: temp,
//     data (){
//         return{
//             users: {name:"Christian Hur",email:"chur@mycompany.com"}
//         }
//     }
// });


export default {
    name: "App",
    components: { Header, Footer, MySchool }
  };
</script>

<style scoped>
  p { color:red;}
</style>


<style>
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    margin-bottom: 60px;
    /* Margin bottom by footer height */
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .starter-template {
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    /* Set the fixed height of the footer here */
    line-height: 60px;
    /* Vertically center the text there */
    background-color: #f5f5f5;
  }
</style>