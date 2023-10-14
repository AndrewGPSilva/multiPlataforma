
<template>
    <footer>
        <div class="infoText">
            <h1>&copy; Todos direitos reservados a GPSCompany.</h1>
        </div>
        <div class="divIcons">
            <span class="icon"><i class="pi pi-facebook"></i></span>
            <span class="icon"><i class="pi pi-linkedin"></i></span>
            <span class="icon"><i class="pi pi-twitter"></i></span>
            <span class="icon"><i class="pi pi-github"></i></span>
            <span class="icon"><i class="pi pi-instagram"></i></span>
            <span class="icon"><i class="pi pi-whatsapp"></i></span>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterGlobal'
})
</script>

<style scoped>
footer {
    background-color: var(--corfundo);
    color: rgb(211, 211, 211);
    padding: 20px;
    border-top: 1px solid #333;
    display: flex;
    flex-direction: column;
}

.infoText h1 {
    font-size: 15px;
    text-align: center;
}

.divIcons {
    margin-top: 10px;
    text-align: center;
}

.icon {
    font-size: 2em;
    cursor: pointer;
    padding: 10px;
}

</style>