<template>
    <Navbar />
    <div class="containerPai">
        <section class="containerOrdem">
            <h3>Veja a lista por Ordem:</h3>
            <ul>
                <router-link to="/orderbynome"><li><span class="orderSelect">Nome</span></li></router-link>
                <router-link to="/orderbycategoria"><li>Categoria</li></router-link>
                <router-link to="/orderbyautor"><li>Autor</li></router-link>
            </ul>
        </section>
        <section class="containerLivros">
            <div v-for="(data, i) in livros" :key="i" class="cardLivros">
                <img :src="data.imagem" alt="Capa do Livro">
                <div class="infosLivro">
                    <h3>{{ data.nome }}</h3>
                    <p><span>Autor: </span>{{ data.autor }}</p>
                    <p><span>Categoria: </span>{{ data.categoria }}</p>
                </div>
            </div>
        </section>
    </div>
    <Rodape />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '@/components/icons/Navbar.vue';
import Rodape from '@/components/icons/Rodape.vue';

interface Livro {
    nome: string,
    autor: string,
    categoria: string,
    imagem: string,
    id: string
}

export default defineComponent({
    components: {Navbar, Rodape},
    setup() {
        const livros = ref<Livro[]>([]);

        onMounted(async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/livros/orderbynome');
                livros.value = response.data;
                console.log('Requisição bem-sucedida', livros.value);
            } catch (error) {
                console.error('Erro na requisição', error);
            }
        });

        return {
            livros
        };
    }
});
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

.containerOrdem h3,
li {
    color: white;
}

ul {
    display: flex;
    justify-content: space-around;
}

li {
    margin-top: 20px;
    font-weight: bold;
    color: red;
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

.orderSelect {
    background-color: rgb(228, 60, 228);
    color: rgb(0, 0, 0);
    padding: 15px;
    border-radius: 10px;
}
</style>