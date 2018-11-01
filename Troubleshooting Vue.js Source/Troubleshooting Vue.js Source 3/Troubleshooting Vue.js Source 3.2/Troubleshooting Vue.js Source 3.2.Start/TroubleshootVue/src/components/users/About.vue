
<template>
    <div>
        <h1>This page is about {{users.name}}</h1>
    </div>
</template>


<script>
import Vue from 'vue'
export default Vue.component("About", {
    name:"About",
    data (){
        return{
            users: {name:"Christian Hur",email:"chur@mycompany.com"}
        }
    }
});
    
</script>


<style scoped>

h1 {color:green}

</style>
