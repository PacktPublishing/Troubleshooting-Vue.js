<template>
   <div>
       <h1>{{title}}: {{counter}}</h1>
       <button @click="counter++">+</button>
       <button @click="counter--">-</button>

</div>
</template>

<script>

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
