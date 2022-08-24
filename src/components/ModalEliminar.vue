<template>
    <div class="modal-footer border-0">            
        <div class="container-fluid">
            <!-- Mobile -->
            <div class="row d-sm-none">
                <div class="d-grid gap-2">    
                    <button type="button" class="btn btn-primary fw-bold" data-bs-dismiss="modal" v-on:click="eliminarVideo()">Eliminar</button>
                </div>
                <div class="d-grid gap-2 mt-4">    
                    <button type="button" class="btn btn--cancelar fw-bold btn-light" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
            <!-- Desktop -->
            <div class="row d-none d-sm-flex justify-content-end">
                <div class="col-md-3">
                    <button type="button" class="btn btn--cancelar fw-bold btn-light px-5 mr-4" data-bs-dismiss="modal">Cancelar</button>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-primary fw-bold px-5" data-bs-dismiss="modal" v-on:click="eliminarVideo()">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'ModalEliminarComponent',
    props: {
        idEliminar: {
            type: String
        }
    },
    methods: {     
        // Método para eliminar video
        eliminarVideo: function () {
            this.axios.delete(this.apiAWS + 'videos/'+this.idEliminar, { 
			}).then(() => {        
                this.$emit('videoEliminado') 
                console.log('emit')
			}).catch(error => {
				console.log(error)
			})           
        }
    }, 
    computed: {
        ...mapState(['apiAWS'])
	}
}
</script>