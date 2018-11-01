<template>
  <div>
    <h1 class="h3 mb-3 font-weight-normal">Show All Users</h1>
    <main role="main" class="container">

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
            <td>{{index+1}}</td>
            <td>{{user.name}}</td>
            <td>{{user.contact['username']}}</td>
            <td>{{user['contact'].email}}</td>
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
            name: "Christian Hur",
            contact: {
              username: "christianhur",
              email: "chur@troubleshootvue.com"
            }
          },
          {
            name: "Kelly Love",
            contact: {
              username: "kellylove",
              email: "klove@domain1.com"
            }
          },
          {
            name: "Lucy Miller",
            contact: {
              username: "lucymiller",
              email: "lmiller978@domain2.net"
            }
          },
          {
            name: "Kevin Jones",
            contact: {
              username: "kevinjones",
              email: "kjones450@domainz.com"
            }
          }
        ]
      };
    },
  };
</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>