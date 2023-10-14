
<template>
    <footer>
        <h1>&copy; Todos direitos reservados a GPSCompany.</h1>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'FooterGlobal'
})
</script>

<style scoped>
footer {
    background-color: var(--corfundo);
    color: rgb(211, 211, 211);
    text-align: left;
    padding: 20px;
}

footer h1 {
    font-size: 15px;
}
</style>