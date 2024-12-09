<template>
    <div class="row vw-100 vh-100">
        <div
            class=" col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 bg-dark text-light d-flex flex-column align-items-center ">
            <div class="user d-flex flex-column align-items-center">
                <i class="fa-solid fa-circle-user fa-2xl"></i>
                <br>
                <br>
                <p class="text-center">Bienvenid@ <br> {{ userName }} {{ userLastName }}</p>
            </div>
        </div>
        <div class="admin col-xl-10 col-lg-10 col-md-9 col-sm-9 col-9 ">
            
            <div class="acces text-center" v-show="userName === '' && userLastName === ''">
            <h3> Para ver la información ingresa tus datos:</h3>
            <br>
            <button type="button" class="btn btn-success" @click="loging">Ingresar Datos</button>
        </div>
        
            <AdminComponent :userName="userName" :userLastName="userLastName" :gameName="gameName"></AdminComponent>
        </div>
    </div>


</template>

<script>
import AdminComponent from '@/components/AdminComponent.vue';
export default {
    name: 'AdminView',
    components: {
        AdminComponent,
    },
    data() {
        return{
        userName: '',
        userLastName: '',
        gameName:''
    }
},
    methods: {
        loging() {
            this.userName = prompt("Ingrese su nombre");
            this.userLastName = prompt("Ingrese su apellido");
        },
    },
    
mounted() {
    this.gameName = this.$route.params?.gameName || 'Nombre del juego';
},
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