import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * Registrando um component globalmente, que será apresentado 
 * após se passar 3 segundos na tela 
 */

Vue.component('Assincrono',(resolve)=>{
  
  setTimeout(()=>{
    resolve({
      template: '<h2>Component Assincrono</h2>'
    })
  },3000)

  //Chamar reject em caso de erro

})

/*
Vue.component(
  'Assincrono',
  () => import('./components/Assincrono.vue')
)
*/

new Vue({
  render: h => h(App),
}).$mount('#app')
