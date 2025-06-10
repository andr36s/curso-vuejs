<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ correo }}</h3>
    <ul>
        <li><RouterLink to="/registrar">Registrar</RouterLink></li>
        <li><RouterLink to="/contador">Contador</RouterLink></li>
        <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
    </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre)
const correo = ref(registrarStore.correo)

watch(() => registrarStore.nombre, (newNombre) => {
    nombre.value = newNombre;
});
watch(() => registrarStore.correo, (newCorreo) => {
    correo.value = newCorreo;
})

</script>

<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>