<template>
  <div>
    <h1 class="h3 mb-3 font-weight-normal">Sign-up form</h1>
    <main role="main" class="container">
    
      <p class="lead">Complete the form below. All fields are required.</p>
    
      <form action="" autocomplete="off" class="form-signin" v-on:submit.prevent="handleSubmit">
        <label for="inputUsername" class="sr-only">Username</label>
        <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

        Tell Us About Yourself:<br>
        <textarea class="form-control mb-3" v-model="text">Test</textarea>
        <span v-html="text"></span>
      
        <br>
        <div class="form-group">
          <button type="submit" class="btn btn-block btn-lg btn-primary" name="btn-signup">Sign Up
          </button>
        </div>

        <div class="form-group">
          <hr/>
        </div>

        <div class="form-group">
          <router-link class="navbar-brand" to="/login">Already registered? Sign in Here...</router-link>
        </div>

      </form>

    </main>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data(){
      return{
        text : "I am a <b>Coder</b>"
      }
  },
  methods: {
      handleSubmit : function(event){
        //submit to processor
        alert("Thank you for signing up.");
      }
    }
};
</script>

<style scoped>
.container {
  max-width: 960px;
}

.border-top {
  border-top: 1px solid #e5e5e5;
}

.border-bottom {
  border-bottom: 1px solid #e5e5e5;
}

.border-top-gray {
  border-top-color: #adb5bd;
}

.box-shadow {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
}

.lh-condensed {
  line-height: 1.25;
}

#signup-form {
  margin-left: auto;
  margin-right: auto;
}

.form-signin {
  width: 100%;
  max-width: 400px;
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

.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>