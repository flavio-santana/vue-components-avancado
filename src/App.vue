<template>
  <div id="app" class="container">
    
    <h1>Vue JS</h1>

    <post>

      <h2 slot="cabecalho">Components no Vue</h2>

      <template slot="conteudo">

      <p class="post-paragrafo">Components são uma das peças mais importantes no Vue</p>

      <span>...</span>

      </template>

      <p slot="rodape">{{autor}}</p>

      <!--
      <p slot="botao">Detalhes...</p>
      -->

    </post>  

  </div>
</template>


<script>

import Post  from './components/Post.vue'

export default {

  components: {
    Post 
  },
  data() {
    return {
      autor: 'Flávio de O. Santana'
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

