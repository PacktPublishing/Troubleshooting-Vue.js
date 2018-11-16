<template>
  <div>
    <h1>Troubleshooting Vue.js</h1>

    <main role="main" class="container">

      <p class="lead">Do you know what to do if your Vue application goes blank? What if the view is not updating when something changes in the model? Or what if the view is not responding on a route change? Whenever you have a problem with your Vue application, don't panic! There are many different things that could cause a problem with your Vue application. Some of the common issues are around templates, components, forms, lists, routing, and performance. No matter what's causing the issue, there are many basic troubleshooting techniques you can use to fix issues like these. </p>

      <p class="lead">Troubleshooting is a process of trial and error—in some cases, you may need to use several different approaches before you can find a solution; some problems may be easy to fix while others may be impossible to resolve at all.
      </p>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Home"
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