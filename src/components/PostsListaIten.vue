
<template>

    <div class="post">
        
        <slot>

            <div class="post-cabecalho">

            <h2> {{ post.titulo }} </h2>

            </div>

            <div class="post-conteudo">

                <p>{{ post.conteudo }}</p>

            </div>

            <div class="post-rodape">

                <small> <p>{{ post.autor }}</p> </small>

                <a href="#" class="link">Ler mais...</a>    

            </div>

        </slot>

    </div>

</template>

<style scoped>

    .post{
        padding: 15px auto; 
    }

    .post-cabecalho{
        padding: 5px 12px;
        background-color: #eee;
    }

    .post-conteudo{
        font-size: 16px;
    }

    .post-rodape{
        font-style: italic;
    }

    .link{
        float: right;
    }

</style>

<script>
export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    }
}
</script>