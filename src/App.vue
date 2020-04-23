<template>
  <div id="app" class="container">
    
    <h1>Components Dinâmicos</h1>

    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>

    <keep-alive>
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
    Home,
    PostsLista,
    Sobre 
  },
  data() {
    return {
      componentSelecionado : 'Home',
      posts: [
        {id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes'},
        {id: 2, titulo: 'Distribuindo conteúdo com Slots', conteudo: 'Slots podem ser utilizados como repositórios'}
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