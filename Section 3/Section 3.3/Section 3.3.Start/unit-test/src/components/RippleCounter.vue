<template>
  <div class="hello">
    <h1>{{ title }} - {{ counter }}</h1>
    <button id="plus" @click="plus" value="btn"> + </button>
    <input type="text" v-model="counter" />
    <button id="minus" @click="minus"> - </button>
    <br/><br/>
    <button id="reset" @click="reset"> Reset </button>  

    <router-link :to="{name:'rc'}">Ripple Counter</router-link>
    <router-link :to="{name:'HelloWorld'}">Home</router-link>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'RippleCounter',
  data () {
    return { title: 'Ripple Counter', counter: 0}
  },
  methods: {
    plus () {this.counter++},
    minus () {this.counter--},
    reset () {this.counter = 0}
  }
}
</script>

<style scoped>

input { 
  background-color:yellow; 
  width: 50px; 
  padding: 0px; 
  font-size: 20px; 
  text-align: center}

button { padding: 3px; width: 50px;}
button:hover { background-color:#42b983}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
