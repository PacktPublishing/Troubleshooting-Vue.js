
<template>
    <div v-if="first">
        <h1 v-bind:style="{color:'green'}">{{ message }}</h1>
        <hr>
        <h3> {{ (n1 + n2).toString() + 555 }} </h3>
        <h4> {{ (n1 > n2) ? n1 : n2  }}</h4>       
    </div>

    <div v-else-if="second">      
        <h1>Template Number 2</h1> 
        <h3> Hi {{ }} !!</h3>
    </div>

    <div v-else>
        <h1>Else Part</h1>
    </div>
</template>


<script>
    export default{

        data(){
            return{
                message: "Sample Template",
                n1 : 12,
                n2 : 10,
                first : false,
                second:true,
            }
        }
        
    }
</script>




<style>
.red {color :red}
.size { font-size: 55px}

</style>
