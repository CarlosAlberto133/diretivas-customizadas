import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App)

//Importando e registrando globalmente diretivas customizadas
import texto from './directves/texto.js'
import posicao from './directves/posicao.js'
import informacao from './directves/informacao.js'

Vue.directive('texto', texto)
Vue.directive('posicao', posicao)
Vue.directive('informacao', informacao)
//

Vue.mount('#app')
