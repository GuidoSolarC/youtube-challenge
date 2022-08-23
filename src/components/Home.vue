<template>
  <section class="container-fluid">   
    <!-- Componente de input url -->
    <InputComponent  v-on:urlAgregada="actualizarGaleria"/>
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
    actualizarGaleria: function () {
      // Se "deconstruye" el componente, para una correcta actualizacion
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