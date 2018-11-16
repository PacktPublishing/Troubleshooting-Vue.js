<template>
  <div id="app" class="starter-template">
    <div>
        <!-- HEADER -->
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <router-link class="navbar-brand" to="/home">Troubleshooting Vue</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- NAVIGATION -->
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/home">Home
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/users">All Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user">Single User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <!-- END NAVIGATION -->
    </div>
    <!-- END HEADER -->

    <img src="./assets/logo.png" width="100">

    <router-view></router-view>

    <div>
      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <p class="mb-1">&copy; 2018 Troubleshooting Vue.js</p>
        </div>
      </footer>
    </div>
    <!-- FOOTER -->  

  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style>
  html {
    position: relative;
    min-height: 100%;
  }

  body {
    margin-bottom: 60px;
    /* Margin bottom by footer height */
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .starter-template {
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    /* Set the fixed height of the footer here */
    line-height: 60px;
    /* Vertically center the text there */
    background-color: #f5f5f5;
  }
</style>