<template>
    <div class="modal-body">
        <div class="row align-items-center">
            <div class="thumbnail col-12 col-md-4 p-0 mb-3 mb-md-0 position-relative">
                <img class="img-fluid" :src="this.obj[0] ? this.obj[0].thumbnail : ''" :alt="this.obj[0] ? this.obj[0].descripcion : ''">
                <div class="thumbail__overlay position-absolute">
                    <a :href="this.obj[0] ? urlYoutube+this.obj[0].id : ''" target="blank">Ver video <i class="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <div class="row">
                    <div class="col-12">
                        <p class="fs-4 fw-semibold">{{ this.obj[0] ? this.obj[0].titulo : '' }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 container__descripcion">
                        <p class="text-break">{{ this.obj[0] ? this.obj[0].descripcion : '' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ModalComponent',
    // Objeto recibido para mostrar en modal
    props: {
        obj: {
            type: Array
        }
    },   
    computed: {
        ...mapState(['urlYoutube'])
	}
}
</script>