<template>
  <section class="container-fluid">   
    <!-- Componente de input url -->
    <InputComponent  v-on:enviarRespuesta="urlAgregada"/>
    <!-- Componente con galeria de videos -->
    <GaleriaComponent :key="keyGaleria"/>
    <!-- Componente modal con detalle de video -->
    <ModalComponent :key="keyModal"/>
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
    urlAgregada: function () {
      console.log('respuesta')
      this.keyGaleria += 1
    }
  },
  data () {
		return {
        // Key para actualizar galeria
        keyGaleria: 0,
        // Key para mostrarl modal
        keyModal: 1
		}
	},
  components: {	
    InputComponent,
    GaleriaComponent,
    ModalComponent
	}
}
</script>