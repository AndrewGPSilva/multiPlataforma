<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="formDiv">
                <label for="nome">Nome do Livro:</label>
                <input type="text" name="nome" id="nome" v-model="nome" required autocomplete="off"
                    placeholder="Digite o nome do Livro">
            </div>
            <div class="formDiv">
                <label for="autor">Nome do Autor(a):</label>
                <input type="text" name="autor" id="autor" v-model="autor" required autocomplete="off"
                    placeholder="Digite do autor(a) do Livro">
            </div>
            <div class="formDiv">
                <label for="categoria">Categoria do Livro:</label>
                <input type="text" name="categoria" id="categoria" required v-model="categoria" autocomplete="off"
                    placeholder="Digite a categoria do Livro">
            </div>
            <div class="formDiv">
                <label for="imagem">Imagem do Livro:</label>
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
form {
    padding: 50px;
}

.formDiv {
    display: flex;
    flex-direction: column;
    margin: 10px;
}

.formDiv input {
    margin-top: 10px;
}
</style>