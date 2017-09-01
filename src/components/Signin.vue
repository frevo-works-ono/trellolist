<template>
  <form class="form-signin" @submit.prevent="signin">
    <h2 class="form-signin-heading">Trello List</h2>
    <label for="userName" class="sr-only">ユーザ名</label>
    <input type="text" id="userName" class="form-control" placeholder="userXXXXXXX" v-model="userId" required autofocus>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { SESSION } from '../vuex/mutation-types'

export default {
  name: 'signin',
  methods: {
    ...mapActions('session', [SESSION.SAVE]),
    signin: function () {
      if (this.save(this.userId)) {
        this.$router.push({ name: 'CardList' })
      } else {
        alert('userId invalid.')
      }
    }
  },
  data () {
    return {
      userId: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #eee;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
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
