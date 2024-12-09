<template>

  <div class="container">
    <p>Escribe tu opinión para el juego: <strong>{{ gameName }}</strong></p>
    

    <!--aquiva el componente opinion :nombre="nombre" :opinion="opinion"-->
    <OpinionPage></OpinionPage>
  
  </div>

</template>

<script>
import OpinionPage from '../components/OpinionPage.vue';

export default {
  name: 'OpinionesView',
  data(){
    return{
      gameName: '',
    }
  },
  components: {
    OpinionPage

  },
  mounted() {
    this.gameName = this.$route.params?.gameName || 'Nombre del juego';
}
}
</script>

<style scoped>
p{
  font-size: xx-large;
}
</style>