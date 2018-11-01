<template>
<div>
  <form class="form-signin" @submit.prevent="handleSubmit">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>

  <UsersAbout/>

</div>
</template>


<script>

  export default {
    name: "Login",
    methods: {
      handleSubmit : function(event){
        //submit to processor
        //alert("You're signed in.");
        //Base cases
//debugger;        
        let n4 = "2+2";
        let n5 = "2+3";
        let n6 = "3+3";

        let n0 = 6;
        function f(n){
            if(n==4)        return n4;
            else if(n==5)   return n5;
            else if(n==6)   return n6;
            else if(n>6)    return f(n-3) + "+3";
        }

        let result = f(10);  //2+2+3+3
      }
    }
  }

</script>

<style scoped>
  html,
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .checkbox {
    font-weight: 400;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>