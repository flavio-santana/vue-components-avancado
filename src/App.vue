<template>
  <div id="app" class="container">
    

    <h1>Forma padrão</h1>

    <PostsLista :posts="posts"/>
    
    <br>
    <hr>

    <h1>Slots com escopo</h1>

    <PostsLista :posts="posts">
      <template slot-scope="slotProps">
        <h2>{{ slotProps.meuPost.titulo }}</h2>
        <p>{{ slotProps.meuPost.conteudo }}</p>
        <small>{{ slotProps.meuPost.autor }}</small>
      </template>  
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

