<template>
  <div id="app">
    
    <h1>Vue JS</h1>

    <Post titulo="Components no Vue" />

    <Post titulo="Components no Vue 2" />
    
    <Post titulo="Components no Vue 3" />

  </div>
</template>


<script>

import Post  from './components/Post.vue'

export default {

  components: {
    Post 
  }
  
}
</script>

