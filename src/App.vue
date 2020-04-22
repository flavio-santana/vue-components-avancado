<template>
  <div id="app" class="container">
    

    <h1>Forma padrão</h1>

    <PostsLista :posts="posts"/>
    
    <br>
    <hr>

    <h1>Slots com escopo</h1>

    <!-- Código foi alterado nesse aqui -->
    <PostsLista :posts="posts" v-slot="{ meuPost }">
        <h2>{{ meuPost.titulo }}</h2>
        <p>{{ meuPost.conteudo }}</p>
        <small>{{ meuPost.autor }}</small>  
    </PostsLista>

  </div>
</template>

<script>

import PostsLista  from './components/PostsLista.vue'

export default {

  components: {
    PostsLista 
  },
  data() {
    return {
      posts:[
        {id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes'},
        {id: 2, titulo: 'Distribuindo conteúdo com Slots', conteudo: 'Slots podem ser utilizados como repositórios'},
       
      ]
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

