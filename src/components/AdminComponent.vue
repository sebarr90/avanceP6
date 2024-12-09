<template>
    <div class="container">

        
        <div class="account col-xl-7 col-lg-7 col-md-6 col-sm-6 col-6 w-100 "
            v-show="userName !== '' && userLastName !== ''">
            <h2>Resumen de tu cuenta</h2>
            <p>Le diste me gusta al juego <strong>{{ gameName }}</strong></p>
            <div class="card  col-xl-5 col-lg-5 col-md-9 col-sm-9 col-9">
                <div class="card-body">
                    <p>¿Deseas comprar coins para este juego?</p>
                </div>
                <div class="button-container text-center">
                    <button type="button" class="btn btn-warning" @click="agregarCoins"><i
                            class="fa-solid fa-coins"></i> Agregar coins</button>
                </div>
                <hr>
                <div class="coin m-3">
                    <h3>Cantidad de coins comprados</h3>
                    <div class="progress mt-3 mb-2" role="progressbar" aria-label="Danger example"
                        aria-valuenow="userCoins" aria-valuemin="0" aria-valuemax="50">
                        <div class="progress-bar " :class="barraColor" :style="{ width: porcentajeCoins }">${{ userCoins
                            }}</div>

                    </div>
                    <p class="text-tertiary" v-show="userCoins >= 50">Llegaste al máximo de tu crédito</p>
                </div>
            </div>
            <br>
            <div class="card-group ">
                <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
                    <div class="card-header">% de finalización de juego</div>
                    <div class="card-body">
                        <p class="card-text">17% <i class="fa-regular fa-star-half"></i></p>
                    </div>
                </div>
                <div class="card text-bg-success mb-3" style="max-width: 18rem;">
                    <div class="card-header">Logros en el juego</div>
                    <div class="card-body">
                        <p class="card-text">166 <i class="fa-solid fa-trophy"></i></p>
                    </div>
                </div>
                <div class="card text-bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header">Recompensas</div>
                    <div class="card-body">
                        <p class="card-text">200 <i class="fa-solid fa-award"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AdminComponent',
  props:{
    userName: {
            type: String,
            default: ''
        },
        userLastName: {
            type: String,
            default: ''
        },
        gameName:{
            type: String,
            default:'',
        }
    },
    data() {
        return {
           
            userCoins: 0,
            porcentajeCoins: '',
        }
    },
    computed: {
        barraColor() {
            if (this.userCoins <= 20) {
                return 'bg-success'; // Verde
            } else if (this.userCoins > 20 && this.userCoins <= 30) {
                return 'bg-warning'; // Amar illo
            } else {
                return 'bg-danger'; // Rojo
            }
        }
    },
    methods:{
        agregarCoins() {
            if (this.userCoins <= 49) {
                this.userCoins += 1;
                this.porcentajeCoins = ((this.userCoins / 50) * 100) + '%';
            }

        }
    }

    }
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}

.user {
    margin-top: 60px;

}

.user i {
    scale: 2;
}

.user p {
    margin-bottom: 10px;
}

.account {
    margin-left: 50px;
    margin-top: 50px;
}
</style>