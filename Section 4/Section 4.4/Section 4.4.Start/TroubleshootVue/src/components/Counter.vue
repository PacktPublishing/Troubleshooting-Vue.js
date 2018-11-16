<template>
   <div>
       
       <h1 v-bind:class="{active:isActive()}">{{title}}: {{counter}}</h1>

       {{ isActive }}

       <!--
       <button @click="counter++">+</button>
       <button @click="counter--">-</button>
       -->
    <my-message mid="1"></my-message>
    <my-message mid="2"></my-message>
    <my-message mid="3"></my-message>

    <br>
    <span v-for="item in items" :key="item.id">
        {{item}}
    </span>
    <br>
    Length: {{items.length}}
    <br>
    <input type="button" v-on:click="add()" value="Add">
    <input type="button" v-on:click="sort()" value="Sort">
    <br>

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


var vm = new Vue({
    el: "#app2",
    template: "<div><h1>My new Vue</h1></div>"
})


export default {
   data: function(){
       return {
           counter:0,
           title:"Counter",
           isActive: function(){ return true},
           items : [20, 4, 11],
           add: function(){
               let i = this.items.length;
                this.items[i] = i*2;
               //this.items.push(i*2);
               //this.items = this.items.concat(this.items);
               console.table(this.items)
           },
           sort: function(){
               this.items.sort();
            console.table(this.items)
           }
        }
   }
}
</script>

<style scoped>
.active { color: green; background-color: lightyellow;}
 button { width:40px; padding: 3px;font-size: 20px;}
 button:hover { background-color: #ccc;}
</style>
