<template>
    <section class="container">
        <form @submit.prevent="salvar">
            <div class="formDiv">
                <label for="nome">Título</label>
                <input type="text" name="nome" id="nome" v-model="nome" required autocomplete="off"
                    placeholder="Digite o nome do Livro">
            </div>
            <div class="formDiv">
                <label for="autor">Autor(a)</label>
                <input type="text" name="autor" id="autor" v-model="autor" required autocomplete="off"
                    placeholder="Digite do autor(a) do Livro">
            </div>
            <div class="formDiv">
                <label for="categoria">Categoria</label>
                <input type="text" name="categoria" id="categoria" required v-model="categoria" autocomplete="off"
                    placeholder="Digite a categoria do Livro">
            </div>
            <div class="formDiv">
                <label for="imagem">Imagem</label>
                <input type="text" name="imagem" id="imagem" v-model="imagem" required autocomplete="off"
                    placeholder="Digite o link da imagem do Livro">
            </div>
            <div class="formDiv">
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "PaginaFormulario",
    data() {
        return {
            nome: '',
            autor: '',
            categoria: '',
            imagem: ''
        };
    },
    methods: {
        salvar() {
            const dados = {
                nome: this.nome,
                autor: this.autor,
                categoria: this.categoria,
                imagem: this.imagem
            };

            axios.post('http://127.0.0.1:8000/api/livros', dados)
                .then(() => {
                    console.log('Usuário salvo com sucesso!');
                    this.nome = '',
                    this.autor = '',
                    this.categoria = '',
                    this.imagem = ''
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
});
</script>

<style scoped>

.container {
    color: white;
    /* background-color: var(--corfundo); */
    background-image: url('../../assets/imagens/footer.png');
    background-size: cover;
    display: flex;
    justify-content: center;
}

form {
    padding: 55px;
    width: 40%;
}

.formDiv {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.formDiv input {
    margin-top: 10px;
}

.formDiv button {
    background-color: rgb(53, 53, 175);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
}

input {
    padding: 10px;
}

label {
    margin-top: 5px;
    color: yellow;
    font-weight: bold;
}

</style>