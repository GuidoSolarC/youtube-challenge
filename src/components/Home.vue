<template>
  <section class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-6">          
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
          </div>
        </div>
    </div>
    <GaleriaComponent/>
    
    <ModalComponent/>
  </section>
</template>

<script>
// Importo los componentes
import GaleriaComponent from '@/components/Galeria'
import ModalComponent from '@/components/Modal'
export default {
  name: 'HomeComponent',
  components: {	
    GaleriaComponent,
    ModalComponent
	}
}
</script>