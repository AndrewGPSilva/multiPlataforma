<template>
    <div class="containerPai">
        <section class="containerOrdem">
            <h3>Veja a lista por Ordem:</h3>
            <ul>
                <router-link to="/orderbynome"><li>Nome</li></router-link>
                <router-link to="/orderbycategoria"><li>Categoria</li></router-link>
                <router-link to="/orderbyautor"><li>Autor</li></router-link>
            </ul>
        </section>
        <section class="containerLivros">
            <div v-for="(livro, i) in livros" :key="i" class="cardLivros">
                <img :src="livro.imagem" alt="Capa do Livro">
                <div class="infosLivro">
                    <h3>{{ livro.nome }}</h3>
                    <p><span>Autor: </span>{{ livro.autor }}</p>
                    <p><span>Categoria: </span>{{ livro.categoria }}</p>
                    <button @click="excluir(livro.id)" class="btnExcluir">Excluir</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from "@/services/api";
import axios from 'axios';

interface Livro {
    nome: string,
    autor: string,
    categoria: string,
    imagem: string,
    id: string
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
    },
    methods: {
        async excluir(id: string) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/livros/${id}`);
                console.log("Excluído com sucesso");
                this.livros = this.livros.filter(livro => livro.id !== id);
            } catch (error) {
                console.error(error);
            }
        }
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

.containerOrdem {
    background-color: var(--corfundo);
    text-align: center;
    padding-top: 20px;
    margin-bottom: -40px;
}

.containerOrdem h3, li {
    color: white;
}

ul {
    display: flex;
    justify-content: space-around;
}

li {
    margin-top: 20px;
    font-weight: bold;
    color: white;
    height: 35px;
    width: 100px;
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
    margin-bottom: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom: 1px solid #333;
}

span {
    font-weight: bold;
}

h3,
p {
    color: white;
    padding: 5px;
}

.infosLivro {
    margin-bottom: 10px;
}

.btnExcluir {
    background-color: rgb(184, 25, 25);
    color: white;
    border: none;
    padding: 10px;
    margin-top: 5px;
    width: 97%;
    cursor: pointer;
}
</style>