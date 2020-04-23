<template>
    <h2>Sobre...</h2>
</template>

<script>
export default {
    created(){
        console.log('created')
    },
    destroyed(){
        console.log('destroyed')
    },
    activated(){
        console.log('activated')    
    },
    deactivated(){
        console.log('deactivated')    
    }
}
</script>