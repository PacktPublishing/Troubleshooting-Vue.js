
<template>
    <div>
        <h1>This page is about {{users.name}}</h1>
        <MySchool/>
    </div>
</template>


<script>
import Vue from 'vue'

var MySchool = { name: "MySchool", 
                template:"<h2>{{school}}</h2>",
                data(){
                    return{
                        school: "Boston University"
                    }
                    }
    };

//Vue.component("MySchool",MySchool);            

export { MySchool}

export default Vue.component("About", {
    name:"About",
    components: { MySchool},
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
