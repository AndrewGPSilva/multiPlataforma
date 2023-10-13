<template>
    <section class="containerLivros">
        <div v-for="(livro, i) in livros" :key="i"  class="cardLivros">
            <img :src="livro.imagem" alt="Capa do Livro">
            <div class="infosLivro">
                <h3>{{ livro.nome }}</h3>
                <p><span>Autor: </span>{{ livro.autor }}</p>            <p><span>Categoria: </span>{{ livro.categoria }}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from "@/services/api";

interface Livro {
    nome: string,
    autor: string,
    categoria: string,
    imagem: string
}

export default defineComponent({
    name: 'ConteudoPrincipal',
    setup() {
        const livros = ref<Livro[]>([]);

        const fetchLivros = () => {
            api
                .get("/livros")
                .then((response) => livros.value = response.data);
        }

        onMounted(fetchLivros);

        return { livros };
    }
})
</script>

<style scoped>

.containerLivros {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px;
    background-color: var(--corfundo);
}

.cardLivros {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #333;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.cardLivros img {
    width: 300px;
    height: 270px;
    margin-top: 0.5px;
    margin-bottom: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: 1px solid #333;
}

span {
    font-weight: bold;
}

h3, p {
    color: white;
    padding: 5px;
}

.infosLivro {
    margin-bottom: 10px;
}

</style>