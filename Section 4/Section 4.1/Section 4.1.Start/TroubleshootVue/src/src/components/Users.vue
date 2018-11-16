<template>
  <div>
    <h1 class="h3 mb-3 font-weight-normal">Show All Users</h1>
    <main role="main" class="container">

     
        ID: <input v-model="id">
        Name: <input v-model="name">
        Username: <input v-model="username">
        Email: <input v-model="email">
        <button v-on:click="add()">Add</button>

      

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
          <tr v-for="(user,index) in users" :key="user.id">
            <td>{{index}}: {{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.contact['username']}}</td>
            <td>{{user['contact'].email}}
              <button v-on:click="del(index)">Remove</button>

            </td>
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
        users: [
          {
            id: 1,
            name: "Christian Hur",
            contact: {
              username: "christianhur",
              email: "chur@troubleshootvue.com"
            }
          },
          {id: 2,
            name: "Kelly Love",
            contact: {
              username: "kellylove",
              email: "klove@domain1.com"
            }
          },
          {id: 3,
            name: "Lucy Miller",
            contact: {
              username: "lucymiller",
              email: "lmiller978@domain2.net"
            }
          },
          {id: 4,
            name: "Kevin Jones",
            contact: {
              username: "kevinjones",
              email: "kjones450@domainz.com"
            }
          }
        ],
        id:"",
        name:"",
        username:"",
        email:""
      };
    },
    methods:{
      add(){
        this.users.push({
            id: this.id,
            name: this.name,
            contact: {
              username: this.username,
              email: this.email
            }
          })
      },
      del(key){
        this.$delete(this.users,key);
      }
    }
  };
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>