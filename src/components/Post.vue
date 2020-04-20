
<template>

    <div>
        <p>I'm the child component!</p>

        <slot></slot>

    </div>

</template>

<script>
export default {
    props:{
        titulo: String
    }
}
</script>