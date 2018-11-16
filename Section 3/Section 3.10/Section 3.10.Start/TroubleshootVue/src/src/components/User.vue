<template>
  <div>
    <h1 class="h3 mb-3 font-weight-normal">Show A Single User</h1>
    <main role="main" class="container">
      <div>
        <button v-on:click="prev">Previous</button>
        <button v-on:click="next">Next</button>
        <button v-on:click="styleIt">{{styleOnOffText}}</button>
      </div>
      <br>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user,key,index) in users[curIndex]" :key="user.id" v-bind:class="[isActive ? activeClass : '']">
            <td>{{index}}</td>
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Users",
    data() {
      return {
        curIndex: 0,
        isActive: false,
        activeClass: "active",
        styleOnOffText: "Style",
        users: [
          {
            username: "christianhur",
            name: "Christian Hur",
            email: "chur@troubleshootvue.com"
          },
          {
            name: "Kelly Love",
            username: "kellylove",
            email: "klove@domain1.com"
          },
          {
            name: "Lucy Miller",
            username: "lucymiller",
            email: "lmiller978@domain2.net"
          },
          {
            name: "Kevin Jones",
            username: "kevinjones",
            email: "kjones450@domainz.com"
          }
        ]
      };
    },
    methods: {
      next: function () {
       this.curIndex < this.users.length - 1
         ? this.curIndex++
         : (this.curIndex = 0);
      },
      prev: function () {
        this.curIndex > 0
         ? this.curIndex--
         : (this.curIndex = this.users.length - 1);
      },
      styleIt: function (color) {
        if (this.isActive == true) {
          this.isActive = false;
        } else {
          this.isActive = true;
        }
      }
    }
  };
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  .active {
    color: red;
    font-weight: bold;
  }

  button {
    width: 100px;
  }
</style>