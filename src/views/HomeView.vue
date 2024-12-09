<template>
  <div class="home">
    <GameList></GameList>
    <!--va el componente home-->
  </div>
</template>

<script>
import GameList from '@/components/GameList.vue'

export default {
  name: 'HomeView',
  components: {
    GameList
  }
}
</script>
