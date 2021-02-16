import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './components'
import './plugins/composition-api'

Vue.config.productionTip = false

new Vue({
    name: 'Root',
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
