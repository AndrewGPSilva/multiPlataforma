<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Formulario />
  </main>
  <footer>
    <Rodape />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/icons/Navbar.vue';
import Rodape from '@/components/icons/Rodape.vue';
import Formulario from '@/components/icons/Formulario.vue';

export default defineComponent({
  name: "PagePrincipal",
  components: {
    Navbar, Rodape, Formulario
  }
})
</script>