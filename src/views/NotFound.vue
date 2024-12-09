<template>
    <div class="container" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div class="content">
        <h1>404 - Página No Encontrada</h1>
        <p>Lo sentimos, no encontramos la página que estabas buscando.</p>
        <router-link to="/">Volver a la página de inicio</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    data() {
      return {
        imageUrl: 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'
      };
    }
  }
  </script>
  
  <style scoped>
  .container {
    height: 94vh; /* Altura completa del viewport */
    width: 100%; /* Ancho completo del viewport */
    background-size: cover; /* Ajusta la imagen para cubrir el contenedor */
    background-position: center; /* Centra la imagen */
    display: flex; /* Usar flexbox para centrar el contenido */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    color: white; /* Color del texto */
    text-align: center; /* Centra el texto */
  }
  
  .content {
    padding: 20px; /* Espaciado interno para el contenido */
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mejorar la legibilidad */
    border-radius: 8px; /* Bordes redondeados */
  }
  
  </style>