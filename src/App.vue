<template>
  <div id="app" class="container">
    
    <h1>Vue JS</h1>

    <post>

      <h2 slot="cabecalho">Components no Vue</h2>

      <template slot="conteudo">

      <p>Components são uma das peças mais importantes no Vue</p>

      <span>...</span>

      </template>

      <p slot="rodape">por Flávio Santana</p>

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
      minhaVariavel: 'Conteúdo adicionado através de uma variável'
    }
  }
  
}
</script>

<style scoped>

  .container{
    width: 960px;
    margin: auto;
  }

</style>

