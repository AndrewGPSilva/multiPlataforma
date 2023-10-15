<script lang="ts">
export default {
    name: 'NavbarGlobal'
}
</script>

<template>
    <nav>
        <div>
            <router-link to="/">
                <img src="../../assets/imagens/logo.png" alt="Logo da Plataforma">
            </router-link>
        </div>
        <div class="listaDeLinks">
            <ul>
                <a href="#">
                    <li><i class="pi pi-android"></i> Animes</li>
                </a>
                <router-link to="/filmes">
                    <li><i class="pi pi-camera"></i> Filmes</li>
                </router-link>
                <router-link to="/livros">
                    <li><i class="pi pi-book"></i> Livros</li>
                </router-link>
                <a href="#">
                    <li><i class="pi pi-heart-fill"></i> Séries</li>
                </a>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: var(--corfundo);
    border-bottom: 1px solid #333;
}

img {
    width: 250px;
    height: 60px;
}

.listaDeLinks ul {
    display: flex;
}

li {
    margin: 10px;
    font-weight: bold;
    font-size: 25px;
    color: orangered;
}

a:hover {
    background-color: rgb(62, 202, 49);
    border-radius: 10px;
}
</style>