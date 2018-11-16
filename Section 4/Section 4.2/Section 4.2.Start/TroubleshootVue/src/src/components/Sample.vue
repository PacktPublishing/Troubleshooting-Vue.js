
<template>
    <div v-if="first">
        <h1 v-bind:style="{color:'green'}">{{ message }}</h1>
        <hr>
        <h3> {{ (n1 + n2).toString() + 555 }} </h3>
        <h4> {{ (n1 > n2) ? n1 : n2  }}</h4>       
    </div>

    <div v-else-if="second">      
        <h1>Template Number 2</h1> 
        <h3> Hi {{message}} !!</h3>
        <h3 v-html="message">secret message</h3>
    </div>

    <div v-else>
        <h1>JavaScript Statements</h1>
        <h3>The larger number of {{n1}} & {{n2}} is {{larger()}}.</h3>
        <hr>
        <h3> n3: {{ n3 = 25, n4 = 30}}, n4: {{ n4 }}  </h3>
        <h1>Flow Controls</h1>
        <h3> {{ n1 > n2 ? n3 : n4}}  </h3>
        <h3> {{ message.toUpperCase() }}  </h3>
    </div>
</template>


<script>
    export default{

        data(){
            return{
                message: "<b>Sample</b> <i>Template</i>",
                n1 : 12,
                n2 : 101,
                first : false,
                second: false,
            }
        },
        methods: {
            larger(){
                return this.n1 > this.n2 ? this.n1 : this.n2;
            }
        }

    }
</script>




<style>
.red {color :red}
.size { font-size: 55px}

</style>
