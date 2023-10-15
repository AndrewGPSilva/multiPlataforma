import { createRouter, createWebHistory } from 'vue-router'
import BookView from "@/views/BookView.vue";
import HomeView from "@/views/HomeView.vue";
import ByNome from '../components/Livros/Ordenados/ByNome.vue';
import ByCategoria from '../components/Livros/Ordenados/ByCategoria.vue';
import ByAutor from '../components/Livros/Ordenados/ByAutor.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      path: '/livros',
      name: 'book',
      component: BookView
    },
    {
      path: '/orderbynome',
      name: 'bynome',
      component: ByNome
    },
    {
      path: '/orderbycategoria',
      name: 'bycategoria',
      component: ByCategoria
    },
    {
      path: '/orderbyautor',
      name: 'byautor',
      component: ByAutor
    }
  ]
})

export default router;