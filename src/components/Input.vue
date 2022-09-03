<template>
    <!-- Input para ingresar URL video -->
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">          
            <label class="fs-4 fw-bold d-flex align-self-start" for="input_anadir">Añadir nuevo video</label>
            <div class="inputUrl input-group mb-3">
              <input type="text" v-model="urlAgregar" id="input_anadir" class="form-control" placeholder="Añadir" aria-label="Añadir" aria-describedby="button-addon2">
              <button class="inputUrl__button btn btn-primary" type="button" id="button-addon2" v-on:click="comprobarURL()">Añadir</button>
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
        // Método para validar si URL de youtube es válida
        comprobarURL: function () {
            const idVideo = this.obtenerIdVideo(this.urlAgregar)
            this.axios.get(this.apiGoogle + idVideo + this.keyGoogle + '&part=snippet', { 
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