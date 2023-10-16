<template>
    <div class="containerPai">
        <section class="containerFilmes">
            <div v-for="filme in filmes" :key="filme.id" class="cardFilmes">
                <img :src="filme.imagem" alt="Capa do Filme">
                <div class="infosFilmes">
                    <h3>{{ filme.titulo }}</h3>
                    <p><span>Categoria: </span>{{ filme.categoria }}</p>
                    <p><span>Classificação: </span>{{ filme.faixa }} anos</p> 
                    <p><span>Onde Assistir: </span>{{ filme.streaming }}</p> 
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

interface Filme {
    id: string,
    titulo: string,
    sinopse: string,
    categoria: string,
    faixa: string,
    imagem: string,
    streaming: string
}

export default defineComponent({
    name: "ConteudoFilmes",
    setup() {
        const filmes = ref<Filme[]>([]);

        onMounted(async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8080/filmes");
                filmes.value = response.data;
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        });

        return { filmes };
    }
});
</script>

<style scoped>
.containerFilmes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 30px;
    background-color: var(--corfundo);
}

.cardFilmes {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid #333;
    text-align: left;
    align-items: center;
    justify-content: center;
}

.cardFilmes img {
    width: 300px;
    height: 330px;
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

h3 {
    text-decoration: underline;
    color: aqua;
}

p {
    font-size: 20px;
    color: orange;
}

.infosFilmes {
    margin-bottom: 10px;
}

</style>