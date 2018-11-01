<template>
  <div>
    <h1>About Troubleshooting Vue</h1>
    <main role="main" class="container">
      <p class="lead" v-if="1">
        This course highlights some common problems faced by developers in different stages of their Vue application development
        and shows you some simple and practical methods to try when troubleshooting, as well as how to solve more difficult
        problems you may encounter.
      </p>

      <p class="lead" v-show="0">This course is for Vue.js developers who want to solve or avoid problems in their Vue application development and would
        like to get some quick solutions to their common development issues. A good understanding of Web development (HTML,
        CSS, JavaScript) and a basic knowledge of Vue.js framework, object-oriented programming (OOP) paradigm, and Model-View-Controller
        (MVC) or Model-View-ViewModel (MVVM) architecture is expected.</p>
    </main>

  </div>
</template>

<script>

  export default  {
    name: 'About'
  };

</script>


<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  .container {
    text-align: left;  
    }
</style>