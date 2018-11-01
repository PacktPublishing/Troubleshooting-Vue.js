
<template>
    <div v-if="first">
        <h1 v-bind:style="{color:'green'}">{{ message }}</h1>
        <hr>
        <h3> {{ (n1 + n2).toString() + 555 }} </h3>
        <h4> {{ (n1 > n2) ? n1 : n2  }}</h4>       
 
    </div>
</template>



<script>
    export default{

        data(){
            return{
                message: "Sample Template",
                n1 : 12,
                n2 : 10
            }
        }
        
    }
</script>




<style>
.red {color :red}
.size { font-size: 55px}

</style>
