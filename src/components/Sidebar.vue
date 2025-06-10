<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.correo }}</h3>
    <ul>
        <li><RouterLink to="/registrar">Registrar</RouterLink></li>
        <li><RouterLink to="/contador">Contador</RouterLink></li>
        <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
    </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';

const registrarStore = useRegistrarStore();

</script>

<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>