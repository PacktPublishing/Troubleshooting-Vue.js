<template>
   <div>
       <!--
       <h1>{{title}}: {{counter}}</h1>
       <button @click="counter++">+</button>
       <button @click="counter--">-</button>
       -->
    <my-message mid="1"></my-message>
    <my-message mid="2"></my-message>
    <my-message mid="3"></my-message>

</div>
</template>

<script>

import Vue from 'vue'

let msg = { message : "" };

Vue.component("my-message",{
    props: ["mid"],
    template: `<div>Message #{{mid}} : <input v-model="d.message">
                <p>{{ d.message }}</p></div>`,
    data: function(){
        return { d : { message : "" } }
    }
})


export default {
   data: function(){
       return {
           counter:0,
           title:"Counter",
        }
   }
}
</script>

<style scoped>
 button { width:40px; padding: 3px;font-size: 20px;}
 button:hover { background-color: #ccc;}
</style>
