<template>
  <div id="app" class="container">
    
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>
    <button @click="componentSelecionado = 'Assincrono'">Assincrono</button>

    <!--
      Utilizando include na keep-alive, determinamos o component 
      que deve ser armazenado no cache.

      Com exclude, o comportamento é diferente. Determinamos quais components 
      não serão mantidos no cache.
    -->

    <keep-alive :include="['Home','Sobre']">
      <component 
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive>

  </div>
</template>

<script>

import PostsLista  from './components/PostsLista.vue'
import Home        from './components/Home.vue'
import Sobre       from './components/Sobre.vue'

export default {
  components: {
    Assincrono: () => ({
      component: new Promise ((resolve,reject) => {

        setTimeout(() => {
          resolve(import('./components/Assincrono.vue')),
          reject('Carregamento falhou!')
        },2000)

      }),
      loading: {template: '<p>Carregando...</p>'},
      error: {template: '<p>Error ao carregar component!</p>'},
      delay: 200,
      timeout: 3000,
      
    }),
    
    Home,
    PostsLista,
    Sobre 
  },
  data() {
    return {
      componentSelecionado : 'Home',
      posts: [
        {id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes'},
        {id: 2, titulo: 'Distribuindo conteúdo com Slots', conteudo: 'Slots podem ser utilizados como repositórios'},
        {id: 3, titulo: 'Xpto', conteudo: 'bla bla bla bla'},
      ]
    }
  },
  computed:{
    propsAtuais() {
      return this.componentSelecionado === 'PostsLista' ? {posts: this.posts} : {}
    }
  }
  
}
</script>

<style scoped>

  .container{
    width: 960px;
    margin: auto;
  }

  .post-paragrafo{
    color:red;
  }

</style>