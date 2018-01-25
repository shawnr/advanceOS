<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card v-if="showWelcome">
          <v-card-media src="http://lorempixel.com/400/200/abstract" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Clock In to Work</h3>
              <div>Please clock in to work. If this is your first day: Welcome! Please create an account to clock in.</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="purple">Clock In</v-btn>
            <v-btn flat color="grey" @click.stop="createAccount">Create Account</v-btn>
          </v-card-actions>
        </v-card>
        <create-account v-if="showCreateAccount"></create-account>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import CreateAccount from '@/components/auth/createAccount'

export default {
  name: 'EmployeeAuthWizard',
  components: {
    'create-account': CreateAccount
  },
  data() {
    return {
      showWelcome: true,
      showCreateAccount: false
    }
  },
  methods: {
    createAccount: function () {
      this.showWelcome = false;
      this.showCreateAccount = true;
    }
  }
}
</script>

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
