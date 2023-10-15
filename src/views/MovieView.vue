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
import Conteudo from '@/components/Filmes/Conteudo.vue';
import Navbar from '@/components/icons/Navbar.vue';
import Rodape from '@/components/icons/Rodape.vue';
export default defineComponent({
    name: "MovieView",
    components: { Conteudo, Navbar, Rodape }
})
</script>