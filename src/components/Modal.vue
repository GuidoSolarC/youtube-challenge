<template>
    <div class="modal-body">
        <div class="row align-items-center justify-content-around">
            <div class="thumbnail col-12 col-md-5 p-0 mb-4 mb-md-0 position-relative">
                <div class="thumbail__overlay">
                    <youtube v-if="this.obj[0]" :fitParent="true" :video-id="this.obj[0] ? this.obj[0].id : null" :player-vars="playerVars"></youtube>
                </div>
            </div>
            <div class="col-12 col-md-6">
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
    data() {
        return {
            playerVars: {
                autoplay: 1
            }
        }
    },
    computed: {
        ...mapState(['urlYoutube'])
	}
}
</script>
