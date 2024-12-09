<template>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nombre" v-model="nombre" required>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Opinión:</label>
        <textarea class="form-control" id="opinion" rows="3" v-model="opinion"
            placeholder="Tú opinión debe ir aquí..." required></textarea>
        <br>
        <button type="button" class="btn btn-info" @click="agregarOpinion">{{ button }}</button>
    </div>
    <div class="list-opinion">
        <h3 class="text-center">A continuación podrás ver tu opinión</h3>
        <br>
        <div class="alert alert-danger" v-show="opiniones.length === 0" role="alert">
            No existen opiniones para mostrar.
        </div>

        <div class="accordion" id="accordionProviders">
    <div class="accordion-item" v-for="(opinion, index) in opiniones" :key="index">
        <h2 class="accordion-header">
            <button class="accordion-button card-header alert alert-primary" type="button" data-bs-toggle="collapse" :data-bs-target="'#provider' + index">
                <p>Opinión creada por: <strong>{{ opinion.nombre }}</strong></p>
            </button>
        </h2>
        <div :id="'provider' + index" class="accordion-collapse collapse" data-bs-parent="#accordionProviders">
            <div class="accordion-body">
                <p class="card-text"><strong>{{ opinion.opinion }} </strong></p>
                <div class="button-container">
                <button type="button" class="btn btn-danger" @click="eliminarOpinion(index)">Eliminar</button>
                <button type="button" class="btn btn-warning" @click="actualizarOpinion(index)">Editar</button>
            </div>
            </div>
        </div>
    </div>
            
        </div>

    </div>




</template>

<script>
export default {
    name: 'opinionPage',
    data() {
        return {
            opiniones: [],
            opinion: '',
            nombre: '',
            button: 'Agregar',
            number: null,

        }
    },
    methods: {
        agregarOpinion() {
            if (this.opinion.trim() !== '' && this.button === 'Agregar') {
                this.opiniones.push({ nombre: this.nombre, opinion: this.opinion });
                console.log(this.opiniones)
                this.opinion = '';
                this.nombre = '';
            } else if (this.opinion.trim() !== '' && this.button === 'Actualizar' && this.number !== null) {
                this.opiniones[this.number] = { nombre: this.nombre, opinion: this.opinion };
                this.opinion = '';
                this.nombre = '';
                this.button = 'Agregar';
            }
        },
        actualizarOpinion(index) {
            this.number = index;
            this.button = 'Actualizar';
            this.nombre = this.opiniones[index].nombre; 
            this.opinion = this.opiniones[index].opinion
        },
        eliminarOpinion(index){
            this.opiniones.splice(index, 1);
        }
        
    }
}

</script>

<style scoped>

.card{
    margin: 20px;
}

.button-container button{
    margin: 10px;
}

</style>