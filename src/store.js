import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Configuracion de URL de API´s
export default new Vuex.Store({
	state: {
        api: 'https://google.com',
	}
})