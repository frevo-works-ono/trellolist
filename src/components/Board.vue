<template>
  <div>
    <select class="form-control" v-model="boardId" @change="selectBoard">
      <option v-for="board in boards" :key="board.id" :value="board.id">{{board.name}}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { BOARD, CARD } from '../vuex/mutation-types'

export default {
  name: 'board',
  mounted: function () {
    this.findBoardList(this.userId)
  },
  computed: {
    ...mapGetters('board', ['boards']),
    ...mapGetters('session', ['userId'])
  },
  methods: {
    ...mapActions('board', {
      findBoardList: BOARD.FIND_ALL
    }),
    ...mapActions('card', {
      findCardList: CARD.FIND_ALL
    }),
    selectBoard: function () {
      this.findCardList(this.boardId)
    }
  },
  data () {
    return {
      boardId: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
