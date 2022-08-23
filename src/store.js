import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Configuracion de URL de API´s
export default new Vuex.Store({
	state: {
        apiGoogle: 'https://www.googleapis.com/youtube/v3/videos?id=',
		keyGoogle: '&key='+process.env.VUE_APP_YOUTUBE_KEY,
		apiAWS: process.env.VUE_APP_API_AWS
	}
})