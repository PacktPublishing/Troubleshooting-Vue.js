<template>
  <div id="app" class="starter-template">

    <Header/>
    <img src="./assets/logo.png" width="100">

    <p>Christian Hur</p>

    <router-view></router-view>

    <Footer/>

  </div>
</template>


<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: "App",
    components: { Header, Footer }
  };
</script>

<style>
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