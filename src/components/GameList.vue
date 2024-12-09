<template>
  <div class="container">
  <div  class="row  ">
      
      <div v-for="(game, index) in games" :key="index" class="card col-5 ">
          <img :src="game.background_image" alt="">
          <div class="card-info">
              <ul>
                  <li>{{ game.name }}</li>
                  <li>Rating: {{ game.rating }}</li>
                  <li>Released: {{ game.released }}</li>
                  <li>Updated: {{ game.updated }}</li>
              </ul>
          </div>
          <div class="button-container">
           <button @click="opinar(game.name)" class="opinion">Opinar</button>
          <button @click="like(game.name)"><i class="fa-solid fa-heart fa-beat"></i></button>
      </div>
      </div>
      
  </div>
  </div>
  </template>
  
  <script >
import axios from 'axios'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'GameList',
  components: {
    // HelloWorld

  },
  data() {
    return {
      games: [],
      opiniones: [],
      nombre: "",
      opinion: ""

    }
  },

  computed:{
   
  },
  methods: {
    opinar(id){
      this.$router.push(`/opiniones/${id}`)
    },

    like(id){
      this.$router.push(`/admin/${id}`)
    },

    agregarOpinion() {
      this.opiniones.push({
        nombre: this.nombre,
        opinion: this.opinion,
      })
      this.$router.push('opiniones')
      this.nombre = '',
        this.opinion = ''
    }
  },
  created() {
    axios.get(`https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=1b401d34f5474ded8af3451186dd25f6&page=2&platforms=20%2C1%2C7/`)
        .then((resp) => {
          this.games = resp.data.results
        })
  }

}
</script>
  
  <style scoped>
  .card{
      max-width: 300px;
      margin: 10px;
      padding: 20px;
      border: 2px solid gray;
      border-radius: 15px;
      background-color: #f2f2f2;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      font-family: Arial, sans-serif;
      
  }
  
  .card img{
      border-radius: 15px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      width: 100%; 
      height: 70%; 
      display: block;
      margin: 10px auto;
  }
  
  
  
  .button-container {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     margin-top: 15px;
     
  }

  .opinion {
  text-decoration: none;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: solid grey 1px;
      border-radius: 6px;
      background-color: lightgray;
}
  
  .card-info {
      
      
      margin-top: 15px;
      font-size: 0.9rem;
      
      display: flex; 
      justify-content: flex-start; 
  }
  
  ul {
     width: 100%;
      list-style: none;
      padding: 0; 
      margin: 0; 
      display: flex; 
      flex-direction: column; 
  }
  
  button{
    border: none;
  }
  
  .card-info li{
      text-align: left;
      padding: 10px; 
      color: grey;
      border-bottom: 1px solid #ccc;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background: #fff; 
      padding: 10px; 
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
       
  }
  
  .fa-heart{
    margin-top: 10px;
    margin-right: 10px;
      color: red;
      scale: 1.6;
  }
  
  
  .button-container .opinion:hover{
      background-color: lightslategray;
  }
  
  </style>