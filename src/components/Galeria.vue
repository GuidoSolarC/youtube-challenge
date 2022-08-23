<template>
    <section class="container mt-5">
       <div class="row flex-wrap">
            <!-- Cards a mostrar -->
            <div class="cards__item rounded position-relative col-12 col-md-4 mb-2 mb-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span class="cards__delete position-absolute">
                    <i class="bi bi-x"></i>
                </span>
                <img class="img-fluid" src="./../prueba.jpeg" alt="">
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'GaleriaComponent',
    methods: {
        // Método para actualizar galeria
        cargarGaleria: function (){
            this.axios.get(this.apiAWS + 'videos', {   
			}).then(response => {
                const respuesta = response.data.Items.map(obj => obj.id)
                console.log(respuesta)
                respuesta.forEach(element => {
                    this.procesarURL(element)
                });
			}).catch(error => {
				console.log(error)
			})            
        }, 
        // Metodo para procesar la URL recibida, y obtener datos
        procesarURL: function (idVideo) {
            this.axios.get(this.apiGoogle + idVideo + this.keyGoogle)({ 
			}).then(response    => {
                console.log(response)
			}).catch(error => {
				console.log(error)
			})            
        },
    },
    mounted () {
        // Una vez desplegado el componente, cargamos galeria
        this.cargarGaleria()
    },
    data () {
        return {
            // Array con videos cargados
            arrayVideos: []
        }
    },    
    computed: {
        ...mapState(['apiAWS','apiGoogle','keyGoogle'])
	}
}
</script>