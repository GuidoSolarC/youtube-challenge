<template>
  <section class="container-fluid">   
    
    <!-- Componente de input url -->
    <InputComponent  v-on:cambiosGaleria="actualizarGaleria"/>
    <!-- Componente con galeria de videos -->
    <GaleriaComponent :key="keyGaleria" v-on:mostrarDetalles="actualizarModal"/>

    <!-- Componente modal con detalle de video -->
    <div class="modal fade" id="modalDetalles" tabindex="-1" aria-labelledby="modalDetallesLabel" aria-hidden="true">    
      <div class="modal-dialog modal-dialog-centered py-5">
          <div class="modal-content p-3">
              <div class="modal-header border-0">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <ModalComponent :key="keyModal" :obj="objVideo"/>      
          </div>
      </div>
    </div>

  </section>
</template>

<script>
// Importo los componentes
import InputComponent from '@/components/Input'
import GaleriaComponent from '@/components/Galeria'
import ModalComponent from '@/components/Modal'
export default {
  name: 'HomeComponent',
  methods: {
    // Funcion parent, para reaccionar en base a emit de child
    actualizarGaleria: function () {
      // Se "deconstruye" el componente, para una correcta actualizacion
      this.keyGaleria += 1
    },
    // Función para "deconstruir" componente del modal, y entregar parámetros
    actualizarModal: function (value) {
      // Pasamos el objeto, obtenido en la galeria
      this.objVideo = value
      this.keyModal +=1
    }
  },
  data () {
		return {
        // Key para actualizar galeria
        keyGaleria: 0,
        // Key para mostrarl modal
        keyModal: -10,
        // Objeto de video, para mostrar en modal
        objVideo: []
		}
	},
  components: {	
    InputComponent,
    GaleriaComponent,
    ModalComponent
	}
}
</script>