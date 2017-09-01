<template>
  <div>
    <Board></Board>
    <table class="table">
      <thead>
        <tr>
          <th>タイトル</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in cards" :key="card.id">
          <td>{{card.name}}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Board from './Board'

export default {
  name: 'card',
  beforeCreate: function () {
    console.log('userId:' + this.userId)
    if (!this.session.userId) {
      this.$router.replace('signin')
    }
  },
  computed: {
    ...mapGetters('card', ['cards']),
    ...mapGetters('session', ['userId'])
  },
  data () {
    return {
    }
  },
  components: {
    Board
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
