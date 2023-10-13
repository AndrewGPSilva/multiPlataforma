<template>
    <header>
        <Navbar />
    </header>
    <main>
        <Conteudo />
    </main>
    <footer>
        <Rodape />
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/icons/Navbar.vue';
import Rodape from '@/components/icons/Rodape.vue';
import Conteudo from '@/components/Livros/Conteudo.vue';

export default defineComponent({
    name: 'PageLivros',
    components: {
        Navbar,
        Conteudo,
        Rodape
    }
})
</script>