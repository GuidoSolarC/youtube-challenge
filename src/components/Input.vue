<template>
    <!-- Input para ingresar URL video -->
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">          
            <label class="fs-4 fw-bold d-flex align-self-start" for="input_anadir">Añadir nuevo video</label>
            <div class="inputUrl input-group mb-3">
              <input type="text" v-model="urlAgregar" id="input_anadir" class="form-control" placeholder="Añadir" aria-label="Añadir" aria-describedby="button-addon2">
              <button class="inputUrl__button btn btn-primary" type="button" id="button-addon2" v-on:click="comprobarUrl()">Añadir</button>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'InputComponent',
    methods: {
        // Metodo para obtener id de video youtube
        // https://stackoverflow.com/questions/10591547/how-to-get-youtube-video-id-from-url
        obtenerIdVideo: function (url) {
            return url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
        },    
        // Funcion para comprobar que video existe o no en nuestra BD
        comprobarUrl: function () {
            const idVideo = this.obtenerIdVideo(this.urlAgregar)
            this.axios.get(this.apiAWS + 'videos/' + idVideo[1] , { 
			}).then(response => {                
                // Si no obtenemos registros, entonces insertamos nuevo video
                if(Object.keys(response.data).length === 0){
                    this.urlValida(idVideo)
                } else {                    
                    this.$alertify.error('El video ya está registrado, intenta con otro :)');
                }
			}).catch(error => {
                this.$alertify.error('Ha ocurrido un error comprobando la url');
				console.log(error)
			})       
        }, 
        // Método para validar si URL de youtube es válida
        urlValida: function () {
            const idVideo = this.obtenerIdVideo(this.urlAgregar)
            this.axios.get(this.apiGoogle + idVideo[1] + this.keyGoogle + '&part=snippet', { 
			}).then(response => {
                if(response.data.items.length === 1){
                    this.agregarURL(idVideo)
                } else {                    
                    this.$alertify.error('No es una url válida');
                }
			}).catch(error => {
                this.$alertify.error('Ha ocurrido un error comprobando la url');
				console.log(error)
			})       
        },
        // Metodo para agregar nueva URL
        agregarURL: function (idVideo) { 
            this.axios.put(this.apiAWS + 'videos', { 
                id: idVideo[1]
            }).then(() => {  
                this.enviarRespuesta()
                this.$alertify.success('Video agregado');
            }).catch(error => {
                this.$alertify.error('Ha ocurrido un error');
                console.log(error)
            })         
        },    
        // Envio respuesta a "home", para que actualice la galeria
        enviarRespuesta: function () {
            this.$emit('cambiosGaleria')
        }
    },
    data () {
        return {
            // URL recibida en input
            urlAgregar: '',
        }
    },
    computed: {
        ...mapState(['apiAWS','apiGoogle','keyGoogle'])
	}
}
</script>