<template>
    <section class="container mt-5">
       <div class="row flex-wrap">
            <!-- Cards a mostrar -->
            <div v-for="video in arrayVideos" :key="video.id" class="cards__item rounded position-relative col-12 col-md-3 mb-2 mb-md-5">
                <!-- Icono para eliminar video -->
                <i class="cards__delete position-absolute bi bi-x d-flex align-self-center" v-on:click="eliminarVideo(video.id)"></i>
                <!-- Thumbnail que gatilla modal -->
                <img class="img-fluid" :src="video.thumbnail" :alt="video.descripcion" data-bs-toggle="modal" data-bs-target="#modalDetalles" v-on:click="mostrarDetalles(video.id)">
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
            this.arrayVideos = [] // Corrijo problema de cache
            this.axios.get(this.apiAWS + 'videos', {   
			}).then(response => {
                const respuesta = response.data.Items.map(obj => obj.id)
                respuesta.forEach(element => {
                    this.procesarURL(element)
                });
			}).catch(error => {
				console.log(error)
			})            
        }, 
        // Metodo para procesar la URL recibida, y obtener datos
        procesarURL: function (idVideo) {
            this.axios.get(this.apiGoogle + idVideo + this.keyGoogle + '&part=snippet', { 
			}).then(response => {
                this.arrayVideos.push({
                    id: response.data.items[0].id, 
                    titulo: response.data.items[0].snippet.title, 
                    descripcion: response.data.items[0].snippet.description,
                    thumbnail: response.data.items[0].snippet.thumbnails.standard.url
                })
			}).catch(error => {
				console.log(error)
			})            
        },
        // Método para eliminar video
        eliminarVideo: function (id) {
            this.axios.delete(this.apiAWS + 'videos/'+id, { 
			}).then(() => {        
                this.cargarGaleria()      
			}).catch(error => {
				console.log(error)
			})           
        },
        // Metodo para mostrar detalles del video
        mostrarDetalles: function (id) {
            const obj = this.arrayVideos.filter(el => el.id === id)
            this.$emit('mostrarDetalles', obj);
        }
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