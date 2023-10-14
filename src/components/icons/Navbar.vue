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
                    <li>Animes</li>
                </a>
                <a href="#">
                    <li>Filmes</li>
                </a>
                <router-link to="/livros">
                    <li>Livros</li>
                </router-link>
                <a href="#">
                    <li>Séries</li>
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
</style>