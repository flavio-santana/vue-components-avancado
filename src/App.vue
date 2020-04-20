<template>
  <div id="app">
    
    <h1>Vue JS</h1>

    <post>

      <p>Estou injetando conteúdo de um component parente</p>
      <p>Eu posso adicionar conteúdo também desse jeito! <strong> {{ minhaVariavel }} </strong> </p>

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

