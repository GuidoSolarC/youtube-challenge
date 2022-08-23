<template>
     <!-- Input para ingresar URL video -->
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">          
            <label class="fs-4 fw-bold d-flex align-self-start" for="input_anadir">Añadir nuevo video</label>
            <div class="inputUrl input-group mb-3">
              <input type="text" v-model="urlAgregar" id="input_anadir" class="form-control" placeholder="Añadir" aria-label="Añadir" aria-describedby="button-addon2">
              <button class="inputUrl__button btn btn-primary" type="button" id="button-addon2" v-on:click="agregarURL()">Añadir</button>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'InputComponent',
  methods: {
        // Metodo para agregar nueva URL
        agregarURL: function () {
            this.enviarRespuesta()
        }, 
        enviarRespuesta: function () {
            this.$emit('urlAgregada');
        }, 
	},
	mounted () {
	},
	data () {
		return {
            // URL recibida en input
            urlAgregar: ''
		}
	}
}
</script>