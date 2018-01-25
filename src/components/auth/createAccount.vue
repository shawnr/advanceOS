<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in" @submit.stop="createAccount">
      <v-layout column align-center>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="First Name"
            v-model="firstName"
            :rules="nameRules"
            :counter="100"
            required
          ></v-text-field>
          <v-text-field
            label="Last Name"
            v-model="lastName"
            :rules="nameRules"
            :counter="100"
            required
          ></v-text-field>

          <v-btn
            @click="createAccount"
            :disabled="!valid"
            class="purple white--text"
          >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'CreateAccount',
  data() {
    return {
      firstName: '',
      lastName: '',
      userName: '',
      valid: false,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 100 || 'Name must be less than 100 characters'
      ]
    }
  },
  methods: {
    createAccount: function(){
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName
      };
      let allUsers = this.$ls.get('userList', []);
      allUsers.push(user);
      this.$ls.set('userList', allUsers);
      console.log('Added new user to system.');
      this.$ls.set('loggedInUser', user);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
